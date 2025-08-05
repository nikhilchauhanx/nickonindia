// src/app/projects/[slug]/page.tsx
import { projects } from '@/data';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';

// Define a specific type for the page's props
type ProjectPageProps = {
  params: {
    slug: string;
  };
};

// This function is now SYNCHRONOUS, which resolves the build error.
export function generateMetadata({ params }: ProjectPageProps): Metadata {
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) {
    return {
      title: 'Project Not Found',
      description: 'The project you are looking for does not exist.',
    };
  }

  return {
    title: `${project.title} | Case Study`,
    description: `A detailed case study for the ${project.title} project, showcasing the objectives, challenges, and technologies used.`,
    openGraph: {
        title: `${project.title} | Case Study by Nikhil Chauhan`,
        description: project.description,
    },
  };
}

// This function pre-builds the pages for performance.
export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

// This synchronous function finds the project data.
function getProject(slug: string) {
  const project = projects.find((p) => p.slug === slug);
  return project;
}

// The main page component now uses the new ProjectPageProps type.
export default function ProjectPage({ params }: ProjectPageProps) {
  const project = getProject(params.slug);

  if (!project || !project.caseStudy) {
    notFound();
  }

  const { title, stack, caseStudy, liveUrl, repoUrl } = project;

  return (
    <main className="min-h-screen bg-white text-gray-800 p-4 md:p-8 font-sans">
      <div className="max-w-4xl mx-auto">
        
        <div className="mb-8">
          <Link href="/" className="text-indigo-600 hover:underline">
            &larr; Back to All Projects
          </Link>
        </div>

        <header className="mb-10 border-b-2 border-gray-200 pb-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-3 text-gray-900">{title}</h1>
          <p className="text-lg font-semibold text-indigo-700">{stack}</p>
        </header>

        <article className="prose lg:prose-xl max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-3">Objective</h2>
            <p>{caseStudy.objective}</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-3">Technical Choices</h2>
            <ul className="list-disc pl-5 space-y-2">
              {caseStudy.techChoices.map((choice, index) => (
                <li key={index}>{choice}</li>
              ))}
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-3">Challenges & Solutions</h2>
            <p>{caseStudy.challenges}</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-3">Lessons Learned</h2>
            <p>{caseStudy.learnings}</p>
          </section>
        </article>

        <footer className="mt-12 pt-6 border-t border-gray-200">
            <h3 className="text-xl font-semibold mb-4">Project Links</h3>
            <div className="flex items-center gap-6">
                <a href={liveUrl} target="_blank" rel="noopener noreferrer" className="inline-block bg-indigo-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-indigo-700 transition-colors duration-300 shadow-lg">
                    View Live Demo
                </a>
                <a href={repoUrl} target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-indigo-600 font-semibold hover:underline transition-colors">
                    GitHub Repository
                </a>
            </div>
        </footer>

      </div>
    </main>
  );
}
