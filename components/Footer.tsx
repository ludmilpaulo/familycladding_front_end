"use client";
import { useEffect, useState } from 'react';
import { FaMapMarker, FaPhone, FaEnvelope } from 'react-icons/fa';
import Image from 'next/image';
import Link from 'next/link';
import { AboutUsData, fetchAboutUsData } from '@/useAPI/fetchData';
import { motion } from 'framer-motion';
import { SocialIcon } from 'react-social-icons';
import ErrorBoundary from '@/app/ErrorBoundary';

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
      <footer className="text-white bg-gray-900">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            {/* Logo and Social Section */}
            <div>
              {aboutUsData && (
                <Link href="/home">
                  <span className="cursor-pointer">
                    <Image src={aboutUsData.logo} alt="Company Logo" width={250} height={100} />
                  </span>
                </Link>
              )}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
                className="mt-6 flex space-x-4"
              >
                {aboutUsData?.facebook && <SocialIcon url={aboutUsData.facebook} fgColor="#fff" bgColor="#1DA1F2" />}
                {aboutUsData?.whatsapp && <SocialIcon url={aboutUsData.whatsapp} fgColor="#fff" bgColor="#25D366" />}
                {aboutUsData?.twitter && <SocialIcon url={aboutUsData.twitter} fgColor="#fff" bgColor="#1DA1F2" />}
                {aboutUsData?.instagram && <SocialIcon url={aboutUsData.instagram} fgColor="#fff" bgColor="#E1306C" />}
              </motion.div>
            </div>

            {/* Office Address Section */}
            <div>
              <h3 className="font-bold text-lg mb-4">Office Address</h3>
              <div className="space-y-3">
                <div className="flex items-center">
                  <FaMapMarker className="mr-2 text-yellow-500" />
                  <p>{aboutUsData?.address}</p>
                </div>
                <div className="flex items-center">
                  <FaPhone className="mr-2 text-yellow-500" />
                  <p>{aboutUsData?.phone}</p>
                </div>
                {aboutUsData?.whatsapp && (
                  <div className="flex items-center">
                    <FaPhone className="mr-2 text-yellow-500" />
                    <Link href={aboutUsData.whatsapp}>
                      <span className="hover:underline">WhatsApp Us</span>
                    </Link>
                  </div>
                )}
                <div className="flex items-center">
                  <FaEnvelope className="mr-2 text-yellow-500" />
                  <p>{aboutUsData?.email}</p>
                </div>
              </div>
            </div>

            {/* Contact Button Section */}
            <div className="flex flex-col justify-between">
              <h3 className="font-bold text-lg mb-4">Get in Touch</h3>
              <Link href="/contact">
                <button className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold py-3 px-6 rounded transition duration-300 w-full">
                  Contact Us
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="bg-gray-800 py-6">
          <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm text-gray-400 mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} Family Cladding. All rights reserved.
            </div>
            <div className="flex space-x-4">
              <Link href="/" className="text-gray-400 hover:text-white transition duration-300">
                Home
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-white transition duration-300">
                Terms of Use
              </Link>
              <Link href="/testimonial" className="text-gray-400 hover:text-white transition duration-300">
                Testimonials
              </Link>
              <Link href="/contact" className="text-gray-400 hover:text-white transition duration-300">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </ErrorBoundary>
  );
};

export default Footer;
