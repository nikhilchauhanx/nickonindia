// src/lib/portfolio-content.ts
import { 
  professionalSummary, 
  technicalSkills, 
  projects, 
  experience, 
  education, 
  certifications, 
  achievements, 
  testimonials 
} from '../data';

// This function compiles all your portfolio data into a single string for the AI
export function getPortfolioContext() {
  const skillsText = Object.entries(technicalSkills)
    .map(([category, skills]) => `${category}: ${skills.map(s => s.name).join(', ')}`)
    .join('\n');

  const projectsText = projects.map(p => 
    `Project: ${p.title}\nStack: ${p.stack}\nDescription: ${p.description}\n` +
    (p.caseStudy ? `Case Study Summary: Objective - ${p.caseStudy.objective} Challenges - ${p.caseStudy.challenges} Learnings - ${p.caseStudy.learnings}` : '')
  ).join('\n\n');

  const experienceText = experience.map(e => 
    `Role: ${e.role} at ${e.company} (${e.duration})\nDescription: ${e.description}`
  ).join('\n\n');

  const content = `
    Professional Summary: ${professionalSummary}

    Technical Skills:
    ${skillsText}

    Projects:
    ${projectsText}

    Experience:
    ${experienceText}

    Education: ${education.degree} at ${education.institution}

    Achievements & Certifications:
    - ${achievements.join('\n- ')}
    - Certifications: ${certifications.join(', ')}

    Testimonials:
    ${testimonials.map(t => `"${t.quote}" - ${t.author}, ${t.role}`).join('\n')}
  `;

  return content;
}
