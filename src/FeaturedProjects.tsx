// src/FeaturedProjects.tsx
import React from 'react';
import './FeaturedProjects.css';
import wordle from "./logos/wordleclone.gif";
import task from "./logos/task.gif";
import vfioh from "./logos/vfioh.gif";

interface Project {
  title: string;
  description: string[]; // changed to array for proper paragraph rendering
  imageUrl: string;
  techStack: string[];
  repoLink: string;
  liveLink?: string;
  latestRelease?: string;
}

const projects: Project[] = [
  {
    title: 'VFIOH',
    description: [
      'VFIO (Virtual Function I/O) enables secure, IOMMU-protected passthrough of physical devices—such as GPUs—directly to virtual machines, but configuring single-GPU passthrough on Linux is complex and error-prone.',
      'VFIOH is a terminal-based utility that automates the setup of KVM virtual machines with NVIDIA GPU passthrough. It handles dependency installation, VFIO hook configuration, kernel and initramfs updates, and virt-manager VM provisioning, while performing system checks to detect common driver and binding issues.',
      'When automated checks fail, VFIOH provides an opt-in, AI-assisted troubleshooting workflow that analyzes kernel and libvirt logs using local LLM inference to diagnose failures and recommend safe, user-approved fixes. AI recommendations are constrained to predefined actions to preserve system safety, with optional containerized execution for reproducible analysis.'
    ],
    imageUrl: vfioh,
    techStack: ['Python', 'KVM', 'Ollama', 'LLM', 'AI', 'VFIO', 'Linux'],
    repoLink: 'https://github.com/ngrosso1/Single-GPU-passthrough',
  },
  {
    title: 'Task Manager',
    description: [
      'Developed a full-stack task management application using React for frontend and a RESTful API in TypeScript for backend, enabling CRUD operations with seamless client-server integration.'
    ],
    imageUrl: task,
    techStack: ['Typescript', 'AWS Lambda', 'REST API', 'React', 'DynamoDB', 'HTML/CSS'],
    repoLink: 'https://github.com/ngrosso1/taskManager'
  },
  {
    title: 'Wordle Recreation',
    description: [
      'Recreated the popular word puzzle game Wordle using HTML, CSS, and JavaScript.',
      'Implemented core gameplay logic, animations, and keyboard interaction to closely mirror the original experience, with a responsive layout for desktop and mobile browsers.'
    ],
    imageUrl: wordle,
    techStack: ['Javascript', 'NodeJS', 'HTML/CSS'],
    repoLink: 'https://github.com/ngrosso1/wordle_clone'
  },
];

const FeaturedProjects: React.FC = () => {
  return (
    <section className="featured-projects">
      <h2>A small selection of recent projects</h2>
      <div className="projects-container">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <img src={project.imageUrl} alt={project.title} className="project-image" />
            <h3>{project.title}</h3>

            {project.description.map((para, i) => (
              <p key={i}>{para}</p>
            ))}

            <div className="tech-stack">
              {project.techStack.map((tech, idx) => (
                <span key={idx} className="tech">{tech}</span>
              ))}
            </div>

            <a href={project.repoLink} className="repo-link" target="_blank" rel="noopener noreferrer">Source</a>
            {project.liveLink && (
              <a href={project.liveLink} className="repo-link" target="_blank" rel="noopener noreferrer">Live Demo</a>
            )}
            {project.latestRelease && (
              <a href={project.latestRelease} className="repo-link" target="_blank" rel="noopener noreferrer">Latest Release</a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedProjects;
