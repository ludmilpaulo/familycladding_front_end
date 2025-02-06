"use client";
import React from 'react';
import { SocialIcon } from "react-social-icons";
import { FaHome, FaCog, FaProjectDiagram, FaInfoCircle, FaPhone, FaMapMarker, FaClock, FaBars, FaTimes } from 'react-icons/fa';
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
  const [headerData, setHeaderData] = React.useState<HeaderData | null>(null);
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  React.useEffect(() => {
    fetch(`${baseAPI}/info/aboutus/`)
      .then((response) => response.json())
      .then((data) => {
        setHeaderData(data[0]);
      })
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="w-full bg-white shadow-md">
      {/* Top Section */}
      <div className="bg-gray-800 text-white py-2 md:py-3 shadow-lg">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
          {/* Contact Information */}
          <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6 text-sm md:text-base">
            <span className="flex items-center">
              <FaPhone className="mr-2 text-lg" />
              {headerData?.phone}
            </span>
            <span className="flex items-center">
              <FaMapMarker className="mr-2 text-lg" />
              {headerData?.address}
            </span>
            <span className="flex items-center">
              <FaClock className="mr-2 text-lg" />
              {headerData?.born_date}
            </span>
          </div>

          {/* Social Media Icons */}
          <div className="hidden md:flex items-center space-x-4">
            {headerData?.facebook && <SocialIcon url={headerData.facebook} fgColor="#fff" style={{ height: 30, width: 30 }} />}
            {headerData?.whatsapp && (
  <SocialIcon
    url={
      headerData.whatsapp.includes("2773426058")
        ? "https://wa.me/27734260258" // temporarily fixed the whatsapp number
        : headerData.whatsapp.replace('https://api.whatsapp.com/send?phone=+', 'https://wa.me/')
    }
    fgColor="#fff"
    bgColor="#25D366"
    network="whatsapp"
    style={{ height: 30, width: 30 }}
  />
)}


            {headerData?.twitter && <SocialIcon url={headerData.twitter} fgColor="#fff" style={{ height: 30, width: 30 }} />}
            {headerData?.instagram && <SocialIcon url={headerData.instagram} fgColor="#fff" style={{ height: 30, width: 30 }} />}
          </div>

          {/* Menu Toggle Button for Mobile (Moved to the Right) */}
          <button onClick={toggleMenu} className="md:hidden text-white text-2xl focus:outline-none ml-auto">
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Logo and Navigation Section */}
      <div className="container mx-auto py-4 flex justify-between items-center">
        {/* Logo */}
        {headerData?.logo && (
          <Link href="/">
            <Image src={headerData.logo} alt="Logo" width={150} height={50} className="object-contain" />
          </Link>
        )}

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8 text-gray-800 text-lg">
          <Link href="/" className="hover:text-gray-600 transition-colors duration-300">
            Home
          </Link>
          <Link href="/services" className="hover:text-gray-600 transition-colors duration-300">
            Services
          </Link>
          <Link href="/projects" className="hover:text-gray-600 transition-colors duration-300">
            Projects
          </Link>
          <Link href="/about" className="hover:text-gray-600 transition-colors duration-300">
            About Us
          </Link>
        </nav>
      </div>

      {/* Mobile Menu Side Drawer */}
      <div className={`fixed top-0 left-0 h-full bg-gray-900 text-white w-64 transform ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out z-50`}>
        <nav className="flex flex-col items-start p-6 space-y-4">
          <Link href="/" className="text-white hover:text-gray-400 transition-colors duration-300" onClick={toggleMenu}>
            Home
          </Link>
          <Link href="/services" className="text-white hover:text-gray-400 transition-colors duration-300" onClick={toggleMenu}>
            Services
          </Link>
          <Link href="/projects" className="text-white hover:text-gray-400 transition-colors duration-300" onClick={toggleMenu}>
            Projects
          </Link>
          <Link href="/about" className="text-white hover:text-gray-400 transition-colors duration-300" onClick={toggleMenu}>
            About Us
          </Link>
        </nav>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-black opacity-50 z-40" onClick={toggleMenu}></div>
      )}
    </header>
  );
};

export default Header;
