// src/app/uses/page.tsx
import type { Metadata } from 'next';
import AnimatedSection from '@/components/AnimatedSection';

export const metadata: Metadata = {
  title: 'Uses | Nikhil Chauhan',
  description: 'A list of the hardware, software, and tools I use every day as a developer and creator.',
};

const usesData = {
    "Hardware & Desk Setup": [
        { name: "Laptop", description: "Dell XPS 15 - A reliable workhorse for development and video editing." },
        { name: "Monitor", description: "LG 27\" 4K UHD Monitor - For crisp text and plenty of screen real estate." },
        { name: "Keyboard", description: "Keychron K2 Mechanical Keyboard - A joy to type on." },
        { name: "Mouse", description: "Logitech MX Master 3S - The best ergonomic mouse for productivity." },
        { name: "Microphone", description: "Blue Yeti - For clear audio in my YouTube videos and meetings." },
    ],
    "Development Tools": [
        { name: "Code Editor", description: "VS Code - The undisputed champion. Fast, flexible, and powerful." },
        { name: "Theme", description: "GitHub Dark Default - Clean, easy on the eyes, and familiar." },
        { name: "Terminal", description: "Windows Terminal with PowerShell & Oh My Posh - A modern and customizable terminal experience." },
        { name: "Browser", description: "Google Chrome - For development, debugging, and daily use." },
    ],
    "Software & Services": [
        { name: "Hosting", description: "Vercel - The best platform for hosting Next.js applications. Fast, reliable, and a joy to use." },
        { name: "Design", description: "Figma - For all my UI/UX design and prototyping needs." },
        { name: "API Testing", description: "Postman - The essential tool for testing and interacting with APIs." },
        { name: "Forms", description: "Formspree - For a simple and reliable way to handle my contact form." },
        { name: "Notes", description: "Notion - For project management, note-taking, and organizing my life." },
    ],
};

export default function UsesPage() {
  return (
    <div className="min-h-screen bg-white text-gray-800 p-4 md:p-8 font-sans dark:bg-gray-900 dark:text-gray-200">
      <div className="max-w-4xl mx-auto pt-16">
        
        <AnimatedSection>
          <header className="mb-12 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-3 text-gray-900 dark:text-gray-100">What I Use</h1>
            <p className="text-lg text-gray-600 dark:text-gray-400">A curated list of the tools and tech I use daily to build, create, and code.</p>
          </header>
        </AnimatedSection>

        {Object.entries(usesData).map(([category, items]) => (
          <AnimatedSection key={category}>
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-800 border-b-2 border-indigo-200 pb-2 mb-6 dark:text-gray-100 dark:border-gray-700">
                {category}
              </h2>
              <ul className="space-y-4">
                {items.map((item) => (
                  <li key={item.name}>
                    <h3 className="font-semibold text-lg text-indigo-700 dark:text-indigo-400">{item.name}</h3>
                    <p className="text-gray-600 dark:text-gray-400">{item.description}</p>
                  </li>
                ))}
              </ul>
            </section>
          </AnimatedSection>
        ))}

      </div>
    </div>
  );
}
