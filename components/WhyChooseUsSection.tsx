"use client";
import { useEffect, useState } from 'react';
import { WhyChooseUsData } from '@/types';
import { fetchWhyChooseUsData } from '@/useAPI/fetchData';


const WhyChooseUsSection: React.FC = () => {
  const [whyChooseUsData, setWhyChooseUsData] = useState<WhyChooseUsData | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchWhyChooseUsData();
        console.log("data fetched", data)
        setWhyChooseUsData(data);
      } catch (error) {
        console.error('Error fetching Why Choose Us data:', error);
      }
    };
    fetchData();
  }, []);

  if (!whyChooseUsData) {
    return <div>Loading...</div>;
  }

  return (
    <section>
      <h2>{whyChooseUsData.title}</h2>
      <p>{whyChooseUsData.content}</p>
      {/* Render other why choose us data */}
    </section>
  );
};

export default WhyChooseUsSection;
