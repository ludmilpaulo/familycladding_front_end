"use client";
import React, { useEffect, useState, Suspense } from 'react';
import { motion, useAnimation } from 'framer-motion';
import MainBanner from '@/components/MainBanner';
import ServiceCard from '@/components/ServiceCard';
import { fetchServices } from '@/useAPI/fetchData';
import { Service } from '@/types';
import GetQuoteSection from '@/components/GetQuoteSection';
import Head from 'next/head';

const Home: React.FC = () => {
  const [services, setServices] = useState<Service[]>([]);
  const [isHovered, setIsHovered] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const controls = useAnimation();

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await fetchServices();
        setServices(data);
      } catch (error) {
        console.error('Error fetching services:', error);
        setError('Failed to load services. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (!isHovered) {
      controls.start({
        x: ["100vw", "-100vw"],
        transition: { repeat: Infinity, duration: 20, ease: 'linear' },
      });
    } else {
      controls.stop();
    }
  }, [isHovered, controls]);

  if (loading) {
    return (
      <div className="relative w-full min-h-screen overflow-hidden flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20" />
        <div className="relative z-10 flex flex-col items-center justify-center text-center p-8">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-600 mb-4"></div>
          <div className="text-gray-700 text-lg font-medium">Loading services...</div>
          <div className="text-gray-500 text-sm mt-2">Please wait while we prepare everything for you</div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="relative w-full min-h-screen overflow-hidden flex items-center justify-center bg-gradient-to-br from-red-50 to-pink-100">
        <div className="absolute inset-0 bg-gradient-to-br from-red-600/20 to-pink-600/20" />
        <div className="relative z-10 flex flex-col items-center justify-center text-center p-8 max-w-md">
          <div className="text-red-500 text-6xl mb-4">⚠️</div>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Oops! Something went wrong</h2>
          <p className="text-gray-600 mb-6">{error}</p>
          <button 
            onClick={() => window.location.reload()} 
            className="btn-primary px-6 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <>
      <Head>
        <title>Family Cladding - Premium Construction & Building Services in Cape Town</title>
        <meta name="description" content="Family Cladding is Cape Town's premier construction company specializing in premium building services, home renovations, commercial construction, and cladding solutions. Get expert construction services with unmatched quality and professionalism." />
        <meta name="keywords" content="construction company cape town, building contractors cape town, home renovation cape town, commercial construction cape town, cladding services cape town" />
        <meta property="og:title" content="Family Cladding - Premium Construction & Building Services in Cape Town" />
        <meta property="og:description" content="Cape Town's premier construction company specializing in premium building services, home renovations, commercial construction, and cladding solutions." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://familycladding.co.za" />
        <meta property="og:image" content="https://familycladding.co.za/og-image.jpg" />
        <meta property="og:locale" content="en_ZA" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Family Cladding - Premium Construction & Building Services in Cape Town" />
        <meta name="twitter:description" content="Cape Town's premier construction company specializing in premium building services, home renovations, commercial construction, and cladding solutions." />
        <meta name="twitter:image" content="https://familycladding.co.za/twitter-image.jpg" />
        
        {/* Structured Data for Homepage */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "Family Cladding",
              "description": "Premium construction and building services company in Cape Town, South Africa",
              "url": "https://familycladding.co.za",
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://familycladding.co.za/search?q={search_term_string}",
                "query-input": "required name=search_term_string"
              },
              "publisher": {
                "@type": "Organization",
                "name": "Family Cladding",
                "url": "https://familycladding.co.za"
              }
            })
          }}
        />
        
        {/* Local Business Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Family Cladding",
              "description": "Premium construction and building services company in Cape Town, South Africa",
              "url": "https://familycladding.co.za",
              "telephone": "+27-73-426-0258",
              "email": "info@familycladding.co.za",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "49 Windsor Close",
                "addressLocality": "Maitland",
                "addressRegion": "Western Cape",
                "addressCountry": "ZA",
                "postalCode": "7405"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "-33.9249",
                "longitude": "18.4241"
              },
              "openingHours": "Mo-Fr 08:00-17:00",
              "priceRange": "$$",
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.8",
                "reviewCount": "127"
              }
            })
          }}
        />
      </Head>

      <div className="relative w-full min-h-screen overflow-hidden">
        {/* SEO Content - Hidden but accessible to search engines */}
        <div className="sr-only">
          <h1>Family Cladding - Cape Town&apos;s Premier Construction Company</h1>
          <p>Professional construction services including home building, commercial construction, renovations, and cladding solutions in Cape Town, Western Cape, South Africa.</p>
          <h2>Our Construction Services</h2>
          <ul>
            <li>Residential Construction and Home Building</li>
            <li>Commercial Construction and Office Buildings</li>
            <li>Home Renovations and Extensions</li>
            <li>Cladding and Exterior Finishing</li>
            <li>Construction Project Management</li>
            <li>Building Maintenance and Repairs</li>
          </ul>
          <h2>Why Choose Family Cladding?</h2>
          <ul>
            <li>Over 15 years of construction experience in Cape Town</li>
            <li>Licensed and insured construction contractors</li>
            <li>Premium quality materials and workmanship</li>
            <li>Competitive pricing and transparent quotes</li>
            <li>Local Cape Town construction experts</li>
            <li>Satisfied customers across Western Cape</li>
          </ul>
        </div>

        {/* MainBanner at the back */}
        <MainBanner />
        
        {/* Foreground: Sliding services */}
        <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={controls}
            className="absolute top-[65%] sm:toprained[60%] md:top-[55%] transform -translate-y-1/2 flex flex-row transition-transform duration-20000"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
            style={{ pointerEvents: 'auto' }}
          >
            {/* Duplicate services for seamless loop */}
            {[...services, ...services].map((service, index) => (
              <div 
                className="w-48 sm:w-56 md:w-64 lg:w-72 flex-shrink-0 mx-2 sm:mx-3 md:mx-4" 
                key={`${service.id}-${index}`}
              >
              <ServiceCard service={service} />
            </div>
          ))}
        </motion.div>
        </div>

        {/* Floating Action Button for Mobile */}
        <div className="fixed bottom-6 right-6 z-50 sm:hidden">
          <motion.button
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 1 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            onClick={() => {
              const contactSection = document.getElementById('contact');
              contactSection?.scrollIntoView({ behavior: 'smooth' });
            }}
            aria-label="Contact us for construction quote"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
          </motion.button>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-40 hidden sm:block">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2 }}
            className="flex flex-col items-center text-white/70 hover:text-white transition-colors duration-300 cursor-pointer"
            onClick={() => {
              const aboutSection = document.getElementById('about');
              aboutSection?.scrollIntoView({ behavior: 'smooth' });
            }}
            aria-label="Scroll to learn more about our construction services"
          >
            <div className="text-sm font-medium mb-2">Scroll to explore</div>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center"
            >
              <div className="w-1 h-3 bg-white/50 rounded-full mt-2"></div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Home;
