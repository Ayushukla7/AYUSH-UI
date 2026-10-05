import React, { useState } from 'react';
import { resumeData, personalInfo } from '../../data/projectsData';
import { SquiggleDoodle } from '../ui/DesignDoodles';

export default function ResumeSlide() {
  const [activeTab, setActiveTab] = useState('interactive'); // 'interactive' | 'ats'
  const [copied, setCopied] = useState(false);

  // Handle Copy Plaintext Resume to clipboard
  const handleCopyText = () => {
    const textResume = `
AYUSH SHUKLA
UI/UX & Graphic Designer
Phone: ${resumeData.profile.phone}
Email: ${resumeData.profile.email}
LinkedIn: ${resumeData.profile.linkedinText}
Portfolio: ${resumeData.profile.portfolioText}

========================================
PROFILE
========================================
${resumeData.profile.summary}

========================================
CORE SKILLS
========================================
• UI/UX: ${resumeData.skills.uiUx.join(', ')}
• Tools: ${resumeData.skills.tools.join(', ')}
• Frontend: ${resumeData.skills.frontend.join(', ')}
• Creative: ${resumeData.skills.creative.join(', ')}

========================================
DESIGN EXPERIENCE
========================================
${resumeData.experiences.map(exp => `
${exp.role} | ${exp.company}
${exp.period} • ${exp.location}
${exp.highlights.map(h => `  • ${h}`).join('\n')}
`).join('\n')}

========================================
SELECTED PROJECTS
========================================
${resumeData.projects.map(p => `
${p.name} | ${p.role} (${p.status})
${p.highlights.map(h => `  • ${h}`).join('\n')}
`).join('\n')}

========================================
EDUCATION
========================================
${resumeData.education.institution} (${resumeData.education.period})
${resumeData.education.degree}

========================================
ACHIEVEMENTS
========================================
${resumeData.achievements.map(a => `• ${a.title}: ${a.detail}`).join('\n')}
    `.trim();

    navigator.clipboard.writeText(textResume).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }).catch(err => {
      console.error('Failed to copy text', err);
    });
  };

  // Trigger Print Dialog
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="dark-deck-slide rounded-2xl p-5 sm:p-8 md:p-10 space-y-6 sm:space-y-8 relative select-none">
      {/* Top Meta Header */}
      <div className="flex flex-wrap items-center justify-between border-b border-white/10 pb-4 gap-3 relative z-10">
        <div className="relative inline-block">
          <h2 className="title-impact text-4xl sm:text-6xl md:text-7xl font-black leading-none tracking-wider">
            RESUME & CV
          </h2>
          <span className="handwriting-overlay absolute -bottom-2 sm:-bottom-3 right-0 text-2xl sm:text-4xl md:text-5xl -rotate-3 whitespace-nowrap">
            Experience & Skills
          </span>
        </div>

        {/* Action Controls & Tab Switcher */}
        <div className="flex flex-wrap items-center gap-2">
          {/* Tab Switcher */}
          <div className="bg-black/50 p-1 rounded-xl border border-white/10 flex items-center gap-1 text-xs font-mono">
            <button
              onClick={() => setActiveTab('interactive')}
              className={`px-3 py-1.5 rounded-lg transition-all ${
                activeTab === 'interactive'
                  ? 'bg-[#ffaa00] text-black font-bold shadow-md'
                  : 'text-slate-400 hover:text-white hover:bg-white/5'
              }`}
            >
              Interactive Deck
            </button>
            <button
              onClick={() => setActiveTab('ats')}
              className={`px-3 py-1.5 rounded-lg transition-all ${
                activeTab === 'ats'
                  ? 'bg-[#ffaa00] text-black font-bold shadow-md'
                  : 'text-slate-400 hover:text-white hover:bg-white/5'
              }`}
            >
              ATS Paper View
            </button>
          </div>

          {/* Quick Actions */}
          <button
            onClick={handlePrint}
            title="Print or Save as PDF"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/10 hover:bg-white/20 text-white border border-white/15 text-xs font-mono transition-all hover:scale-105"
          >
            <svg className="w-3.5 h-3.5 text-[#ffaa00]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
            </svg>
            <span>Print / PDF</span>
          </button>

          <button
            onClick={handleCopyText}
            title="Copy Plain Text Resume"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/10 hover:bg-white/20 text-white border border-white/15 text-xs font-mono transition-all hover:scale-105"
          >
            {copied ? (
              <>
                <svg className="w-3.5 h-3.5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-emerald-400 font-bold">Copied!</span>
              </>
            ) : (
              <>
                <svg className="w-3.5 h-3.5 text-[#ffaa00]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
                <span>Copy Text</span>
              </>
            )}
          </button>
        </div>
      </div>

      <div className="absolute top-6 right-6 hidden sm:block pointer-events-none">
        <SquiggleDoodle className="w-14 h-5 text-[#ffaa00]" />
      </div>

      {/* ========================================================================= */}
      {/* TAB 1: INTERACTIVE DECK VIEW */}
      {/* ========================================================================= */}
      {activeTab === 'interactive' && (
        <div className="space-y-6 relative z-10">
          {/* Executive Summary & Quick Stats */}
          <div className="bg-gradient-to-r from-black/60 via-[#12131a] to-black/60 rounded-2xl p-5 sm:p-6 border border-white/10 shadow-xl space-y-4">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="space-y-1 max-w-3xl">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#ffaa00] animate-pulse" />
                  <span className="text-xs font-mono uppercase tracking-widest text-[#ffaa00] font-bold">
                    Executive Designer Profile
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                  {resumeData.profile.summary}
                </p>
              </div>

              {/* Direct Quick Contact Chips */}
              <div className="flex md:flex-col flex-wrap gap-2 flex-shrink-0 text-xs font-mono">
                <a
                  href={`tel:${resumeData.profile.phone.replace(/\s+/g, '')}`}
                  className="px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 hover:text-[#ffaa00] transition-colors flex items-center gap-1.5"
                >
                  <span>📞</span>
                  <span>{resumeData.profile.phone}</span>
                </a>
                <a
                  href={`mailto:${resumeData.profile.email}`}
                  className="px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 hover:text-[#ffaa00] transition-colors flex items-center gap-1.5"
                >
                  <span>✉️</span>
                  <span>{resumeData.profile.email}</span>
                </a>
              </div>
            </div>

            {/* Quick Metrics Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-3 border-t border-white/10">
              <div className="bg-black/40 rounded-xl p-3 border border-white/5">
                <span className="text-2xl font-black text-white font-impact block leading-none">3+</span>
                <span className="text-[10px] font-mono text-slate-400">Design-Focused Roles</span>
              </div>
              <div className="bg-black/40 rounded-xl p-3 border border-white/5">
                <span className="text-2xl font-black text-[#ffaa00] font-impact block leading-none">10+</span>
                <span className="text-[10px] font-mono text-slate-400">High-Fidelity Projects</span>
              </div>
              <div className="bg-black/40 rounded-xl p-3 border border-white/5">
                <span className="text-2xl font-black text-white font-impact block leading-none">40+</span>
                <span className="text-[10px] font-mono text-slate-400">Visual Assets & Creatives</span>
              </div>
              <div className="bg-black/40 rounded-xl p-3 border border-white/5">
                <span className="text-2xl font-black text-emerald-400 font-impact block leading-none">1,500+</span>
                <span className="text-[10px] font-mono text-slate-400">Campaign Audience Reach</span>
              </div>
            </div>
          </div>

          {/* Section: Design Experience Timeline */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-lg sm:text-xl font-impact tracking-wide text-white uppercase flex items-center gap-2">
                <span className="text-[#ffaa00]">✦</span>
                <span>Design Experience</span>
              </h3>
              <span className="text-[11px] font-mono text-slate-400">4 Professional Roles</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {resumeData.experiences.map((exp, idx) => (
                <div
                  key={idx}
                  className="bg-black/40 rounded-xl p-5 border border-white/10 hover:border-[#ffaa00]/50 transition-all flex flex-col justify-between group"
                >
                  <div className="space-y-2.5">
                    {/* Role Header */}
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <div className="flex items-center gap-2">
                          <h4 className="text-base sm:text-lg font-bold text-white group-hover:text-[#ffaa00] transition-colors leading-tight">
                            {exp.role}
                          </h4>
                          {exp.isCurrent && (
                            <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-[9px] font-mono font-bold text-emerald-400 animate-pulse">
                              PRESENT
                            </span>
                          )}
                        </div>
                        <span className="text-xs font-mono text-[#ffaa00] block mt-0.5">
                          {exp.company}
                        </span>
                      </div>
                      <span className="text-[10px] font-mono text-slate-500 bg-black/60 px-2 py-1 rounded border border-white/5 whitespace-nowrap">
                        {exp.period}
                      </span>
                    </div>

                    <div className="flex items-center gap-1.5 text-[10px] font-mono text-slate-400 pb-1 border-b border-white/5">
                      <span>📍</span>
                      <span>{exp.location}</span>
                    </div>

                    {/* Bullet Highlights */}
                    <ul className="space-y-2 pt-1">
                      {exp.highlights.map((point, pIdx) => (
                        <li key={pIdx} className="text-xs text-slate-300 leading-relaxed flex items-start gap-2">
                          <span className="text-[#ffaa00] font-bold text-xs mt-0.5 flex-shrink-0">›</span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-4 pt-2.5 border-t border-white/5 flex items-center justify-between text-[10px] font-mono text-slate-400">
                    <span>Verified Role</span>
                    <span className="text-slate-300">Ayush Shukla</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Section: Core Skills Matrix (4 Pillar Cards) */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-lg sm:text-xl font-impact tracking-wide text-white uppercase flex items-center gap-2">
                <span className="text-[#ffaa00]">✦</span>
                <span>Core Skill Matrix</span>
              </h3>
              <span className="text-[11px] font-mono text-slate-400">Design • Tools • Tech • Creative</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {/* 1. UI/UX */}
              <div className="bg-black/40 rounded-xl p-4 border border-white/10 hover:border-[#ffaa00]/40 transition-all space-y-3">
                <div className="flex items-center justify-between border-b border-white/10 pb-2">
                  <span className="font-impact text-base text-white tracking-wide">UI/UX DESIGN</span>
                  <span className="text-xs">📐</span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {resumeData.skills.uiUx.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-2 py-0.5 rounded bg-white/5 border border-white/10 text-[11px] font-mono text-slate-200 hover:border-[#ffaa00]/50 hover:text-white transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* 2. Tools */}
              <div className="bg-black/40 rounded-xl p-4 border border-white/10 hover:border-[#ffaa00]/40 transition-all space-y-3">
                <div className="flex items-center justify-between border-b border-white/10 pb-2">
                  <span className="font-impact text-base text-white tracking-wide">DESIGN TOOLS</span>
                  <span className="text-xs">🎨</span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {resumeData.skills.tools.map((tool, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2 py-0.5 rounded bg-white/5 border border-white/10 text-[11px] font-mono text-slate-200 hover:border-[#ffaa00]/50 hover:text-white transition-colors"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              {/* 3. Frontend */}
              <div className="bg-black/40 rounded-xl p-4 border border-white/10 hover:border-[#ffaa00]/40 transition-all space-y-3">
                <div className="flex items-center justify-between border-b border-white/10 pb-2">
                  <span className="font-impact text-base text-white tracking-wide">FRONTEND STACK</span>
                  <span className="text-xs">⚡</span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {resumeData.skills.frontend.map((item, fIdx) => (
                    <span
                      key={fIdx}
                      className="px-2 py-0.5 rounded bg-white/5 border border-white/10 text-[11px] font-mono text-slate-200 hover:border-[#ffaa00]/50 hover:text-white transition-colors"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              {/* 4. Creative */}
              <div className="bg-black/40 rounded-xl p-4 border border-white/10 hover:border-[#ffaa00]/40 transition-all space-y-3">
                <div className="flex items-center justify-between border-b border-white/10 pb-2">
                  <span className="font-impact text-base text-white tracking-wide">CREATIVE & BRAND</span>
                  <span className="text-xs">✨</span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {resumeData.skills.creative.map((item, cIdx) => (
                    <span
                      key={cIdx}
                      className="px-2 py-0.5 rounded bg-white/5 border border-white/10 text-[11px] font-mono text-slate-200 hover:border-[#ffaa00]/50 hover:text-white transition-colors"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Section: Selected Projects, Education & Achievements (3-Col Grid) */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            {/* Selected Projects */}
            <div className="bg-black/40 rounded-xl p-5 border border-white/10 space-y-4 lg:col-span-2">
              <div className="flex items-center justify-between border-b border-white/10 pb-2.5">
                <h4 className="font-impact text-lg text-white tracking-wide uppercase flex items-center gap-1.5">
                  <span>Selected Projects</span>
                </h4>
                <span className="text-[10px] font-mono text-[#ffaa00]">Live Work</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {resumeData.projects.map((proj, idx) => (
                  <div key={idx} className="bg-white/5 rounded-lg p-3.5 border border-white/10 space-y-2">
                    <div className="flex items-center justify-between">
                      <h5 className="text-sm font-bold text-white flex items-center gap-1.5">
                        {proj.name}
                        <span className="text-slate-400 font-normal">|</span>
                        <span className="text-xs text-slate-300">{proj.role}</span>
                      </h5>
                      <span className="text-[9px] font-mono bg-[#ffaa00]/20 text-[#ffaa00] px-2 py-0.5 rounded border border-[#ffaa00]/30 font-bold">
                        {proj.status}
                      </span>
                    </div>

                    <ul className="space-y-1.5 text-xs text-slate-300">
                      {proj.highlights.map((h, hIdx) => (
                        <li key={hIdx} className="leading-relaxed flex items-start gap-1.5">
                          <span className="text-[#ffaa00] font-bold">›</span>
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Education & Achievements Column */}
            <div className="space-y-4">
              {/* Education */}
              <div className="bg-black/40 rounded-xl p-4 sm:p-5 border border-white/10 space-y-2">
                <div className="flex items-center justify-between border-b border-white/10 pb-2">
                  <h4 className="font-impact text-base sm:text-lg text-white tracking-wide uppercase">
                    Education
                  </h4>
                  <span className="text-[10px] font-mono text-slate-400">{resumeData.education.period}</span>
                </div>
                <div>
                  <h5 className="text-sm font-bold text-white">{resumeData.education.institution}</h5>
                  <p className="text-xs text-slate-300 mt-0.5">{resumeData.education.degree}</p>
                  <span className="text-[10px] font-mono text-[#ffaa00] block mt-1">📍 {resumeData.education.location}</span>
                </div>
              </div>

              {/* Achievements */}
              <div className="bg-black/40 rounded-xl p-4 sm:p-5 border border-white/10 space-y-2">
                <div className="flex items-center justify-between border-b border-white/10 pb-2">
                  <h4 className="font-impact text-base sm:text-lg text-white tracking-wide uppercase">
                    Honors & Podium
                  </h4>
                  <span className="text-[10px] font-mono text-emerald-400">National</span>
                </div>
                <div className="space-y-2 text-xs text-slate-300">
                  {resumeData.achievements.map((ach, aIdx) => (
                    <div key={aIdx} className="border-b border-white/5 pb-1.5 last:border-0 last:pb-0">
                      <strong className="text-white block">{ach.title}</strong>
                      <span className="text-slate-400 text-[11px] leading-relaxed block">{ach.detail}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* TAB 2: ATS CLEAN DOCUMENT / SHEET VIEW */}
      {/* ========================================================================= */}
      {activeTab === 'ats' && (
        <div className="space-y-4 relative z-10">
          <div className="flex items-center justify-between text-xs font-mono text-slate-400 bg-black/40 px-4 py-2 rounded-xl border border-white/10">
            <span>📄 Standard ATS Resume Sheet Preview</span>
            <button
              onClick={handlePrint}
              className="text-[#ffaa00] hover:underline flex items-center gap-1 font-bold"
            >
              <span>Click to Print / Save A4 PDF ↗</span>
            </button>
          </div>

          {/* Clean White Sheet / Document Container */}
          <div 
            id="printable-resume" 
            className="bg-[#ffffff] text-[#1a1a1a] rounded-xl p-6 sm:p-10 md:p-12 shadow-2xl border border-white/20 font-sans max-w-4xl mx-auto space-y-6"
          >
            {/* Header: Name & Contact */}
            <div className="text-center border-b-2 border-slate-900 pb-5 space-y-2">
              <h1 className="text-3xl sm:text-4xl font-black tracking-tight text-slate-950 font-serif">
                {resumeData.profile.name}
              </h1>
              <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-xs text-slate-700 font-medium">
                <span>{resumeData.profile.phone}</span>
                <span>•</span>
                <a href={`mailto:${resumeData.profile.email}`} className="text-slate-900 underline hover:text-[#ffaa00]">
                  {resumeData.profile.email}
                </a>
                <span>•</span>
                <a href={resumeData.profile.linkedin} target="_blank" rel="noopener noreferrer" className="text-slate-900 underline hover:text-[#ffaa00]">
                  {resumeData.profile.linkedinText}
                </a>
                <span>•</span>
                <a href={resumeData.profile.portfolio} target="_blank" rel="noopener noreferrer" className="text-slate-900 underline hover:text-[#ffaa00]">
                  {resumeData.profile.portfolioText}
                </a>
              </div>
            </div>

            {/* Profile */}
            <div className="space-y-1.5">
              <h2 className="text-sm font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1 font-serif">
                Profile
              </h2>
              <p className="text-xs text-slate-800 leading-relaxed text-justify">
                {resumeData.profile.summary}
              </p>
            </div>

            {/* Core Skills */}
            <div className="space-y-2">
              <h2 className="text-sm font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1 font-serif">
                Core Skills
              </h2>
              <div className="text-xs text-slate-800 space-y-1">
                <p>
                  <strong className="text-slate-950 font-semibold">UI/UX:</strong> {resumeData.skills.uiUx.join(', ')}
                </p>
                <p>
                  <strong className="text-slate-950 font-semibold">Tools:</strong> {resumeData.skills.tools.join(', ')}
                </p>
                <p>
                  <strong className="text-slate-950 font-semibold">Frontend:</strong> {resumeData.skills.frontend.join(', ')}
                </p>
                <p>
                  <strong className="text-slate-950 font-semibold">Creative:</strong> {resumeData.skills.creative.join(', ')}
                </p>
              </div>
            </div>

            {/* Design Experience */}
            <div className="space-y-3.5">
              <h2 className="text-sm font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1 font-serif">
                Design Experience
              </h2>
              <div className="space-y-3">
                {resumeData.experiences.map((exp, idx) => (
                  <div key={idx} className="space-y-1">
                    <div className="flex flex-col sm:flex-row sm:items-baseline justify-between text-xs font-semibold text-slate-950">
                      <span>{exp.role}</span>
                      <span className="text-slate-600 font-normal italic sm:text-right">{exp.period}</span>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:items-baseline justify-between text-xs text-slate-700 italic">
                      <span>{exp.company}</span>
                      <span className="sm:text-right">{exp.location}</span>
                    </div>
                    <ul className="list-disc list-outside pl-4 space-y-1 text-xs text-slate-800 leading-relaxed pt-0.5">
                      {exp.highlights.map((h, hIdx) => (
                        <li key={hIdx}>{h}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Selected Projects */}
            <div className="space-y-3">
              <h2 className="text-sm font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1 font-serif">
                Selected Projects
              </h2>
              <div className="space-y-2.5">
                {resumeData.projects.map((p, idx) => (
                  <div key={idx} className="space-y-1">
                    <div className="flex items-baseline justify-between text-xs font-semibold text-slate-950">
                      <span>{p.name} | {p.role}</span>
                      <span className="text-slate-600 font-normal italic">{p.status}</span>
                    </div>
                    <ul className="list-disc list-outside pl-4 space-y-0.5 text-xs text-slate-800 leading-relaxed">
                      {p.highlights.map((h, hIdx) => (
                        <li key={hIdx}>{h}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Education */}
            <div className="space-y-2">
              <h2 className="text-sm font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1 font-serif">
                Education
              </h2>
              <div className="space-y-0.5">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between text-xs font-semibold text-slate-950">
                  <span>{resumeData.education.institution}</span>
                  <span className="text-slate-600 font-normal italic">{resumeData.education.period}</span>
                </div>
                <p className="text-xs text-slate-800">{resumeData.education.degree}</p>
              </div>
            </div>

            {/* Achievements */}
            <div className="space-y-2">
              <h2 className="text-sm font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1 font-serif">
                Achievements
              </h2>
              <ul className="list-disc list-outside pl-4 space-y-1 text-xs text-slate-800 leading-relaxed">
                {resumeData.achievements.map((ach, idx) => (
                  <li key={idx}>
                    <strong className="text-slate-950">{ach.title}:</strong> {ach.detail}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* Footer Meta */}
      <div className="flex items-center justify-between text-[11px] sm:text-xs font-mono text-slate-400 pt-3 border-t border-white/10 relative z-10">
        <div className="flex items-center gap-2">
          <span>Ayush Shukla • Curriculum Vitae</span>
          <span className="text-slate-600 hidden sm:inline">|</span>
          <span className="text-slate-400 hidden sm:inline">Noida / Delhi NCR</span>
        </div>
        <span className="text-[#ffaa00] font-bold">07 / 08</span>
      </div>
    </div>
  );
}
