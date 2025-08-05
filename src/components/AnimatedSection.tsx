// src/components/AnimatedSection.tsx
'use client'; // This component uses client-side hooks, so it must be a client component.

import { motion } from 'framer-motion';
import React from 'react';

// This is a reusable component that wraps its children with a fade-in-on-scroll animation.
const AnimatedSection = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }} // Start invisible and slightly down
      whileInView={{ opacity: 1, y: 0 }} // Animate to visible and original position
      viewport={{ once: true }} // Only animate once when it enters the viewport
      transition={{
        duration: 0.5, // Animation lasts 0.5 seconds
        ease: 'easeOut', // Use a gentle easing effect
      }}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedSection;
