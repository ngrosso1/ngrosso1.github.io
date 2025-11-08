import React from 'react';
import './About.scss'; // Ensure this file exists

const About: React.FC = () => {
  return (
    <div className="about">
      <h2>Hi, I'm Nicholas Grosso!</h2>
      <p>
      &nbsp;&nbsp;&nbsp;&nbsp;A full-stack developer currently working at Lumen Technologies, with a focus on creating scalable, efficient applications. I graduated from Binghamton University in 2021 with a BS in Computer Science and am constantly expanding my technical skills and knowledge. My recent work involves deploying containerized applications using Kubernetes and managing complex SQL databases. I’m passionate about building impactful software and exploring new technologies, from cloud computing to front-end frameworks. In my free time, I enjoy tackling coding challenges and contributing to open-source projects.
      </p>
      {/* More content here */}
    </div>
  );
};

export default About;
