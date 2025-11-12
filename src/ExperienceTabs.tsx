// src/ExperienceTabs.tsx
import React, { useState } from 'react';
import './ExperienceTabs.scss';
import lumenLogo from './logos/lumen.png';
import esurgiLogo from './logos/esurgi.png';
import atntLogo from './logos/atnt.png'
import binghamton from './logos/binghamton.png'
//\u00A0\u00A0\u00A0\u00A0 = tab

const workExperience = [
  {
    date: "May 2022 - Nov 2025",
    company: "Lumen Technologies",
    role: "Software Engineer II",
    description: "At At Lumen, I worked on the evolution of the Vyvx Broadcast Solutions platform a large scale global system \
    supporting live and linear media delivery. I developed and maintained broadcast encoding and resilient media transport \
    systems while designing and deploying solutions that improved automation, scalability, and reliability. My work involved a \
    wide range of technologies including C++, GoLang, JavaScript, C#, Python, SQL, PowerBuilder, and ASP.NET, as well as \
    containerized Docker deployments managed through Kubernetes and Rancher. I also helped define and document standards for \
    the production network, contributed to testing and integration efforts, and collaborated across teams to ensure alignment \
    with broader architectural and strategic goals.",
    logo: lumenLogo,
  },
  {
    date: "July 2021 - Jan 2022",
    company: "Esurgi BioTech",
    role: "Software Engineering Intern",
    description: "During my software engineering internship at Esurgi BioTech, I led development of the driver code for a \
    medical device’s pump mechanism, collaborating with both software and hardware teams to bring the system to life. \
    I worked primarily in C++, Swift, and AT Commands, using tools like Git and the Arduino IDE to manage code and testing \
    across multiple components. A key part of my work involved implementing Bluetooth communication between an Arduino-based \
    controller and an iOS application, enabling reliable real-time data exchange and device control.",
    logo: esurgiLogo,
  },
  {
    date: "May 2021 - Aug 2021",
    company: "AT&T",
    role: "Software Engineering Extern",
    description: "During my externship with AT&T’s Summer Learning Academy, I completed an intensive 80‑hour virtual program \
    designed to strengthen both technical and professional acumen. I explored emerging fields including artificial intelligence, \
    cloud computing, the Internet of Things, cybersecurity, game design production, and project development, while engaging in \
    workshops and hands‑on learning modules that bridged technology and business. I also developed communication and leadership \
    skills through interactive sessions with industry professionals and peers, gaining practical insights into how large-scale \
    organizations like AT&T approach innovation and digital transformation.",
    logo: atntLogo,
  },
];

const educationList = [
  {
    date: "Aug 2019 - Dec 2021",
    company: "Binghamton University",
    role: "Computer Science",
    logo: binghamton,
  }
];

const ExperienceTabs = () => {
  const [activeTab, setActiveTab] = useState('Work');

  return (
    <div className="experience-tabs">
      <div className="tabs">
        <button
          className={activeTab === 'Work' ? 'active' : ''}
          onClick={() => setActiveTab('Work')}
        >
          Work
        </button>
        <button
          className={activeTab === 'Education' ? 'active' : ''}
          onClick={() => setActiveTab('Education')}>
          Education
        </button>
      </div>
      <div className="content">
        {activeTab === 'Work' ? (
          <ul className="experience-list">
            {workExperience.map((item, index) => (
              <li key={index} className="experience-item">
                <img src={item.logo} alt={`${item.company} logo`} className="company-logo" />
                <div>
                  <p>{item.date}</p>
                  <h3>{item.company}</h3>
                  <p>{item.role}</p>
                  <p className="desc"> {item.description}</p>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <ul className="experience-list">
            {educationList.map((item, index) => (
              <li key={index} className="experience-item">
                <img src={item.logo} alt={`${item.company} logo`} className="company-logo" />
                <div>
                  <p>{item.date}</p>
                  <h3>{item.company}</h3>
                  <p>{item.role}</p>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default ExperienceTabs;
