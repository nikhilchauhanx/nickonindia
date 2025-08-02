// src/components/ProjectCard.tsx
import React from 'react';

// Define the type for a single project
interface Project {
  title: string;
  stack: string;
  description: string;
  liveUrl: string;
  repoUrl: string;
}

// A reusable Project Card component
const ProjectCard = ({ project }: { project: Project }) => (
  <div className="mb-4 p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow duration-300">
    <h3 className="font-bold text-lg text-indigo-700">{project.title}</h3>
    <p className="text-sm font-semibold text-gray-600 mb-2">{project.stack}</p>
    <p className="mb-3">{project.description}</p>
    <div className="flex gap-4">
      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:underline">Live Demo</a>
      <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:underline">GitHub Repo</a>
    </div>
  </div>
);

export default ProjectCard;