// skills.tsx
import React from 'react';
import './skills.css';
import java from './logos/java.png';
import swift from './logos/swift.png';

interface Skill {
  name: string;
  icon: string;
  framed?: boolean;
}

interface SkillCategory {
  title: string;
  skills: Skill[];
}

const isImage = (icon: string) =>
  icon.startsWith("http") ||
  icon.endsWith(".png") ||
  icon.endsWith(".svg") ||
  icon.endsWith(".jpg") ||
  icon.endsWith(".webp");

// Template: { name: '', icon: '', framed: false },
const SkillsSection: React.FC = () => {
  const categories: SkillCategory[] = [
    {
      title: 'Front End',
      skills: [
        { name: 'TypeScript', icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1024px-Typescript_logo_2020.svg.png', framed: false },
        { name: 'JavaScript', icon: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png', framed: false },
        { name: 'Angular', icon: 'https://images.seeklogo.com/logo-png/33/2/angular-logo-png_seeklogo-331629.png', framed: false },
        { name: 'NodeJS', icon: 'https://images.icon-icons.com/2699/PNG/512/nodejs_logo_icon_169910.png', framed: false },
        { name: 'React', icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png', framed: false },
        { name: 'HTML/CSS', icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/CSS3_and_HTML5_logos_and_wordmarks.svg/2560px-CSS3_and_HTML5_logos_and_wordmarks.svg.png', framed: false },
      ],
    },
    {
      title: 'Back End',
      skills: [
        { name: 'C/C++', icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/1822px-ISO_C%2B%2B_Logo.svg.png', framed: false },
        { name: 'GoLang', icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Go_Logo_Blue.svg/330px-Go_Logo_Blue.svg.png', framed: false },
        { name: 'Python', icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/2048px-Python-logo-notext.svg.png', framed: false },
        { name: 'C#', icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Logo_C_sharp.svg/1820px-Logo_C_sharp.svg.png', framed: false },
        { name: '.NET', icon: 'https://cdn.prod.website-files.com/6047a9e35e5dc54ac86ddd90/63064f1fedf422395124660e_e7d03466.png', framed: false },
        { name: 'Java', icon: java, framed: false },
        { name: 'Rust', icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Rustacean-orig-noshadow.svg/1200px-Rustacean-orig-noshadow.svg.png', framed: false },
        { name: 'Perl', icon: 'https://www.freelogovectors.net/wp-content/uploads/2021/02/perl_logo_freelogovectors.net_.png', framed: false },
        { name: 'Swift', icon: swift, framed: false },
        { name: 'Bash', icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Bash_Logo_Colored.svg/2048px-Bash_Logo_Colored.svg.png', framed: false },
      ],
    },
    {
      title: 'Data Analysis',
      skills: [
        { name: 'MSSQL', icon: 'https://img.icons8.com/color/512/microsoft-sql-server.png', framed: false },
        { name: 'postgreSQL', icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/1163px-Postgresql_elephant.svg.png', framed: false },
        { name: 'MySQL', icon: 'https://pngimg.com/d/mysql_PNG23.png', framed: false },
        { name: 'GraphQL', icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/GraphQL_Logo.svg/2048px-GraphQL_Logo.svg.png', framed: false },
        { name: 'MongoDB', icon: 'https://logo.svgcdn.com/devicon/mongodb-original.png', framed: false},
        { name: 'DynamoDB', icon: 'https://upload.wikimedia.org/wikipedia/commons/f/fd/DynamoDB.png', framed: false},
        { name: 'Elasticsearch', icon: 'https://assets.streamlinehq.com/image/private/w_300,h_300,ar_1/f_auto/v1/icons/3/elasticsearch-rhi1c3ieeke9l2ht6jy755.png/elasticsearch-a2ax512pgkubl5gtrelkoc.png?_a=DATAg1AAZAA0', framed: false },
      ],
    },
    {
      title: 'Cloud',
      skills: [
        { name: 'AWS', icon: 'https://www.pngmart.com/files/23/Aws-Logo-PNG-Picture.png', framed: false },
        { name: 'GCP', icon: 'https://img.icons8.com/color/512/google-cloud.png', framed: false },
        { name: 'Terraform', icon: 'https://blogs.vmware.com/cloudprovider/wp-content/uploads/sites/78/2019/04/og-image-8b3e4f7d-blog-aspect-ratio.png?w=576&h=324&crop=1', framed: false },
        { name: 'Kubernetes', icon: 'https://upload.wikimedia.org/wikipedia/commons/0/00/Kubernetes_%28container_engine%29.png', framed: false },
        { name: 'Docker', icon: 'https://i0.wp.com/blog.kmsigma.com/wp-content/uploads/2025/07/docker-mark-blue-scaled.png?fit=2560%2C2021&ssl=1', framed: false },
        { name: 'Redshift', icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Amazon-Redshift-Logo.svg/1862px-Amazon-Redshift-Logo.svg.png', framed: false },
        { name: 'S3', icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Amazon-S3-Logo.svg/1712px-Amazon-S3-Logo.svg.png', framed: false },
      ],
    },
    {
      title: 'Miscellaneous',
      skills: [
        { name: 'Debian', icon: 'https://free-astro.org/images/0/04/Debian_logo.png', framed: false },
        { name: 'RHEL', icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Red_Hat_logo.svg/1280px-Red_Hat_logo.svg.png', framed: false },
        { name: 'Arch Linux', icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Arch_Linux_%22Crystal%22_icon.svg/2048px-Arch_Linux_%22Crystal%22_icon.svg.png', framed: false },
        { name: 'Jenkins', icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Jenkins_logo.svg/1483px-Jenkins_logo.svg.png', framed: false },
        { name: 'Git', icon: 'https://avatars.githubusercontent.com/u/18133?s=280&v=4', framed: false },
        { name: 'OSX', icon: 'https://upload.wikimedia.org/wikipedia/commons/c/c9/Finder_Icon_macOS_Big_Sur.png', framed: false },
        { name: 'Jira', icon: 'https://images.icon-icons.com/3053/PNG/512/jira_cloud_macos_bigsur_icon_190051.png', framed: false },
        { name: 'Confluence', icon: 'https://1000logos.net/wp-content/uploads/2025/02/Confluence-Emblem.png', framed: false },
      ],
    },
  ];

  return (
    <section className="skills-section">
      <div className="skills-container">
        <h2 className="section-title">Skills</h2>
        <p className="section-subtitle">Technologies and tools I work with</p>
        
        <div className="categories-grid">
          {categories.map((category, idx) => (
            <div key={idx} className="category-card">
              <h3 className="category-title">{category.title}</h3>
              <div className="skills-list">
                {category.skills.length > 0 ? (
                  category.skills.map((skill, skillIdx) => (
                    <div key={skillIdx} className="skill-item">
                      <div className={`skill-icon ${skill.framed ? 'framed' : 'no-frame'}`}>
                        {isImage(skill.icon) ? (
                          <img src={skill.icon} alt={skill.name} className="skill-img" />
                        ) : (
                          <span className="icon-text">{skill.icon}</span>
                        )}
                      </div>
                      <span className="skill-name">{skill.name}</span>
                    </div>
                  ))
                ) : (
                  <div className="empty-category">
                    <span className="empty-text">More skills coming soon...</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;