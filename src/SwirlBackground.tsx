import React, { useEffect, useRef } from 'react';

const { random } = Math;
const rand = (n: number) => n * random();
const fadeInOut = (t: number, m: number) => {
  const hm = 0.5 * m;
  return Math.abs((t + hm) % m - hm) / hm;
};

const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
const bubbleCount = isMobile ? 20 : 65; // 80% reduction for mobile
const bubblePropCount = 8; // Added fade threshold property
const bubblePropsLength = bubbleCount * bubblePropCount;
const baseSpeed = 0.15;
const rangeSpeed = 0.35;
const baseRadius = 2;
const rangeRadius = 6;
const baseHue = 125;
const rangeHue = 30;
const baseTTL = 400;
const rangeTTL = 500;
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

    // Calculate fade height based on horizontal position
    const getFadeHeight = (x: number, canvasWidth: number) => {
      const normalizedX = x / canvasWidth;
      const distanceFromCenter = Math.abs(normalizedX - 0.5);
      
      // Move the V curve down a bit more
      // Center: fade at 90% screen height (stay in bottom 10%)
      // Edges: fade at 25% screen height (can rise to 75% up the screen)
      const centerFadePercent = 0.90;
      const edgeFadePercent = 0.25;
      
      const fadePercent = centerFadePercent - (distanceFromCenter * 2) * (centerFadePercent - edgeFadePercent);
      
      return fadePercent;
    };

    const initBubble = (i: number) => {
      let x = rand(canvasA.width);
      
      // MASSIVELY reduce spawn rate in center - 95% chance to re-roll if in center
      const normalizedX = x / canvasA.width;
      const distanceFromCenter = Math.abs(normalizedX - 0.5);
      if (distanceFromCenter < 0.25 && random() < 0.95) {
        // Re-roll to try for edge position
        x = rand(canvasA.width);
      }
      
      // All bubbles spawn at same spot now
      const y = canvasA.height + rand(50);
      
      const speed = baseSpeed + rand(rangeSpeed);
      const radius = baseRadius + rand(rangeRadius);
      const hue = baseHue + rand(rangeHue);
      const life = 0;
      const ttl = baseTTL + rand(rangeTTL);
      const fadeThreshold = getFadeHeight(x, canvasA.width);

      bubbleProps.set([x, y, speed, radius, hue, life, ttl, fadeThreshold], i);
    };

    const drawBubble = (
      x: number, 
      y: number, 
      radius: number, 
      hue: number, 
      life: number, 
      ttl: number,
      fadeThreshold: number
    ) => {
      const fadeHeight = canvasA.height * fadeThreshold;
      
      // Fade OUT as bubbles approach the line from below
      let positionFade = 1;
      const fadeRange = 150; // Start fading 150px before the line
      const distanceFromLine = y - fadeHeight;
      
      if (distanceFromLine < fadeRange) {
        // Approaching or past the line - fade out
        positionFade = Math.max(0, distanceFromLine / fadeRange);
      }
      
      const lifeFade = fadeInOut(life, ttl);
      const opacity = lifeFade * positionFade;
      
      if (opacity < 0.01) return;
      
      ctxA.save();
      ctxA.beginPath();
      ctxA.arc(x, y, radius, 0, Math.PI * 2);
      ctxA.fillStyle = `hsla(${hue},100%,60%,${opacity * 0.6})`;
      ctxA.fill();
      
      // Glow effect
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
      const i6 = 5 + i, i7 = 6 + i, i8 = 7 + i;

      let x = bubbleProps[i];
      let y = bubbleProps[i2];
      const speed = bubbleProps[i3];
      const radius = bubbleProps[i4];
      const hue = bubbleProps[i5];
      let life = bubbleProps[i6];
      const ttl = bubbleProps[i7];
      const fadeThreshold = bubbleProps[i8];

      // Upward movement
      y -= speed;

      drawBubble(x, y, radius, hue, life, ttl, fadeThreshold);

      life++;

      bubbleProps[i] = x;
      bubbleProps[i2] = y;
      bubbleProps[i6] = life;

      // Reset bubble based on its specific fade threshold
      const fadeHeight = canvasA.height * fadeThreshold;
      const resetHeight = fadeHeight - (fadeHeight * 0.3);
      
      if (y < resetHeight || x < -radius || x > canvasA.width + radius || life > ttl) {
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

    resize();
    for (let i = 0; i < bubblePropsLength; i += bubblePropCount) {
      initBubble(i);
    }
    draw();

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