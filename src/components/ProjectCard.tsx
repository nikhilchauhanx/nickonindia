// src/components/ProjectCard.tsx
import React from 'react';
import Link from 'next/link';

// Define the type for a single project
interface Project {
  title: string;
  slug: string;
  stack: string;
  description: string;
  liveUrl: string;
  repoUrl: string;
  caseStudy: object | null;
}

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    // Added dark mode styles to the card container
    <div className="mb-6 p-6 border border-gray-200 rounded-lg hover:shadow-xl hover:border-indigo-300 transition-all duration-300 group dark:bg-gray-800 dark:border-gray-700 dark:hover:border-indigo-500">
      <h3 className="font-bold text-xl text-indigo-700 mb-2 dark:text-indigo-400">{project.title}</h3>
      {/* Added dark mode styles to the stack text */}
      <p className="text-sm font-semibold text-gray-600 mb-3 dark:text-gray-400">{project.stack}</p>
      {/* Added dark mode styles to the description text */}
      <p className="mb-4 dark:text-gray-300">{project.description}</p>
      
      <div className="flex items-center gap-4">
        {project.caseStudy && (
          <Link href={`/projects/${project.slug}`} className="inline-block bg-indigo-600 text-white font-bold py-2 px-5 rounded-lg hover:bg-indigo-700 transition-colors duration-300 shadow-md dark:bg-indigo-500 dark:hover:bg-indigo-600">
            Read Case Study
          </Link>
        )}
        
        {/* Added dark mode styles to the external links */}
        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-indigo-600 hover:underline transition-colors dark:text-gray-400 dark:hover:text-indigo-400">
          Live Demo
        </a>
        <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-indigo-600 hover:underline transition-colors dark:text-gray-400 dark:hover:text-indigo-400">
          GitHub Repo
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
