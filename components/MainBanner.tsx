"use client";
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { CarouselListCreateAPIView } from '@/useAPI/fetchData';

interface CarouselImage {
  image: string;
}

interface CarouselData {
  id: number;
  image: CarouselImage[];
  title: string;
  sub_title: string;
}

const MainBanner: React.FC = () => {
  const [carouselData, setCarouselData] = useState<CarouselData[]>([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const fetchCarouselData = async () => {
      try {
        const data = await CarouselListCreateAPIView();
        setCarouselData(data);
      } catch (error) {
        console.error('Error fetching carousel data:', error);
      }
    };

    fetchCarouselData();
  }, []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex(prevIndex => (prevIndex + 1) % carouselData[0].image.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(intervalId); // Cleanup the interval on component unmount
  }, [carouselData]);

  return (
    <section className="section main-banner" id="top" data-section="section1">
      {carouselData.length > 0 && (
        <div className="relative w-screen h-screen">
          <Image
            src={carouselData[0].image[currentImageIndex].image}
            alt="Banner Image"
            layout="fill"
            objectFit="cover"
          />
          <div className="absolute inset-0 flex items-center justify-start bg-opacity-50 bg-black">
            <div className="mx-auto text-left">
              <motion.h6
                className="text-yellow-300 text-3xl font-extrabold"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                {carouselData[0].title.split('').map((letter, index) => (
                  <motion.span key={index} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1 * index }}>
                    {letter}
                  </motion.span>
                ))}
              </motion.h6>
              <motion.h2
                className="text-yellow-300 text-3xl font-extrabold"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
              >
                {carouselData[0].sub_title.split('').map((letter, index) => (
                  <motion.span key={index} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1 * index }}>
                    {letter}
                  </motion.span>
                ))}
              </motion.h2>
              <div>
              <Link href="/contact">
                <button className="bg-yellow-300 text-black py-2 px-4 rounded-lg cursor-pointer hover:bg-yellow-400 transition-colors">
                  Contact Us Now!
                </button>
              </Link>

              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default MainBanner;
