"use client";
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { fetchTeamData } from '@/useAPI/fetchData';
import { TeamMemberData } from '@/types';
import { FaFacebookSquare, FaTwitterSquare, FaInstagramSquare } from 'react-icons/fa';

const TeamSection: React.FC = () => {
  const [teamData, setTeamData] = useState<TeamMemberData[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchTeamData();
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
    <section className="team-section">
      <h2 className="text-3xl font-bold text-center mb-8">Our Team</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {teamData.map((member) => (
          <div key={member.id} className="flex flex-col items-center">
            <div className="w-full h-80 relative overflow-hidden rounded-lg">
              <Image src={member.image} alt="profile-picture" layout="fill" objectFit="cover" />
            </div>
            <div className="mt-4 text-center">
              <h3 className="text-xl font-bold text-gray-800">{member.name}</h3>
              <p className="text-base text-gray-600">{member.title}</p>
            </div>
            <div className="flex justify-center mt-2 space-x-4">
              {member.facebook && (
                <a href={member.facebook} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700">
                  <FaFacebookSquare className="text-2xl" />
                </a>
              )}
              {member.twitter && (
                <a href={member.twitter} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-600">
                  <FaTwitterSquare className="text-2xl" />
                </a>
              )}
              {member.instagram && (
                <a href={member.instagram} target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:text-purple-800">
                  <FaInstagramSquare className="text-2xl" />
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TeamSection;
