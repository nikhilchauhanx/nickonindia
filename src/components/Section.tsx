// src/components/Section.tsx
import React from 'react';

// A reusable Section component
const Section = ({ title, children }: { title: string, children: React.ReactNode }) => (
  <section className="mb-10">
    <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b-2 border-indigo-200 pb-2">{title}</h2>
    {children}
  </section>
);

export default Section;