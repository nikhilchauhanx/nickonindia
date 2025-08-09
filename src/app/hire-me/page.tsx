// src/app/hire-me/page.tsx
import type { Metadata } from 'next';
import Link from 'next/link';
import { FaBuilding, FaUserTie } from 'react-icons/fa';
import ContactForm from '@/components/ContactForm';
import AnimatedSection from '@/components/AnimatedSection';

export const metadata: Metadata = {
  title: 'Hire Me | Nikhil Chauhan',
  description: 'Hire Nikhil Chauhan for full-time development roles or freelance projects. Specializing in Next.js, React, and Node.js solutions.',
};

export default function HireMePage() {
  return (
    <div className="min-h-screen bg-white text-gray-800 p-4 md:p-8 font-sans dark:bg-gray-900 dark:text-gray-200">
      <div className="max-w-4xl mx-auto pt-16">
        
        <AnimatedSection>
          <header className="mb-12 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-3 text-gray-900 dark:text-gray-100">Let's Build Something Great Together</h1>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Whether you're looking for a dedicated developer for your team or a reliable partner for your next project, you're in the right place.
            </p>
          </header>
        </AnimatedSection>

        {/* Two Paths Section */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <AnimatedSection>
            <div className="bg-gray-50 p-8 rounded-lg border border-gray-200 shadow-lg h-full dark:bg-gray-800 dark:border-gray-700">
              <FaUserTie className="text-4xl text-indigo-600 dark:text-indigo-400 mb-4" />
              <h2 className="text-2xl font-bold mb-3 dark:text-gray-100">For Recruiters</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                I'm seeking a full-time role where I can contribute to building high-quality web applications, leverage my skills in the MERN stack, and continue to grow as a developer. My background in test automation gives me a unique perspective on creating robust and reliable software.
              </p>
              <a
                href="/Nikhil-Chauhan-Resume.pdf"
                download="Nikhil-Chauhan-Resume.pdf"
                className="inline-block bg-indigo-600 text-white font-bold py-2 px-5 rounded-lg hover:bg-indigo-700 transition-colors duration-300"
              >
                Download Resume
              </a>
            </div>
          </AnimatedSection>
          <AnimatedSection>
            <div className="bg-gray-50 p-8 rounded-lg border border-gray-200 shadow-lg h-full dark:bg-gray-800 dark:border-gray-700">
              <FaBuilding className="text-4xl text-indigo-600 dark:text-indigo-400 mb-4" />
              <h2 className="text-2xl font-bold mb-3 dark:text-gray-100">For Freelance Clients</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                I partner with businesses to bring their ideas to life. From high-performance web apps to scalable backends, I provide end-to-end development services. Let's discuss how I can help you achieve your business goals.
              </p>
              <Link 
                href="/services" 
                className="inline-block text-indigo-600 font-bold py-2 px-5 rounded-lg border-2 border-indigo-200 hover:bg-indigo-50 dark:text-indigo-400 dark:border-indigo-500/50 dark:hover:bg-indigo-500/10 transition-colors"
              >
                View My Services
              </Link>
            </div>
          </AnimatedSection>
        </div>

        {/* Contact Form Section */}
        <AnimatedSection>
          <div className="bg-gray-900 text-white p-8 rounded-lg text-center shadow-xl dark:bg-gray-800">
            <h2 className="text-3xl font-bold mb-3">Send a Project Inquiry</h2>
            <p className="max-w-2xl mx-auto mb-6 text-gray-300">
              Have a question or want to work together? Fill out the form below.
            </p>
            <ContactForm />
          </div>
        </AnimatedSection>

      </div>
    </div>
  );
}
