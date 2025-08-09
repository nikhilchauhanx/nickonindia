// src/components/LazyLoadWrapper.tsx
'use client';

import React from 'react';
import { useInView } from 'react-intersection-observer';

interface LazyLoadWrapperProps {
  children: React.ReactNode;
  // We can set a minimum height to prevent layout shift while the component is loading
  minHeight?: string; 
}

const LazyLoadWrapper = ({ children, minHeight = '200px' }: LazyLoadWrapperProps) => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Only trigger this once
    rootMargin: '200px 0px', // Start loading when the component is 200px away from the viewport
  });

  return (
    <div ref={ref} style={{ minHeight: !inView ? minHeight : undefined }}>
      {inView ? children : null}
    </div>
  );
};

export default LazyLoadWrapper;
