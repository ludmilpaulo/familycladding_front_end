"use client";
import { FaStar } from 'react-icons/fa';
import Image from 'next/image';
import { fetchTestimonials, Testimonial } from '@/useAPI/fetchData'; // Import the Testimonial interface
import { useState, useEffect } from 'react';

interface TestimonialCardProps {
  testimonialId: number; // Define testimonialId prop
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonialId }) => {
  const [testimonial, setTestimonial] = useState<Testimonial | null>(null);

  useEffect(() => {
      const fetchTestimonial = async () => {
          try {
              const testimonials = await fetchTestimonials();
              const testimonial = testimonials.find(testimonial => testimonial.id === testimonialId);
              setTestimonial(testimonial || null);
          } catch (error) {
              console.error('Error fetching testimonials:', error);
          }
      };

      fetchTestimonial();
  }, [testimonialId]);

  if (!testimonial) {
      return <div>Loading testimonial...</div>;
  }

  return (
      <div>
          <div className="flex mt-14 md:flex">
              <div className="relative lg:w-1/2 sm:w-96 xl:h-96 h-80">
                  <Image
                      src={testimonial.image}
                      alt="image of profile"
                      className="w-full h-full flex-shrink-0 object-fit object-cover shadow-lg rounded"
                      width={300}
                      height={300}
                  />
                  <div className="w-32 md:flex hidden items-center justify-center absolute top-0 -mr-16 -mt-14 right-0 h-32 bg-indigo-100 rounded-full">
                      <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/testimonial-svg1.svg" alt="commas" />
                  </div>
              </div>
              <div className="md:w-1/3 lg:w-1/3 xl:ml-32 md:ml-20 md:mt-0 mt-4 flex flex-col justify-between">
                  <div>
                      <h1 className="text-2xl font-semibold xl:leading-loose text-gray-800">Some of the best work that was done!</h1>
                      <p className="text-base font-medium leading-6 mt-4 text-gray-600">{testimonial.content}</p>
                  </div>
                  <div className="md:mt-0 mt-8">
                      <p className="text-base font-medium leading-4 text-gray-800">{testimonial.author}</p>
                      <p className="text-base leading-4 mt-2 mb-4 text-gray-600">{testimonial.position}</p>
                      <div className="flex items-center gap-0">
                          {[...Array(testimonial.stars)].map((_, index) => (
                              <FaStar key={index} className="text-yellow-700" />
                          ))}
                      </div>
                  </div>
              </div>
          </div>
      </div>
  );
};

export default TestimonialCard;
