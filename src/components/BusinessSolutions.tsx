// src/components/BusinessSolutions.tsx
import React from 'react';
import { FaReact, FaServer, FaPenNib } from 'react-icons/fa';
import Section from './Section';

const solutions = [
  {
    icon: FaReact,
    title: 'Build High-Performance Web Applications',
    description: "Need a fast, SEO-friendly website that converts visitors into customers? I specialize in building modern web apps with Next.js that deliver a world-class user experience and rank high on Google.",
  },
  {
    icon: FaServer,
    title: 'Create a Scalable Backend for Your Product',
    description: "Whether you're launching a new mobile app or a complex web platform, I can build the robust, secure, and scalable backend you need to power it using Node.js, Express, and modern database solutions.",
  },
  {
    icon: FaPenNib,
    title: 'Engage the Developer Community',
    description: "Want to connect with a technical audience? As a YouTuber and writer, I can create high-quality blog posts and video tutorials that build your brand's credibility in the developer world.",
  },
];

const BusinessSolutions = () => {
  return (
    <Section title="How I Can Help Your Business">
      <div className="grid md:grid-cols-3 gap-8">
        {solutions.map((solution, index) => {
          const Icon = solution.icon;
          return (
            <div key={index} className="bg-gray-50 p-6 rounded-lg border border-gray-200 shadow-lg dark:bg-gray-800 dark:border-gray-700">
              <Icon className="text-4xl text-indigo-600 dark:text-indigo-400 mb-4" />
              <h3 className="text-xl font-bold mb-2 dark:text-gray-100">{solution.title}</h3>
              <p className="text-gray-700 dark:text-gray-300">{solution.description}</p>
            </div>
          );
        })}
      </div>
    </Section>
  );
};

export default BusinessSolutions;
