// src/lib/bio-data.ts
import { FaYoutube, FaLinkedin, FaGithub, FaInstagram, FaTwitch, FaEnvelope, FaMedium } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { SiLeetcode, SiThreads } from 'react-icons/si';
import { IconType } from 'react-icons';
import { FaGlobe } from 'react-icons/fa';

export interface BioLink {
  type: 'link' | 'video' | 'music';
  title: string;
  url: string;
  icon?: IconType;
  thumbnail?: string;
  startDate?: string; // Format: YYYY-MM-DD
  endDate?: string;   // Format: YYYY-MM-DD
}

export const bioLinks: BioLink[] = [
  // --- Your Main Links ---
  {
    type: 'link',
    title: 'My Full Portfolio Website',
    url: 'https://www.nickonindia.com/',
    icon: FaGlobe,
    thumbnail: '/hero-banner.jpg',
  },
  {
    type: 'link',
    title: 'YouTube Channel',
    url: 'https://www.youtube.com/@nickonindia',
    icon: FaYoutube,
  },
  {
    type: 'link',
    title: 'LinkedIn Profile',
    url: 'https://linkedin.com/in/nickonindia',
    icon: FaLinkedin,
  },
  {
    type: 'link',
    title: 'GitHub Profile',
    url: 'https://github.com/nikhilchauhanx',
    icon: FaGithub,
  },
  {
    type: 'link',
    title: 'Follow me on X (Twitter)',
    url: 'https://x.com/nickonindia',
    icon: FaXTwitter,
  },
  {
    type: 'link',
    title: 'Follow me on Instagram',
    url: 'https://instagram.com/nickonindia',
    icon: FaInstagram,
  },
  {
    type: 'link',
    title: 'Follow me on Threads',
    url: 'https://www.threads.net/@nickonindia',
    icon: SiThreads,
  },
    {
    type: 'link',
    title: 'LeetCode Profile',
    url: 'https://leetcode.com/u/nickonindia/',
    icon: SiLeetcode,
  },
  {
    type: 'link',
    title: 'Twitch Channel',
    url: 'https://www.twitch.tv/nickonindia',
    icon: FaTwitch,
  },
  {
    type: 'link',
    title: 'Read my articles on Medium',
    url: 'https://medium.com/@nickonindia',
    icon: FaMedium,
  },
    {
    type: 'link',
    title: 'Email Me',
    url: 'mailto:nikhilchauhan0618@gmail.com',
    icon: FaEnvelope,
  },

  // --- Example of an Embedded Video ---
  {
    type: 'video',
    title: 'Featured Video: My Developer Journey',
    url: 'https://www.youtube.com/embed/P8_e-iAGFfc', // Use the embed URL
  },

  // --- Example of a Scheduled Link (will only appear between these dates) ---
  {
    type: 'link',
    title: 'LIMITED TIME: Join My Live Stream!',
    url: 'https://www.twitch.tv/nickonindia',
    icon: FaTwitch,
    startDate: '2025-08-10',
    endDate: '2025-08-20',
  },
];
