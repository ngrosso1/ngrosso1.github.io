// src/FeaturedProjects.tsx
import React from 'react';
import './FeaturedProjects.scss';
import c4 from "./logos/c4.gif"
import wordle from "./logos/wordleclone.gif"

interface Project {
  title: string;
  description: string;
  imageUrl: string;
  techStack: string[];
  repoLink: string;
}

const projects: Project[] = [
  {
    title: 'Connect-4 Algorithm',
    description: 'Coded the board game connect-4 in Python three with a GUI interface. You can choose to rotate between two in-person human players or face off against a random computer player. The prompt window uses the tkinter library while the game window uses the pygame library. Works on both Linux (tested on Arch and Fedora 35) and MacOS (tested on Big Sur and Monterey).',
    imageUrl: c4, // Update with the actual path to your image
    techStack: ['Python', 'pygame'],
    repoLink: 'https://github.com/ngrosso1/ConnectFourAlgorithm'
  },
  {
    title: 'Wordle Recreation',
    description: 'Recreated the popular game wordle using HTML, CSS, and JavaScript.',
    imageUrl: wordle, // Update with the actual path to your image
    techStack: ['HTML/CSS', 'Javascript', 'NodeJS'],
    repoLink: 'https://github.com/ngrosso1/wordle_clone'
  }
];

const FeaturedProjects: React.FC = () => {
  return (
    <section className="featured-projects">
      <h2>Featured Projects</h2>
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
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedProjects;
