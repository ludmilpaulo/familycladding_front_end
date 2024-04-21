"use client";
import React, { useEffect, useState } from 'react';
import TeamSection from './TeamSection';
import { AboutUsData, baseAPI, fetchAboutUsData } from '@/useAPI/fetchData';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import TestimonialCard from './TestimonialCard'; // Import the default export
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from 'react-icons/fa';

const AboutUsSection = () => {
  const [aboutUsData, setAboutUsData] = useState<AboutUsData | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchAboutUsData();
      setAboutUsData(data);
    };

    fetchData();
  }, []);

  const renderHtmlContent = (html: string) => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, 'text/html');
    const images = doc.querySelectorAll('img');

    images.forEach((img) => {
      const src = img.getAttribute('src');
      if (src && src.startsWith('/')) {
        // Replace relative path with absolute URL
        img.setAttribute('src', `${baseAPI}${src}`);
      }
    });

    return doc.documentElement.innerHTML;
  };

  return (
    <div>
      <div className="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4">
        {aboutUsData && (
          <div className="flex flex-col lg:flex-row justify-between gap-8">
            <div dangerouslySetInnerHTML={{ __html: renderHtmlContent(aboutUsData.about) }} />
          </div>
        )}

        <div className="flex lg:flex-row flex-col justify-between gap-8 pt-12">
          <div className="w-full lg:w-8/12 lg:pt-8">
            <TeamSection />
          </div>
        </div>
      </div>
      <CarouselProvider
        naturalSlideWidth={100}
        naturalSlideHeight={100} // Add naturalSlideHeight
        isIntrinsicHeight={true}
        totalSlides={2}
      >
        <Slider>
          <Slide index={0}>
            <TestimonialCard testimonialId={1} />
          </Slide>
          <Slide index={1}>
            <TestimonialCard testimonialId={2} />
          </Slide>
        </Slider>
        <div className="flex items-center mt-8">
        <ButtonBack className="cursor-pointer" role="button" aria-label="previous slide">
  {<FaArrowAltCircleLeft /> as any} 
</ButtonBack>
<ButtonNext className="cursor-pointer ml-2" role="button" aria-label="next slide">
  {<FaArrowAltCircleRight /> as any} 
</ButtonNext>



        </div>
      </CarouselProvider>
    </div>
  );
};

export default AboutUsSection;
