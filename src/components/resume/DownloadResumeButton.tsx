// src/components/resume/DownloadResumeButton.tsx
'use client'; // This component must be a client component.

import React from 'react';
import { PDFDownloadLink } from '@react-pdf/renderer';
import ResumeDocument from './ResumeDocument';

const DownloadResumeButton = () => {
  return (
    <PDFDownloadLink
      document={<ResumeDocument />}
      fileName="Nikhil-Chauhan-Resume.pdf"
      className="inline-block bg-indigo-600 text-white font-bold py-2 px-6 rounded-lg hover:bg-indigo-700 transition-colors duration-300 shadow-lg"
    >
      {({ blob, url, loading, error }) =>
        loading ? 'Generating Resume...' : 'Download Live Resume'
      }
    </PDFDownloadLink>
  );
};

export default DownloadResumeButton;
