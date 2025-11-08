import type { Metadata } from 'next';
import AnimatedSection from '@/components/AnimatedSection';
import ProjectCard from '@/components/ProjectCard';
import Link from 'next/link'; // --- ADDED: For the "Back to Home" link ---
import { FaArrowLeft } from 'react-icons/fa'; // --- ADDED: For the "Back to Home" icon ---

// --- CHANGE 1: We must import all the new project arrays from your data.ts file ---
import { 
  projects,
  nextJsProjects,
  reactJsProjects,
  htmlCssProjects
} from '@/data';

export const metadata: Metadata = {
  title: 'Projects | Nikhil Chauhan',
  description: 'A collection of my projects, including in-depth case studies on e-commerce platforms, real-time applications, and more.',
};

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-white text-gray-800 p-4 md:p-8 font-sans dark:bg-gray-900 dark:text-gray-200">
      <div className="max-w-4xl mx-auto pt-16">
        
        <AnimatedSection>
          {/* --- CHANGE 2: Updated the header to add a "Back" link and align the title --- */}
          <header className="mb-12">
            <Link 
              href="/" 
              className="inline-flex items-center gap-2 text-indigo-600 hover:underline mb-4 dark:text-indigo-400"
            >
              <FaArrowLeft />
              Back to Home
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold mb-3 text-gray-900 dark:text-gray-100">My Work</h1>
            <p className="text-lg text-gray-600 dark:text-gray-400">A complete archive of my work, from large-scale applications to small code experiments.</p>
          </header>
        </AnimatedSection>

        <AnimatedSection>
          {/* --- CHANGE 3: Renamed the title to "Featured Projects" --- */}
          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">
            Featured Projects
          </h2>
          <div className="space-y-12">
            {projects.map((project, index) => (
              // Your existing ProjectCard component is used here, no changes needed
              <ProjectCard key={`main-${index}`} project={project} />
            ))}
          </div>
        </AnimatedSection>

        {/* --- ADDED: This entire new section is added --- */}

        {/* --- DIVIDER --- */}
        <hr className="my-12 border-gray-200 dark:border-gray-700" />
        
        <AnimatedSection>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">
            Other Projects by Category
          </h2>

          {/* Next.js Projects Subsection */}
          <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-300 mb-4 mt-6 first:mt-0">
            Next.js Projects
          </h3>
          <div className="space-y-12">
            {nextJsProjects.length > 0 ? (
              nextJsProjects.map((project, index) => (
                <ProjectCard key={`next-${index}`} project={project} />
              ))
            ) : (
              <div className="p-4 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
                <p className="text-gray-600 dark:text-gray-400">
                  New Next.js projects coming soon... To add one, update the `nextJsProjects` array in `src/data.ts`.
                </p>
              </div>
            )}
          </div>
          
          <hr className="my-8 border-gray-200 dark:border-gray-700" /> 

          {/* React.js Projects Subsection */}
          <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-300 mb-4 mt-6">
            React.js Projects
          </h3>
          <div className="space-y-12">
            {reactJsProjects.length > 0 ? (
              reactJsProjects.map((project, index) => (
                <ProjectCard key={`react-${index}`} project={project} />
              ))
            ) : (
               <div className="p-4 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
                <p className="text-gray-600 dark:text-gray-400">
                  New React.js projects coming soon... To add one, update the `reactJsProjects` array in `src/data.ts`.
                </p>
              </div>
            )}
          </div>

          <hr className="my-8 border-gray-200 dark:border-gray-700" />

          {/* HTML/CSS Projects Subsection */}
          <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-300 mb-4 mt-6">
            HTML/CSS Projects
          </h3>
          <div className="space-y-12">
            {htmlCssProjects.length > 0 ? (
              htmlCssProjects.map((project, index) => (
                <ProjectCard key={`html-${index}`} project={project} />
              ))
            ) : (
               <div className="p-4 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
                <p className="text-gray-600 dark:text-gray-400">
                  New HTML/CSS/JS projects coming soon... To add one, update the `htmlCssProjects` array in `src/data.ts`!
                </p> 
                {/* ^-- THIS IS THE CORRECTED TAG --^ */}
              </div>
            )}
          </div>
        </AnimatedSection>
        
        {/* --- END OF ADDED SECTION --- */}

      </div>
    </div>
  );
}