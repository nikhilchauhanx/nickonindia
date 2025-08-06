// src/components/resume/ResumeDocument.tsx
import React from 'react';
import { Page, Text, View, Document, StyleSheet, Link, Font } from '@react-pdf/renderer';
import {
  professionalSummary,
  technicalSkills,
  projects,
  experience,
  education,
  certifications,
  achievements
} from '../../data';

// Registering fonts for bold/italic styles
Font.register({
  family: 'Helvetica',
  fonts: [
    { src: 'https://fonts.gstatic.com/s/helvetica/v10/HGH23l-HMnob52y2-3-p3g.ttf', fontWeight: 'normal' },
    { src: 'https://fonts.gstatic.com/s/helvetica/v10/HGH23l-HMnob52y2-3-p3g.ttf', fontStyle: 'italic' },
    { src: 'https://fonts.gstatic.com/s/helvetica/v10/HGHB3l-HMnob52y2-3-p3g.ttf', fontWeight: 'bold' },
  ],
});


// Define the styles for the PDF document, matching the provided resume
const styles = StyleSheet.create({
  page: {
    paddingTop: 35,
    paddingBottom: 65,
    paddingHorizontal: 35,
    fontFamily: 'Helvetica',
    fontSize: 10,
    color: '#1f2937',
    lineHeight: 1.4,
  },
  header: {
    textAlign: 'center',
    marginBottom: 20,
  },
  name: {
    fontSize: 28,
    fontWeight: 'bold',
  },
  jobTitleHeader: {
    fontSize: 14,
    color: '#4f46e5',
    marginBottom: 8,
  },
  contactInfo: {
    fontSize: 9,
    color: '#4b5563',
  },
  section: {
    marginBottom: 14,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#111827',
    marginBottom: 8,
    paddingBottom: 3,
    borderBottom: '1px solid #e5e7eb',
  },
  listItem: {
    flexDirection: 'row',
  },
  bullet: {
    width: 10,
    fontSize: 10,
    marginRight: 4,
  },
  listItemContent: {
    flex: 1,
  },
  skillsCategory: {
    flexDirection: 'row',
    marginBottom: 4,
  },
  skillsCategoryTitle: {
    fontWeight: 'bold',
    width: 140,
  },
  skillsList: {
    flex: 1,
  },
  project: {
    marginBottom: 10,
  },
  projectHeader: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  projectTitle: {
    fontSize: 11,
    fontWeight: 'bold',
  },
  projectStack: {
    fontSize: 9,
    fontStyle: 'italic',
    color: '#6b7280',
    marginLeft: 6,
  },
  experienceEntry: {
    marginBottom: 10,
  },
  experienceHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  jobTitle: {
    fontSize: 11,
    fontWeight: 'bold',
  },
  educationHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  degree: {
    fontWeight: 'bold',
  },
  link: {
    textDecoration: 'none',
    color: '#4b5563',
  }
});

// This is the main component that defines the PDF structure
const ResumeDocument = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.name}>Nikhil Chauhan</Text>
        <Text style={styles.jobTitleHeader}>Full Stack Developer</Text>
        <Text style={styles.contactInfo}>
          Noida, Uttar Pradesh | +91-7290813007 | 
          <Link style={styles.link} src="mailto:nikhilchauhan0618@gmail.com"> nikhilchauhan0618@gmail.com </Link>| 
          <Link style={styles.link} src="https://linkedin.com/in/nickonindia"> linkedin.com/in/nickonindia </Link>| 
          <Link style={styles.link} src="https://github.com/nikhilchauhanx"> github.com/nikhilchauhanx </Link>| 
          <Link style={styles.link} src="https://www.nickonindia.com"> nickonindia.com</Link>
        </Text>
      </View>

      {/* Professional Summary */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Professional Summary</Text>
        <Text>{professionalSummary}</Text>
      </View>
      
      {/* Technical Skills */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Technical Skills</Text>
        {Object.entries(technicalSkills).map(([category, skills]) => (
          <View key={category} style={styles.skillsCategory}>
            <Text style={styles.skillsCategoryTitle}>{category}:</Text>
            <Text style={styles.skillsList}>{skills.map(s => s.name).join(', ')}</Text>
          </View>
        ))}
      </View>

      {/* Projects */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Projects</Text>
        {projects.map((project, index) => (
          <View key={project.slug} style={styles.project}>
            <View style={styles.projectHeader}>
              <Text style={styles.projectTitle}>{index + 1}. {project.title}</Text>
              <Text style={styles.projectStack}>| {project.stack}</Text>
            </View>
            <Text>{project.description}</Text>
          </View>
        ))}
      </View>

      {/* Experience */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Professional Experience</Text>
        {experience.map((exp, index) => (
          <View key={index} style={styles.experienceEntry}>
            <View style={styles.experienceHeader}>
              <Text style={styles.jobTitle}>{exp.role}</Text>
              <Text>{exp.company}</Text>
            </View>
            <Text style={{ fontStyle: 'italic', color: '#6b7280' }}>{exp.duration}</Text>
            <Text>{exp.description}</Text>
          </View>
        ))}
      </View>

      {/* Education */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Education</Text>
        <View style={styles.educationHeader}>
           <Text style={styles.degree}>{education.degree}</Text>
           <Text>{education.institution}</Text>
        </View>
      </View>

      {/* Achievements & Certifications */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Technical Achievements & Certifications</Text>
        {achievements.map((item, index) => (
          <View key={index} style={styles.listItem}>
            <Text style={styles.bullet}>•</Text>
            <Text style={styles.listItemContent}>{item}</Text>
          </View>
        ))}
        <View style={styles.listItem}>
          <Text style={styles.bullet}>•</Text>
          <Text style={styles.listItemContent}>Completed Coursework in: {certifications.join(', ')}.</Text>
        </View>
      </View>

    </Page>
  </Document>
);

export default ResumeDocument;
