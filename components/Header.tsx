"use client";
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SocialIcon } from "react-social-icons";
import { FaHome, FaCog, FaProjectDiagram, FaInfoCircle, FaPhone, FaMapMarker, FaClock, FaBars, FaTimes, FaEnvelope } from 'react-icons/fa';
import Image from 'next/image';
import Link from 'next/link';
import { baseAPI } from '@/useAPI/fetchData';

interface HeaderData {
  born_date: string;
  phone: string;
  address: string;
  whatsapp: string;
  facebook: string;
  twitter: string;
  instagram: string;
  logo: string;
}

const Header: React.FC = () => {
  const [headerData, setHeaderData] = useState<HeaderData | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    fetch(`${baseAPI}/info/aboutus/`)
      .then((response) => response.json())
      .then((data) => {
        setHeaderData(data[0]);
      })
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { href: '/', label: 'Home', icon: FaHome },
    { href: '/services', label: 'Services', icon: FaCog },
    { href: '/projects', label: 'Projects', icon: FaProjectDiagram },
    { href: '/about', label: 'About Us', icon: FaInfoCircle },
    { href: '/contact', label: 'Contact', icon: FaPhone },
  ];

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`w-full bg-white shadow-lg transition-all duration-300 ${isScrolled ? 'shadow-xl' : 'shadow-md'}`}
    >
      {/* Top Section */}
      <div className="bg-gradient-to-r from-gray-800 to-gray-900 text-white py-2 md:py-3">
        <div className="container-custom flex flex-col lg:flex-row justify-between items-center">
          {/* Contact Information */}
          <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6 text-sm">
            <motion.span 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center hover:text-blue-300 transition-colors duration-300"
            >
              <FaPhone className="mr-2 text-sm" />
              <span className="hidden sm:inline">{headerData?.phone}</span>
              <span className="sm:hidden">{headerData?.phone?.slice(0, 15)}...</span>
            </motion.span>
            <motion.span 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="flex items-center hover:text-blue-300 transition-colors duration-300"
            >
              <FaMapMarker className="mr-2 text-sm" />
              <span className="hidden sm:inline">{headerData?.address}</span>
              <span className="sm:hidden">Location</span>
            </motion.span>
            <motion.span 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="flex items-center hover:text-blue-300 transition-colors duration-300"
            >
              <FaClock className="mr-2 text-sm" />
              Mon - Fri: 8:00 AM - 5:00 PM
            </motion.span>
          </div>

          {/* Social Media Icons */}
          <div className="hidden lg:flex items-center space-x-3">
            {headerData?.facebook && (
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <SocialIcon url={headerData.facebook} fgColor="#fff" style={{ height: 28, width: 28 }} />
              </motion.div>
            )}
            {headerData?.whatsapp && (
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <SocialIcon
                  url="https://wa.me/27734260258" 
                  fgColor="#fff"
                  bgColor="#25D366"
                  network="whatsapp"
                  style={{ height: 28, width: 28 }}
                />
              </motion.div>
            )}
            {headerData?.twitter && (
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <SocialIcon url={headerData.twitter} fgColor="#fff" style={{ height: 28, width: 28 }} />
              </motion.div>
            )}
            {headerData?.instagram && (
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <SocialIcon url={headerData.instagram} fgColor="#fff" style={{ height: 28, width: 28 }} />
              </motion.div>
            )}
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            onClick={toggleMenu} 
            className="lg:hidden text-white text-2xl focus:outline-none p-2 rounded-lg hover:bg-white/10 transition-colors duration-300"
          >
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="container-custom py-4 flex justify-between items-center">
        {/* Logo */}
        {headerData?.logo && (
          <Link href="/" className="flex-shrink-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.7 }}
              whileHover={{ scale: 1.05 }}
              className="relative"
            >
              <Image 
                src={headerData.logo} 
                alt="Family Cladding Logo" 
                width={160} 
                height={60} 
                className="object-contain h-12 md:h-16 w-auto" 
              />
            </motion.div>
          </Link>
        )}

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex space-x-8">
          {navItems.map((item, index) => (
            <motion.div
              key={item.href}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 + index * 0.1 }}
            >
              <Link 
                href={item.href} 
                className="relative text-gray-800 hover:text-blue-600 transition-colors duration-300 font-medium group"
              >
                <span className="relative z-10">{item.label}</span>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
              </Link>
            </motion.div>
          ))}
        </nav>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.2 }}
          className="hidden lg:block"
        >
          <Link 
            href="/contact" 
            className="btn-primary px-6 py-2 text-sm font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            Get Quote
          </Link>
        </motion.div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 z-40 lg:hidden"
              onClick={toggleMenu}
            />
            
            {/* Side Menu */}
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
              className="fixed top-0 left-0 h-full bg-white w-80 max-w-[85vw] shadow-2xl z-50 lg:hidden"
            >
              {/* Menu Header */}
              <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-6">
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-bold">Menu</h2>
                  <button 
                    onClick={toggleMenu}
                    className="text-white text-2xl hover:bg-white/10 p-2 rounded-lg transition-colors duration-300"
                  >
                    <FaTimes />
                  </button>
                </div>
              </div>

              {/* Menu Items */}
              <nav className="p-6 space-y-4">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link 
                      href={item.href} 
                      className="flex items-center space-x-3 text-gray-800 hover:text-blue-600 hover:bg-blue-50 p-3 rounded-lg transition-all duration-300 group"
                      onClick={toggleMenu}
                    >
                      <item.icon className="text-lg group-hover:text-blue-600 transition-colors duration-300" />
                      <span className="font-medium">{item.label}</span>
                    </Link>
                  </motion.div>
                ))}
                
                {/* Social Links in Mobile */}
                <div className="pt-6 border-t border-gray-200">
                  <h3 className="text-sm font-semibold text-gray-500 mb-4">Follow Us</h3>
                  <div className="flex space-x-4">
                    {headerData?.facebook && <SocialIcon url={headerData.facebook} style={{ height: 32, width: 32 }} />}
                    {headerData?.whatsapp && (
                      <SocialIcon
                        url="https://wa.me/27734260258" 
                        bgColor="#25D366"
                        network="whatsapp"
                        style={{ height: 32, width: 32 }}
                      />
                    )}
                    {headerData?.twitter && <SocialIcon url={headerData.twitter} style={{ height: 32, width: 32 }} />}
                    {headerData?.instagram && <SocialIcon url={headerData.instagram} style={{ height: 32, width: 32 }} />}
                  </div>
                </div>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
