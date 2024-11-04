// src/ProfileCard.tsx
import React from 'react';
import './ProfileCard.scss';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { IoMail } from "react-icons/io5";
import grosso from "./logos/grosso.png"

const NICK_BIRTH_YEAR = 1999;

const ProfileCard: React.FC = () => {
  return (
    <div className="profile-card">
      <div className="profile-content">
        <div className="text-info">
          <h1 className="nameHeader"> Nicholas J. Grosso</h1>
          <p className="subtitle">
            {new Date().getFullYear() - NICK_BIRTH_YEAR}-year-old software engineer working at Lumen Technologies
          </p>
          <div className="social-icons">
          <a href="https://drive.google.com/file/d/1zGm5kLi2yl-xGiFvxRl84V-4dyvyaO0a/view" target="_blank" rel="noopener noreferrer">
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
        <img
          src={grosso} // Ensure the path to the image is correct
          alt="Nicholas J. Grosso"
          className="profile-picture"
        />
      </div>
    </div>
  );
};

export default ProfileCard;
