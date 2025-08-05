// src/app/page.tsx
'use client';

import React from "react";
import Section from "../components/Section";
import ProjectCard from "../components/ProjectCard";
import AnimatedSection from "../components/AnimatedSection"; // 1. Import the new component
import {
  socialLinks,
  professionalSummary,
  technicalSkills,
  projects,
  experience,
  education,
  certifications,
  achievements
} from "../data";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-800 p-4 md:p-8 font-sans">
      <section className="max-w-4xl mx-auto">
        
        {/* Header (We won't animate this so it appears instantly) */}
        <header className="mb-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-2">Nikhil Chauhan <span className="text-indigo-600">aka Nickon India</span></h1>
          <p className="text-lg md:text-xl mb-6">Full Stack Developer · Digital Creator · YouTuber · Streamer</p>
          <a
            href="/Nikhil-Chauhan-Resume.pdf"
            download="Nikhil-Chauhan-Resume.pdf"
            className="inline-block bg-indigo-600 text-white font-bold py-2 px-6 rounded-lg hover:bg-indigo-700 transition-colors duration-300 mb-6 shadow-lg"
          >
            Download Resume
          </a>
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
        </header>

        {/* 2. Wrap each section with the AnimatedSection component */}
        <AnimatedSection>
          <Section title="Professional Summary">
            <p>{professionalSummary}</p>
          </Section>
        </AnimatedSection>

        <AnimatedSection>
          <Section title="Technical Skills">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {Object.entries(technicalSkills).map(([category, skills]) => (
                <div key={category}>
                  <h3 className="font-semibold text-md mb-1">{category}</h3>
                  <ul className="list-disc list-inside">
                    {skills.map(skill => <li key={skill}>{skill}</li>)}
                  </ul>
                </div>
              ))}
            </div>
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

      <footer className="text-center py-6 mt-12 border-t border-gray-200">
        <p className="text-sm text-gray-500">
          © 2025 Nikhil Chauhan (nickonindia). All Rights Reserved.
        </p>
      </footer>
    </main>
  );
}
