"use client";
import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaFacebookSquare, FaTwitterSquare, FaInstagramSquare } from 'react-icons/fa';
import { AboutUsData, fetchAboutUsData, fetchTeamData } from '@/useAPI/fetchData';
import { TeamMemberData } from '@/types';

const TeamSection: React.FC = () => {
  const [teamData, setTeamData] = useState<TeamMemberData[]>([]);
  const [aboutUsData, setAboutUsData] = useState<AboutUsData | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchAboutUsData();
      setAboutUsData(data);
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchTeamData(); // Fetch your team data here
        setTeamData(data);
      } catch (error) {
        console.error('Error fetching Team data:', error);
      }
    };
    fetchData();
  }, []);

  if (teamData.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div className="mx-auto container px-6 xl:px-0 py-12" >
      <div className="flex flex-col">
        {teamData.map((member, i) => (
          <div key={i} className="w-full">
            <div className="h-80 relative">
              <Image
                src={member.image} // Ensure you have the correct path for the image
                alt={member.name}
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="pt-2 mb-2 flex items-center justify-between flex-col">
              <h3 className="text-xl font-bold text-gray-800">{member.name}</h3>
              <p className="text-base text-gray-600">{member.title}</p>
            </div>

            <div className="flex justify-center space-x-4">
              {member.facebook && (
                <Link href={member.facebook} passHref>
                  <span className="text-blue-500 hover:text-blue-700">
                    <FaFacebookSquare className="text-2xl" />
                  </span>
                </Link>
              )}
              {member.twitter && (
                <Link href={member.twitter} passHref>
                  <span className="text-blue-400 hover:text-blue-600">
                    <FaTwitterSquare className="text-2xl" />
                  </span>
                </Link>
              )}
              {member.instagram && (
                <Link href={member.instagram} passHref>
                  <span className="text-purple-600 hover:text-purple-800">
                    <FaInstagramSquare className="text-2xl" />
                  </span>
                </Link>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamSection;
