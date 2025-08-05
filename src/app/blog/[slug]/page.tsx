// src/app/blog/[slug]/page.tsx
import { getPostData, getSortedPostsData } from '@/lib/posts';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import type { Metadata } from 'next';

// This function generates the dynamic metadata for each blog post
export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = await getPostData(params.slug);
  if (!post) {
    return { title: 'Post Not Found' };
  }
  return {
    title: post.title,
    description: post.description,
  };
}

// This function pre-builds a page for each blog post for performance
export async function generateStaticParams() {
  const posts = getSortedPostsData();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function PostPage({ params }: { params: { slug:string } }) {
  const post = await getPostData(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-white text-gray-800 p-4 md:p-8 font-sans">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <Link href="/blog" className="text-indigo-600 hover:underline">
            &larr; Back to Journal
          </Link>
        </div>
        
        <article>
          <header className="mb-8 border-b-2 border-gray-200 pb-6">
            <h1 className="text-4xl md:text-5xl font-bold mb-3 text-gray-900">{post.title}</h1>
            <p className="text-sm text-gray-500">
              Published on {new Date(post.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </p>
          </header>
          
          {/* This is where the blog post content will be rendered */}
          <div
            className="prose lg:prose-xl max-w-none"
            dangerouslySetInnerHTML={{ __html: post.contentHtml }}
          />
        </article>
      </div>
    </main>
  );
}
