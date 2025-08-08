// src/components/SocialShareButtons.tsx
'use client';

import { FaTwitter, FaLinkedin, FaReddit, FaWhatsapp, FaFacebook } from 'react-icons/fa';

interface SocialShareButtonsProps {
  title: string;
  slug: string;
}

const SocialShareButtons = ({ title, slug }: SocialShareButtonsProps) => {
  // Construct the full URL to the blog post
  const shareUrl = `https://www.nickonindia.com/blog/${slug}`;
  
  // Encode the URL and title for use in the share links
  const encodedUrl = encodeURIComponent(shareUrl);
  const encodedTitle = encodeURIComponent(title);
  const twitterText = encodeURIComponent(`Check out this article by Nikhil Chauhan: "${title}"`);

  // Create the specific share URLs for each platform
  const twitterShareUrl = `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${twitterText}`;
  const linkedinShareUrl = `https://www.linkedin.com/shareArticle?mini=true&url=${encodedUrl}&title=${encodedTitle}`;
  const redditShareUrl = `https://www.reddit.com/submit?url=${encodedUrl}&title=${encodedTitle}`;
  const whatsappShareUrl = `https://api.whatsapp.com/send?text=${twitterText}%20${encodedUrl}`;
  const facebookShareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`;


  return (
    <div className="flex flex-wrap items-center gap-4">
      <a
        href={twitterShareUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 text-sm text-white bg-[#1DA1F2] hover:bg-[#0c85d0] font-semibold py-2 px-4 rounded-lg transition-colors"
      >
        <FaTwitter />
        <span>Share on Twitter</span>
      </a>
      <a
        href={linkedinShareUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 text-sm text-white bg-[#0077B5] hover:bg-[#005582] font-semibold py-2 px-4 rounded-lg transition-colors"
      >
        <FaLinkedin />
        <span>Share on LinkedIn</span>
      </a>
      {/* Added the new Facebook share button */}
      <a
        href={facebookShareUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 text-sm text-white bg-[#1877F2] hover:bg-[#166fe5] font-semibold py-2 px-4 rounded-lg transition-colors"
      >
        <FaFacebook />
        <span>Share on Facebook</span>
      </a>
      <a
        href={redditShareUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 text-sm text-white bg-[#FF4500] hover:bg-[#cc3700] font-semibold py-2 px-4 rounded-lg transition-colors"
      >
        <FaReddit />
        <span>Share on Reddit</span>
      </a>
      <a
        href={whatsappShareUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 text-sm text-white bg-[#25D366] hover:bg-[#128C7E] font-semibold py-2 px-4 rounded-lg transition-colors"
      >
        <FaWhatsapp />
        <span>Share on WhatsApp</span>
      </a>
    </div>
  );
};

export default SocialShareButtons;
