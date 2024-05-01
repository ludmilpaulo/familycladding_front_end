import React from 'react';
import Slider from 'react-slick';
import Image from 'next/image';
import { format } from 'date-fns';
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
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  

  // Truncate description to 100 characters
  const truncatedDescription = project.description.length > 100 ? project.description.substring(0, 100) + '...' : project.description;

  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="relative h-40 w-full">
        {/* Display project images or carousel */}
        <Slider {...settings}>
  {project.pictures.length > 0 ? (
    project.pictures.map((picture, index) => (
      <div key={index}>
        <Image src={picture.image} alt={`${project.name} Image ${index}`} width={800} height={600} />
      </div>
    ))
  ) : (
    <div>
      <Image src="/default-project-image.jpg" alt="Default Project" width={800} height={600} />
    </div>
  )}
</Slider>

      </div>
      <div className="p-4 text-black">
        <h3 className="text-xl font-semibold">{project.name}</h3>
        <p className="mt-2">{truncatedDescription}</p>
        <p className="mt-2">Start Date: {format(new Date(project.start_date), 'PPP')}</p>
<p className="mt-2">End Date: {format(new Date(project.end_date), 'PPP')}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
