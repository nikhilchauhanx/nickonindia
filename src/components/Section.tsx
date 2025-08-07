// src/components/Section.tsx
import React from 'react';

// A reusable Section component with dark mode styles
const Section = ({ title, children }: { title: string, children: React.ReactNode }) => (
  <section className="mb-10">
    {/* Added dark mode classes: dark:text-gray-100 and dark:border-gray-700 */}
    <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b-2 border-indigo-200 pb-2 dark:text-gray-100 dark:border-gray-700">
      {title}
    </h2>
    {children}
  </section>
);

export default Section;
