import React from 'react';
import { personalInfo } from '../../data/projectsData';

export default function AchievementsSection() {
  const noteColors = [
    { bg: "bg-[#FEF08A]", rotate: "-rotate-2" },
    { bg: "bg-[#BBF7D0]", rotate: "rotate-1" },
    { bg: "bg-[#FED7AA]", rotate: "-rotate-1" },
    { bg: "bg-[#BAE6FD]", rotate: "rotate-2" }
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center mb-10">
          <span className="font-handwriting text-2xl sm:text-3xl text-[#52525B] -rotate-1 inline-block">
            podiums & credentials
          </span>
          <h2 className="font-pixel text-7xl sm:text-9xl text-[#141416] tracking-tight -mt-1 leading-none select-none">
            HONORS & AWARDS
          </h2>
        </div>

        {/* 4 Pastel Sticky Notes Bulletin Board */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {personalInfo.achievements.map((item, idx) => {
            const style = noteColors[idx % noteColors.length];
            return (
              <div
                key={idx}
                className={`${style.bg} ${style.rotate} hover:rotate-0 transition-transform border-2 border-[#141416] rounded-2xl p-6 shadow-brutal flex flex-col justify-between relative group`}
              >
                {/* Scotch tape on top */}
                <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-14 h-4 bg-white/70 border-l border-r border-dashed border-[#141416]/30 shadow-sm" />

                <div>
                  <div className="flex items-center justify-between pb-3 border-b border-[#141416]/20 mb-3">
                    <span className="font-mono text-[10px] font-bold uppercase tracking-wider bg-[#141416] text-white px-2 py-0.5 rounded">
                      {item.metric}
                    </span>
                    <span className="font-mono text-xs font-bold text-[#141416]">
                      0{idx + 1}
                    </span>
                  </div>

                  <h3 className="font-pixel text-2xl sm:text-3xl text-[#141416] leading-tight mb-2">
                    {item.title}
                  </h3>

                  <p className="font-sans text-xs text-[#141416]/85 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-[#141416]/20 flex items-center justify-between text-[10px] font-mono font-bold text-[#141416]">
                  <span>VERIFIED PODIUM</span>
                  <span>🏆 ✦</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
