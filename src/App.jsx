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
    <div className="min-h-screen bg-[#F8F6F0] text-[#141416] relative selection:bg-[#FEF08A] selection:text-[#141416] font-sans">
      {/* Interactive Custom Cursor */}
      <CustomCursor />

      {/* Top Floating Paper Navbar */}
      <PandaNavbar />

      {/* Main Content Sections */}
      <main className="relative z-10 pt-20">
        {/* HERO SECTION */}
        <HeroSection />

        {/* ABOUT ME */}
        <AboutSection />

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
