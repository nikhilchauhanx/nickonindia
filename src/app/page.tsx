// src/app/page.tsx
import React from "react";
import HomePageClient from "../components/HomePageClient";
import GitHubActivityCard from "../components/GitHubActivityCard";
import CreatorSpotlight from "../components/CreatorSpotlight";

export default function Home() {
  return (
    <HomePageClient 
      gitHubActivityCard={<GitHubActivityCard />} 
      creatorSpotlight={<CreatorSpotlight />}
    />
  );
}
