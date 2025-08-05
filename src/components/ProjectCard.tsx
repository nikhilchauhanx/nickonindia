// src/components/ProjectCard.tsx
import React from 'react';
import Link from 'next/link'; // Import the Next.js Link component

// Define the type for a single project
// This should match the updated interface in your data.ts file
interface Project {
  title: string;
  slug: string;
  stack: string;
  description: string;
  liveUrl: string;
  repoUrl: string;
  caseStudy: object | null; // We just need to know if a case study exists
}

// A reusable Project Card component
const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <div className="mb-6 p-6 border border-gray-200 rounded-lg hover:shadow-xl hover:border-indigo-300 transition-all duration-300 group">
      <h3 className="font-bold text-xl text-indigo-700 mb-2">{project.title}</h3>
      <p className="text-sm font-semibold text-gray-600 mb-3">{project.stack}</p>
      <p className="mb-4">{project.description}</p>
      
      <div className="flex items-center gap-4">
        {/* The main call to action is now the case study link */}
        {project.caseStudy && (
          <Link href={`/projects/${project.slug}`} className="inline-block bg-indigo-600 text-white font-bold py-2 px-5 rounded-lg hover:bg-indigo-700 transition-colors duration-300 shadow-md">
            Read Case Study
          </Link>
        )}
        
        {/* External links are now secondary */}
        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-indigo-600 hover:underline transition-colors">
          Live Demo
        </a>
        <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-indigo-600 hover:underline transition-colors">
          GitHub Repo
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
