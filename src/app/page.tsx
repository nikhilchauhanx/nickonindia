// src/app/page.tsx
// This is now a Server Component by default (no 'use client').

import React from "react";
import HomePageClient from "../components/HomePageClient"; // Import the new client component
import GitHubActivityCard from "../components/GitHubActivityCard"; // Import the server component

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-800 p-4 md:p-8 font-sans">
      
      {/* We render the client component here and pass the Server Component 
        (GitHubActivityCard) to it as a prop. This is the correct pattern.
      */}
      <HomePageClient 
        gitHubActivityCard={<GitHubActivityCard />} 
      />

      <footer className="text-center py-6 mt-12 border-t border-gray-200">
        <p className="text-sm text-gray-500">
          © 2025 Nikhil Chauhan (nickonindia). All Rights Reserved.
        </p>
      </footer>
    </main>
  );
}
