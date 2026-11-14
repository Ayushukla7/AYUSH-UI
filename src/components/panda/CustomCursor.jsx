import React, { useEffect, useState } from 'react';

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only run on non-touch devices
    const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (isTouch) return;

    const handleMouseMove = (e) => {
      setPos({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      // Check if target is clickable
      const target = e.target;
      const isClickable = target.closest('a, button, [role="button"], input, textarea, select, .clickable');
      setIsHovered(!!isClickable);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div className="hidden md:block pointer-events-none fixed inset-0 z-50 transition-opacity duration-300">
      {/* Center Black Ink Dot */}
      <div
        className="fixed w-3 h-3 bg-[#141416] rounded-full -translate-x-1/2 -translate-y-1/2 pointer-events-none z-50 transition-transform duration-75"
        style={{
          left: `${pos.x}px`,
          top: `${pos.y}px`,
          transform: `translate(-50%, -50%) scale(${isHovered ? 1.6 : 1})`,
        }}
      />
      {/* Outer Paper Ring */}
      <div
        className="fixed rounded-full pointer-events-none border-2 border-[#141416] -translate-x-1/2 -translate-y-1/2 transition-all duration-150 ease-out z-40"
        style={{
          left: `${pos.x}px`,
          top: `${pos.y}px`,
          width: isHovered ? '48px' : '32px',
          height: isHovered ? '48px' : '32px',
          backgroundColor: isHovered ? 'rgba(254, 240, 138, 0.4)' : 'transparent',
          transform: 'translate(-50%, -50%)',
        }}
      />
    </div>
  );
}
