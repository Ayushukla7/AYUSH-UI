import React, { useEffect, useState } from 'react';

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (isTouch) return;

    const handleMouseMove = (e) => {
      setPos({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

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
    <div className="hidden md:block pointer-events-none fixed inset-0 z-50">
      {/* Center Black / Red Dot */}
      <div
        className="fixed w-3.5 h-3.5 rounded-full pointer-events-none z-50 transition-transform duration-75"
        style={{
          left: `${pos.x}px`,
          top: `${pos.y}px`,
          backgroundColor: isHovered ? '#FF1E27' : '#111111',
          transform: `translate(-50%, -50%) scale(${isHovered ? 1.5 : 1})`,
        }}
      />
      {/* Outer Precise Ring */}
      <div
        className="fixed rounded-full pointer-events-none border-2 -translate-x-1/2 -translate-y-1/2 transition-all duration-150 ease-out z-40"
        style={{
          left: `${pos.x}px`,
          top: `${pos.y}px`,
          width: isHovered ? '42px' : '28px',
          height: isHovered ? '42px' : '28px',
          borderColor: isHovered ? '#FF1E27' : 'rgba(0, 0, 0, 0.4)',
          backgroundColor: isHovered ? 'rgba(255, 30, 39, 0.15)' : 'transparent',
          transform: 'translate(-50%, -50%)',
        }}
      />
    </div>
  );
}
