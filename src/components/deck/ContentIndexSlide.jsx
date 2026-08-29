import React from 'react';

const indexItems = [
  { num: "01", label: "FEED DESIGN", desc: "Multi-Slide Cyber & Data Carousels" },
  { num: "02", label: "UI/UX & SAAS", desc: "StudentERP.io Web Dashboard" },
  { num: "03", label: "WEB PLATFORM", desc: "Technovation Club Landing Page" },
  { num: "04", label: "MERCHANDISE", desc: "Team Techno Apparel & T-Shirt" },
  { num: "05", label: "PROMOTIONS", desc: "Event Posters, Ads & Editorial" },
];

export default function ContentIndexSlide() {
  return (
    <div className="deck-slide rounded-xl p-6 sm:p-8 flex flex-col justify-between min-h-[200px]">
      <div className="flex items-center justify-between border-b border-white/10 pb-2 mb-4">
        <h2 className="deck-header-text text-3xl sm:text-4xl text-[#f3f6ec]">
          CONTENT
        </h2>
        <span className="text-xs font-mono text-[#9cb5bf]">INDEX</span>
      </div>

      {/* 01 02 03 04 05 Numbers Grid matching reference */}
      <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 py-2">
        {indexItems.map((item, idx) => (
          <div key={idx} className="bg-black/20 p-2.5 rounded-lg border border-white/5 flex flex-col">
            <span className="font-display text-2xl sm:text-3xl font-black text-[#f3f6ec] leading-none mb-1">
              {item.num}
            </span>
            <span className="text-[10px] font-display font-bold tracking-wider text-[#dbe3cf] uppercase">
              {item.label}
            </span>
            <span className="text-[9px] font-mono text-[#9cb5bf] line-clamp-1">
              {item.desc}
            </span>
          </div>
        ))}
      </div>

      <div className="pt-2 border-t border-white/10 flex justify-between text-[11px] font-mono text-[#9cb5bf]">
        <span>Index & Repertoire Overview</span>
        <span>03 / 08</span>
      </div>
    </div>
  );
}
