import React, { useEffect, useRef } from 'react';

// Utility functions
const { random } = Math;
const rand = (n: number) => n * random();
const fadeInOut = (t: number, m: number) => {
  const hm = 0.5 * m;
  return Math.abs((t + hm) % m - hm) / hm;
};

// Bubble configuration
const bubbleCount = 100;
const bubblePropCount = 7; // Reduced since we removed wobble property
const bubblePropsLength = bubbleCount * bubblePropCount;
const baseSpeed = 0.15; // Reduced from 0.3 for slower movement
const rangeSpeed = 0.35; // Reduced from 0.7 for slower movement
const baseRadius = 2;
const rangeRadius = 6;
const baseHue = 125; // Centered on viridian (160-180 is viridian to cyan range)
const rangeHue = 30; // Range covers viridian, teal, cyan (145-190)
const baseTTL = 200;
const rangeTTL = 300;
const backgroundColor = 'hsla(200,60%,3%,1)';

const BubblingBackground: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasARef = useRef<HTMLCanvasElement>(null);
  const canvasBRef = useRef<HTMLCanvasElement>(null);
  const animationFrameRef = useRef<number>();

  useEffect(() => {
    if (!containerRef.current || !canvasARef.current || !canvasBRef.current) return;

    const canvasA = canvasARef.current;
    const canvasB = canvasBRef.current;
    const ctxA = canvasA.getContext('2d');
    const ctxB = canvasB.getContext('2d');

    if (!ctxA || !ctxB) return;

    const bubbleProps = new Float32Array(bubblePropsLength);

    const initBubble = (i: number) => {
      const x = rand(canvasA.width);
      const y = canvasA.height + rand(50); // Start just below screen
      const speed = baseSpeed + rand(rangeSpeed);
      const radius = baseRadius + rand(rangeRadius);
      const hue = baseHue + rand(rangeHue);
      const life = 0;
      const ttl = baseTTL + rand(rangeTTL);

      bubbleProps.set([x, y, speed, radius, hue, life, ttl], i);
    };

    const drawBubble = (
      x: number, 
      y: number, 
      radius: number, 
      hue: number, 
      life: number, 
      ttl: number
    ) => {
      // Fade out as bubble approaches top
      let positionFade = 1;
      if (y < canvasA.height * 0.15) {
        positionFade = Math.max(0, y / (canvasA.height * 0.15));
      }
      
      const lifeFade = fadeInOut(life, ttl);
      const opacity = lifeFade * positionFade;
      
      ctxA.save();
      ctxA.beginPath();
      ctxA.arc(x, y, radius, 0, Math.PI * 2);
      ctxA.fillStyle = `hsla(${hue},100%,60%,${opacity * 0.6})`;
      ctxA.fill();
      
      // Add a glow effect
      const gradient = ctxA.createRadialGradient(x, y, 0, x, y, radius);
      gradient.addColorStop(0, `hsla(${hue},100%,80%,${opacity})`);
      gradient.addColorStop(0.5, `hsla(${hue},100%,60%,${opacity * 0.5})`);
      gradient.addColorStop(1, `hsla(${hue},100%,60%,0)`);
      ctxA.fillStyle = gradient;
      ctxA.fill();
      ctxA.closePath();
      ctxA.restore();
    };

    const updateBubble = (i: number) => {
      const i2 = 1 + i, i3 = 2 + i, i4 = 3 + i, i5 = 4 + i;
      const i6 = 5 + i, i7 = 6 + i;

      let x = bubbleProps[i];
      let y = bubbleProps[i2];
      const speed = bubbleProps[i3];
      const radius = bubbleProps[i4];
      const hue = bubbleProps[i5];
      let life = bubbleProps[i6];
      const ttl = bubbleProps[i7];

      // Move bubble upward (no wobble)
      y -= speed;

      drawBubble(x, y, radius, hue, life, ttl);

      life++;

      bubbleProps[i] = x;
      bubbleProps[i2] = y;
      bubbleProps[i6] = life;

      // Reset bubble if it goes off screen or exceeds ttl
      if (y < -radius || x < -radius || x > canvasA.width + radius || life > ttl) {
        initBubble(i);
      }
    };

    const drawBubbles = () => {
      for (let i = 0; i < bubblePropsLength; i += bubblePropCount) {
        updateBubble(i);
      }
    };

    const renderGlow = () => {
      ctxB.save();
      ctxB.filter = 'blur(8px) brightness(200%)';
      ctxB.globalCompositeOperation = 'lighter';
      ctxB.drawImage(canvasA, 0, 0);
      ctxB.restore();

      ctxB.save();
      ctxB.filter = 'blur(4px) brightness(200%)';
      ctxB.globalCompositeOperation = 'lighter';
      ctxB.drawImage(canvasA, 0, 0);
      ctxB.restore();
    };

    const renderToScreen = () => {
      ctxB.save();
      ctxB.globalCompositeOperation = 'lighter';
      ctxB.drawImage(canvasA, 0, 0);
      ctxB.restore();
    };

    const resize = () => {
      const { innerWidth, innerHeight } = window;

      canvasA.width = innerWidth;
      canvasA.height = innerHeight;
      canvasB.width = innerWidth;
      canvasB.height = innerHeight;
    };

    const draw = () => {
      ctxA.clearRect(0, 0, canvasA.width, canvasA.height);
      ctxB.fillStyle = backgroundColor;
      ctxB.fillRect(0, 0, canvasB.width, canvasA.height);
      drawBubbles();
      renderGlow();
      renderToScreen();

      animationFrameRef.current = window.requestAnimationFrame(draw);
    };

    // Initialize
    resize();
    for (let i = 0; i < bubblePropsLength; i += bubblePropCount) {
      initBubble(i);
    }
    draw();

    // Event listeners
    window.addEventListener('resize', resize);

    return () => {
      window.removeEventListener('resize', resize);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  return (
    <div 
      ref={containerRef} 
      style={{ 
        position: 'fixed', 
        top: 0, 
        left: 0, 
        width: '100%', 
        height: '100%',
        zIndex: 0,
        pointerEvents: 'none'
      }}
    >
      <canvas ref={canvasARef} style={{ display: 'none' }} />
      <canvas 
        ref={canvasBRef} 
        style={{ 
          position: 'fixed', 
          top: 0,
          left: 0, 
          width: '100%', 
          height: '100%',
          display: 'block'
        }} 
      />
    </div>
  );
};

export default BubblingBackground;