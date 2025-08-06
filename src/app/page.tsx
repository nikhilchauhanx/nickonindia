// src/app/page.tsx
import React from "react";
import HomePageClient from "../components/HomePageClient";
import GitHubActivityCard from "../components/GitHubActivityCard";

export default function Home() {
  // This page now only returns the client component.
  // The <main> and <footer> are handled globally in layout.tsx.
  return (
    <HomePageClient 
      gitHubActivityCard={<GitHubActivityCard />} 
    />
  );
}
