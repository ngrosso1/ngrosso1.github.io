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
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 200);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (isVisible && !animationStarted.current) {
      animationStarted.current = true;
      
      stats.forEach((stat, index) => {
        const duration = 1500;
        const startDelay = index * 150;
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
    <>
      <style>{`
        .stats-section {
          width: 100%;
          max-width: 1200px;
          margin: 3rem auto;
          padding: 0 1rem;
          position: relative;
          z-index: 10;
          box-sizing: border-box;
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1.5rem;
          justify-items: center;
          width: 100%;
          max-width: 600px;
          margin: 0 auto;
        }

        .stat-item {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.75rem;
          width: 100%;
          padding: 0.5rem;
          cursor: pointer;
          transition: opacity 0.5s ease-out, filter 0.5s ease-out, transform 0.7s ease-out;
        }

        .stat-item.visible {
          opacity: 1;
          filter: blur(0px);
          transform: translateY(0);
        }

        .stat-item.hidden {
          opacity: 0;
          filter: blur(10px);
          transform: translateY(20px);
        }

        .stat-item.blurred {
          opacity: 0.3;
          filter: blur(5px);
        }

        .stat-number {
          font-size: 2rem;
          font-weight: 800;
          color: #ffffff;
          line-height: 1;
          text-shadow: 0 0 20px rgba(255, 255, 255, 0.3);
          flex-shrink: 0;
        }

        .stat-label {
          font-size: 0.7rem;
          color: rgba(255, 255, 255, 0.7);
          font-family: monospace;
          line-height: 1.3;
          max-width: 80px;
          margin: 0;
          text-align: left;
          word-wrap: break-word;
        }

        @media (min-width: 768px) {
          .stats-grid {
            gap: 2rem;
            max-width: 700px;
          }

          .stat-number {
            font-size: 2.5rem;
          }

          .stat-label {
            font-size: 0.75rem;
            max-width: 100px;
          }
        }

        @media (min-width: 1280px) {
          .stats-grid {
            grid-template-columns: repeat(4, 1fr);
            gap: 1.5rem;
            max-width: 1000px;
          }

          .stat-number {
            font-size: 3.5rem;
          }

          .stat-label {
            font-size: 0.875rem;
            max-width: 120px;
          }
        }
      `}</style>

      <section className="stats-section">
        <div className="stats-grid">
          {stats.map((stat, index) => {
            const shouldBlur = hoveredIndex !== null && hoveredIndex !== index;
            let className = 'stat-item ';
            if (shouldBlur) {
              className += 'blurred';
            } else if (isVisible) {
              className += 'visible';
            } else {
              className += 'hidden';
            }

            return (
              <div 
                key={index}
                className={className}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                style={{
                  transitionDelay: shouldBlur ? '0ms' : `${index * 150}ms`
                }}
              >
                <span className="stat-number">
                  {counts[index]}
                </span>
                <p className="stat-label">
                  {stat.label}
                </p>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default StatsSection;