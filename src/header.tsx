import React from 'react';
import './header.scss';
import { Link } from 'react-router-dom';

const splitLetters = (text: string) => {
  return text.split('').map((letter, idx) => (
    <span className="letter" style={{ '--i': idx } as React.CSSProperties} key={idx}>
      <span className="front">{letter}</span>
      <span className="back">{letter}</span>
    </span>
  ));
};

const Header: React.FC = () => {
  return (
    <header className="header">
      <nav>
        <ul className="nav-links">
          <li>
            <Link to="/">{splitLetters('Home')}</Link>
          </li>
          <li>
            <Link to="/about">{splitLetters('About')}</Link>
          </li>
          <li>
            <Link to="/projects">{splitLetters('Projects')}</Link>
          </li>
          <li>
            <Link to="/contact">{splitLetters('Contact')}</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
