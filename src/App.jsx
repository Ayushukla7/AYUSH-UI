import React, { useState } from 'react';
import CustomCursor from './components/panda/CustomCursor';
import PandaNavbar from './components/panda/PandaNavbar';
import HeroSection from './components/panda/HeroSection';
import AboutSection from './components/panda/AboutSection';
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
    <div className="min-h-screen bg-[#030307] text-[#e2e8f0] relative selection:bg-[#a855f7] selection:text-white">
      {/* Interactive Custom Cursor */}
      <CustomCursor />

      {/* Top Fixed Navbar */}
      <PandaNavbar />

      {/* Main Content Sections */}
      <main className="relative z-10">
        {/* HERO SECTION */}
        <HeroSection />

        {/* ABOUT ME */}
        <AboutSection />

        {/* WORK EXPERIENCE */}
        <ExperienceSection />

        {/* ACHIEVEMENTS & PODIUM */}
        <AchievementsSection />

        {/* PORTFOLIO PROJECTS */}
        <ProjectsSection onOpenImage={handleOpenImage} />

        {/* CORE SKILLS & TOOLS */}
        <SkillsSection />

        {/* CONTACT & CONNECT */}
        <ContactSection />
      </main>

      {/* Minimal Footer */}
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
