import React, { useRef, useState } from 'react';

export default function Card3DTilt({ 
  children, 
  className = "", 
  glareColor = "rgba(255, 170, 0, 0.15)",
  maxRotation = 6,
  scaleOnHover = 1.01
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
      opacity: 0.4
    });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotation({ x: 0, y: 0 });
    setGlarePosition(prev => ({ ...prev, opacity: 0 }));
  };

  return (
    <div 
      className="perspective-1000 w-full"
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        ref={cardRef}
        style={{
          transform: isHovered 
            ? `rotateX(${rotation.x.toFixed(2)}deg) rotateY(${rotation.y.toFixed(2)}deg) scale3d(${scaleOnHover}, ${scaleOnHover}, 1.02)` 
            : 'rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)',
          transition: isHovered ? 'transform 0.12s ease-out' : 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
          transformStyle: 'preserve-3d'
        }}
        className={`relative overflow-hidden rounded-2xl ${className}`}
      >
        {children}

        {/* 3D Dynamic Specular Light Glare */}
        <div
          className="pointer-events-none absolute inset-0 rounded-2xl transition-opacity duration-300 z-30"
          style={{
            background: `radial-gradient(circle at ${glarePosition.x}% ${glarePosition.y}%, ${glareColor} 0%, transparent 65%)`,
            opacity: glarePosition.opacity,
            mixBlendMode: 'screen'
          }}
        />
      </div>
    </div>
  );
}
