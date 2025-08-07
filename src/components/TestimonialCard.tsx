// src/components/TestimonialCard.tsx
import React from 'react';
import { FaQuoteLeft } from 'react-icons/fa';

// Define the type for a single testimonial, matching our data.ts file
interface Testimonial {
  quote: string;
  author: string;
  role: string;
}

const TestimonialCard = ({ testimonial }: { testimonial: Testimonial }) => {
  return (
    // Added dark mode classes for the background and border
    <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 shadow-lg dark:bg-gray-800 dark:border-gray-700">
      <FaQuoteLeft className="text-3xl text-indigo-300 mb-4 dark:text-indigo-500" />
      {/* Added dark mode styles for the text */}
      <blockquote className="text-gray-700 italic mb-4 dark:text-gray-300">
        &quot;{testimonial.quote}&quot;
      </blockquote>
      <div className="text-right">
        <p className="font-bold text-gray-900 dark:text-gray-100">{testimonial.author}</p>
        <p className="text-sm text-gray-600 dark:text-gray-400">{testimonial.role}</p>
      </div>
    </div>
  );
};

export default TestimonialCard;
