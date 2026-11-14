import React from 'react';
import { resumeData } from '../../data/projectsData';

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-24 sm:py-32 relative overflow-hidden graph-paper-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Section Heading */}
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between pb-8 border-b-2 border-[#111111] mb-14 sm:mb-20 gap-4">
          <div>
            <div className="flex items-center gap-2.5 mb-2.5">
              <span className="w-2.5 h-2.5 bg-[#FF1E27]" />
              <span className="font-mono text-xs font-bold text-[#666666] tracking-widest uppercase">
                PRODUCTION TRACK RECORD
              </span>
            </div>
            <h2 className="font-extended font-black text-4xl sm:text-6xl text-[#111111] tracking-tight uppercase leading-none">
              EXPERIENCE
            </h2>
          </div>

          <div className="font-mono text-xs font-bold text-[#111111] bg-white border-2 border-[#111111] px-3.5 py-1.5 shadow-[2px_2px_0px_#111111]">
            4 VERIFIED ROLES
          </div>
        </div>

        {/* Experience Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10">
          {resumeData.experiences.map((exp, idx) => (
            <div
              key={idx}
              className="bg-white border-2 border-[#111111] p-6 sm:p-8 shadow-brutal flex flex-col justify-between group hover:shadow-brutal-lg hover:border-[#FF1E27] transition-all relative"
            >
              <div>
                <div className="flex items-start justify-between pb-4 border-b border-[#111111]/10 mb-5 gap-3">
                  <div>
                    <span className="font-mono text-[10px] text-[#666666] font-bold uppercase tracking-wider block mb-1">
                      ROLE // 0{idx + 1}
                    </span>
                    <h3 className="font-extended font-black text-xl sm:text-2xl text-[#111111] leading-tight group-hover:text-[#FF1E27] transition-colors">
                      {exp.role}
                    </h3>
                    <span className="font-mono text-xs font-bold text-[#111111] block mt-1.5">
                      {exp.company}
                    </span>
                  </div>

                  <div className="flex flex-col items-end gap-1.5 flex-shrink-0">
                    <span className="px-2.5 py-1 bg-[#ECECEC] border border-[#111111] font-mono text-[11px] font-bold text-[#111111]">
                      {exp.period}
                    </span>
                    {exp.isCurrent && (
                      <span className="px-2 py-0.5 bg-[#FF1E27] text-white font-mono text-[9px] font-bold uppercase flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                        <span>ACTIVE</span>
                      </span>
                    )}
                  </div>
                </div>

                <div className="flex items-center gap-1.5 text-xs text-[#666666] font-mono mb-5">
                  <span>📍</span>
                  <span>{exp.location}</span>
                </div>

                {/* Highlights */}
                <ul className="space-y-2.5 font-sans">
                  {exp.highlights.map((point, pIdx) => (
                    <li key={pIdx} className="text-xs sm:text-[13px] text-[#333333] leading-relaxed flex items-start gap-2.5">
                      <span className="text-[#FF1E27] font-bold mt-0.5">✦</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 pt-4 border-t border-[#111111]/10 flex items-center justify-between text-[11px] font-mono text-[#666666]">
                <span>VERIFIED RECORD</span>
                <span className="font-bold text-[#111111]">AYUSH SHUKLA ✦</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
