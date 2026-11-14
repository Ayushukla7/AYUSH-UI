import React from 'react';
import { personalInfo } from '../../data/projectsData';

export default function AchievementsSection() {
  return (
    <section className="py-20 relative overflow-hidden graph-paper-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Section Heading */}
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between pb-6 border-b-2 border-[#111111] mb-12 gap-3">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2.5 h-2.5 bg-[#FF1E27]" />
              <span className="font-mono text-xs font-bold text-[#666666] tracking-widest uppercase">
                HONORS & PODIUM WINS
              </span>
            </div>
            <h2 className="font-extended font-black text-4xl sm:text-6xl text-[#111111] tracking-tight uppercase leading-none">
              AWARDS & MILESTONES
            </h2>
          </div>

          <div className="font-mono text-xs font-bold text-[#111111] bg-white border-2 border-[#111111] px-3 py-1 shadow-[2px_2px_0px_#111111]">
            PODIUM CREDENTIALS
          </div>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {personalInfo.achievements.map((item, idx) => (
            <div
              key={idx}
              className="bg-white border-2 border-[#111111] p-6 shadow-brutal flex flex-col justify-between group hover:shadow-brutal-lg hover:border-[#FF1E27] transition-all"
            >
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-[#111111]/10 mb-4">
                  <span className="font-mono text-[10px] font-bold uppercase tracking-wider bg-[#111111] text-white px-2 py-0.5 rounded-sm">
                    {item.metric}
                  </span>
                  <span className="font-mono text-xs font-bold text-[#666666]">
                    0{idx + 1}
                  </span>
                </div>

                <h3 className="font-extended font-bold text-lg text-[#111111] leading-snug mb-2 group-hover:text-[#FF1E27] transition-colors">
                  {item.title}
                </h3>

                <p className="font-sans text-xs text-[#555555] leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="mt-6 pt-3 border-t border-[#111111]/10 flex items-center justify-between text-[10px] font-mono font-bold text-[#111111]">
                <span>VERIFIED PODIUM</span>
                <span className="text-[#FF1E27]">🏆 ✦</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
