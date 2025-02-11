import React from 'react';
import Slider from 'react-slick';
import Image from 'next/image';
import { format } from 'date-fns';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

interface Picture {
  image: string;
}

export interface Project {
  id: number;
  name: string;
  description: string;
  start_date: string;
  end_date: string;
  pictures: Picture[];
  category: string;
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
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  // Truncate description to 100 characters
  const truncatedDescription =
    project.description.length > 100
      ? project.description.substring(0, 100) + '...'
      : project.description;

  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
      {/* Image Carousel */}
      <div className="w-full">
        <Slider {...settings}>
          {project.pictures.length > 0 ? (
            project.pictures.map((picture, index) => (
              <div key={index} className="relative h-40 w-full">
                <Image
                  src={picture.image}
                  alt={`${project.name} Image ${index}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))
          ) : (
            <div className="relative h-40 w-full">
              <Image
                src="/default-project-image.jpg"
                alt="Default Project"
                fill
                className="object-cover"
              />
            </div>
          )}
        </Slider>
      </div>
      {/* Project Info */}
      <div className="p-4 text-black">
        <h3 className="text-xl font-semibold">{project.name}</h3>
        <p className="mt-2">{truncatedDescription}</p>
        <p className="mt-2">
          Start Date: {format(new Date(project.start_date), 'PPP')}
        </p>
        <p className="mt-2">
          End Date: {format(new Date(project.end_date), 'PPP')}
        </p>
        <p className="mt-2">
          Category: <span className="font-medium">{project.category}</span>
        </p>
      </div>
    </div>
  );
};

export default ProjectCard;
