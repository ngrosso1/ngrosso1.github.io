// src/ProjectsList.tsx
import React from 'react';
import './ProjectsList.css';
import c4 from "./logos/c4.gif";
import wordle from "./logos/wordleclone.gif";
import task from "./logos/task.gif";
import insta from "./logos/insta.gif";
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
      'VFIO (Virtual Function I/O) enables secure, IOMMU protected passthrough of physical devices—such as GPUs—directly to virtual machines, but configuring single GPU passthrough on Linux is complex and error prone.',
      'VFIOH is a TUI (Text based User Interface) that automates the setup of KVM virtual machines with NVIDIA GPU passthrough. It handles dependency installation, VFIO hook configuration, kernel and initramfs updates, and virt manager VM provisioning, while performing system checks to detect common driver and binding issues.',
      'When automated checks fail, VFIOH provides an opt-in, AI assisted troubleshooting workflow that analyzes kernel and libvirt logs using local LLM inference to diagnose failures and recommend safe, user approved fixes. AI recommendations are constrained to predefined actions to preserve system safety, with optional containerized execution for reproducible analysis.'
    ],
    imageUrl: vfioh,
    techStack: ['Python', 'KVM', 'Ollama', 'LLM', 'AI', 'VFIO', 'Linux'],
    repoLink: 'https://github.com/ngrosso1/Single-GPU-passthrough',
  },
  {
    title: 'Task Manager',
    description: ['Developed a task management application featuring a React frontend and a TypeScript based RESTful API backend. Implemented full CRUD functionality for tasks, including creation, editing, deletion, and filtering. Ensured smooth client server communication, applied robust state management, and designed responsive UI/UX for an intuitive user experience. Leveraged modern development practices including component based architecture, modular code structure, and asynchronous API handling to create a scalable and maintainable application.'],
    imageUrl: task,
    techStack: ['Typescript', 'AWS Lambda', 'REST API', 'React', 'DynamoDB', 'HTML/CSS'],
    repoLink: 'https://github.com/ngrosso1/taskManager'
  },
  {
    title: 'Wordle Recreation',
    description: [
      'Recreated the popular word puzzle game Wordle using HTML, CSS, and JavaScript.',
      'Implemented core gameplay logic, animations, and keyboard interaction, along with a responsive layout for desktop and mobile browsers.'
    ],
    imageUrl: wordle,
    techStack: ['JavaScript', 'NodeJS', 'HTML/CSS'],
    repoLink: 'https://github.com/ngrosso1/wordle_clone',
    liveLink: 'https://ngrosso1.github.io/wordle_clone/'
  },
  {
    title: 'Instagram Unliker',
    description: [
      'Developed a cross-platform GUI application that automates the removal of liked posts on Instagram using the Instagrapi API.',
      'Packaged the tool into standalone binaries for Windows, macOS, and Linux to ensure easy installation and accessibility.'
    ],
    imageUrl: insta,
    techStack: ['Python', 'API', 'BASH', 'Windows', 'OSX', 'Linux'],
    repoLink: 'https://github.com/ngrosso1/InstaUnlikerGUI',
    latestRelease: 'https://github.com/ngrosso1/InstaUnlikerGUI/releases'
  },
  {
    title: 'Connect 4 Algorithm',
    description: [
      'Built a cross-platform Connect 4 game with a graphical interface in Python 3.',
      'Implemented a Minimax-based AI opponent for strategic gameplay.'
    ],
    imageUrl: c4,
    techStack: ['Python'],
    repoLink: 'https://github.com/ngrosso1/ConnectFourAlgorithm',
  }
];

const ProjectsList: React.FC = () => {
  return (
    <section className="ProjectsList">
      <h2>Projects</h2>
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

            <a href={project.repoLink} className="repo-link" target="_blank" rel="noopener noreferrer">GitHub</a>
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

export default ProjectsList;