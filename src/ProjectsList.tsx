// src/ProjectsList.tsx
import React from 'react';
import './ProjectsList.scss';
import c4 from "./logos/c4.gif";
import wordle from "./logos/wordleclone.gif";
import task from "./logos/task.gif";

interface Project {
  title: string;
  description: string;
  imageUrl: string;
  techStack: string[];
  repoLink: string;
  liveLink?: string; // Optional property for live demo link
}

const projects: Project[] = [
  {
    title: 'Task Manager',
    description: 'Developed a full-stack task management application using React for frontend and a RESTful API in TypeScript for backend, enabling CRUD operations with seamless integration between client and server',
    imageUrl: task,
    techStack: ['AWS Lambda', 'REST API', 'React', 'Typescript', 'DynamoDB'],
    repoLink: 'https://github.com/ngrosso1/taskManager'
  },
  {
    title: 'Wordle Recreation',
    description: 'Recreated the popular game Wordle using HTML, CSS, and JavaScript.',
    imageUrl: wordle,
    techStack: ['HTML/CSS', 'JavaScript', 'NodeJS'],
    repoLink: 'https://github.com/ngrosso1/wordle_clone',
    liveLink: 'https://ngrosso1.github.io/wordle_clone/' // Add live link here
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
            <a href={project.repoLink} className="repo-link" target="_blank" rel="noopener noreferrer">Source</a>
            {project.liveLink && (
              <a href={project.liveLink} className="repo-link" target="_blank" rel="noopener noreferrer">Live Demo</a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsList; // Ensure this is included