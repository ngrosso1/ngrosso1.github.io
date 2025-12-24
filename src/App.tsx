// src/App.tsx
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { createClient } from '@supabase/supabase-js';
import ProfileCard from './ProfileCard';
import ExperienceTabs from './ExperienceTabs';
import Header from './header';
import FeaturedProjects from './FeaturedProjects';
import Contact from './Contact';
import ProjectsList from './ProjectsList';
import SwirlBackground from './bubbleBackground';
import StatsSection from './StatsSection';
import Skills from './skills';

// Initialize Supabase client
// Replace these with your actual Supabase project credentials
const supabaseUrl = 'SUPABASE_URL'; // e.g., https://xxxxx.supabase.co
const supabaseAnonKey = 'SUPABASE_ANON_KEY';
const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Helper function to detect device type
const getDeviceType = (): string => {
  const ua = navigator.userAgent;
  if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) {
    return 'tablet';
  }
  if (/Mobile|Android|iP(hone|od)|IEMobile|BlackBerry|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(ua)) {
    return 'mobile';
  }
  return 'desktop';
};

// Helper function to parse user agent for browser and OS
const parseUserAgent = (ua: string) => {
  let browser = 'Unknown';
  let os = 'Unknown';
  
  // Detect browser
  if (ua.includes('Firefox')) browser = 'Firefox';
  else if (ua.includes('Chrome') && !ua.includes('Edg')) browser = 'Chrome';
  else if (ua.includes('Safari') && !ua.includes('Chrome')) browser = 'Safari';
  else if (ua.includes('Edg')) browser = 'Edge';
  else if (ua.includes('Opera') || ua.includes('OPR')) browser = 'Opera';
  
  // Detect OS
  if (ua.includes('Windows')) os = 'Windows';
  else if (ua.includes('Mac')) os = 'macOS';
  else if (ua.includes('Linux')) os = 'Linux';
  else if (ua.includes('Android')) os = 'Android';
  else if (ua.includes('iOS') || ua.includes('iPhone') || ua.includes('iPad')) os = 'iOS';
  
  return { browser, os };
};

// Helper function to get location data
const getLocationData = async () => {
  try {
    // Using ipapi.co free API (1000 requests/day, no key needed)
    const response = await fetch('https://ipapi.co/json/');
    const data = await response.json();
    
    return {
      country: data.country_name || null,
      region: data.region || null,
      city: data.city || null
    };
  } catch (error) {
    console.error('Error fetching location:', error);
    return { country: null, region: null, city: null };
  }
};

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, [pathname]);

  return null;
}

const App: React.FC = () => {
  useEffect(() => {
    const trackUniqueVisitor = async () => {
      try {
        // Check if this browser has visited before
        const hasVisited = localStorage.getItem('portfolio_visited');
        const visitorId = localStorage.getItem('portfolio_visitor_id') || 
                         `visitor_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
        
        const ua = navigator.userAgent;
        const { browser, os } = parseUserAgent(ua);
        const deviceType = getDeviceType();
        const referrer = document.referrer || 'Direct';
        const landingPage = window.location.pathname;
        
        if (!hasVisited) {
          // New visitor - get location and insert into database
          const location = await getLocationData();
          
          const { data, error } = await supabase
            .from('visitors')
            .insert([
              { 
                visitor_id: visitorId,
                first_visit: new Date().toISOString(),
                user_agent: ua,
                country: location.country,
                region: location.region,
                city: location.city,
                browser: browser,
                os: os,
                device_type: deviceType,
                referrer: referrer,
                landing_page: landingPage,
                visit_count: 1
              }
            ])
            .select();

          if (error) {
            console.error('Error recording visit:', error);
          } else {
            // Mark this browser as having visited
            localStorage.setItem('portfolio_visited', 'true');
            localStorage.setItem('portfolio_visitor_id', visitorId);
            
            // Get total count
            const { count } = await supabase
              .from('visitors')
              .select('*', { count: 'exact', head: true });
            
            const isNC = location.region === 'North Carolina';
            const isUS = location.country === 'United States';
            const locationMsg = isNC ? ' from North Carolina! 🎯' : isUS ? ' from the USA! 🇺🇸' : '!';
            
            console.log(`🎉 Welcome${locationMsg} You are unique visitor #${count || 1}`);
          }
        } else {
          // Returning visitor - update last visit and increment count
          const { data: existingVisitor } = await supabase
            .from('visitors')
            .select('visit_count')
            .eq('visitor_id', visitorId)
            .single();

          await supabase
            .from('visitors')
            .update({ 
              last_visit: new Date().toISOString(),
              visit_count: (existingVisitor?.visit_count || 0) + 1
            })
            .eq('visitor_id', visitorId);
          
          // Get total count
          const { count } = await supabase
            .from('visitors')
            .select('*', { count: 'exact', head: true });
          
          console.log(`👋 Welcome back! Total unique visitors: ${count || 0}`);
        }
      } catch (error) {
        console.error('Error tracking visitor:', error);
      }
    };

    trackUniqueVisitor();

    // Console command: Get total visitor count
    (window as any).getVisitorCount = async () => {
      try {
        const { count, error } = await supabase
          .from('visitors')
          .select('*', { count: 'exact', head: true });
        
        if (error) throw error;
        
        console.log(`📊 Total unique visitors: ${count || 0}`);
        return count || 0;
      } catch (error) {
        console.error('Error:', error);
        return 0;
      }
    };

    // Console command: Get geographic breakdown
    (window as any).getGeography = async () => {
      try {
        const { data, error } = await supabase
          .from('visitor_geography')
          .select('*');
        
        if (error) throw error;
        
        console.log('🌍 Geographic Breakdown:');
        console.table(data);
        
        // Show NC and US specific stats
        const usData = data?.filter(d => d.country === 'US') || [];
        const ncData = usData.find(d => d.region === 'North Carolina');
        const totalUS = usData.reduce((sum, d) => sum + (d.visitor_count || 0), 0);
        
        console.log(`\n🇺🇸 US Visitors: ${totalUS}`);
        console.log(`🎯 North Carolina: ${ncData?.visitor_count || 0}`);
      } catch (error) {
        console.error('Error:', error);
      }
    };

    // Console command: Get device breakdown
    (window as any).getDeviceStats = async () => {
      try {
        const { data, error } = await supabase
          .from('visitor_devices')
          .select('*');
        
        if (error) throw error;
        
        console.log('📱 Device & Browser Stats:');
        console.table(data);
      } catch (error) {
        console.error('Error:', error);
      }
    };

    // Console command: Get recent visitors
    (window as any).getRecentVisitors = async (limit = 10) => {
      try {
        const { data, error } = await supabase
          .from('visitors')
          .select('first_visit, last_visit, country, region, city, browser, device_type, referrer')
          .order('last_visit', { ascending: false })
          .limit(limit);
        
        if (error) throw error;
        
        console.log(`👥 Last ${limit} Visitors:`);
        console.table(data);
      } catch (error) {
        console.error('Error:', error);
      }
    };

    console.log('💡 Commands available:');
    console.log('  - getVisitorCount() - Total unique visitors');
    console.log('  - getGeography() - Geographic breakdown (NC/US focus)');
    console.log('  - getDeviceStats() - Device and browser statistics');
    console.log('  - getRecentVisitors(limit) - Recent visitor details');
  }, []);

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