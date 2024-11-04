import React from 'react';
import './header.scss';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <header className="header">
      <nav>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="#projects">Projects</Link></li>
          <li><Link to="#contact">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
