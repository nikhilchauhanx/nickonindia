// src/app/page.tsx
import React from "react";
import HomePageClient from "../components/HomePageClient";
import GitHubActivityCard from "../components/GitHubActivityCard";
import CreatorSpotlight from "../components/CreatorSpotlight";
import IntroductionVideo from "../components/IntroductionVideo"; // 1. Import the new component

export default function Home() {
  return (
    <HomePageClient 
      gitHubActivityCard={<GitHubActivityCard />} 
      creatorSpotlight={<CreatorSpotlight />}
      introductionVideo={<IntroductionVideo />} // 2. Pass the new video component as a prop
    />
  );
}
