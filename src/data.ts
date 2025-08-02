// src/data.ts
import { IconType } from "react-icons";
import { FaGithub, FaLinkedin, FaInstagram, FaYoutube, FaEnvelope, FaPhone, FaTwitch, FaMedium } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";

// Define a type for social links for better type-checking
interface SocialLink {
  name: string;
  href: string;
  icon: IconType;
}

// Define a type for projects
interface Project {
  title: string;
  stack: string;
  description: string;
  liveUrl: string;
  repoUrl: string;
}

// Define a type for experience
interface Experience {
    role: string;
    company: string;
    duration: string;
    project: string;
    description: string;
}

// Define a type for education
interface Education {
    degree: string;
    institution: string;
    duration: string;
}

export const socialLinks: SocialLink[] = [
  { name: "GitHub", href: "https://github.com/nikhilchauhanx", icon: FaGithub },
  { name: "LinkedIn", href: "https://linkedin.com/in/nickonindia", icon: FaLinkedin },
  { name: "X", href: "https://x.com/nickonindia", icon: FaXTwitter },
  { name: "LeetCode", href: "https://leetcode.com/u/nickonindia/", icon: SiLeetcode },
  { name: "Instagram", href: "https://instagram.com/nickonindia", icon: FaInstagram },
  { name: "YouTube", href: "https://www.youtube.com/@nickonindia", icon: FaYoutube },
  { name: "Email", href: "mailto:nikhilchauhan0618@gmail.com", icon: FaEnvelope },
  { name: "Phone", href: "tel:+917290813007", icon: FaPhone },
  { name: "Twitch", href: "https://www.twitch.tv/nickonindia", icon: FaTwitch },
  { name: "Medium", href: "https://medium.com/@nickonindia", icon: FaMedium },
];

export const professionalSummary: string = "Full Stack Developer skilled in React.js, Node.js, and MongoDB with a solid foundation in JavaScript and web architecture. Transitioned from test automation to development. Delivered 5+ real-world projects and solved 100+ DSA problems. Passionate about performance, clean code, and scalable systems.";

export const technicalSkills: Record<string, string[]> = {
  "Frontend Development": [
    "JavaScript (ESNext), TypeScript, HTML5, CSS3",
    "React.js, Next.js (14+)",
    "State Management (Redux Toolkit, Zustand)",
    "Styling (Tailwind CSS, Styled-Components)",
  ],
  "Backend Development": [
    "Node.js (LTS), Express.js",
    "MongoDB (with Mongoose), PostgreSQL, MySQL",
    "RESTful APIs, GraphQL (Basic)",
    "ORMs (Mongoose, Prisma)",
  ],
  "Developer Tools & Platforms": [
    "Git, GitHub (Gitflow Workflow)",
    "Docker, Docker Compose, Containerization",
    "CI/CD with GitHub Actions",
    "Vercel, Netlify, Railway, Postman",
  ],
  "Core Concepts & Paradigms": [
    "MVC Architecture, Microservices (Familiarity)",
    "Authentication (JWT, OAuth 2.0)",
    "Web Security Fundamentals (CORS, Hashing)",
    "OOP & Functional Programming Concepts",
  ],
};

export const projects: Project[] = [
  {
    title: "Xenzy Thrift Store",
    stack: "Next.js, MongoDB, Tailwind CSS",
    description: "An e-commerce platform with a dedicated admin panel for product management, secure user login, and cloud-based image uploads.",
    liveUrl: "https://xenzy-marketplace-no9dxqhmr-nickonindia1.vercel.app/",
    repoUrl: "#", // Add repo link here
  },
  {
    title: "Yoga Teacher Platform",
    stack: "MERN Stack (MongoDB, Express, React, Node.js)",
    description: "A full-featured booking system connecting students with yoga instructors, featuring user authentication, role-based dashboards, and a verification system for teachers.",
    liveUrl: "#", // Add live link here
    repoUrl: "#", // Add repo link here
  },
  {
    title: "Real-Time Chat App",
    stack: "React, Node.js, Socket.io, JWT",
    description: "A dynamic chat application supporting group and private messaging, built with WebSockets for real-time communication and JWT for secure user sessions.",
    liveUrl: "#", // Add live link here
    repoUrl: "#", // Add repo link here
  },
];

export const experience: Experience[] = [
  {
    role: "Automation Engineer",
    company: "Cognizant",
    duration: "Dec 2021 – May 2024",
    project: "Project: HUMANA – US Healthcare Client",
    description: "Worked within an Agile framework to design, build, and maintain automated testing systems using C# and .NET, resulting in a significant reduction in manual testing hours and improved release quality."
  }
];

export const education: Education = {
  degree: "B.Tech – Information Technology",
  institution: "Amity University, Noida",
  duration: "2017 - 2021"
};

export const certifications: string[] = [
  "The Complete Full Stack Web Developer Bootcamp (Udemy)",
  "JavaScript: The Advanced Concepts (Zero to Mastery)",
  "MongoDB for Developers: A Complete Guide (MongoDB University)",
];

export const achievements: string[] = [
  "Effective communicator and collaborative team player.",
  "Consistently contributed to open source with 150+ GitHub commits in 3 months.",
  "Solved 100+ algorithmic problems on LeetCode, enhancing problem-solving skills.",
];
