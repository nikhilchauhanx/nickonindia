// src/components/HomePageClient.tsx
'use client';

import React from "react";
import Image from "next/image"; // 1. Import the Image component
import Section from "./Section";
import ProjectCard from "./ProjectCard";
import AnimatedSection from "./AnimatedSection";
import SkillsGrid from "./SkillsGrid";
import TestimonialCard from "./TestimonialCard";
import DownloadResumeButton from "./resume/DownloadResumeButton";
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

export default function HomePageClient({ gitHubActivityCard }: { gitHubActivityCard: React.ReactNode }) {
  return (
    <section className="max-w-4xl mx-auto pt-16">
      
      {/* 2. Added the new banner image section at the top */}
      <section className="mb-10">
        <Image 
          src="/hero-banner.jpg"
          alt="Nickon India banner with code and streaming icons"
          width={1024}
          height={576}
          quality={85}
          className="rounded-lg shadow-xl"
          priority // Add priority to load this important image faster
        />
      </section>

      {/* Hero Section (Your existing content) */}
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
        <blockquote className="italic text-xl text-indigo-800 border-l-4 border-indigo-500 pl-4">
          &quot;Not Just Building Apps — Building Audiences.&quot;
        </blockquote>
      </section>

      {/* The rest of your page content remains the same */}
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
          <p><strong>{education.degree}</strong> ({education.duration})</p>
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
