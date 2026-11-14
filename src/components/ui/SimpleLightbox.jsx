import React, { useEffect } from 'react';

export default function SimpleLightbox({ imageSrc, title, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  if (!imageSrc) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/75 backdrop-blur-sm animate-fadeIn"
      onClick={onClose}
    >
      <div 
        className="relative max-w-5xl w-full bg-[#FFFFFF] border-2 border-[#111111] shadow-[8px_8px_0px_#FF1E27] flex flex-col overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Brutalist Top bar */}
        <div className="flex items-center justify-between px-5 py-3.5 bg-[#111111] text-white border-b-2 border-[#111111]">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 bg-[#FF1E27]" />
            <span className="font-mono text-xs font-bold text-white tracking-wider truncate">
              {title || "DELIVERABLE_PREVIEW.PNG"}
            </span>
          </div>
          <button 
            onClick={onClose}
            className="px-3 py-1 bg-[#FF1E27] text-white text-xs font-mono font-bold hover:bg-white hover:text-black transition-colors"
          >
            CLOSE ✕
          </button>
        </div>

        {/* Image Display */}
        <div className="overflow-auto p-4 sm:p-6 flex items-center justify-center bg-[#ECECEC] graph-paper-bg">
          <img 
            src={imageSrc} 
            alt={title || "Preview"} 
            className="max-h-[75vh] w-auto object-contain border-2 border-[#111111] shadow-brutal"
          />
        </div>
      </div>
    </div>
  );
}
