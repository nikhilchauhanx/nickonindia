// src/components/GitHubActivityCard.tsx
import React from 'react';
import { FaGithub } from 'react-icons/fa';

// This is an async function to fetch your recent GitHub activity
async function getGithubActivity() {
  try {
    // We use the GitHub API to get your public events
    const response = await fetch('https://api.github.com/users/nikhilchauhanx/events/public', {
      // Use Next.js's revalidation feature to cache the data for 1 hour
      next: { revalidate: 3600 }, 
    });

    if (!response.ok) {
      console.error('Failed to fetch GitHub activity');
      return null;
    }

    const events = await response.json();
    
    // We'll count "PushEvents" as a measure of recent contributions
    const pushEvents = events.filter((event: any) => event.type === 'PushEvent');
    
    // The API returns the last 90 days of activity
    return pushEvents.length;

  } catch (error) {
    console.error('Error fetching GitHub activity:', error);
    return null;
  }
}

// This is an async Server Component
const GitHubActivityCard = async () => {
  const contributionCount = await getGithubActivity();

  return (
    <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 shadow-lg flex items-center justify-between">
      <div>
        <h3 className="font-bold text-lg text-gray-900">Recent GitHub Activity</h3>
        {contributionCount !== null ? (
          <p className="text-gray-600">
            <span className="font-extrabold text-3xl text-indigo-600">{contributionCount}</span> contributions in the last 90 days.
          </p>
        ) : (
          <p className="text-gray-500">Could not load activity data.</p>
        )}
      </div>
      <a 
        href="https://github.com/nikhilchauhanx" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="flex items-center gap-2 text-white bg-gray-800 hover:bg-black font-semibold py-2 px-4 rounded-lg transition-colors"
      >
        <FaGithub />
        View Profile
      </a>
    </div>
  );
};

export default GitHubActivityCard;
