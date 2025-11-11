// src/ProjectsList.tsx
import React from 'react';
import './ProjectsList.scss';
import c4 from "./logos/c4.gif";
import wordle from "./logos/wordleclone.gif";
import task from "./logos/task.gif";
import insta from "./logos/insta.gif"
import vfioh from "./logos/vfioh.gif"

interface Project {
  title: string;
  description: string;
  imageUrl: string;
  techStack: string[];
  repoLink: string;
  liveLink?: string;
  latestRelease?: string;
}

const projects: Project[] = [
  {
    title: 'VFIOH',
    description: 'VFIO, or Virtual Function I/O, IOMMU/device agnostic framework for exposing direct \
    device access to userspace, in a secure, IOMMU protected environment. This terminal application \
    helps install dependencies, configure instances, and run virt manager set ups for the KVM.',
    imageUrl: vfioh,
    techStack: ['Python', 'KVM', 'Bash', 'VFIO', 'Linux'],
    repoLink: 'https://github.com/ngrosso1/Single-GPU-passthrough',
  },
  {
    title: 'Task Manager',
    description: 'Developed a full-stack task management application using React for frontend and a \
    RESTful API in TypeScript for backend, enabling CRUD operations with seamless integration \
    between client and server',
    imageUrl: task,
    techStack: ['Typescript', 'AWS Lambda', 'REST API', 'React', 'DynamoDB', 'HTML/CSS'],
    repoLink: 'https://github.com/ngrosso1/taskManager'
  },
  {
    title: 'Wordle Recreation',
    description: 'Recreated the popular word puzzle game Wordle using HTML, CSS, and JavaScript. \
    Implemented core gameplay logic, animations, and keyboard interaction to closely mirror the \
    original experience. Designed a responsive layout for smooth play across desktop and mobile \
    browsers.',
    imageUrl: wordle,
    techStack: ['JavaScript', 'NodeJS', 'HTML/CSS'],
    repoLink: 'https://github.com/ngrosso1/wordle_clone',
    liveLink: 'https://ngrosso1.github.io/wordle_clone/'
  },
  {
    title: 'Instagram Unliker',
    description: 'Developed a cross-platform GUI application that automates the removal of liked posts on Instagram. Built with the Instagrapi API, the tool streamlines unliking activity through a simple, user-friendly interface. Packaged into standalone binaries for Windows, macOS, and Linux, ensuring easy installation and accessibility across platforms.',
    imageUrl: insta,
    techStack: ['Python', 'API', 'BASH', 'Windows', 'OSX', 'Linux'],
    repoLink: 'https://github.com/ngrosso1/InstaUnlikerGUI',
    latestRelease: 'https://github.com/ngrosso1/InstaUnlikerGUI/releases'
  },
  {
    title: 'Connect 4 Algorithm',
    description: 'A cross-platform Connect 4 game with a sleek GUI, built in Python 3. Play locally against a friend or challenge the computer powered by a MinMax algorithm for strategic gameplay.',
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
            <p>{project.description}</p>
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