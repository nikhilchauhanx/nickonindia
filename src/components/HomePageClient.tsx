// src/components/HomePageClient.tsx
'use client';

import React from "react";
import dynamic from 'next/dynamic';
import Image from "next/image";
import Section from "./Section";
import ProjectCard from "./ProjectCard";
import AnimatedSection from "./AnimatedSection";
import SkillsGrid from "./SkillsGrid";
import TestimonialCard from "./TestimonialCard";
import {
  socialLinks,
  professionalSummary,
  projects,
  experience,
  education,
  certifications,
  achievements,
  testimonials
} from "../data";

const DownloadResumeButton = dynamic(() => import('./resume/DownloadResumeButton'), {
  ssr: false,
  loading: () => <p className="inline-block bg-indigo-600 text-white font-bold py-2 px-6 rounded-lg shadow-lg">Loading...</p>
});

// This component now accepts the Creator Spotlight card
export default function HomePageClient({ 
  gitHubActivityCard,
  creatorSpotlight 
}: { 
  gitHubActivityCard: React.ReactNode,
  creatorSpotlight: React.ReactNode 
}) {
  return (
    <section className="max-w-4xl mx-auto pt-16">
      
      <section className="mb-10">
        <Image 
          src="/hero-banner.jpg"
          alt="Nickon India banner"
          width={1024}
          height={576}
          quality={85}
          className="rounded-lg shadow-xl"
          priority
        />
      </section>

      <section className="mb-10">
        <h1 className="text-4xl md:text-5xl font-bold mb-2">Nikhil Chauhan <span className="text-indigo-600">aka Nickon India</span></h1>
        <p className="text-lg md:text-xl mb-6">Full Stack Developer · Digital Creator · YouTuber · Streamer</p>
        <div className="flex items-center gap-4 mb-6">
          <a
            href="/Nikhil-Chauhan-Resume.pdf"
            download="Nikhil-Chauhan-Resume.pdf"
            className="inline-block bg-gray-700 text-white font-bold py-2 px-6 rounded-lg hover:bg-gray-800 transition-colors duration-300 shadow-lg"
          >
            Download PDF
          </a>
          <DownloadResumeButton />
        </div>
        <p className="mb-6 text-sm uppercase tracking-wide text-gray-500">GLOBAL CREATOR FROM INDIA · BASED IN NOIDA, UP</p>
        <div className="flex flex-wrap gap-5 mb-6 text-indigo-600 text-3xl">
          {socialLinks.map((link) => {
            const Icon = link.icon;
            return (
              <a key={link.name} href={link.href} target="_blank" rel="noopener noreferrer" title={link.name} className="hover:text-indigo-800 transition-colors">
                <Icon />
              </a>
            );
          })}
        </div>
        <blockquote className="italic text-xl text-indigo-800 border-l-4 border-indigo-500 pl-4 dark:text-indigo-400 dark:border-indigo-600">
          &quot;Not Just Building Apps — Building Audiences.&quot;
        </blockquote>
      </section>

      {/* Add the new Creator Spotlight section here */}
      <AnimatedSection>
        <div className="mb-10">
          {creatorSpotlight}
        </div>
      </AnimatedSection>

      <AnimatedSection>
        <Section title="Professional Summary">
          <p>{professionalSummary}</p>
        </Section>
      </AnimatedSection>
      
      <AnimatedSection>
        <div className="mb-10">
          {gitHubActivityCard}
        </div>
      </AnimatedSection>

      {/* ... (rest of your sections) */}
      <AnimatedSection>
        <Section title="Technical Skills">
          <SkillsGrid />
        </Section>
      </AnimatedSection>

      <AnimatedSection>
        <Section title="Projects">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </Section>
      </AnimatedSection>

      <AnimatedSection>
        <Section title="Testimonials">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} />
          ))}
        </Section>
      </AnimatedSection>

      <AnimatedSection>
        <Section title="Experience">
          {experience.map((exp, index) => (
            <div key={index} className="mb-4">
              <h3 className="font-bold text-lg">{exp.role}</h3>
              <p className="font-semibold">{exp.company} ({exp.duration})</p>
              <p className="text-sm text-gray-600 mb-1">{exp.project}</p>
              <p>{exp.description}</p>
            </div>
          ))}
        </Section>
      </AnimatedSection>

      <AnimatedSection>
        <Section title="Education">
          <p><strong>{education.degree}</strong></p>
          <p>{education.institution}</p>
        </Section>
      </AnimatedSection>

      <AnimatedSection>
        <Section title="Certifications">
          <ul className="list-disc list-inside">
            {certifications.map(cert => <li key={cert}>{cert}</li>)}
          </ul>
        </Section>
      </AnimatedSection>

      <AnimatedSection>
        <Section title="Soft Skills & Achievements">
          <ul className="list-disc list-inside">
            {achievements.map(ach => <li key={ach}>{ach}</li>)}
          </ul>
        </Section>
      </AnimatedSection>
    </section>
  );
}
