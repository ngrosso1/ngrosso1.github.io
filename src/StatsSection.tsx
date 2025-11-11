import React, { useState, useEffect } from 'react';

const StatsSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [counts, setCounts] = useState<number[]>([]);
  const NICK_BIRTH_YEAR = 1999;
  const age = new Date().getFullYear() - NICK_BIRTH_YEAR;


  const stats = [
    { value: age, label: 'Age' },
    { value: 4, label: 'Years of experience' },
    { value: 16, label: 'Projects worked on' },
    { value: 8, label: 'Projects Deployed' }
  ];

  useEffect(() => {
    // Delay before fade-in animation
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 200);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Initialize counters at 0
    setCounts(new Array(stats.length).fill(0));

    const duration = 2000; // total animation time (2 seconds)
    const frameRate = 30; // how many times per second we update
    const totalFrames = Math.round((duration / 1000) * frameRate);

    const interval = setInterval(() => {
      setCounts(prev =>
        prev.map((count, i) => {
          const increment = stats[i].value / totalFrames;
          const next = count + increment;
          return next >= stats[i].value ? stats[i].value : next;
        })
      );
    }, 1000 / frameRate);

    // Stop interval after duration
    const stop = setTimeout(() => clearInterval(interval), duration);

    return () => {
      clearInterval(interval);
      clearTimeout(stop);
    };
  }, []);

  return (
    <section
      style={{
        width: '100%',
        maxWidth: '750px',
        margin: '3rem auto',
        padding: '0 1rem',
        position: 'relative',
        zIndex: 10
      }}
    >
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '2rem',
          justifyItems: 'center'
        }}
      >
        {stats.map((stat, index) => {
          const isDesktop =
            typeof window !== 'undefined' && window.innerWidth >= 1280;
          const isHovered = hoveredIndex === index;
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
                width: '100%',
                padding: '0.5rem',
                cursor: 'pointer',
                opacity: isVisible ? (shouldBlur ? 0.3 : 1) : 0,
                filter: isVisible
                  ? shouldBlur
                    ? 'blur(5px)'
                    : 'blur(0px)'
                  : 'blur(10px)',
                transform: isVisible
                  ? isHovered
                    ? 'scale(1.05)'
                    : 'translateY(0)'
                  : 'translateY(20px)',
                transition:
                  'opacity 0.5s ease-out, filter 0.5s ease-out, transform 0.5s ease-out',
                transitionDelay:
                  isVisible && !shouldBlur && hoveredIndex === null
                    ? `${index * 150}ms`
                    : '0ms'
              }}
            >
              <span
                style={{
                  fontSize:
                    window.innerWidth >= 1280
                      ? '3.5rem'
                      : window.innerWidth >= 768
                      ? '2.5rem'
                      : '2rem',
                  fontWeight: 800,
                  color: '#ffffff',
                  lineHeight: 1,
                  textShadow: '0 0 20px rgba(255, 255, 255, 0.3)',
                  flexShrink: 0
                }}
              >
                {Math.floor(counts[index] || 0)}
              </span>
              <p
                style={{
                  fontSize:
                    window.innerWidth >= 1280 ? '0.875rem' : '0.7rem',
                  color: 'rgba(255, 255, 255, 0.7)',
                  fontFamily: 'monospace',
                  lineHeight: 1.3,
                  maxWidth:
                    window.innerWidth >= 1280 ? '120px' : '80px',
                  margin: 0,
                  textAlign: 'left',
                  wordWrap: 'break-word'
                }}
              >
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
