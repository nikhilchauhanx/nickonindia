// src/components/CreatorSpotlight.tsx
import React from 'react';

// This function fetches video data from the YouTube API
async function getYoutubeVideos() {
  const apiKey = process.env.YOUTUBE_API_KEY;
  const channelHandle = 'nickonindia';
  const featuredVideoId = 'P8_e-iAGFfc'; // The ID you provided

  if (!apiKey) {
    console.error('YouTube API key is missing.');
    return { latestVideo: null, featuredVideo: null };
  }

  try {
    // --- Fetch Latest Video ---
    const channelResponse = await fetch(`https://www.googleapis.com/youtube/v3/channels?part=contentDetails&forHandle=${channelHandle}&key=${apiKey}`, { next: { revalidate: 86400 } });
    const channelData = await channelResponse.json();
    const uploadsPlaylistId = channelData.items?.[0]?.contentDetails?.relatedPlaylists?.uploads;
    
    let latestVideo = null;
    if (uploadsPlaylistId) {
      const videoResponse = await fetch(`https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${uploadsPlaylistId}&maxResults=1&key=${apiKey}`, { next: { revalidate: 3600 } });
      const videoData = await videoResponse.json();
      const videoItem = videoData.items?.[0]?.snippet;
      if (videoItem) {
        latestVideo = {
          title: videoItem.title,
          videoId: videoItem.resourceId.videoId,
        };
      }
    }

    // --- Fetch Featured Video ---
    const featuredResponse = await fetch(`https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${featuredVideoId}&key=${apiKey}`, { next: { revalidate: 86400 } });
    const featuredData = await featuredResponse.json();
    const featuredItem = featuredData.items?.[0]?.snippet;
    
    let featuredVideo = null;
    if (featuredItem) {
      featuredVideo = {
        title: featuredItem.title,
        videoId: featuredVideoId,
      };
    }

    return { latestVideo, featuredVideo };

  } catch (error) {
    console.error('Error fetching YouTube videos:', error);
    return { latestVideo: null, featuredVideo: null };
  }
}

// Reusable component to display a single YouTube video
const VideoCard = ({ video, label }: { video: { title: string, videoId: string } | null, label: string }) => {
  if (!video) return null;

  return (
    <div className="flex flex-col">
      <h4 className="font-semibold text-lg mb-2 text-gray-700 dark:text-gray-300">{label}</h4>
      <div className="aspect-video mb-2">
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
        className="font-bold text-md text-indigo-700 hover:underline dark:text-indigo-400"
      >
        {video.title}
      </a>
    </div>
  );
};

// New reusable component to display the Instagram Reel
const ReelCard = ({ reelUrl, label }: { reelUrl: string, label: string }) => {
  return (
    <div className="flex flex-col">
      <h4 className="font-semibold text-lg mb-2 text-gray-700 dark:text-gray-300">{label}</h4>
      <div className="w-full" style={{ maxWidth: '320px', margin: '0 auto' }}>
        <div className="aspect-[9/16] mb-2">
          <iframe
            width="100%"
            height="100%"
            src={reelUrl}
            title="Featured Instagram Reel"
            frameBorder="0"
            allowFullScreen
            className="rounded-md"
          ></iframe>
        </div>
      </div>
    </div>
  );
};


// This is the main async Server Component
const CreatorSpotlight = async () => {
  const { latestVideo, featuredVideo } = await getYoutubeVideos();
  const featuredReelUrl = "https://www.instagram.com/reel/C45V0Ekpq3G/embed";

  return (
    <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 shadow-lg dark:bg-gray-800 dark:border-gray-700">
      <h3 className="text-2xl font-bold text-gray-900 mb-6 dark:text-gray-100">Creator Spotlight</h3>
      
      {latestVideo || featuredVideo ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
          <VideoCard video={latestVideo} label="Latest YouTube Video" />
          <VideoCard video={featuredVideo} label="Featured YouTube Video" />
          <ReelCard reelUrl={featuredReelUrl} label="Featured Instagram Reel" />
        </div>
      ) : (
        <p className="text-gray-500 dark:text-gray-400">Could not load video content at this time.</p>
      )}
    </div>
  );
};

export default CreatorSpotlight;
