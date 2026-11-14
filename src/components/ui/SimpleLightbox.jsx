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
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm animate-fadeIn"
      onClick={onClose}
    >
      <div 
        className="relative max-w-5xl w-full bg-[#FFFFFF] border-2 border-[#141416] rounded-2xl overflow-hidden shadow-[8px_8px_0px_#141416] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Retro Window Top bar */}
        <div className="flex items-center justify-between px-5 py-3.5 bg-[#FAF7F0] border-b-2 border-[#141416]">
          <div className="flex items-center gap-2">
            <span className="w-3.5 h-3.5 rounded-full bg-[#EF4444] border border-[#141416]" />
            <span className="w-3.5 h-3.5 rounded-full bg-[#F59E0B] border border-[#141416]" />
            <span className="w-3.5 h-3.5 rounded-full bg-[#10B981] border border-[#141416]" />
            <span className="ml-3 font-mono text-xs font-bold text-[#141416] truncate">
              {title || "preview.png"}
            </span>
          </div>
          <button 
            onClick={onClose}
            className="px-3 py-1 rounded-md bg-[#FEF08A] border-2 border-[#141416] text-[#141416] text-xs font-mono font-bold shadow-[2px_2px_0px_#141416] hover:translate-x-[-1px] hover:translate-y-[-1px] transition-all"
          >
            CLOSE ✕
          </button>
        </div>

        {/* Image Display */}
        <div className="overflow-auto p-4 sm:p-6 flex items-center justify-center bg-[#F8F6F0]">
          <img 
            src={imageSrc} 
            alt={title || "Preview"} 
            className="max-h-[75vh] w-auto object-contain rounded-lg border border-[#E4DEC9] shadow-md"
          />
        </div>
      </div>
    </div>
  );
}
