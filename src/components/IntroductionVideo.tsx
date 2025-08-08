// src/components/IntroductionVideo.tsx
import React from 'react';
import Section from './Section';

const IntroductionVideo = () => {
  // Replace this ID with your own YouTube video ID when you're ready
  const videoId = '-454v7al7sU'; 

  return (
    <Section title="A Quick Introduction">
      <div className="aspect-video rounded-lg overflow-hidden shadow-xl border border-gray-200 dark:border-gray-700">
        <iframe
          width="100%"
          height="100%"
          src={`https://www.youtube.com/embed/${videoId}`}
          title="Personal Introduction Video"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </Section>
  );
};

export default IntroductionVideo;
