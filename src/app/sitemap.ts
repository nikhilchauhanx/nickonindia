// src/app/sitemap.ts
import { MetadataRoute } from 'next';
import { getSortedPostsData } from '@/lib/posts'; // Import your blog post helper
import { projects } from '@/data'; // Import your project data

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = 'https://www.nickonindia.com';

  // Get all blog posts
  const blogPosts = getSortedPostsData().map((post) => ({
    url: `${siteUrl}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: 'monthly' as 'monthly',
    priority: 0.8,
  }));

  // Get all project pages
  const projectPages = projects.map((project) => ({
    url: `${siteUrl}/projects/${project.slug}`,
    lastModified: new Date(), // Use current date as a fallback
    changeFrequency: 'monthly' as 'monthly',
    priority: 0.9,
  }));

  // Define your main static pages
  const staticPages = [
    {
      url: siteUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly' as 'weekly',
      priority: 1,
    },
    {
      url: `${siteUrl}/services`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as 'monthly',
      priority: 0.9,
    },
    {
      url: `${siteUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as 'weekly',
      priority: 0.9,
    },
    {
      url: `${siteUrl}/hire-me`,
      lastModified: new Date(),
      changeFrequency: 'yearly' as 'yearly',
      priority: 0.7,
    },
    {
      url: `${siteUrl}/uses`,
      lastModified: new Date(),
      changeFrequency: 'yearly' as 'yearly',
      priority: 0.5,
    },
  ];

  // Combine all pages into one sitemap
  return [...staticPages, ...projectPages, ...blogPosts];
}
