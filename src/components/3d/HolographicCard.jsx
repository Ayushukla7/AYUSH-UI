import React, { useRef, useState } from 'react';
import { playHoverSound } from '../audio/soundEffects';

export default function HolographicCard({ 
  children, 
  className = "", 
  glareColor = "rgba(0, 240, 255, 0.25)",
  maxRotation = 12,
  scaleOnHover = 1.02,
  onClick
}) {
  const cardRef = useRef(null);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [glarePosition, setGlarePosition] = useState({ x: 50, y: 50, opacity: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -maxRotation;
    const rotateY = ((x - centerX) / centerX) * maxRotation;

    setRotation({ x: rotateX, y: rotateY });
    setGlarePosition({
      x: (x / rect.width) * 100,
      y: (y / rect.height) * 100,
      opacity: 0.6
    });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
    playHoverSound();
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotation({ x: 0, y: 0 });
    setGlarePosition(prev => ({ ...prev, opacity: 0 }));
  };

  return (
    <div 
      className="perspective-1000 w-full"
      onClick={onClick}
    >
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{
          transform: isHovered 
            ? `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg) scale3d(${scaleOnHover}, ${scaleOnHover}, 1.05)` 
            : 'rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)',
          transition: isHovered ? 'transform 0.1s ease-out' : 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)'
        }}
        className={`relative preserve-3d overflow-hidden rounded-2xl cursor-pointer ${className}`}
      >
        {children}

        {/* Dynamic Holographic Glare Layer */}
        <div
          className="pointer-events-none absolute inset-0 rounded-2xl transition-opacity duration-300 z-30"
          style={{
            background: `radial-gradient(circle at ${glarePosition.x}% ${glarePosition.y}%, ${glareColor} 0%, transparent 60%)`,
            opacity: glarePosition.opacity,
            mixBlendMode: 'screen'
          }}
        />

        {/* Subtle Edge Glow */}
        <div 
          className="pointer-events-none absolute inset-0 rounded-2xl border border-white/10 transition-opacity duration-300 z-20"
          style={{
            borderColor: isHovered ? glareColor : 'rgba(255, 255, 255, 0.08)'
          }}
        />
      </div>
    </div>
  );
}
