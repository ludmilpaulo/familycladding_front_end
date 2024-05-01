"use client";
import { useEffect, useState } from 'react';
import { FaMapMarker, FaPhone, FaEnvelope, FaHeart } from 'react-icons/fa';
import Image from 'next/image';
import Link from 'next/link';
import { AboutUsData, fetchAboutUsData } from '@/useAPI/fetchData';
import { motion } from 'framer-motion';
import { SocialIcon } from 'react-social-icons';
import ErrorBoundary from '@/app/ErrorBoundary';
//import ErrorBoundary from 'next/dist/client/components/error-boundary';

const Footer: React.FC = () => {
  const [aboutUsData, setAboutUsData] = useState<AboutUsData | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchAboutUsData();
      setAboutUsData(data);
    };
    fetchData();
  }, []);

  return (
    <ErrorBoundary errorCode={0} stars={null}>
    <footer className="text-white" style={{ backgroundImage: `url(${aboutUsData?.backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-12 md:col-span-3">
            <aside>
              {aboutUsData && (
                <Link href="/home">
                  <span className="cursor-pointer">
                    <Image src={aboutUsData.logo} alt="" width={250} height={100} />
                  </span>
                </Link>
              )}
             
             <motion.div
              initial={{
                x: -500,
                opacity: 0,
                scale: 0.5,
              }}
              animate={{
                x: 0,
                opacity: 1,
                scale: 1,
              }}
              transition={{
                duration: 2,
              }}
              className="flex flex-row items-center"
            >
              <>
                {aboutUsData?.facebook && (
                  <SocialIcon url={aboutUsData.facebook} />
                )}
                {aboutUsData?.whatsapp && (
                  <SocialIcon url={aboutUsData.whatsapp} />
                )}
                {aboutUsData?.twitter && <SocialIcon url={aboutUsData.twitter} />}
                {aboutUsData?.instagram && (
                  <SocialIcon url={aboutUsData.instagram} />
                )}
              </>
            </motion.div>
            </aside>
          </div>
          
          <div className="col-span-12 md:col-span-3">
            <aside className="font-bold text-lg mb-4">
              <div>
                <h3>Office Address</h3>
              </div>
              <div className="space-y-2">
                <div className="flex items-center">
                  <FaMapMarker className="mr-2" />
                  <p>{aboutUsData?.address}</p>
                </div>
                <div className="flex items-center">
                  <FaPhone className="mr-2" />
                  <p>{aboutUsData?.phone}</p>
                </div>
                <div className="flex items-center">
                {aboutUsData?.whatsapp && (
                <Link href={aboutUsData?.whatsapp}>
                 <span><FaPhone className="mr-2" /></span> 
                 
                  </Link>
                  )}
                </div>
                <div className="flex items-center">
                  <FaEnvelope className="mr-2" />
                  <p>{aboutUsData?.email}</p>
                </div>
              </div>
            </aside>
          </div>
         
          {/* Remaining code for other sections */}
        </div>
        <div className="flex justify-end w-full">
      <Link href="/contact">
        <button className="bg-yellow-500 w-full hover:bg-blue-700 text-white font-bold py-6 px-4 rounded">
          Contact Us
        </button>
      </Link>
    </div>
      </div>
     
      <div className="bg-gray-900 mx-auto px-4 py-6">
        <div className="flex justify-between">
          <div className="flex items-center">
            <h4>
              Copyright &copy; {new Date().getFullYear()} All rights reserved |
              This website is made with <FaHeart className="text-red-500" /> by <span>Maindo</span>
            </h4>
          </div>
          <div>
            <ul className="flex gap-4">
              <li>
                {aboutUsData && (
                  <Link href="/">
                    <span>Home</span>
                  </Link>
                )}
              </li>
              {/* Remaining menu items */}
             
              <li><Link href=""><span>Terms of Use </span></Link></li>
              <li><Link href="/testimonial"><span>Leave your testimonial </span></Link></li>
              <li><Link href="/contact"><span>Contact Us </span></Link></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
    </ErrorBoundary>
  );
};

export default Footer;
