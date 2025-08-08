// src/app/blog/[slug]/page.tsx
import { getPostData, getSortedPostsData } from '@/lib/posts';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import type { Metadata } from 'next';
import SocialShareButtons from '@/components/SocialShareButtons';

// This function now generates dynamic metadata, including a custom social sharing image.
export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = await getPostData(params.slug);
  if (!post) {
    return { title: 'Post Not Found' };
  }

  // Create the URL for the dynamic OG image
  const ogImageUrl = new URL(`${process.env.VERCEL_URL || 'http://localhost:3000'}/api/og`);
  ogImageUrl.searchParams.set('title', post.title);

  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      url: `https://www.nickonindia.com/blog/${post.slug}`,
      images: [
        {
          url: ogImageUrl.toString(),
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description,
      images: [ogImageUrl.toString()],
    },
  };
}

// This function pre-builds a page for each blog post for performance
export async function generateStaticParams() {
  const posts = getSortedPostsData();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function PostPage({ params }: { params: { slug: string } }) {
  const post = await getPostData(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-white text-gray-800 p-4 md:p-8 font-sans dark:bg-gray-900 dark:text-gray-200">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <Link href="/blog" className="text-indigo-600 hover:underline dark:text-indigo-400">
            &larr; Back to Journal
          </Link>
        </div>
        
        <article>
          <header className="mb-8 border-b-2 border-gray-200 pb-6 dark:border-gray-700">
            <h1 className="text-4xl md:text-5xl font-bold mb-3 text-gray-900 dark:text-gray-100">{post.title}</h1>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Published on {new Date(post.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </p>
          </header>
          
          <div
            className="prose lg:prose-xl max-w-none dark:prose-invert"
            dangerouslySetInnerHTML={{ __html: post.contentHtml }}
          />

          <footer className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
            <h3 className="text-lg font-semibold text-gray-800 mb-4 dark:text-gray-100">Share this article</h3>
            <SocialShareButtons title={post.title} slug={post.slug} />
          </footer>
        </article>
      </div>
    </main>
  );
}
