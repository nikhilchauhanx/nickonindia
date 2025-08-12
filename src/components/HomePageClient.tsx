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
import Link from "next/link";
import LazyLoadWrapper from "./LazyLoadWrapper";
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

export default function HomePageClient({ 
  gitHubActivityCard,
  creatorSpotlight,
  introductionVideo
}: { 
  gitHubActivityCard: React.ReactNode,
  creatorSpotlight: React.ReactNode,
  introductionVideo: React.ReactNode 
}) {
  // We'll just feature the first two projects on the homepage
  const featuredProjects = projects.slice(0, 2);

  return (
    <section className="max-w-4xl mx-auto pt-16">
      
      {/* These sections are "above the fold" and will load immediately */}
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

      {/* --- LAZY LOADED SECTIONS START HERE --- */}

      <LazyLoadWrapper minHeight="400px">
        <AnimatedSection>
          <div className="mb-10">
            {creatorSpotlight}
          </div>
        </AnimatedSection>
      </LazyLoadWrapper>

      <LazyLoadWrapper>
        <AnimatedSection>
          <Section title="Professional Summary">
            <p>{professionalSummary}</p>
          </Section>
        </AnimatedSection>
      </LazyLoadWrapper>

      <LazyLoadWrapper>
        <AnimatedSection>
          {introductionVideo}
        </AnimatedSection>
      </LazyLoadWrapper>
      
      <LazyLoadWrapper>
        <AnimatedSection>
          <div className="mb-10">
            {gitHubActivityCard}
          </div>
        </AnimatedSection>
      </LazyLoadWrapper>

      <LazyLoadWrapper>
        <AnimatedSection>
          <Section title="Featured Projects">
            <div className="space-y-8">
              {featuredProjects.map((project, index) => (
                <ProjectCard key={index} project={project} />
              ))}
            </div>
            <div className="text-center mt-8">
              <Link href="/projects" className="inline-block text-indigo-600 font-bold py-2 px-6 rounded-lg border-2 border-indigo-200 hover:bg-indigo-50 dark:text-indigo-400 dark:border-indigo-500/50 dark:hover:bg-indigo-500/10 transition-colors">
                View All Projects
              </Link>
            </div>
          </Section>
        </AnimatedSection>
      </LazyLoadWrapper>

      <LazyLoadWrapper>
        <AnimatedSection>
          <Section title="Technical Skills">
            <SkillsGrid />
          </Section>
        </AnimatedSection>
      </LazyLoadWrapper>

      <LazyLoadWrapper>
        <AnimatedSection>
          <Section title="Testimonials">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} testimonial={testimonial} />
            ))}
          </Section>
        </AnimatedSection>
      </LazyLoadWrapper>
      
      <LazyLoadWrapper>
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
      </LazyLoadWrapper>

      <LazyLoadWrapper>
        <AnimatedSection>
          <Section title="Education">
            <p><strong>{education.degree}</strong></p>
            <p>{education.institution}</p>
          </Section>
        </AnimatedSection>
      </LazyLoadWrapper>

      <LazyLoadWrapper>
        <AnimatedSection>
          <Section title="Certifications">
            <ul className="list-disc list-inside">
              {certifications.map(cert => <li key={cert}>{cert}</li>)}
            </ul>
          </Section>
        </AnimatedSection>
      </LazyLoadWrapper>

      <LazyLoadWrapper>
        <AnimatedSection>
          <Section title="Soft Skills & Achievements">
            <ul className="list-disc list-inside">
              {achievements.map(ach => <li key={ach}>{ach}</li>)}
            </ul>
          </Section>
        </AnimatedSection>
      </LazyLoadWrapper>

    </section>
  );
}
