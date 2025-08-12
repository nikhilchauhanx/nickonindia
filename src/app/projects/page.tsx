// src/app/projects/page.tsx
import type { Metadata } from 'next';
import AnimatedSection from '@/components/AnimatedSection';
import ProjectCard from '@/components/ProjectCard';
import { projects } from '@/data';

export const metadata: Metadata = {
  title: 'Projects | Nikhil Chauhan',
  description: 'A collection of my projects, including in-depth case studies on e-commerce platforms, real-time applications, and more.',
};

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-white text-gray-800 p-4 md:p-8 font-sans dark:bg-gray-900 dark:text-gray-200">
      <div className="max-w-4xl mx-auto pt-16">
        
        <AnimatedSection>
          <header className="mb-12 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-3 text-gray-900 dark:text-gray-100">My Work</h1>
            <p className="text-lg text-gray-600 dark:text-gray-400">A selection of projects I'm proud of. Click on any project to read the full case study.</p>
          </header>
        </AnimatedSection>

        <AnimatedSection>
          <div className="space-y-12">
            {projects.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>
        </AnimatedSection>

      </div>
    </div>
  );
}
