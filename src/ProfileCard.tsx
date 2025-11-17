// src/ProfileCard.tsx
import React from 'react';
import './ProfileCard.css';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { IoMail } from "react-icons/io5";
import grosso from "./logos/grosso.png"

const ProfileCard: React.FC = () => {
  return (
    <div className="profile-card">
      <div className="profile-content">
        <div className="text-info">
          <h1 className="nameHeader"> Nicholas J. Grosso <span className="wave">👋</span></h1>
          <p className="subtitle">
            Fullstack Software Engineer | IT Specialist
          </p>
          <div className="social-section">
            <a href="https://drive.google.com/file/d/1LiGgF8i-nsC2FJBKAw82tcQGKYzDhW8p/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="button-wrapper">
              <button className="button-85" role="button">Resume</button>
            </a>
            <a href="mailto:nicholasj.grosso@gmail.com">
              <IoMail className="icon" />
            </a>
            <a href="https://www.linkedin.com/in/nicholasjgrosso/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="icon" />
            </a>
            <a href="https://github.com/ngrosso1" target="_blank" rel="noopener noreferrer">
              <FaGithub className="icon" />
            </a>
          </div>
          </div>
        <div className="profile-picture-container">
          <div className="image-wrapper">
            <img
              src={grosso}
              alt="Nicholas J. Grosso"
              className="profile-picture"
            />
          </div>
          
          <div className="svg-container">
            <svg 
              fill="transparent" 
              viewBox="0 0 506 506" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle 
                cx="253" 
                cy="253" 
                r="250" 
                stroke="#00ff99" 
                strokeWidth="4" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeDasharray="15 41 87 68"
                className="rotating-circle"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;