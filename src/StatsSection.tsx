import React, { useState, useEffect, useRef } from 'react';

const StatsSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [counts, setCounts] = useState([0, 0, 0, 0]);
  const animationStarted = useRef(false);
  const NICK_BIRTH_YEAR = 1999;
  const age = new Date().getFullYear() - NICK_BIRTH_YEAR;

  const stats = [
    { value: age, label: 'Age' },
    { value: 4, label: 'Years of experience' },
    { value: 16, label: 'Projects worked on' },
    { value: 8, label: 'Projects Deployed' }
  ];

  useEffect(() => {
    // Trigger visibility animation
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 200);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (isVisible && !animationStarted.current) {
      animationStarted.current = true;
      
      stats.forEach((stat, index) => {
        const duration = 1500; // 1.5 seconds for counting
        const startDelay = index * 150; // Stagger each counter
        const steps = 60;
        const increment = stat.value / steps;
        let currentStep = 0;

        setTimeout(() => {
          const interval = setInterval(() => {
            currentStep++;
            const newValue = Math.min(Math.ceil(increment * currentStep), stat.value);
            
            setCounts(prev => {
              const newCounts = [...prev];
              newCounts[index] = newValue;
              return newCounts;
            });

            if (currentStep >= steps) {
              clearInterval(interval);
            }
          }, duration / steps);
        }, startDelay);
      });
    }
  }, [isVisible]);

  return (
    <section style={{
      width: '100%',
      maxWidth: '750px',
      margin: '3rem auto',
      padding: '0 1rem',
      position: 'relative',
      zIndex: 10
    }}>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gap: '2rem',
        justifyItems: 'center'
      }}>
        {stats.map((stat, index) => {
          const isDesktop = typeof window !== 'undefined' && window.innerWidth >= 1280;
          const shouldBlur = hoveredIndex !== null && hoveredIndex !== index;
          
          return (
            <div 
              key={index}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.75rem',
                gridColumn: isDesktop ? 'auto' : 'auto',
                width: '100%',
                padding: '0.5rem',
                cursor: 'pointer',
                opacity: shouldBlur ? 0.3 : isVisible ? 1 : 0,
                filter: shouldBlur ? 'blur(5px)' : isVisible ? 'blur(0px)' : 'blur(10px)',
                transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                transition: shouldBlur 
                  ? 'opacity 0.5s ease-out, filter 0.5s ease-out' 
                  : 'opacity 0.7s ease-out, filter 0.7s ease-out, transform 0.7s ease-out',
                transitionDelay: shouldBlur ? '0ms' : `${index * 150}ms`
              }}
            >
              <span style={{
                fontSize: window.innerWidth >= 1280 ? '3.5rem' : window.innerWidth >= 768 ? '2.5rem' : '2rem',
                fontWeight: 800,
                color: '#ffffff',
                lineHeight: 1,
                textShadow: '0 0 20px rgba(255, 255, 255, 0.3)',
                flexShrink: 0
              }}>
                {counts[index]}
              </span>
              <p style={{
                fontSize: window.innerWidth >= 1280 ? '0.875rem' : '0.7rem',
                color: 'rgba(255, 255, 255, 0.7)',
                fontFamily: 'monospace',
                lineHeight: 1.3,
                maxWidth: window.innerWidth >= 1280 ? '120px' : '80px',
                margin: 0,
                textAlign: 'left',
                wordWrap: 'break-word'
              }}>
                {stat.label}
              </p>
            </div>
          );
        })}
      </div>
      <style>{`
        @media (min-width: 1280px) {
          section > div {
            grid-template-columns: repeat(4, 1fr) !important;
            gap: 1.5rem !important;
          }
        }
      `}</style>
    </section>
  );
};

export default StatsSection;