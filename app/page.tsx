"use client";
import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import MainBanner from '@/components/MainBanner';
import ServiceCard from '@/components/ServiceCard';
import { fetchServices } from '@/useAPI/fetchData';
import { Service } from '@/types';
import GetQuoteSection from '@/components/GetQuoteSection';

const Home: React.FC = () => {
  const [services, setServices] = useState<Service[]>([]);
  const [isHovered, setIsHovered] = useState(false);

  const controls = useAnimation();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchServices();
        setServices(data);
      } catch (error) {
        console.error('Error fetching services:', error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (!isHovered) {
      controls.start({
        x: ["100vw", "-100vw"],
        transition: { repeat: Infinity, duration: 15, ease: 'linear' },
      });
    } else {
      controls.stop();
    }
  }, [isHovered, controls]);

  return (
    <>
      <div className="relative w-full h-screen overflow-hidden">
        {/* MainBanner at the back */}
        <MainBanner />
        
        {/* Foreground: Sliding services in the middle */}
        <motion.div
          animate={controls}
          className="absolute top-[60%] transform -translate-y-1/2 flex flex-row transition-transform duration-15000"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {services.map((service, index) => (
            <div className="w-64 flex-shrink-0 mx-4" key={service.id}>
              <ServiceCard service={service} />
            </div>
          ))}
        </motion.div>

      </div>
    </>
  );
};

export default Home;
