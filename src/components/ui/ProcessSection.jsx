import React from 'react';
import { Compass, Layout, Palette, PlayCircle, Layers, Sparkles } from 'lucide-react';
import { personalInfo } from '../../data/projectsData';
import { playHoverSound } from '../audio/soundEffects';

const icons = [Compass, Layout, Palette, PlayCircle, Layers];

export default function ProcessSection() {
  return (
    <section id="process" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            METHODOLOGY & APPROACH
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            The UI/UX Design <span className="text-gradient-cyan">Process</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            From discovering user friction to delivering high-fidelity 3D prototypes and scalable design systems.
          </p>
        </div>

        {/* 5-Step Process Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {personalInfo.processSteps.map((step, idx) => {
            const Icon = icons[idx] || Sparkles;
            return (
              <div
                key={idx}
                onMouseEnter={playHoverSound}
                className="glass-card rounded-2xl p-6 relative overflow-hidden group hover:border-cyan-400/50 flex flex-col justify-between"
              >
                {/* Step Watermark */}
                <div className="absolute -top-4 -right-2 text-6xl font-black font-mono text-white/[0.03] group-hover:text-cyan-500/10 transition-colors pointer-events-none">
                  {step.step}
                </div>

                <div>
                  {/* Step Header */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500/20 to-purple-500/20 border border-white/10 flex items-center justify-center text-cyan-400 group-hover:scale-110 group-hover:text-white group-hover:bg-cyan-500 transition-all duration-300 shadow-md">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-mono text-cyan-400/80 font-semibold">
                      STEP {step.step}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                    {step.title}
                  </h3>

                  <p className="text-xs text-slate-400 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Bottom Step Indicator Bar */}
                <div className="mt-6 pt-3 border-t border-white/5">
                  <div className="w-full h-1 rounded-full bg-white/10 overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-cyan-500 to-purple-500 transition-all duration-500 group-hover:w-full"
                      style={{ width: `${(idx + 1) * 20}%` }}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
