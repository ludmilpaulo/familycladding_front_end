"use client";
import React, { useEffect, useState } from 'react';
import ProjectCard from '@/components/ProjectCard';
import { Project } from '@/components/ProjectCard';
import { fetchProjects } from '@/useAPI/fetchData';

// Helper function to assign a category based on the project name
const assignCategory = (project: Project): string => {
  const name = project.name.toLowerCase();
  
  // Ensure the category is assigned based on the updated project name
  if (name.includes('brick work') || name.includes('bricked works')) {
    return 'Bricks';
  }
  if (name.includes('tiling')) { // Lowercase matching to be more flexible
    return 'Tiling';
  }
  if (name.includes('wayside suspended ceiling')) {
    return 'Ceilings';
  }
  return project.category || 'Other';
};


const Projects: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  // Define categories. Note that we add "Ceilings" and "Other" as new options.
  const categories = ['All', 'Tiling', 'Drypack', 'Timber', 'Stone', 'Slate', 'Bricks', 'Ceilings', 'Other'];

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const data = await fetchProjects();
        // Map through projects and assign categories based on the project name.
        const updatedData = data.map((project: Project) => ({
          ...project,
          category: assignCategory(project),
        }));
        setProjects(updatedData);
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

  // Filter projects based on the selected category
  const filteredProjects =
    selectedCategory === 'All'
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Projects</h1>
      
      {/* Category Filter Dropdown */}
      <div className="mb-4">
        <label htmlFor="categoryFilter" className="mr-2 font-medium">
          Filter by Category:
        </label>
        <select
          id="categoryFilter"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="border border-gray-300 rounded p-2"
        >
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

      {filteredProjects.length === 0 ? (
        <div>No projects found for the selected category.</div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Projects;
