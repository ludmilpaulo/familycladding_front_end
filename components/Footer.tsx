"use client";
import { useEffect, useState } from 'react';
import { FaFacebook, FaTwitter, FaWhatsapp, FaInstagram, FaMapMarker, FaPhone, FaEnvelope, FaHeart } from 'react-icons/fa';
import Image from 'next/image';
import Link from 'next/link';
import { AboutUsData, fetchAboutUsData } from '@/useAPI/fetchData';

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
             
              <ul className="flex space-x-4 mt-4">
                <li>
                  {aboutUsData?.facebook && (
                    <Link href={aboutUsData.facebook}>
                      <span className="cursor-pointer">
                        <FaFacebook />
                      </span>
                    </Link>
                  )}
                </li>
                <li>
                  {aboutUsData?.twitter && (
                    <Link href={aboutUsData.twitter}>
                      <span className="cursor-pointer">
                        <FaTwitter />
                      </span>
                    </Link>
                  )}
                </li>
                <li>
                  {aboutUsData?.whatsapp && (
                    <Link href={aboutUsData.whatsapp}>
                      <span className="cursor-pointer">
                        <FaWhatsapp />
                      </span>
                    </Link>
                  )}
                </li>
                <li>
                  {aboutUsData?.instagram && (
                    <Link href={aboutUsData.instagram}>
                      <span className="cursor-pointer">
                        <FaInstagram />
                      </span>
                    </Link>
                  )}
                </li>
              </ul>
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
              <li><Link href=""><span>Disclaimer </span></Link></li>
              <li><Link href="/contact"><span>Contact Us </span></Link></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
