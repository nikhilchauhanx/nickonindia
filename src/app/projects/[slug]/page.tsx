// src/app/projects/[slug]/page.tsx
import { projects } from '@/data';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';

// This function generates dynamic metadata for each project page.
export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) {
    return {
      title: 'Project Not Found',
    };
  }

  return {
    title: `${project.title} | Case Study`,
    description: `A detailed case study for the ${project.title} project.`,
  };
}

// This function pre-builds the pages for performance.
export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

// The main page component.
export default async function ProjectPage({ params }: { params: { slug: string } }) {
  const project = projects.find((p) => p.slug === params.slug);

  if (!project || !project.caseStudy) {
    notFound();
  }

  const { title, stack, caseStudy, liveUrl, repoUrl, slug } = project;

  return (
    <main className="min-h-screen bg-white text-gray-800 p-4 md:p-8 font-sans dark:bg-gray-900 dark:text-gray-200">
      <div className="max-w-4xl mx-auto">
        
        <div className="mb-8">
          <Link href="/" className="text-indigo-600 hover:underline dark:text-indigo-400">
            &larr; Back to All Projects
          </Link>
        </div>

        <header className="mb-10 border-b-2 border-gray-200 pb-6 dark:border-gray-700">
          <h1 className="text-4xl md:text-5xl font-bold mb-3 text-gray-900 dark:text-gray-100">{title}</h1>
          <p className="text-lg font-semibold text-indigo-700 dark:text-indigo-400">{stack}</p>
        </header>

        {/* This is the new Interactive Demo section. It only shows for the Xenzy project. */}
        {slug === 'xenzy-thrift-store' && (
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 dark:text-gray-100">Interactive Live Demo</h2>
            <div className="w-full h-[600px] border border-gray-300 dark:border-gray-700 rounded-lg overflow-hidden shadow-xl">
              <iframe
                src={liveUrl}
                title="Live Demo of Xenzy Thrift Store"
                width="100%"
                height="100%"
                frameBorder="0"
                allowFullScreen
              ></iframe>
            </div>
            <p className="text-sm text-center mt-2 text-gray-500 dark:text-gray-400">
              Note: This is the full, live application embedded directly on this page.
            </p>
          </section>
        )}

        <article className="prose lg:prose-xl max-w-none dark:prose-invert">
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

        <footer className="mt-12 pt-6 border-t border-gray-200 dark:border-gray-700">
            <h3 className="text-xl font-semibold mb-4 dark:text-gray-100">Project Links</h3>
            <div className="flex items-center gap-6">
                <a href={liveUrl} target="_blank" rel="noopener noreferrer" className="inline-block bg-indigo-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-indigo-700 transition-colors duration-300 shadow-lg dark:bg-indigo-500 dark:hover:bg-indigo-600">
                    View Live Demo
                </a>
                <a href={repoUrl} target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-indigo-600 font-semibold hover:underline transition-colors dark:text-gray-400 dark:hover:text-indigo-400">
                    GitHub Repository
                </a>
            </div>
        </footer>

      </div>
    </main>
  );
}
