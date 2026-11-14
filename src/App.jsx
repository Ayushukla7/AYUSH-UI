import React, { useState } from 'react';
import CustomCursor from './components/panda/CustomCursor';
import PandaNavbar from './components/panda/PandaNavbar';
import HeroSection from './components/panda/HeroSection';
import AboutSection from './components/panda/AboutSection';
import TheStudioSection from './components/panda/TheStudioSection';
import ExperienceSection from './components/panda/ExperienceSection';
import AchievementsSection from './components/panda/AchievementsSection';
import ProjectsSection from './components/panda/ProjectsSection';
import SkillsSection from './components/panda/SkillsSection';
import ContactSection from './components/panda/ContactSection';
import FooterSection from './components/panda/FooterSection';
import SimpleLightbox from './components/ui/SimpleLightbox';

export default function App() {
  const [lightboxData, setLightboxData] = useState({ isOpen: false, src: '', title: '' });

  const handleOpenImage = (src, title) => {
    setLightboxData({ isOpen: true, src, title });
  };

  const handleCloseLightbox = () => {
    setLightboxData({ isOpen: false, src: '', title: '' });
  };

  return (
    <div className="min-h-screen bg-[#ECECEC] text-[#111111] relative selection:bg-[#FF1E27] selection:text-white font-sans">
      {/* Interactive Custom Cursor */}
      <CustomCursor />

      {/* Top Brutalist Navbar */}
      <PandaNavbar />

      {/* Main Content Sections */}
      <main className="relative z-10 pt-16">
        {/* HERO SECTION */}
        <HeroSection />

        {/* ABOUT ME & TORN PAPER COLLAGE */}
        <AboutSection />

        {/* THE STU // STUDIO POLAROIDS & MARQUEE */}
        <TheStudioSection />

        {/* PORTFOLIO PROJECTS */}
        <ProjectsSection onOpenImage={handleOpenImage} />

        {/* CORE SKILLS & TOOLS */}
        <SkillsSection />

        {/* WORK EXPERIENCE */}
        <ExperienceSection />

        {/* ACHIEVEMENTS & PODIUM */}
        <AchievementsSection />

        {/* CONTACT & CONNECT */}
        <ContactSection />
      </main>

      {/* Notebook Paper Footer */}
      <FooterSection />

      {/* Lightweight Image Lightbox */}
      {lightboxData.isOpen && (
        <SimpleLightbox
          imageSrc={lightboxData.src}
          title={lightboxData.title}
          onClose={handleCloseLightbox}
        />
      )}
    </div>
  );
}
