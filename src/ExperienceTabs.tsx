// Experience
import React, { useState } from 'react';
import './ExperienceTabs.css';
import esurgiLogo from './logos/esurgi.png';

const workExperience = [
  {
    date: "May 2022 - Nov 2025",
    company: "Lumen Technologies",
    role: "Software Engineer II",
    overview: `Vyvx Broadcast Solutions is a global platform supporting live and linear media delivery across production broadcast networks. I worked on backend systems that interface directly with physical broadcast equipment, where reliability, timing, and observability are critical. My role focused on building and maintaining services that support real-time monitoring, automated equipment orchestration, and resilient media transport in production environments.
I took primary ownership of two core systems: Harvester, a Golang-based network monitoring and alerting service, and Atlas, an automated equipment reservation platform. My work involved diagnosing complex production issues spanning software, networking, and hardware, evolving these systems to be more reliable and scalable, and ensuring they aligned with real-world operational workflows. Development and testing were performed in Docker-based environments closely mirroring production infrastructure.`,
    technologies: ["C++", "Go", "JavaScript", "Angular", "C#", ".NET", "Python", "SQL", "Java", "Perl", "Docker", "Kubernetes", "Rancher", "Bash", "Jenkins", "Terraform", "AWS", "Git", "PowerBuilder", "Jira", "Gitlab"],
    achievements: [
      "Owned and maintained Harvester, a Golang service processing SNMP traps, equipment telemetry, and customer notifications for real-time network monitoring",
      "Debugged and resolved complex production incidents involving broadcast equipment, network behavior, and timing-sensitive failures",
      "Maintained and extended Atlas, automating equipment reservation lifecycles and start/stop workflows to reduce manual operational overhead",
      "Engineered and supported broadcast encoding and resilient media transport systems used in live and linear delivery",
      "Worked cross-functionally with network and operations teams to define production network standards and align system architecture with operational needs"
    ],
    logo: "https://images.seeklogo.com/logo-png/40/1/lumen-technologies-logo-png_seeklogo-405795.png"
  },
  {
    date: "July 2021 - Jan 2022",
    company: "EsurgiBioTech",
    role: "Software Engineer Intern",
    overview: `EsurgiBioTech develops medical devices integrating embedded hardware, firmware, and software systems. I worked on low-level driver development for a medical pump mechanism, collaborating closely with both software and hardware engineers to ensure correct device behavior.
My work focused on implementing and validating communication pathways between embedded controllers and higher-level applications, requiring careful attention to reliability, timing, and hardware constraints in a regulated environment.`,
    technologies: ["C++", "Swift", "AT Commands", "Git", "Arduino", "OSX", "Bash"],
    achievements: [
      "Developed and maintained low-level driver code for a medical device pump mechanism",
      "Implemented Bluetooth communication between an Arduino-based controller and an iOS application",
      "Enabled reliable real-time data exchange and remote device control through structured command protocols",
      "Collaborated across hardware and software teams to test, debug, and validate device behavior"
    ],
    logo: esurgiLogo,
  },
  {
    date: "May 2021 - Aug 2021",
    company: "AT&T",
    role: "Software Engineer Extern",
    overview: `Participated in AT&T’s Summer Learning Academy, an intensive virtual program focused on software engineering fundamentals, emerging technologies, and real-world business applications.
The program combined technical coursework with applied exercises, emphasizing problem-solving, system design thinking, and professional communication within large-scale technology organizations.`,
    technologies: ["Python", "Java", "AI", "Cloud Computing", "IoT", "Cybersecurity", "Game Design", "Git"],
    achievements: [
      "Completed an 80-hour structured program covering software engineering and emerging technology domains",
      "Explored practical applications of AI, cloud computing, IoT, and cybersecurity in enterprise environments",
      "Strengthened technical communication, collaboration, and professional development skills",
      "Gained exposure to large-scale digital transformation efforts within a Fortune 500 organization"
    ],
    logo: 'https://upload.wikimedia.org/wikipedia/commons/0/05/AT%26T_Globe_2016.svg',
  },
];

const educationList = [
  {
    date: "Aug 2019 - Dec 2021",
    company: "Binghamton University",
    role: "Computer Science",
    logo: 'https://cdn.campus360.org/uploads/universities/1609904622bec1ad321e3082af7edf9043dffa09a4.png',
  }
];

const certificatesList = [
  {
    date: "April 2022",
    name: "Data Analytics Professional Certificate",
    organization: "Google",
    credentialId: "GHUXJ74KLNS3",
    credentialUrl: "https://www.coursera.org/account/accomplishments/specialization/certificate/GHUXJ74KLNS3",
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Google_Favicon_2025.svg/250px-Google_Favicon_2025.svg.png',
  },
  {
    date: "August 2021",
    name: "Algorithms Specialization Certificate",
    organization: "Stanford Online",
    credentialId: "NZSSRSYBF2F3",
    credentialUrl: "https://www.coursera.org/account/accomplishments/certificate/NZSSRSYBF2F3",
    logo: 'https://identity.stanford.edu/wp-content/uploads/sites/3/2020/07/block-s-right.png',
  }
];

export default function ExperienceTabs() {
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
          <div>
            {workExperience.map((item, index) => (
              <div key={index} style={{ marginBottom: index < workExperience.length - 1 ? '32px' : 0 }}>
                <div style={{ textAlign: 'center', marginBottom: '16px' }}>
                  <img
                    src={item.logo}
                    alt={`${item.company} logo`}
                    className="company-logo"
                    style={{ width: '100px', height: '100px', margin: '0 auto' }}
                  />
                </div>

                <div style={{ textAlign: 'center', marginBottom: '16px' }}>
                  <h3 style={{ margin: '0 0 4px 0', color: '#ffffff', fontSize: '1.3em', fontWeight: 'bold' }}>
                    {item.company}
                  </h3>
                  <p style={{ margin: '4px 0', color: '#ffffff' }}>{item.role}</p>
                  <p style={{ margin: '4px 0', color: '#c7c7c7', fontSize: '0.9em' }}>{item.date}</p>
                </div>

                <div style={{ marginBottom: '16px' }}>
                  {item.overview.split('\n').map((paragraph, i) => (
                    <p
                      key={i}
                      style={{
                        color: '#ffffff',
                        margin: i === 0 ? '0 0 12px 0' : '0',
                        lineHeight: '1.6',
                        fontSize: '0.95em'
                      }}
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>

                <div style={{ marginBottom: '16px' }}>
                  <h4 style={{ color: '#ffffff', margin: '0 0 8px 0', fontWeight: 600 }}>
                    Technologies Used
                  </h4>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                    {item.technologies.map((tech, i) => (
                      <span key={i} style={{
                        padding: '4px 10px',
                        backgroundColor: 'rgba(255,255,255,0.15)',
                        color: '#ffffff',
                        fontSize: '0.85em',
                        borderRadius: '4px',
                        border: '1px solid rgba(255,255,255,0.2)'
                      }}>
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 style={{ color: '#ffffff', margin: '0 0 8px 0', fontWeight: 600 }}>
                    Key Achievements
                  </h4>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                    {item.achievements.map((achievement, i) => (
                      <li key={i} style={{
                        color: '#ffffff',
                        marginBottom: '8px',
                        paddingLeft: '16px',
                        position: 'relative',
                        lineHeight: '1.5'
                      }}>
                        <span style={{ position: 'absolute', left: 0, color: '#c7c7c7' }}>•</span>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>

                {index < workExperience.length - 1 && (
                  <div className="section-divider" style={{ margin: '24px 0' }} />
                )}
              </div>
            ))}
          </div>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div>
              <h2 className="section-title">Academic</h2>
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
            </div>

            <div className="section-divider" />

            <div>
              <h2 className="section-title">Certificates</h2>
              <ul className="experience-list">
                {certificatesList.map((item, index) => (
                  <li key={index} className="experience-item certificate-item">
                    <img src={item.logo} alt={`${item.organization} logo`} className="company-logo" />
                    <div className="certificate-details">
                      <p>{item.date}</p>
                      <h3>{item.name}</h3>
                      <p>{item.organization}</p>
                      <p className="credential-id">Credential ID: {item.credentialId}</p>
                      <a
                        href={item.credentialUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="credential-button"
                      >
                        Show credential
                      </a>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
