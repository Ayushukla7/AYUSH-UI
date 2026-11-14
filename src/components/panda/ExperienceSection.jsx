import React from 'react';
import { resumeData } from '../../data/projectsData';

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-20 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center mb-10">
          <span className="font-handwriting text-2xl sm:text-3xl text-[#52525B] -rotate-1 inline-block">
            leadership & roles
          </span>
          <h2 className="font-pixel text-7xl sm:text-9xl text-[#141416] tracking-tight -mt-1 leading-none select-none">
            EXPERIENCE
          </h2>
        </div>

        {/* Experience Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {resumeData.experiences.map((exp, idx) => (
            <div
              key={idx}
              className="bg-[#FFFFFF] border-2 border-[#141416] rounded-2xl p-6 sm:p-7 shadow-brutal flex flex-col justify-between group hover:shadow-brutal-lg transition-all relative overflow-hidden"
            >
              {/* Corner Washi Tape */}
              <div className="absolute -top-1 right-8 w-16 h-4 bg-[#FEF08A]/80 border-l border-r border-dashed border-[#141416]/30 rotate-2 z-20 shadow-sm" />

              <div>
                {/* Header Strip with Role & Period */}
                <div className="flex items-start justify-between gap-3 pb-3 border-b-2 border-[#141416]/10 mb-4">
                  <div>
                    <span className="font-mono text-[10px] text-[#52525B] font-bold uppercase tracking-wider block">
                      ROLE 0{idx + 1}
                    </span>
                    <h3 className="font-pixel text-2xl sm:text-3xl text-[#141416] leading-tight">
                      {exp.role}
                    </h3>
                    <span className="font-mono text-xs font-bold text-amber-700 block mt-0.5">
                      {exp.company}
                    </span>
                  </div>

                  <div className="flex flex-col items-end gap-1 flex-shrink-0">
                    <span className="px-2.5 py-1 rounded bg-[#FAF7F0] border-2 border-[#141416] text-[11px] font-mono font-bold text-[#141416] shadow-[2px_2px_0px_#141416]">
                      {exp.period}
                    </span>
                    {exp.isCurrent && (
                      <span className="px-2 py-0.5 rounded bg-[#BBF7D0] border border-[#141416] text-[10px] font-mono font-bold text-[#141416] flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse" />
                        <span>ACTIVE</span>
                      </span>
                    )}
                  </div>
                </div>

                <div className="flex items-center gap-1.5 text-xs text-[#52525B] font-mono mb-4">
                  <span>📍</span>
                  <span>{exp.location}</span>
                </div>

                {/* Highlights List */}
                <ul className="space-y-2.5 font-sans">
                  {exp.highlights.map((point, pIdx) => (
                    <li key={pIdx} className="text-xs sm:text-[13px] text-[#3F3F46] leading-relaxed flex items-start gap-2">
                      <span className="text-[#141416] font-bold mt-0.5">›</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Verified Card Footer */}
              <div className="mt-6 pt-3 border-t-2 border-[#141416]/10 flex items-center justify-between text-[11px] font-mono text-[#52525B]">
                <span>VERIFIED COMMUNITY RECORD</span>
                <span className="font-bold text-[#141416]">✦ AYUSH SHUKLA</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
