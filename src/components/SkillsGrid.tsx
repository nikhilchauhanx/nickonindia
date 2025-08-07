// src/components/SkillsGrid.tsx
'use client';

import React from 'react';
import { IconType } from 'react-icons';
import { technicalSkills } from '../data'; // Import the skills data

// Define the type for a single skill, matching our data.ts file
interface Skill {
  name: string;
  icon: IconType;
}

const SkillsGrid = () => {
  return (
    <div>
      {Object.entries(technicalSkills).map(([category, skills]) => (
        <div key={category} className="mb-8">
          {/* Added dark mode class: dark:text-gray-100 */}
          <h3 className="text-xl font-semibold text-gray-800 mb-4 dark:text-gray-100">{category}</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {skills.map((skill: Skill) => {
              const Icon = skill.icon;
              return (
                <div 
                  key={skill.name} 
                  // Added dark mode classes for the skill cards
                  className="flex flex-col items-center justify-center p-4 bg-gray-50 rounded-lg border border-gray-200 hover:shadow-lg hover:border-indigo-300 hover:-translate-y-1 transition-all duration-300 dark:bg-gray-800 dark:border-gray-700 dark:hover:border-indigo-500"
                >
                  <Icon className="text-4xl text-indigo-600 mb-2 dark:text-indigo-400" />
                  <p className="text-sm text-center font-medium text-gray-700 dark:text-gray-300">{skill.name}</p>
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
};

export default SkillsGrid;
