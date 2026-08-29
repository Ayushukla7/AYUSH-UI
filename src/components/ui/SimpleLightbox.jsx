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
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8 bg-black/85 backdrop-blur-sm animate-fadeIn"
      onClick={onClose}
    >
      <div 
        className="relative max-w-5xl max-h-[90vh] bg-[#0c1f28] border border-white/20 rounded-xl overflow-hidden shadow-2xl flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top bar */}
        <div className="flex items-center justify-between px-4 py-3 bg-[#08151c] border-b border-white/10 text-xs font-mono text-[#f3f6ec]">
          <span className="truncate pr-4">{title || "Design Preview"}</span>
          <button 
            onClick={onClose}
            className="px-2.5 py-1 rounded bg-white/10 hover:bg-white/20 text-[#f3f6ec] transition-colors"
          >
            Close ✕
          </button>
        </div>

        {/* Image */}
        <div className="overflow-auto p-4 flex items-center justify-center bg-black/40">
          <img 
            src={imageSrc} 
            alt={title || "Preview"} 
            className="max-h-[75vh] w-auto object-contain rounded"
          />
        </div>
      </div>
    </div>
  );
}
