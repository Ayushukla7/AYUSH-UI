import React from 'react';
import { resumeData } from '../../data/projectsData';

export default function ResumeModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.open('/resume.html', '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md animate-fadeIn">
      {/* Background Click to Close */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* Modal Content Container */}
      <div className="relative z-10 w-full max-w-4xl max-h-[92vh] bg-[#12141a] border border-white/20 rounded-2xl shadow-2xl flex flex-col overflow-hidden">
        
        {/* Modal Toolbar Header */}
        <div className="flex items-center justify-between px-4 sm:px-6 py-3.5 bg-[#181a24] border-b border-white/10 text-white">
          <div className="flex items-center gap-2.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#ffaa00] animate-pulse" />
            <span className="font-bold text-sm sm:text-base font-mono">
              Ayush Shukla — Resume Paper
            </span>
          </div>

          <div className="flex items-center gap-2">
            {/* Open Full Paper in New Window */}
            <a
              href="/resume.html"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-xs font-mono text-white transition-colors"
            >
              <span>Open Standalone ↗</span>
            </a>

            {/* Print / Save PDF */}
            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#ffaa00] hover:bg-[#ffb733] text-black font-bold text-xs font-mono transition-colors shadow-sm"
            >
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
              </svg>
              <span>Print / PDF</span>
            </button>

            {/* Close Button */}
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg bg-white/5 hover:bg-white/15 text-slate-400 hover:text-white transition-colors"
              title="Close Modal"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        {/* Scrollable Paper View */}
        <div className="flex-1 overflow-y-auto p-3 sm:p-6 bg-[#090a0d] flex justify-center">
          <div className="bg-white text-black w-full max-w-3xl p-6 sm:p-10 md:p-12 shadow-2xl rounded font-serif text-[13.5px] leading-relaxed select-text">
            
            {/* Header */}
            <div className="text-center border-b border-black/20 pb-4 mb-4">
              <h1 className="text-2xl sm:text-3xl font-bold text-black mb-1">
                {resumeData.profile.name}
              </h1>
              <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-xs text-blue-700 font-sans">
                <span className="text-black">{resumeData.profile.phone}</span>
                <span>•</span>
                <a href={`mailto:${resumeData.profile.email}`} className="hover:underline text-blue-700">
                  {resumeData.profile.email}
                </a>
                <span>•</span>
                <a href={resumeData.profile.linkedin} target="_blank" rel="noopener noreferrer" className="hover:underline text-blue-700">
                  {resumeData.profile.linkedinText}
                </a>
                <span>•</span>
                <a href={resumeData.profile.portfolio} target="_blank" rel="noopener noreferrer" className="hover:underline text-blue-700">
                  {resumeData.profile.portfolioText}
                </a>
              </div>
            </div>

            {/* Profile */}
            <div className="mb-4">
              <h2 className="text-[15px] font-bold text-blue-800 mb-1">Profile</h2>
              <p className="text-slate-800 text-justify text-xs sm:text-[13px] leading-relaxed">
                {resumeData.profile.summary}
              </p>
            </div>

            {/* Core Skills */}
            <div className="mb-4 text-xs sm:text-[13px]">
              <h2 className="text-[15px] font-bold text-blue-800 mb-1">Core Skills</h2>
              <div className="space-y-1 text-slate-800">
                <p><strong className="text-black">UI/UX:</strong> {resumeData.skills.uiUx.join(', ')}</p>
                <p><strong className="text-black">Tools:</strong> {resumeData.skills.tools.join(', ')}</p>
                <p><strong className="text-black">Frontend:</strong> {resumeData.skills.frontend.join(', ')}</p>
                <p><strong className="text-black">Creative:</strong> {resumeData.skills.creative.join(', ')}</p>
              </div>
            </div>

            {/* Design Experience */}
            <div className="mb-4">
              <h2 className="text-[15px] font-bold text-blue-800 mb-1.5">Design Experience</h2>
              <div className="space-y-3">
                {resumeData.experiences.map((exp, idx) => (
                  <div key={idx} className="space-y-0.5">
                    <div className="flex justify-between items-baseline text-xs sm:text-[13.5px] font-bold text-black">
                      <span>{exp.role}</span>
                      <span className="font-normal italic text-slate-600 text-xs">{exp.period}</span>
                    </div>
                    <div className="flex justify-between items-baseline text-xs text-slate-600 italic">
                      <span>{exp.company}</span>
                      <span>{exp.location}</span>
                    </div>
                    <ul className="list-disc pl-4 space-y-0.5 text-xs text-slate-800 pt-0.5">
                      {exp.highlights.map((h, hIdx) => (
                        <li key={hIdx}>{h}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Selected Projects */}
            <div className="mb-4">
              <h2 className="text-[15px] font-bold text-blue-800 mb-1.5">Selected Projects</h2>
              <div className="space-y-2.5">
                {resumeData.projects.map((p, idx) => (
                  <div key={idx} className="space-y-0.5">
                    <div className="flex justify-between items-baseline text-xs sm:text-[13.5px] font-bold text-black">
                      <span>{p.name} | {p.role}</span>
                      <a href={p.link || "https://ayush-ui.vercel.app"} target="_blank" rel="noopener noreferrer" className="text-blue-700 font-normal italic text-xs hover:underline">
                        Live
                      </a>
                    </div>
                    <ul className="list-disc pl-4 space-y-0.5 text-xs text-slate-800">
                      {p.highlights.map((h, hIdx) => (
                        <li key={hIdx}>{h}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Education */}
            <div className="mb-4">
              <h2 className="text-[15px] font-bold text-blue-800 mb-1">Education</h2>
              <div className="flex justify-between items-baseline text-xs sm:text-[13.5px] font-bold text-black">
                <span>{resumeData.education.institution}</span>
                <span className="font-normal italic text-slate-600 text-xs">{resumeData.education.period}</span>
              </div>
              <p className="text-xs text-slate-700">{resumeData.education.degree}</p>
            </div>

            {/* Achievements */}
            <div>
              <h2 className="text-[15px] font-bold text-blue-800 mb-1">Achievements</h2>
              <ul className="list-disc pl-4 space-y-1 text-xs text-slate-800">
                {resumeData.achievements.map((ach, idx) => (
                  <li key={idx}>
                    <strong className="text-black">{ach.title}:</strong> {ach.detail}
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}
