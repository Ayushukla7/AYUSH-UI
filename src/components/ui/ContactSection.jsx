import React, { useState } from 'react';
import { Mail, Copy, Check, Send, Sparkles, MapPin, Globe, ExternalLink } from 'lucide-react';
import { personalInfo } from '../../data/projectsData';
import { playSuccessSound, playHoverSound } from '../audio/soundEffects';

// Dedicated crisp SVG icons for designer social platforms
const SocialIcons = {
  LinkedIn: () => (
    <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.64a1.64 1.64 0 1 0 0 3.28 1.64 1.64 0 0 0 0-3.28Z" />
    </svg>
  ),
  Behance: () => (
    <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
      <path d="M22 7h-7v-2h7v2zm1.726 10c-.442 1.297-2.029 3-5.171 3-3.727 0-6.555-2.617-6.555-6.852 0-4.053 2.766-6.883 6.452-6.883 3.999 0 6.186 2.88 5.766 7.425h-9.336c.108 2.073 1.637 3.65 3.738 3.65 1.585 0 2.659-.728 3.092-1.862l2.014 1.522zm-7.669-5.11h5.059c-.114-1.802-1.282-2.825-2.585-2.825-1.442 0-2.368 1.053-2.474 2.825zm-11.057-5.89h4.512c2.04 0 3.483 1.011 3.483 2.822 0 1.246-.713 2.146-1.745 2.54 1.444.385 2.259 1.439 2.259 2.923 0 2.143-1.637 3.715-4.062 3.715h-4.447v-12zm2.637 4.793h1.724c.907 0 1.479-.472 1.479-1.233 0-.814-.645-1.206-1.554-1.206h-1.649v2.439zm0 4.887h1.942c1.077 0 1.765-.54 1.765-1.398 0-.915-.747-1.378-1.765-1.378h-1.942v2.776z" />
    </svg>
  ),
  Dribbble: () => (
    <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm6.605 4.61a8.502 8.502 0 0 1 1.93 5.312c-.407-.08-2.228-.43-4.296-.065-.098-.225-.198-.45-.304-.675 2.406-1.488 2.67-4.572 2.67-4.572zm-4.303-.984c.05.15.099.303.146.459-2.61.85-5.114.864-5.467.864a8.536 8.536 0 0 1 5.321-1.323zm-6.904 2.502c.31 0 2.455-.008 4.778-.767.098.207.19.416.278.627-2.67 1.547-5.074 4.548-5.32 4.872a8.532 8.532 0 0 1 .264-4.732zm-1.84 6.745c.205-.28 2.223-2.85 4.757-4.325.334.847.608 1.72.812 2.6-2.58.784-4.996 3.197-5.244 3.456a8.497 8.497 0 0 1-.325-1.731zm3.87 3.52c.202-.218 2.28-2.317 4.72-3.056.49 1.343.81 2.766.936 4.223a8.508 8.508 0 0 1-5.656-1.167zm7.348-.198c-.114-1.306-.412-2.585-.863-3.805 1.83-.34 3.454.023 3.792.115a8.537 8.537 0 0 1-2.929 3.69z" />
    </svg>
  ),
  GitHub: () => (
    <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
      <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z" />
    </svg>
  )
};

export default function ContactSection() {
  const [copied, setCopied] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: 'UI/UX Design',
    message: ''
  });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    playSuccessSound();
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    playSuccessSound();
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({ name: '', email: '', projectType: 'UI/UX Design', message: '' });
    }, 4000);
  };

  return (
    <section id="contact" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-panel rounded-3xl p-8 sm:p-12 border border-white/15 relative overflow-hidden shadow-2xl">
          {/* Ambient Glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 relative z-10">
            {/* Left Column: Direct Info & Quick Copy */}
            <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono mb-4">
                  <Sparkles className="w-3.5 h-3.5" />
                  LET'S WORK TOGETHER
                </div>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
                  Ready to build something <span className="text-gradient-cyan">exceptional?</span>
                </h2>
                <p className="text-slate-300 text-sm leading-relaxed mb-6">
                  Whether you need a full SaaS UI/UX design, interactive 3D web experience, high-converting landing page, or engaging social carousel series — let's bring your vision to life.
                </p>

                {/* Status Card */}
                <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 space-y-2 mb-6">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-xs font-semibold text-white">Current Status</span>
                  </div>
                  <p className="text-xs text-slate-300">
                    {personalInfo.status}
                  </p>
                </div>

                {/* Direct Email Copy Box */}
                <div className="p-4 rounded-2xl bg-[#090b14] border border-white/10 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3 overflow-hidden">
                    <div className="w-9 h-9 rounded-xl bg-cyan-500/20 text-cyan-400 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div className="truncate">
                      <span className="text-[10px] font-mono text-slate-400 block">DIRECT EMAIL</span>
                      <span className="text-xs font-mono font-bold text-white truncate">
                        {personalInfo.email}
                      </span>
                    </div>
                  </div>

                  <button
                    onClick={handleCopyEmail}
                    className={`px-3 py-2 rounded-xl text-xs font-mono font-semibold flex items-center gap-1.5 transition-all flex-shrink-0 cursor-pointer ${
                      copied
                        ? 'bg-emerald-500 text-black shadow-lg shadow-emerald-500/30'
                        : 'bg-white/10 hover:bg-white/20 text-white border border-white/10'
                    }`}
                  >
                    {copied ? (
                      <>
                        <Check className="w-3.5 h-3.5" /> Copied!
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" /> Copy
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* Social Links */}
              <div>
                <span className="text-xs font-mono text-slate-400 mb-3 block">FIND ME ONLINE:</span>
                <div className="flex flex-wrap gap-2.5">
                  {[
                    { label: "LinkedIn", url: personalInfo.socials.linkedin, Icon: SocialIcons.LinkedIn },
                    { label: "Behance", url: personalInfo.socials.behance, Icon: SocialIcons.Behance },
                    { label: "Dribbble", url: personalInfo.socials.dribbble, Icon: SocialIcons.Dribbble },
                    { label: "GitHub", url: personalInfo.socials.github, Icon: SocialIcons.GitHub }
                  ].map((s, idx) => (
                    <a
                      key={idx}
                      href={s.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      onMouseEnter={playHoverSound}
                      className="px-3 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 hover:text-cyan-300 text-xs font-mono flex items-center gap-2 transition-all hover:scale-105"
                    >
                      <s.Icon />
                      <span>{s.label}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Interactive Contact Form */}
            <div className="lg:col-span-7 bg-[#07090e]/90 border border-white/10 rounded-2xl p-6 sm:p-8">
              {formSubmitted ? (
                <div className="h-full flex flex-col items-center justify-center text-center py-12 space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 flex items-center justify-center animate-bounce">
                    <Check className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Message Received!</h3>
                  <p className="text-sm text-slate-300 max-w-sm">
                    Thank you for reaching out. I'll get back to you within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <h3 className="text-xl font-bold text-white mb-2">Send a Message</h3>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-mono text-slate-400 block mb-1">YOUR NAME</label>
                      <input 
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Alex Morgan"
                        className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-sm focus:border-cyan-400 focus:outline-none transition-colors"
                      />
                    </div>

                    <div>
                      <label className="text-xs font-mono text-slate-400 block mb-1">YOUR EMAIL</label>
                      <input 
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="alex@company.com"
                        className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-sm focus:border-cyan-400 focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-mono text-slate-400 block mb-1">PROJECT SCOPE</label>
                    <select
                      value={formData.projectType}
                      onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-[#090b14] border border-white/10 text-white text-sm focus:border-cyan-400 focus:outline-none transition-colors"
                    >
                      <option value="UI/UX Design">UI/UX Design (SaaS / Web App / Mobile)</option>
                      <option value="3D Portfolio / Web">3D & Interactive Web Experience</option>
                      <option value="Social Carousels">Social Media Carousels & Visuals</option>
                      <option value="Brand Identity">Brand Identity & Event Posters</option>
                      <option value="Full-Time Hiring">Full-Time / Freelance Role Opportunity</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-xs font-mono text-slate-400 block mb-1">PROJECT DETAILS / MESSAGE</label>
                    <textarea 
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell me about your project goals, timeline, and deliverables..."
                      className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-sm focus:border-cyan-400 focus:outline-none transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-xl font-bold text-sm bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 text-black hover:opacity-95 shadow-lg shadow-cyan-500/20 active:scale-[0.99] transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Send className="w-4 h-4 stroke-[2.5]" />
                    <span>Send Message</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
