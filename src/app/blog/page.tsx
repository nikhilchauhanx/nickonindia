// src/app/blog/page.tsx
import Link from 'next/link';
import { getSortedPostsData } from '@/lib/posts';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog | Nikhil Chauhan',
  description: 'A collection of articles on web development, technology, and my journey as a developer.',
};

export default function BlogPage() {
  const allPosts = getSortedPostsData();

  return (
    <main className="min-h-screen bg-white text-gray-800 p-4 md:p-8 font-sans">
      <div className="max-w-4xl mx-auto">
        <header className="mb-10 border-b-2 border-gray-200 pb-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-3 text-gray-900">Developer's Journal</h1>
          <p className="text-lg text-gray-600">Insights and learnings from my journey in web development.</p>
        </header>

        <div className="space-y-8">
          {allPosts.map(({ slug, date, title, description }) => (
            <Link href={`/blog/${slug}`} key={slug} className="block group">
              <article className="p-6 border border-gray-200 rounded-lg hover:shadow-xl hover:border-indigo-300 transition-all duration-300">
                <header className="mb-2">
                  <h2 className="text-2xl font-bold text-indigo-700 group-hover:text-indigo-800 transition-colors">
                    {title}
                  </h2>
                  <p className="text-sm text-gray-500">
                    {new Date(date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </p>
                </header>
                <section>
                  <p className="text-gray-700">{description}</p>
                </section>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
