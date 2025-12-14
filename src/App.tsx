// src/App.tsx
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import ProfileCard from './ProfileCard';
import ExperienceTabs from './ExperienceTabs';
import Header from './header';
import FeaturedProjects from './FeaturedProjects';
//import About from './About';
import Contact from './Contact';
import ProjectsList from './ProjectsList';
import SwirlBackground from './bubbleBackground';
import StatsSection from './StatsSection';
import Skills from './skills';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, [pathname]);

  return null;
}

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <SwirlBackground />
      <Header />
      <Routes>
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects" element={<ProjectsList />} />
        <Route 
          path="/" 
          element={
            <div className="App">
              <ProfileCard />
              <StatsSection />
              <ExperienceTabs />
              <FeaturedProjects />
              <Skills />
            </div>
          } 
        />
      </Routes>
    </Router>
  );
};

export default App;