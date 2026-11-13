import React from 'react';

export default function SkillsSection() {
  const tools = [
    {
      name: "Figma",
      role: "UI/UX & Design Systems",
      badge: "Primary Daily Driver",
      badgeColor: "bg-[#F24E1E]/15 text-[#F24E1E] border-[#F24E1E]/30",
      borderColor: "hover:border-[#F24E1E]/50",
      glowColor: "group-hover:shadow-[#F24E1E]/15",
      logo: (
        <svg className="w-8 h-8" viewBox="0 0 38 57" fill="none">
          <path d="M19 28.5C19 23.2533 23.2533 19 28.5 19C33.7467 19 38 23.2533 38 28.5C38 33.7467 33.7467 38 28.5 38C23.2533 38 19 33.7467 19 28.5Z" fill="#1ABCFE"/>
          <path d="M0 47.5C0 42.2533 4.25329 38 9.5 38H19V47.5C19 52.7467 14.7467 57 9.5 57C4.25329 57 0 52.7467 0 47.5Z" fill="#0ACF83"/>
          <path d="M19 0V19H28.5C33.7467 19 38 14.7467 38 9.5C38 4.25329 33.7467 0 28.5 0H19Z" fill="#FF7262"/>
          <path d="M0 9.5C0 14.7467 4.25329 19 9.5 19H19V0H9.5C4.25329 0 0 4.25329 0 9.5Z" fill="#F24E1E"/>
          <path d="M0 28.5C0 33.7467 4.25329 38 9.5 38H19V19H9.5C4.25329 19 0 23.2533 0 28.5Z" fill="#A259FF"/>
        </svg>
      ),
      description: "Atomic components, auto-layout, variable tokens, interactive clickable prototypes, and developer-ready design specs for SaaS dashboards and mobile apps.",
      tags: ["Auto-Layout", "Design Tokens", "Wireframing", "Component Libraries", "Dev Handoff"]
    },
    {
      name: "Adobe Photoshop",
      role: "Key Visuals & Photo Manipulation",
      badge: "Advanced Raster",
      badgeColor: "bg-[#31A8FF]/15 text-[#31A8FF] border-[#31A8FF]/30",
      borderColor: "hover:border-[#31A8FF]/50",
      glowColor: "group-hover:shadow-[#31A8FF]/15",
      logo: (
        <div className="w-12 h-12 rounded-2xl bg-[#001E36] border border-[#31A8FF]/40 flex items-center justify-center text-[#31A8FF] font-black text-xl font-mono shadow-md">
          Ps
        </div>
      ),
      description: "High-contrast commercial advertising visuals, realistic lighting and reflections, mood grading, product compositions, and event announcement posters.",
      tags: ["Color Grading", "Lighting & Shadows", "Photo Retouching", "Event Posters"]
    },
    {
      name: "Adobe Illustrator",
      role: "Vector Graphics & Apparel Design",
      badge: "Advanced Vector",
      badgeColor: "bg-[#FF9A00]/15 text-[#FF9A00] border-[#FF9A00]/30",
      borderColor: "hover:border-[#FF9A00]/50",
      glowColor: "group-hover:shadow-[#FF9A00]/15",
      logo: (
        <div className="w-12 h-12 rounded-2xl bg-[#330000] border border-[#FF9A00]/40 flex items-center justify-center text-[#FF9A00] font-black text-xl font-mono shadow-md">
          Ai
        </div>
      ),
      description: "Precision vector logo marks, scalable typography lockups, brand iconography, custom apparel back prints, and technical merchandise layouts.",
      tags: ["Vector Badges", "Apparel Prints", "Brand Identity", "Iconography"]
    },
    {
      name: "Adobe After Effects",
      role: "Motion Graphics & Micro-Animations",
      badge: "Motion Visuals",
      badgeColor: "bg-[#9999FF]/15 text-[#9999FF] border-[#9999FF]/30",
      borderColor: "hover:border-[#9999FF]/50",
      glowColor: "group-hover:shadow-[#9999FF]/15",
      logo: (
        <div className="w-12 h-12 rounded-2xl bg-[#1F004D] border border-[#9999FF]/40 flex items-center justify-center text-[#9999FF] font-black text-xl font-mono shadow-md">
          Ae
        </div>
      ),
      description: "Kinetic typography, UI micro-interaction teaser loops, social reveal animations, and technical video key visuals.",
      tags: ["UI Loops", "Kinetic Typography", "Event Teasers", "Keyframing"]
    },
    {
      name: "React.js",
      role: "Frontend Component Implementation",
      badge: "Production Code",
      badgeColor: "bg-[#61DAFB]/15 text-[#61DAFB] border-[#61DAFB]/30",
      borderColor: "hover:border-[#61DAFB]/50",
      glowColor: "group-hover:shadow-[#61DAFB]/15",
      logo: (
        <div className="w-12 h-12 rounded-2xl bg-[#00212B] border border-[#61DAFB]/40 flex items-center justify-center text-[#61DAFB] shadow-md">
          <svg className="w-7 h-7 fill-none stroke-current" viewBox="0 0 24 24" strokeWidth="1.5">
            <ellipse cx="12" cy="12" rx="10" ry="4.5" />
            <ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(60 12 12)" />
            <ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(120 12 12)" />
            <circle cx="12" cy="12" r="1.8" fill="currentColor" />
          </svg>
        </div>
      ),
      description: "Translating high-fidelity Figma components into modular, production-ready React applications with reusable props and responsive state management.",
      tags: ["Reusable Components", "Vite / Next.js", "Hooks & State", "Vercel Deployments"]
    },
    {
      name: "Tailwind CSS",
      role: "Utility-First Styling & Design Tokens",
      badge: "Daily Driver",
      badgeColor: "bg-[#38BDF8]/15 text-[#38BDF8] border-[#38BDF8]/30",
      borderColor: "hover:border-[#38BDF8]/50",
      glowColor: "group-hover:shadow-[#38BDF8]/15",
      logo: (
        <div className="w-12 h-12 rounded-2xl bg-[#001C24] border border-[#38BDF8]/40 flex items-center justify-center text-[#38BDF8] shadow-md">
          <svg className="w-7 h-7 fill-current" viewBox="0 0 24 24">
            <path d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z"/>
          </svg>
        </div>
      ),
      description: "Implementing exact tokenized design systems, custom glassmorphism, responsive mobile-first layouts, and accessible color contrasts.",
      tags: ["Design Tokens", "Glassmorphism", "Responsive Breakpoints", "Fluid Typography"]
    },
    {
      name: "Framer Motion",
      role: "Physics-Based UI Interactions",
      badge: "Interactions",
      badgeColor: "bg-[#FF0055]/15 text-[#FF0055] border-[#FF0055]/30",
      borderColor: "hover:border-[#FF0055]/50",
      glowColor: "group-hover:shadow-[#FF0055]/15",
      logo: (
        <div className="w-12 h-12 rounded-2xl bg-[#2B001A] border border-[#FF0055]/40 flex items-center justify-center text-[#FF0055] shadow-md">
          <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
            <path d="M4 0h16v8h-8zM4 8h8l8 8H4zM4 16h8v8z"/>
          </svg>
        </div>
      ),
      description: "Spring physics, seamless page layout transitions, gesture controls, layered scroll reveals, and micro-interaction states.",
      tags: ["Spring Physics", "Layout Transitions", "Gestures", "Scroll Animations"]
    },
    {
      name: "Canva Pro",
      role: "Rapid Multi-Slide Storytelling",
      badge: "High Output",
      badgeColor: "bg-[#00C4CC]/15 text-[#00C4CC] border-[#00C4CC]/30",
      borderColor: "hover:border-[#00C4CC]/50",
      glowColor: "group-hover:shadow-[#00C4CC]/15",
      logo: (
        <div className="w-12 h-12 rounded-2xl bg-[#002433] border border-[#00C4CC]/40 flex items-center justify-center text-[#00C4CC] font-bold text-sm font-display shadow-md">
          Canva
        </div>
      ),
      description: "Fast-turnaround social carousels, marketing graphics, and presentation decks reaching over 1,500+ attendees and community members.",
      tags: ["Social Carousels", "Presentation Decks", "Marketing Visuals"]
    }
  ];

  const methodologies = [
    { title: "Wireframing & Prototyping", desc: "Low-fidelity user flows to high-fidelity clickable Figma prototypes." },
    { title: "Design Systems & Tokens", desc: "Atomic component libraries, typography scale, and variable color palettes." },
    { title: "Information Architecture", desc: "Structuring complex data hierarchy for intuitive, friction-free user flows." },
    { title: "Visual Hierarchy & Layout", desc: "Intentional contrast, whitespace, and optical alignment that direct the eye." },
    { title: "Responsive Grid Systems", desc: "Mobile-first 8px and 12-column grid architectures that adapt gracefully." },
    { title: "Developer Handoff & Specs", desc: "Clear spacing, component states, and token names that engineers love." }
  ];

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-[#04040a]/80">
      {/* Background Aura */}
      <div className="blob-animate bottom-10 left-1/3 opacity-30" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading with Editorial Technical Label */}
        <div className="text-center mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-purple-950/60 border border-purple-500/20 text-xs font-mono text-purple-300">
            <span>[ 04 // TECHNICAL TOOLBOX ]</span>
          </div>

          <h2 className="font-display font-extrabold text-3xl sm:text-5xl md:text-6xl text-white tracking-[-0.035em] leading-tight">
            Software, Code <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-purple-300 to-indigo-200">& Engineering</span>
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 max-w-xl mx-auto font-sans">
            A comprehensive overview of industry design software, frontend frameworks, and core user-experience architecture methodologies.
          </p>
        </div>

        {/* Core Software & Tools Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-14">
          {tools.map((tool, idx) => (
            <div
              key={idx}
              className={`purple-glass-card p-6 rounded-3xl flex flex-col justify-between group border border-white/10 transition-all duration-300 ${tool.borderColor} hover:-translate-y-1`}
            >
              <div>
                {/* Tool Logo & Header */}
                <div className="flex items-start justify-between gap-3 mb-4">
                  <div className="p-1 rounded-2xl">
                    {tool.logo}
                  </div>
                  <span className={`px-2.5 py-1 rounded-full text-[10px] font-mono font-bold border ${tool.badgeColor}`}>
                    {tool.badge}
                  </span>
                </div>

                {/* Tool Name & Role */}
                <h3 className="font-display font-bold text-lg text-white group-hover:text-purple-300 transition-colors">
                  {tool.name}
                </h3>
                <span className="text-xs font-mono text-purple-400 block mb-3 font-semibold">
                  {tool.role}
                </span>

                {/* Description */}
                <p className="text-xs text-slate-300 leading-relaxed font-sans mb-4">
                  {tool.description}
                </p>
              </div>

              {/* Tags */}
              <div className="pt-3 border-t border-white/5 flex flex-wrap gap-1.5 font-mono">
                {tool.tags.map((tag, tIdx) => (
                  <span
                    key={tIdx}
                    className="px-2 py-0.5 rounded-md bg-white/5 text-[10px] text-slate-400"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Card: Core Design Architecture & Disciplines */}
        <div className="purple-glass-card p-8 sm:p-10 rounded-3xl border border-white/10">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 mb-8 border-b border-white/10 gap-3">
            <div>
              <span className="text-purple-400 font-mono text-xs uppercase tracking-widest font-semibold block mb-1">
                DISCIPLINE & PROCESS
              </span>
              <h3 className="font-display font-bold text-xl sm:text-2xl text-white">
                UI/UX Design Architecture & Methodologies
              </h3>
            </div>
            <span className="px-3 py-1 rounded-full bg-purple-950/60 border border-purple-500/30 text-xs font-mono text-purple-300 self-start sm:self-auto">
              Systematic Approach
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {methodologies.map((item, idx) => (
              <div key={idx} className="space-y-1.5 p-4 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-purple-500/30 transition-colors">
                <div className="flex items-center gap-2">
                  <span className="text-purple-400 font-bold">✦</span>
                  <h4 className="font-display font-bold text-sm text-white">
                    {item.title}
                  </h4>
                </div>
                <p className="text-xs text-slate-400 font-sans leading-relaxed pl-4">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
