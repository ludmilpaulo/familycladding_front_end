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
      <footer className="text-white bg-gradient-to-br from-gray-900 to-gray-800 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>
        
        <div className="container-custom relative z-10 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Company Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2"
            >
              {aboutUsData && (
                <Link href="/" className="inline-block">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="mb-6"
                  >
                    <Image 
                      src={aboutUsData.logo} 
                      alt="Family Cladding Logo" 
                      width={280} 
                      height={120} 
                      className="h-16 w-auto object-contain"
                    />
                  </motion.div>
                </Link>
              )}
              
              <p className="text-gray-300 text-lg leading-relaxed mb-6 max-w-md">
                Your trusted partner for premium construction and cladding services. 
                We deliver excellence in every project with unmatched quality and professionalism.
              </p>
              
              <div className="flex space-x-4">
                {aboutUsData?.facebook && (
                  <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                    <SocialIcon url={aboutUsData.facebook} fgColor="#fff" style={{ height: 40, width: 40 }} />
                  </motion.div>
                )}
                {aboutUsData?.whatsapp && (
                  <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                    <SocialIcon
                      url="https://wa.me/27734260258"
                      fgColor="#fff"
                      bgColor="#25D366"
                      network="whatsapp"
                      style={{ height: 40, width: 40 }}
                    />
                  </motion.div>
                )}
                {aboutUsData?.twitter && (
                  <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                    <SocialIcon url={aboutUsData.twitter} fgColor="#fff" style={{ height: 40, width: 40 }} />
                  </motion.div>
                )}
                {aboutUsData?.instagram && (
                  <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                    <SocialIcon url={aboutUsData.instagram} fgColor="#fff" bgColor="#E1306C" style={{ height: 40, width: 40 }} />
                  </motion.div>
                )}
              </div>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="lg:col-span-1"
            >
              <h3 className="text-xl font-bold mb-6 text-gradient">Contact Information</h3>
              <div className="space-y-4">
                <motion.div 
                  className="flex items-start space-x-3 group"
                  whileHover={{ x: 5 }}
                >
                  <FaMapMarker className="mt-1 text-blue-400 group-hover:text-blue-300 transition-colors duration-300" />
                  <div>
                    <p className="text-gray-300 group-hover:text-white transition-colors duration-300">
                      49 Windsor Close, Maitland
                    </p>
                    <p className="text-gray-300 group-hover:text-white transition-colors duration-300">
                      Cape Town, South Africa
                    </p>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="flex items-center space-x-3 group"
                  whileHover={{ x: 5 }}
                >
                  <FaPhone className="text-blue-400 group-hover:text-blue-300 transition-colors duration-300" />
                  <a 
                    href={`tel:${aboutUsData?.phone}`} 
                    className="text-gray-300 group-hover:text-white transition-colors duration-300 hover:underline"
                  >
                    {aboutUsData?.phone}
                  </a>
                </motion.div>

                <motion.div 
                  className="flex items-center space-x-3 group"
                  whileHover={{ x: 5 }}
                >
                  <FaEnvelope className="text-blue-400 group-hover:text-blue-300 transition-colors duration-300" />
                  <a 
                    href={`mailto:${aboutUsData?.email}`} 
                    className="text-gray-300 group-hover:text-white transition-colors duration-300 hover:underline"
                  >
                    {aboutUsData?.email}
                  </a>
                </motion.div>
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-1"
            >
              <h3 className="text-xl font-bold mb-6 text-gradient">Quick Links</h3>
              <div className="space-y-3">
                {[
                  { href: '/', label: 'Home' },
                  { href: '/services', label: 'Services' },
                  { href: '/projects', label: 'Projects' },
                  { href: '/about', label: 'About Us' },
                  { href: '/contact', label: 'Contact' },
                ].map((link, index) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                  >
                    <Link 
                      href={link.href} 
                      className="block text-gray-300 hover:text-white transition-colors duration-300 hover:translate-x-2 transform"
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="mt-8"
              >
                <Link href="/contact">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    Get Free Quote
                  </motion.button>
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="bg-gradient-to-r from-gray-800 to-gray-900 py-6 border-t border-gray-700">
          <div className="container-custom">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="text-sm text-gray-400"
              >
                &copy; {new Date().getFullYear()} Family Cladding. All rights reserved.
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="flex flex-wrap justify-center md:justify-end space-x-6 text-sm"
              >
                <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors duration-300">
                  Privacy Policy
                </Link>
                <Link href="/terms" className="text-gray-400 hover:text-white transition-colors duration-300">
                  Terms of Service
                </Link>
                <Link href="/testimonial" className="text-gray-400 hover:text-white transition-colors duration-300">
                  Testimonials
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </footer>
    </ErrorBoundary>
  );
};

export default Footer;
