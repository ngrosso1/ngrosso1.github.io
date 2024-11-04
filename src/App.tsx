// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProfileCard from './ProfileCard';
import ExperienceTabs from './ExperienceTabs';
import Header from './header';
import FeaturedProjects from './FeaturedProjects'; // Fixed typo in import
import About from './About';
import Contact from './Contact';

const App: React.FC = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route 
          path="/" 
          element={
            <div className="App">
              <ProfileCard />
              <ExperienceTabs />
              <FeaturedProjects />
            </div>
          } 
        />
      </Routes>
    </Router>
  );
};

export default App;
