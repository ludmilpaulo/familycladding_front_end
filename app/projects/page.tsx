"use client";
import React, { useEffect, useState } from 'react';
import ProjectCard from '@/components/ProjectCard';
import { Project } from '@/types';
import { fetchProjects } from '@/useAPI/fetchData';

const Projects: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const data = await fetchProjects();
        setProjects(data);
        setLoading(false);
        setError(null);
      } catch (error) {
        console.error('Error fetching projects:', error);
        setLoading(false);
        setError('Failed to load projects. Please try again later.');
      }
    };

    fetchData();
  }, []);

  if (error) return <div className="text-red-500 text-center">{error}</div>;
  if (loading) return <div>Loading projects...</div>;
  if (!loading && projects.length === 0) return <div>No projects found.</div>;

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
