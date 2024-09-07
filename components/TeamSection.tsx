"use client";
import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaFacebookSquare, FaTwitterSquare, FaInstagramSquare } from 'react-icons/fa';
import { fetchTeamData } from '@/useAPI/fetchData';
import { TeamMemberData } from '@/types';
import { motion } from 'framer-motion';

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
    <div className="container mx-auto py-12">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Meet Our Team</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {teamData.map((member, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            {/* Image */}
            <div className="relative h-60 w-full">
              <Image
                src={member.image}
                alt={member.name}
                layout="fill"
                objectFit="cover"
                className="w-full h-full"
              />
            </div>

            {/* Info */}
            <div className="p-6 text-center">
              <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
              <p className="text-gray-600 mb-4">{member.title}</p>

              {/* Social Icons */}
              <div className="flex justify-center space-x-4">
                {member.facebook && (
                  <Link href={member.facebook}>
                    <span className="text-blue-600 hover:text-blue-800 transition-colors">
                      <FaFacebookSquare className="text-2xl" />
                    </span>
                  </Link>
                )}
                {member.twitter && (
                  <Link href={member.twitter}>
                    <span className="text-blue-400 hover:text-blue-600 transition-colors">
                      <FaTwitterSquare className="text-2xl" />
                    </span>
                  </Link>
                )}
                {member.instagram && (
                  <Link href={member.instagram}>
                    <span className="text-purple-600 hover:text-purple-800 transition-colors">
                      <FaInstagramSquare className="text-2xl" />
                    </span>
                  </Link>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default TeamSection;