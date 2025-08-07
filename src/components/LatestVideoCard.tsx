// src/components/LatestVideoCard.tsx
import React from 'react';

// This function fetches your latest YouTube video
async function getLatestYoutubeVideo() {
  const apiKey = process.env.YOUTUBE_API_KEY;
  const channelHandle = 'nickonindia'; // Your YouTube channel handle

  if (!apiKey) {
    console.error('YouTube API key is missing.');
    return null;
  }

  try {
    // 1. First, get the Channel ID from the handle
    const channelResponse = await fetch(`https://www.googleapis.com/youtube/v3/channels?part=contentDetails&forHandle=${channelHandle}&key=${apiKey}`, { next: { revalidate: 86400 } }); // Revalidate once a day
    const channelData = await channelResponse.json();
    
    if (!channelData.items || channelData.items.length === 0) {
      console.error('Could not find YouTube channel.');
      return null;
    }
    
    const uploadsPlaylistId = channelData.items[0].contentDetails.relatedPlaylists.uploads;

    // 2. Then, get the latest video from the "uploads" playlist
    const videoResponse = await fetch(`https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${uploadsPlaylistId}&maxResults=1&key=${apiKey}`, { next: { revalidate: 3600 } }); // Revalidate once an hour
    const videoData = await videoResponse.json();

    if (!videoData.items || videoData.items.length === 0) {
      return null;
    }

    const latestVideo = videoData.items[0].snippet;
    return {
      title: latestVideo.title,
      videoId: latestVideo.resourceId.videoId,
    };

  } catch (error) {
    console.error('Error fetching YouTube video:', error);
    return null;
  }
}

// This is an async Server Component
const LatestVideoCard = async () => {
  const video = await getLatestYoutubeVideo();

  return (
    <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 shadow-lg dark:bg-gray-800 dark:border-gray-700">
      <h3 className="text-xl font-semibold text-gray-800 mb-4 dark:text-gray-100">Latest from YouTube</h3>
      {video ? (
        <div>
          <div className="aspect-video mb-4">
            <iframe
              width="100%"
              height="100%"
              src={`https://www.youtube.com/embed/${video.videoId}`}
              title={video.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="rounded-md"
            ></iframe>
          </div>
          <a 
            href={`https://www.youtube.com/watch?v=${video.videoId}`} 
            target="_blank" 
            rel="noopener noreferrer"
            className="font-bold text-lg text-indigo-700 hover:underline dark:text-indigo-400"
          >
            {video.title}
          </a>
        </div>
      ) : (
        <p className="text-gray-500 dark:text-gray-400">Could not load the latest video at this time.</p>
      )}
    </div>
  );
};

export default LatestVideoCard;
