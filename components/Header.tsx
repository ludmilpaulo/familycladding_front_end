"use client";
import React from 'react';
import { SocialIcon } from "react-social-icons";

import { motion, useAnimation } from "framer-motion";
import { FaHome, FaCog, FaProjectDiagram, FaBloggerB, FaInfoCircle, FaPhone, FaMapMarker, FaFacebook, FaTwitter, FaInstagram, FaWhatsapp, FaClock, FaBars, FaTimes } from 'react-icons/fa';
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
  backgroundImage: string;
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
    <header className="w-full">
      <div className="flex-1 bg-black mx-auto">
        <div className="mx-4 md:mx-8 lg:mx-20 py-4 flex justify-between items-center">
          <div className="flex items-center text-[#FFFFFF]">
            <div className="flex flex-col items-start md:flex-row md:items-center md:space-x-4">
              <span className="flex items-center" >
                <FaPhone className="mr-1" />
                {headerData?.phone}
              </span>
              <span className="flex items-center ml-0 md:ml-4" >
                <FaMapMarker className="mr-1" />
                {headerData?.address}
              </span>
              <span className="flex items-center ml-0 md:ml-4" >
                <FaClock className="mr-1" />
                {headerData?.born_date}
              </span>
            </div>
          </div>
          <div className="hidden md:flex items-center">
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
                {headerData?.facebook && (
                  <SocialIcon url={headerData.facebook} />
                )}
                {headerData?.whatsapp && (
                  <SocialIcon url={headerData.whatsapp} />
                )}
                {headerData?.twitter && <SocialIcon url={headerData.twitter} />}
                {headerData?.instagram && (
                  <SocialIcon url={headerData.instagram} />
                )}
              </>
            </motion.div>
          </div>
          <div className="ml-auto md:hidden">
            <button onClick={toggleMenu}>
              {isMenuOpen ? <FaTimes className="text-white text-2xl" /> : <FaBars className="text-white text-2xl" />}
            </button>
          </div>
        </div>
      </div>
      <div className="mx-auto py-4" style={{ backgroundImage: `url(${headerData?.backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
        <div className="mx-4 md:mx-8 lg:mx-20 flex justify-between items-center">
          {headerData?.logo && (
            <Link href="/">
              <span className="cursor-pointer">
                <Image src={headerData.logo} alt="Logo" width={300} height={100} />
              </span>
            </Link>
          )}
          <div className="hidden md:flex items-center">
            <ul className="flex text-[#FFFFFF] gap-4">
              <li>
                <Link href="/" className=" text-2xl flex items-center">
                  <FaHome className="mr-1" />
                  <span className="font-extrabold">Home</span>
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-2xl flex items-center">
                  <FaCog className="mr-1" />
                  <span className="font-extrabold">Services</span>
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-2xl flex items-center">
                  <FaProjectDiagram className="mr-1" />
                  <span className="font-extrabold">Projects</span>
                </Link>
              </li>
             
              <li>
                <Link href="/about" className="text-2xl flex items-center">
                  <FaInfoCircle className="mr-1" />
                  <span className="font-extrabold">About Us</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="bg-black text-white mx-auto py-4">
          <div className="md:hidden">
            <ul className="flex gap-4">
              <li>
                <Link href="/" className="text-white">Home</Link>
              </li>
              <li>
                <Link href="/services" className="text-white">Services</Link>
              </li>
              <li>
                <Link href="/projects" className="text-white">Projects</Link>
              </li>
              
              <li>
                <Link href="/about" className="text-white">About Us</Link>
              </li>
            </ul>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
