// components/ProjectCard.tsx
import { Project } from '@/types';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="relative h-40 w-full">
        {/* Display project images or carousel */}
        {/* <ImageSlider images={project.images} /> */}
      </div>
      <div className="p-4">
        <h3 className="text-xl font-semibold">{project.name}</h3>
        <p className="mt-2">{project.description}</p>
        <p className="mt-2">Start Date: {project.start_date}</p>
        <p className="mt-2">End Date: {project.end_date}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
