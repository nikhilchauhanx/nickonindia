// src/app/services/page.tsx
import type { Metadata } from 'next';
import { FaReact, FaServer, FaPenNib } from 'react-icons/fa';

export const metadata: Metadata = {
  title: 'Services | Nikhil Chauhan',
  description: 'Freelance services offered by Nikhil Chauhan, including Next.js & React Development, API & Backend Development, and Technical Content Creation.',
};

const services = [
  {
    icon: FaReact,
    title: 'Next.js & React Development',
    description: 'I build high-performance, server-rendered web applications and dynamic user interfaces using the latest features of React and Next.js. From e-commerce sites to complex dashboards, I deliver fast, scalable, and SEO-friendly solutions.',
  },
  {
    icon: FaServer,
    title: 'API & Backend Development',
    description: 'I design and build robust, secure, and scalable backend systems using Node.js, Express, and MongoDB. Whether you need a RESTful API for your mobile app or a complete backend for your web platform, I can create the foundation you need.',
  },
  {
    icon: FaPenNib,
    title: 'Technical Content Creation',
    description: 'Leveraging my skills as a YouTuber and creator, I produce high-quality technical content, including blog posts, tutorials, and video guides. I can help your company engage with the developer community and explain complex topics in a clear and accessible way.',
  },
];

const processSteps = [
    { name: 'Discovery & Planning', description: "We'll start with a call to understand your goals, target audience, and project scope to ensure we're aligned from day one." },
    { name: 'Design & Prototyping', description: "I'll create a clear design and interactive prototype so you can see and feel what we're building before any major code is written." },
    { name: 'Development & Feedback', description: "I'll build your application with regular check-ins and updates, incorporating your feedback at every stage of the process." },
    { name: 'Deployment & Handover', description: "I will handle the full deployment to a secure, scalable platform like Vercel and provide you with all the necessary documentation and training." },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-white text-gray-800 p-4 md:p-8 font-sans dark:bg-gray-900 dark:text-gray-200">
      <div className="max-w-4xl mx-auto pt-16">
        
        {/* Header Section */}
        <header className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-3 text-gray-900 dark:text-gray-100">My Services</h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">How I can help you bring your ideas to life.</p>
        </header>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div key={index} className="bg-gray-50 p-6 rounded-lg border border-gray-200 shadow-lg dark:bg-gray-800 dark:border-gray-700">
                <Icon className="text-4xl text-indigo-600 dark:text-indigo-400 mb-4" />
                <h2 className="text-xl font-bold mb-2 dark:text-gray-100">{service.title}</h2>
                <p className="text-gray-700 dark:text-gray-300">{service.description}</p>
              </div>
            );
          })}
        </div>

        {/* Working Process Section */}
        <div>
          <h2 className="text-3xl font-bold text-center mb-10 dark:text-gray-100">My Working Process</h2>
          <div className="relative">
            {/* The vertical line */}
            <div className="absolute left-1/2 -translate-x-1/2 h-full w-0.5 bg-indigo-200 dark:bg-gray-700" aria-hidden="true"></div>
            
            <div className="space-y-12">
              {processSteps.map((step, index) => (
                <div key={index} className="relative flex items-center">
                  <div className="w-1/2 pr-8 text-right">
                    <h3 className="font-bold text-xl text-indigo-700 dark:text-indigo-400">{step.name}</h3>
                    <p className="text-gray-600 dark:text-gray-400">{step.description}</p>
                  </div>
                  <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 bg-indigo-600 rounded-full border-4 border-white dark:bg-indigo-400 dark:border-gray-900"></div>
                  <div className="w-1/2 pl-8"></div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </main>
  );
}
