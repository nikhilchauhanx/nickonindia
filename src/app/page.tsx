// src/app/page.tsx
import React from "react";
import HomePageClient from "../components/HomePageClient";
import GitHubActivityCard from "../components/GitHubActivityCard";
import LatestVideoCard from "../components/LatestVideoCard"; // 1. Import the new component

export default function Home() {
  return (
    <HomePageClient 
      gitHubActivityCard={<GitHubActivityCard />} 
      // 2. Pass the new YouTube card as a prop
      latestVideoCard={<LatestVideoCard />}
    />
  );
}
