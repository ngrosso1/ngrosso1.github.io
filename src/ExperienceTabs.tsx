// src/ExperienceTabs.tsx

import React, { useState } from 'react';
import './ExperienceTabs.scss';
import lumenLogo from './logos/lumen.png';
import esurgiLogo from './logos/esurgi.png';
import atntLogo from './logos/atnt.png'
import binghamton from './logos/binghamton.png'

const workExperience = [
  {
    date: "May 2022 - Present",
    company: "Lumen Technologies",
    role: "Software Engineer II",
    description: "Developed and maintained on broadcast encoding and resilient media transport complexes in support of both live and linear content delivery systems using C++, JavaScript, Go, and Python. Implemented containerized docker deployments using Kubernetes as a service via Rancher to streamline application scalability and resilience",
    logo: lumenLogo,
  },
  {
    date: "July 2021 - Jan 2022",
    company: "Esurgi BioTech",
    role: "Software Engineering Intern",
    description: "Led a team on the driver code for a pump mechanism in a medical device. Managed workflow using C++, AT Commands, and Swift with tools such as Git and Arduino IDE. Implemented Bluetooth connectivity between an Arduino and an iOS device for seamless connection",
    logo: esurgiLogo,
  },
  {
    date: "May 2021 - Aug 2021",
    company: "AT&T",
    role: "Software Engineering Exten",
    description: "Learning overviews concerning implementation of such topics as AI, Cloud Computing, IoT, design planning, Project Development, Video Game Production, and Cyber Security",
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
          onClick={() => setActiveTab('Education')}
        >
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
          //new eductation start
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
          //end eductation
        )}
      </div>
    </div>
  );
};

export default ExperienceTabs;
