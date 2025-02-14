import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { FaFacebookSquare, FaTwitterSquare, FaInstagramSquare } from 'react-icons/fa';

const teamData = [
  {
    name: "Director",
    title: "Director",
    facebook: "https://facebook.com/director",
    twitter: "https://twitter.com/director",
    instagram: "https://instagram.com/director",
  },
  {
    name: "Supervisor One",
    title: "Supervisor",
    facebook: "https://facebook.com/supervisor1",
    twitter: "https://twitter.com/supervisor1",
    instagram: "https://instagram.com/supervisor1",
  },
  {
    name: "Worker 1",
    title: "Worker",
    facebook: "https://facebook.com/worker1",
    twitter: "https://twitter.com/worker1",
    instagram: "https://instagram.com/worker1",
  },
  {
    name: "Worker 2",
    title: "Worker",
    facebook: "https://facebook.com/worker2",
    twitter: "https://twitter.com/worker2",
    instagram: "https://instagram.com/worker2",
  },
  {
    name: "Worker 3",
    title: "Worker",
    facebook: "https://facebook.com/worker3",
    twitter: "https://twitter.com/worker3",
    instagram: "https://instagram.com/worker3",
  },
  {
    name: "Worker 4",
    title: "Worker",
    facebook: "https://facebook.com/worker4",
    twitter: "https://twitter.com/worker4",
    instagram: "https://instagram.com/worker4",
  },
  {
    name: "Worker 5",
    title: "Worker",
    facebook: "https://facebook.com/worker5",
    twitter: "https://twitter.com/worker5",
    instagram: "https://instagram.com/worker5",
  },
];

const TeamSection: React.FC = () => {
  return (
    <div className="container mx-auto py-12 relative">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Meet Our Team</h2>

      {/* Organogram Lines (SVG) */}
      <svg
        width="100%"
        height="300px"
        className="absolute top-0 left-0"
        style={{ zIndex: -1 }}
      >
        {/* Line from Director to Supervisor */}
        <line x1="50%" y1="100px" x2="50%" y2="250px" stroke="gray" strokeWidth="2" />
        {/* Lines from Supervisor to Workers */}
        <line x1="50%" y1="250px" x2="20%" y2="400px" stroke="gray" strokeWidth="2" />
        <line x1="50%" y1="250px" x2="80%" y2="400px" stroke="gray" strokeWidth="2" />
        {/* Lines connecting Worker positions */}
        <line x1="20%" y1="400px" x2="10%" y2="500px" stroke="gray" strokeWidth="2" />
        <line x1="20%" y1="400px" x2="30%" y2="500px" stroke="gray" strokeWidth="2" />
        <line x1="80%" y1="400px" x2="70%" y2="500px" stroke="gray" strokeWidth="2" />
        <line x1="80%" y1="400px" x2="90%" y2="500px" stroke="gray" strokeWidth="2" />
      </svg>

      {/* Director */}
      <div className="flex justify-center items-center mb-8">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden p-4 text-center">
          <h3 className="text-xl font-bold text-gray-900 mb-2">Miguel Lopes</h3>
          <p className="text-gray-600 mb-4">Director</p>
          <div className="flex justify-center space-x-4 mb-4">
            <a href="https://facebook.com/director" target="_blank" rel="noopener noreferrer">
              <FaFacebookSquare className="text-blue-600 hover:text-blue-800 transition-colors text-2xl" />
            </a>
            <a href="https://twitter.com/director" target="_blank" rel="noopener noreferrer">
              <FaTwitterSquare className="text-blue-400 hover:text-blue-600 transition-colors text-2xl" />
            </a>
            <a href="https://instagram.com/director" target="_blank" rel="noopener noreferrer">
              <FaInstagramSquare className="text-purple-600 hover:text-purple-800 transition-colors text-2xl" />
            </a>
          </div>
        </div>
      </div>

      {/* Supervisor under Director */}
      <div className="flex justify-center items-center mb-8">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden p-4 text-center">
          <h3 className="text-xl font-bold text-gray-900 mb-2">Supervisor One</h3>
          <p className="text-gray-600 mb-4">Supervisor</p>
          <div className="flex justify-center space-x-4 mb-4">
            <a href="https://facebook.com/supervisor1" target="_blank" rel="noopener noreferrer">
              <FaFacebookSquare className="text-blue-600 hover:text-blue-800 transition-colors text-2xl" />
            </a>
            <a href="https://twitter.com/supervisor1" target="_blank" rel="noopener noreferrer">
              <FaTwitterSquare className="text-blue-400 hover:text-blue-600 transition-colors text-2xl" />
            </a>
            <a href="https://instagram.com/supervisor1" target="_blank" rel="noopener noreferrer">
              <FaInstagramSquare className="text-purple-600 hover:text-purple-800 transition-colors text-2xl" />
            </a>
          </div>
        </div>
      </div>

      {/* Workers in one row */}
      <div className="flex justify-center items-center gap-8">
        {teamData.slice(2).map((member, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className="bg-white rounded-lg shadow-lg overflow-hidden p-4 text-center"
          >
            <h3 className="text-lg font-bold text-gray-900 mb-2">{member.name}</h3>
            <p className="text-gray-600 mb-4">{member.title}</p>

            <div className="flex justify-center space-x-4">
              {member.facebook && (
                <a href={member.facebook} target="_blank" rel="noopener noreferrer">
                  <FaFacebookSquare className="text-blue-600 hover:text-blue-800 transition-colors text-2xl" />
                </a>
              )}
              {member.twitter && (
                <a href={member.twitter} target="_blank" rel="noopener noreferrer">
                  <FaTwitterSquare className="text-blue-400 hover:text-blue-600 transition-colors text-2xl" />
                </a>
              )}
              {member.instagram && (
                <a href={member.instagram} target="_blank" rel="noopener noreferrer">
                  <FaInstagramSquare className="text-purple-600 hover:text-purple-800 transition-colors text-2xl" />
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default TeamSection;