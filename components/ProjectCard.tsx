import React from 'react';
import Slider from 'react-slick';
import Image from 'next/image';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

interface Picture {
  image: string;
}

interface Project {
  id: number;
  name: string;
  description: string;
  start_date: string;
  end_date: string;
  pictures: Picture[];
}

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000 // Change slides every 5 seconds (5000 milliseconds)
  };

  // Truncate description to 100 characters
  const truncatedDescription = project.description.length > 100 ? project.description.substring(0, 100) + '...' : project.description;

  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="relative h-40 w-full">
        {/* Display project images or carousel */}
        <Slider {...settings}>
          {project.pictures.map((picture, index) => (
            <div key={index}>
              <Image src={picture.image} alt={`Project Image ${index}`} width={800} height={600} />
            </div>
          ))}
        </Slider>
      </div>
      <div className="p-4 text-black">
        <h3 className="text-xl font-semibold">{project.name}</h3>
        <p className="mt-2">{truncatedDescription}</p>
        <p className="mt-2">Start Date: {project.start_date}</p>
        <p className="mt-2">End Date: {project.end_date}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
