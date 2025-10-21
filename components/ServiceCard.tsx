import { FC } from "react";
import { motion } from "framer-motion";
import { Service } from "@/types";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight, FaStar } from "react-icons/fa";

// Function to extract plain text from HTML and truncate it
const truncateText = (htmlContent: string, maxLength: number) => {
  if (typeof window === 'undefined') return htmlContent; // SSR safe
  const tempDiv = document.createElement("div");
  tempDiv.innerHTML = htmlContent;
  const plainText = tempDiv.textContent || "";
  return plainText.length > maxLength
    ? `${plainText.substring(0, maxLength)}...`
    : plainText;
};

interface ServiceCardProps {
  service: Service;
}

const ServiceCard: FC<ServiceCardProps> = ({ service }) => {
  const truncatedDescription = truncateText(service.description, 120);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -5 }}
      className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl overflow-hidden transition-all duration-300 transform hover:scale-[1.02] border border-gray-100"
    >
      <Link
        href={{
          pathname: "/serviceDetails",
          query: {
            title: service.title,
            image: service.logo,
            description: service.description,
          },
        }}
        className="block h-full"
      >
        {/* Image Container */}
        <div className="relative h-48 sm:h-52 md:h-56 w-full overflow-hidden">
          <Image 
            src={service.logo} 
            alt={service.title} 
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110" 
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          
          {/* Price Badge */}
          {service.price && (
            <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg">
              From R{service.price}
            </div>
          )}
          
          {/* Rating Stars */}
          <div className="absolute top-4 left-4 flex items-center space-x-1">
            {[1, 2, 3, 4, 5].map((star) => (
              <FaStar key={star} className="w-3 h-3 text-yellow-400 fill-current" />
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors duration-300">
            {service.title}
          </h3>
          
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-4 line-clamp-3">
            {truncatedDescription}
          </p>
          
          {/* Action Button */}
          <motion.div
            whileHover={{ x: 5 }}
            className="inline-flex items-center space-x-2 text-blue-600 font-semibold group-hover:text-blue-700 transition-colors duration-300"
          >
            <span>Learn More</span>
            <FaArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </motion.div>
        </div>

        {/* Bottom Border Effect */}
        <div className="h-1 bg-gradient-to-r from-blue-500 to-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
      </Link>
    </motion.div>
  );
};

export default ServiceCard;