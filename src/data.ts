// src/data.ts
import { IconType } from "react-icons";
import { 
  FaGithub, FaLinkedin, FaInstagram, FaYoutube, FaEnvelope, FaPhone, FaTwitch, FaMedium,
  FaReact, FaNodeJs, FaGitAlt, FaDocker, FaHtml5, FaCss3Alt 
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { 
  SiLeetcode, SiJavascript, SiTypescript, SiNextdotjs, SiRedux, 
  SiTailwindcss, SiStyledcomponents, SiExpress, SiMongodb, SiPostgresql, 
  SiMysql, SiGraphql, SiPrisma, SiVercel, SiNetlify, SiPostman, SiSupabase 
} from "react-icons/si";

// --- TYPE DEFINITIONS ---

interface SocialLink {
  name: string;
  href: string;
  icon: IconType;
}

interface CaseStudy {
  objective: string;
  techChoices: string[];
  challenges: string;
  learnings: string;
}

interface Project {
  title: string;
  slug: string;
  stack: string;
  description: string;
  liveUrl: string;
  repoUrl: string;
  caseStudy: CaseStudy | null;
}

interface Experience {
    role: string;
    company: string;
    duration: string;
    project: string;
    description: string;
}

interface Education {
    degree: string;
    institution: string;
}

interface Skill {
  name: string;
  icon: IconType;
}

interface Testimonial {
  quote: string;
  author: string;
  role: string;
}

// --- DATA EXPORTS ---

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

export const professionalSummary: string = "I'm a Full-Stack Developer who thrives on building robust, user-centric applications from the ground up. My journey began in test automation at Cognizant, where I developed a deep appreciation for quality and reliability—a perspective I now bring to every line of code I write. Driven by a passion for creating, I taught myself the MERN stack and transitioned into a full-stack role, delivering 5+ projects that showcase my skills in both frontend and backend development. As a digital creator under the 'Nickon India' brand, I don't just build apps; I build audiences, which gives me a unique understanding of user engagement and communication.";

export const technicalSkills: Record<string, Skill[]> = {
  "Frontend Development": [
    { name: "JavaScript (ESNext)", icon: SiJavascript },
    { name: "TypeScript", icon: SiTypescript },
    { name: "React.js", icon: FaReact },
    { name: "Next.js (14+)", icon: SiNextdotjs },
    { name: "Redux Toolkit", icon: SiRedux },
    { name: "Tailwind CSS", icon: SiTailwindcss },
    { name: "Styled-Components", icon: SiStyledcomponents },
    { name: "HTML5", icon: FaHtml5 },
    { name: "CSS3", icon: FaCss3Alt },
  ],
  "Backend Development": [
    { name: "Node.js", icon: FaNodeJs },
    { name: "Express.js", icon: SiExpress },
    { name: "MongoDB", icon: SiMongodb },
    { name: "PostgreSQL", icon: SiPostgresql },
    { name: "MySQL", icon: SiMysql },
    { name: "Supabase", icon: SiSupabase },
    { name: "RESTful APIs", icon: SiGraphql },
    { name: "Prisma", icon: SiPrisma },
  ],
  "Developer Tools & Platforms": [
    { name: "Git", icon: FaGitAlt },
    { name: "GitHub", icon: FaGithub },
    { name: "Docker", icon: FaDocker },
    { name: "Vercel", icon: SiVercel },
    { name: "Netlify", icon: SiNetlify },
    { name: "Postman", icon: SiPostman },
  ],
};

export const projects: Project[] = [
  {
    title: "Xenzy Thrift Store",
    slug: "xenzy-thrift-store",
    stack: "Next.js, MongoDB, Tailwind CSS, Cloudinary",
    description: "An e-commerce platform with a dedicated admin panel for product management, secure user login, and cloud-based image uploads.",
    liveUrl: "https://xenzy-marketplace-no9dxqhmr-nickonindia1.vercel.app/",
    repoUrl: "#",
    caseStudy: {
      objective: "To build a full-featured, performant e-commerce marketplace for thrifted clothing, focusing on a seamless user experience for both customers and administrators.",
      techChoices: ["Next.js was chosen for its server-side rendering capabilities, ensuring fast page loads and excellent SEO.", "MongoDB provided a flexible, scalable database solution for handling diverse product data.", "Cloudinary was integrated for robust, cloud-based image management and optimization.", "Tailwind CSS allowed for rapid development of a custom, responsive user interface."],
      challenges: "The primary challenge was designing a secure and efficient admin dashboard that allowed for easy product creation, inventory updates, and order management. Implementing secure image upload functionality directly to a cloud provider without bogging down the server was another key hurdle.",
      learnings: "This project provided deep insights into full-stack development with Next.js, particularly in handling server actions for form submissions and data mutations. I learned best practices for state management in a server-rendered application and gained valuable experience in integrating third-party APIs like Cloudinary for critical application features."
    }
  },
  {
    title: "Yoga Teacher Platform",
    slug: "yoga-teacher-platform",
    stack: "MERN Stack (MongoDB, Express, React, Node.js)",
    description: "A full-featured booking system connecting students with yoga instructors, featuring user authentication, role-based dashboards, and a verification system for teachers.",
    liveUrl: "#",
    repoUrl: "#",
    caseStudy: {
        objective: "To create a trusted, two-sided marketplace that connects students with qualified yoga instructors. The platform required distinct user roles, a secure booking system, and a verification process to ensure teacher quality.",
        techChoices: ["The MERN stack was ideal for this project, with React providing a dynamic and interactive frontend for both student and teacher dashboards.", "Node.js and Express were used to build a robust RESTful API to handle all backend logic, including user authentication and bookings.", "MongoDB's flexible schema was perfect for managing complex user profiles with different fields for students and teachers.", "JWT (JSON Web Tokens) were implemented for secure, stateless authentication, protecting user routes and API endpoints."],
        challenges: "The most complex part was implementing the role-based access control (RBAC). The system needed to serve different UI and API functionalities based on whether the user was a student, a teacher, or an administrator. Designing the database schema to handle relationships between users, classes, and bookings was also a significant challenge.",
        learnings: "This project was a deep dive into backend architecture. I mastered creating secure, authenticated APIs and managing complex state on the frontend with tools like Redux Toolkit. It reinforced the importance of careful data modeling and designing systems that can scale to accommodate different user types."
    }
  },
  {
    title: "Real-Time Chat App",
    slug: "real-time-chat-app",
    stack: "React, Node.js, Socket.io, JWT",
    description: "A dynamic chat application supporting group and private messaging, built with WebSockets for real-time communication and JWT for secure user sessions.",
    liveUrl: "#",
    repoUrl: "#",
    caseStudy: {
        objective: "To build a high-performance, real-time chat application that allows users to communicate instantly in both private and group settings, with features like user presence indicators and message history.",
        techChoices: ["Socket.io was the core technology, chosen for its reliability and ease of use in establishing persistent, bidirectional WebSocket connections between the client and server.", "React was used to build a responsive user interface that could efficiently update in real-time as new messages and notifications arrived.", "Node.js provided the perfect non-blocking, event-driven backend environment to handle thousands of concurrent socket connections.", "A simple MongoDB schema was used to persist chat history, allowing users to view past conversations upon logging in."],
        challenges: "Managing state on the client-side in a real-time environment was the biggest challenge. Ensuring the UI updated instantly for all users in a group chat without causing performance issues required careful state management. Another hurdle was efficiently handling socket connection and disconnection events to accurately track which users were online.",
        learnings: "This project was an excellent lesson in event-driven architecture. I gained a strong understanding of the WebSocket protocol and the intricacies of a real-time communication. It taught me how to think about application state differently, focusing on broadcasting and listening for events rather than traditional request-response cycles."
    }
  },
];

export const experience: Experience[] = [
  {
    role: "Automation Engineer",
    company: "Cognizant",
    duration: "Dec 2021 – May 2024",
    project: "Project: HUMANA – US Healthcare Client",
    description: "Worked within an Agile framework to design, build, and maintain automated testing systems using C# and .NET. This role was foundational, teaching me the principles of scalable architecture and quality assurance that I now apply to my full-stack development work."
  }
];

export const education: Education = {
  degree: "B.Tech – Information Technology",
  institution: "Amity University, Noida",
};

export const certifications: string[] = [
  "The Complete Full Stack Web Developer Bootcamp (Udemy)",
  "JavaScript: The Advanced Concepts (Zero to Mastery)",
  "MongoDB for Developers: A Complete Guide (MongoDB University)",
];

export const achievements: string[] = [
  "Grew a YouTube channel and Instagram presence (Nickon India) to over 1,000+ followers, developing strong skills in communication and audience engagement.",
  "Consistently contributed to open source with 150+ GitHub commits in 3 months.",
  "Solved 100+ algorithmic problems on LeetCode, enhancing problem-solving skills.",
  "Effective communicator and collaborative team player, proven through multiple team projects."
];

export const testimonials: Testimonial[] = [
  {
    quote: "Nikhil is one of the most dedicated and sharp individuals I've had the pleasure of managing. His transition from automation to full-stack development was seamless, driven by a genuine passion for building and problem-solving. He consistently delivered high-quality work and was a key asset to our team.",
    author: "Eshwarmurthi parthiban",
    role: "Former Manager, Cognizant"
  },
];
