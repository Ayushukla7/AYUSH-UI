import React from 'react';
import { personalInfo } from '../../data/projectsData';

export default function AchievementsSection() {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center mb-14 space-y-2">
          <span className="text-purple-400 font-mono text-xs uppercase tracking-widest block font-bold">
            HONORS & PODIUMS
          </span>
          <h2 className="font-unbounded font-black text-3xl sm:text-5xl text-white tracking-tight leading-tight">
            Key <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-300">Milestones</span> & Wins
          </h2>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {personalInfo.achievements.map((item, idx) => (
            <div
              key={idx}
              className="purple-glass-card p-6 rounded-3xl space-y-3 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-mono text-purple-300 uppercase font-bold tracking-wider bg-purple-950/60 px-2.5 py-1 rounded-full border border-purple-500/30">
                    {item.metric}
                  </span>
                  <span className="text-xs font-mono text-slate-500">0{idx + 1}</span>
                </div>
                <h3 className="font-unbounded font-bold text-sm sm:text-base text-white group-hover:text-purple-300 transition-colors leading-snug">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="pt-3 border-t border-white/5 flex items-center justify-between text-[10px] font-mono text-slate-400">
                <span>Verified Recognition</span>
                <span className="text-purple-400 font-bold">Ayush Shukla</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
