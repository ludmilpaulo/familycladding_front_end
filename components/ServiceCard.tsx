import { FC } from "react";
import { Service } from "@/types";
import Image from "next/image";
import Link from "next/link";

// Function to extract plain text from HTML and truncate it to 100 characters
const truncateText = (htmlContent: string, maxLength: number) => {
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
  const truncatedDescription = truncateText(service.description, 100);

  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105">
      <div className="relative h-40 w-full">
        <Image src={service.logo} alt={service.title} layout="fill" objectFit="cover" />
      </div>
      <div className="p-4">
        <h3 className="text-xl font-semibold">{service.title}</h3>
        <div className="mt-2">{truncatedDescription}</div>
        {service.price && <p className="mt-2">Price: {service.price}</p>}
        <Link href={`/services/${service.id}`}>
          <span className="mt-4 inline-block bg-yellow-500 text-white px-4 py-2 rounded-lg transition-colors hover:bg-yellow-600">
            View Details
          </span>
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;
