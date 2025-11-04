// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProfileCard from './ProfileCard';
import ExperienceTabs from './ExperienceTabs';
import Header from './header';
import FeaturedProjects from './FeaturedProjects';
import About from './About';
import Contact from './Contact';
import ProjectsList from './ProjectsList';
import SwirlBackground from './SwirlBackground'; // Add this import

const App: React.FC = () => {
  return (
    <Router>
      <SwirlBackground /> {/* Add this component */}
      <Header />
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects" element={<ProjectsList />} />
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