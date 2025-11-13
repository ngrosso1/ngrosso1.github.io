// src/header.tsx
import React from 'react';
import './header.css';
import { useNavigate, useLocation } from 'react-router-dom';

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
      // Same page - scroll to top
      console.log('Scrolling to top...');
      
      // Try all possible scroll methods
      window.scrollTo({ top: 0, behavior: 'smooth' });
      document.documentElement.scrollTo({ top: 0, behavior: 'smooth' });
      document.body.scrollTo({ top: 0, behavior: 'smooth' });
      
      // Find and scroll the actual scrolling element
      const scrollingElement = document.scrollingElement || document.documentElement;
      scrollingElement.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      // Different page - navigate
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
          {/*
          old About section
          <li>
            <a href="/about" onClick={(e) => handleClick(e, '/about')}>
              {splitLetters('About')}
            </a>
          </li>
          */}
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