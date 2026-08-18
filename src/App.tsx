import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutSection from './components/AboutSection';
import CoreExpertiseSection from './components/CoreExpertiseSection';
import ServicesSection from './components/ServicesSection';
import IndustriesSection from './components/IndustriesSection';
import WhyChooseSection from './components/WhyChooseSection';
import ApproachSection from './components/ApproachSection';
import ProjectsPortfolio from './components/ProjectsPortfolio';
import MetroSpecialSection from './components/MetroSpecialSection';
import BridgeSection from './components/BridgeSection';
import FounderTrackRecordSection from './components/FounderTrackRecordSection';
import InternationalExperienceSection from './components/InternationalExperienceSection';
import ToolsAndCodesSection from './components/ToolsAndCodesSection';
import TeamSection from './components/TeamSection';
import CtaSection from './components/CtaSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

import ProjectDetailModal from './components/ProjectDetailModal';
import ProjectInquiryModal from './components/ProjectInquiryModal';
import BlueprintViewerModal from './components/BlueprintViewerModal';

import { ProjectItem } from './types';

export default function App() {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [inquiryModalOpen, setInquiryModalOpen] = useState(false);
  const [inquirySubject, setInquirySubject] = useState<string | undefined>(undefined);
  const [blueprintModalOpen, setBlueprintModalOpen] = useState(false);

  const handleOpenInquiry = (subject?: string) => {
    setInquirySubject(subject);
    setInquiryModalOpen(true);
  };

  const handleCloseInquiry = () => {
    setInquiryModalOpen(false);
    setInquirySubject(undefined);
  };

  return (
    <div className="min-h-screen bg-[#0F141E] text-slate-100 font-sans selection:bg-[#F27D26] selection:text-white">
      {/* Top Navbar */}
      <Navbar 
        onOpenInquiry={() => handleOpenInquiry('General Structural Consultation')} 
        onOpenBlueprint={() => setBlueprintModalOpen(true)}
      />

      {/* Main Content Sections */}
      <main>
        {/* Hero Section */}
        <Hero 
          onOpenInquiry={() => handleOpenInquiry('New Structural Design Project')}
          onOpenBlueprint={() => setBlueprintModalOpen(true)}
        />

        {/* 1. About Us */}
        <AboutSection 
          onOpenInquiry={() => handleOpenInquiry('About Tatva Structura Inquiry')}
          onOpenBlueprintModal={() => setBlueprintModalOpen(true)}
        />

        {/* 2. Core Expertise */}
        <CoreExpertiseSection 
          onOpenInquiry={handleOpenInquiry} 
        />

        {/* 3. Detailed Services Grid */}
        <ServicesSection 
          onOpenInquiry={handleOpenInquiry} 
        />

        {/* 4. Industries We Serve (12 Sectors) */}
        <IndustriesSection 
          onOpenInquiry={handleOpenInquiry} 
        />

        {/* 5. Why Choose Tatva Structura */}
        <WhyChooseSection />

        {/* 6. Our Engineering Approach (4 Steps) */}
        <ApproachSection />

        {/* 7. Projects Portfolio (Filterable) */}
        <ProjectsPortfolio 
          onSelectProject={(proj) => setSelectedProject(proj)}
          onOpenInquiry={handleOpenInquiry}
        />

        {/* 8. Metro & Transportation Projects */}
        <MetroSpecialSection 
          onOpenInquiry={handleOpenInquiry}
        />

        {/* 9. Bridge Projects & Flyovers */}
        <BridgeSection 
          onOpenInquiry={handleOpenInquiry}
        />

        {/* 10. Founder's Track Record (Expandable) */}
        <FounderTrackRecordSection 
          onOpenInquiry={handleOpenInquiry}
        />

        {/* 11. Global Engineering Experience (International) */}
        <InternationalExperienceSection 
          onOpenInquiry={handleOpenInquiry}
        />

        {/* 12. Engineering Tools & Global Design Codes */}
        <ToolsAndCodesSection />

        {/* 13. Our Core Team */}
        <TeamSection 
          onOpenInquiry={handleOpenInquiry}
        />

        {/* 14. Primary CTA */}
        <CtaSection 
          onOpenInquiry={handleOpenInquiry}
        />

        {/* 15. Contact Section */}
        <ContactSection 
          initialSubject={inquirySubject}
        />
      </main>

      {/* Footer */}
      <Footer 
        onOpenInquiry={() => handleOpenInquiry('Footer Consultation Request')}
      />

      {/* Modals */}
      <ProjectDetailModal 
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onOpenInquiry={handleOpenInquiry}
      />

      <ProjectInquiryModal 
        isOpen={inquiryModalOpen}
        onClose={handleCloseInquiry}
        initialSubject={inquirySubject}
      />

      <BlueprintViewerModal 
        isOpen={blueprintModalOpen}
        onClose={() => setBlueprintModalOpen(false)}
      />
    </div>
  );
}
