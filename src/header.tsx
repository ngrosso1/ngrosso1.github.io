// src/header.tsx
import React from 'react';
import './header.css';
import { useNavigate, useLocation } from 'react-router-dom';

const mobileHeaderStyle = `
  @media (max-width: 768px) {
    .nav-links {
      flex-direction: row !important;
      align-items: center !important;
    }
    
    .nav-links li {
      margin: 0 !important;
    }
    
    .header {
      padding: 10px 15px !important;
      min-width: auto !important;
      width: auto !important;
    }
  }
  
  @media (max-width: 480px) {
    .header {
      padding: 8px 12px !important;
    }
  }
`;

if (typeof document !== 'undefined') {
  const styleTag = document.createElement('style');
  styleTag.innerHTML = mobileHeaderStyle;
  if (!document.head.querySelector('style[data-mobile-header-fix]')) {
    styleTag.setAttribute('data-mobile-header-fix', 'true');
    document.head.appendChild(styleTag);
  }
}

const splitLetters = (text: string) => {
  return text.split('').map((letter, idx) => (
    <span className="letter" style={{ '--i': idx } as React.CSSProperties} key={idx}>
      <span className="front">{letter}</span>
      <span className="back">{letter}</span>
    </span>
  ));
};

const Header: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleClick = (e: React.MouseEvent, path: string) => {
    e.preventDefault();
    
    console.log('Clicked:', path);
    console.log('Current path:', location.pathname);
    console.log('window.scrollY:', window.scrollY);
    console.log('document.documentElement.scrollTop:', document.documentElement.scrollTop);
    console.log('document.body.scrollTop:', document.body.scrollTop);
    
    if (location.pathname === path) {
      console.log('Scrolling to top...');
      
      window.scrollTo({ top: 0, behavior: 'smooth' });
      document.documentElement.scrollTo({ top: 0, behavior: 'smooth' });
      document.body.scrollTo({ top: 0, behavior: 'smooth' });
      
      const scrollingElement = document.scrollingElement || document.documentElement;
      scrollingElement.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      console.log('Navigating to:', path);
      navigate(path);
    }
  };

  return (
    <header className="header">
      <nav>
        <ul className="nav-links">
          <li>
            <a href="/" onClick={(e) => handleClick(e, '/')}>
              {splitLetters('Home')}
            </a>
          </li>
          <li>
            <a href="/projects" onClick={(e) => handleClick(e, '/projects')}>
              {splitLetters('Projects')}
            </a>
          </li>
          <li>
            <a href="/contact" onClick={(e) => handleClick(e, '/contact')}>
              {splitLetters('Contact')}
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;