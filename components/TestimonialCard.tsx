"use client";
import { FaStar, FaQuoteRight } from 'react-icons/fa';
import Image from 'next/image';
import { AboutUsData, fetchAboutUsData, fetchTestimonials, Testimonial } from '@/useAPI/fetchData';
import { useState, useEffect } from 'react';

const TestimonialCard: React.FC = () => {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      const testimonialsData = await fetchTestimonials();
      setTestimonials(testimonialsData);
    };
    fetchData();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonialIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000); // Change testimonial every 5 seconds

    return () => clearInterval(interval);
  }, [testimonials]);

  if (testimonials.length === 0) {
    return <div>Loading testimonials...</div>;
  }

  const currentTestimonial = testimonials[currentTestimonialIndex];

  return (
    <div>
      <div className="flex mt-14 md:flex">
        <div className="relative lg:w-1/2 sm:w-96 xl:h-96 h-80">
          <Image
            src={currentTestimonial.image}
            alt="image of profile"
            className="w-full h-full flex-shrink-0 object-fit object-cover shadow-lg rounded"
            width={300}
            height={300}
          />
          <div className="w-32 md:flex hidden items-center justify-center absolute top-0 -mr-16 -mt-14 right-0 h-32 bg-indigo-100 rounded-full">
  <FaQuoteRight className="text-indigo-500 text-5xl" />
</div>
        </div>
        <div className="md:w-1/3 lg:w-1/3 xl:ml-32 md:ml-20 md:mt-0 mt-4 flex flex-col justify-between">
          <div>
            <h1 className="text-2xl font-semibold xl:leading-loose text-gray-800">Some of the best work that was done!</h1>
            <p className="text-base font-medium leading-6 mt-4 text-gray-600">{currentTestimonial.content}</p>
          </div>
          <div className="md:mt-0 mt-8">
            <p className="text-base font-medium leading-4 text-gray-800">{currentTestimonial.author}</p>
            <p className="text-base leading-4 mt-2 mb-4 text-gray-600">{currentTestimonial.position}</p>
            <div className="flex items-center gap-0">
              {[...Array(currentTestimonial.stars)].map((_, index) => (
                <FaStar key={index} className="text-yellow-700" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
