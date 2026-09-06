import React, { useState, useEffect, useCallback } from 'react';
import { 
  ArrowRight, 
  ChevronLeft, 
  ChevronRight, 
  ExternalLink,
  FileCode2,
  PhoneCall
} from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

interface HeroCarouselProps {
  onOpenInquiry: (initialSubject?: string) => void;
  onOpenBlueprint?: () => void;
  onExploreExpertise?: () => void;
  onViewProjects?: () => void;
}

interface SlideItem {
  id: string;
  bgImage: string;
  title: string;
}

const CAROUSEL_SLIDES: SlideItem[] = [
  {
    id: 'industrial-peb',
    bgImage: '/images/project_peb_warehouse_3d.jpg',
    title: 'Heavy Industrial & PEB Structures'
  },
  {
    id: 'peb-site-execution',
    bgImage: '/images/project_peb_site_erection.jpg',
    title: 'PEB Portal Framing & Site Execution'
  },
  {
    id: 'concrete-highrise',
    bgImage: '/images/project_mass_raft_rcc.jpg',
    title: 'Mass Raft & RCC High-Rise Framing'
  },
  {
    id: 'water-stp',
    bgImage: '/images/project_water_treatment_stp.jpg',
    title: '215 MLD Water & Sewage Treatment Plants'
  },
  {
    id: 'power-substations',
    bgImage: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=2000&q=85',
    title: 'Power Stations & Substations'
  }
];

const AUTOPLAY_INTERVAL = 5000;

export default function HeroCarousel({ 
  onOpenInquiry, 
  onOpenBlueprint, 
}: HeroCarouselProps) {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  const goToNextSlide = useCallback(() => {
    setCurrentSlideIndex((prev) => (prev + 1) % CAROUSEL_SLIDES.length);
  }, []);

  const goToPrevSlide = useCallback(() => {
    setCurrentSlideIndex((prev) => (prev - 1 + CAROUSEL_SLIDES.length) % CAROUSEL_SLIDES.length);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentSlideIndex(index);
  };

  useEffect(() => {
    const slideTimer = setInterval(() => {
      goToNextSlide();
    }, AUTOPLAY_INTERVAL);

    return () => clearInterval(slideTimer);
  }, [goToNextSlide]);

  const handleActionNavigation = (targetId: string = 'services') => {
    const el = document.getElementById(targetId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      window.location.hash = `#${targetId}`;
    }
  };

  return (
    <section 
      id="home" 
      className="relative overflow-hidden bg-[#0F141E] border-b border-white/10 select-none min-h-[75vh] lg:min-h-[85vh] flex items-center"
    >
      {/* Background Image Carousel Layers with Crossfade */}
      <div className="absolute inset-0 z-0">
        {CAROUSEL_SLIDES.map((slide, index) => {
          const isActive = index === currentSlideIndex;
          return (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                isActive ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
              }`}
            >
              <img 
                src={slide.bgImage} 
                alt={slide.title} 
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center transition-transform duration-[7000ms] ease-out transform brightness-105 contrast-105"
                style={{
                  transform: isActive ? 'scale(1.05)' : 'scale(1.0)'
                }}
              />
              {/* Dark scrim for high-contrast text legibility */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#0F141E]/90 via-[#0F141E]/60 to-[#0F141E]/40" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F141E] via-transparent to-[#0F141E]/60" />
            </div>
          );
        })}
        {/* Subtle Technical Blueprint Grid */}
        <div className="absolute inset-0 blueprint-grid pointer-events-none opacity-15 z-10" />
      </div>

      {/* Subtle Glow Accent */}
      <div className="absolute top-[-80px] right-[-80px] w-[500px] h-[500px] rounded-full bg-[#F27D26] opacity-[0.06] blur-[140px] pointer-events-none z-10" />

      {/* Main Hero Container */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24 w-full">
        <div className="max-w-4xl space-y-6 sm:space-y-8 text-left">
          
          {/* Top Brand Tagline Lead */}
          <div className="flex items-center gap-3 sm:gap-3.5">
            <div className="w-9 h-9 sm:w-11 sm:h-11 p-1 bg-white rounded-sm border border-white/20 shadow-md flex items-center justify-center shrink-0">
              <img 
                src="/images/tatva_structura_logo.png?v=2" 
                alt="Tatva Structura" 
                className="w-full h-full object-contain"
              />
            </div>
            <div className="w-6 sm:w-10 h-0.5 bg-[#F27D26]"></div>
            <span className="text-[#F27D26] uppercase tracking-[0.25em] font-bold text-xs sm:text-sm font-mono-tech">
              TATVA STRUCTURA &bull; STRUCTURAL DESIGN CONSULTANCY
            </span>
          </div>

          {/* Signature Brand Headline: YOU THINK WE MAKE */}
          <div>
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-[0.95] sm:leading-[0.9] tracking-tighter uppercase text-white font-heading">
              YOU THINK <br className="hidden sm:inline" />
              <span className="text-transparent" style={{ WebkitTextStroke: '2px #F27D26' }}>
                WE MAKE
              </span>
            </h1>
          </div>

          {/* Action Buttons: EXPLORE DETAILS, INQUIRE NOW, BLUEPRINTS, WHATSAPP */}
          <div className="flex flex-wrap items-center gap-3 sm:gap-4 pt-2 sm:pt-4">
            {/* Explore Details */}
            <button
              onClick={() => handleActionNavigation('services')}
              className="w-full sm:w-auto inline-flex items-center justify-center px-6 sm:px-8 py-3.5 sm:py-4 rounded-sm font-bold text-xs sm:text-sm uppercase tracking-wider bg-[#F27D26] text-white hover:bg-[#ff8c38] shadow-lg shadow-[#F27D26]/25 transition-all duration-200 cursor-pointer"
              id="carousel-btn-explore"
            >
              <span>EXPLORE DETAILS</span>
              <ArrowRight className="w-4 h-4 ml-2" />
            </button>

            {/* Inquire Now */}
            <button
              onClick={() => onOpenInquiry('General Structural Design Consultation Inquiry')}
              className="w-full sm:w-auto inline-flex items-center justify-center px-5 sm:px-7 py-3.5 sm:py-4 rounded-sm font-bold text-xs sm:text-sm uppercase tracking-wider bg-[#161C27] text-slate-200 hover:text-white border border-white/15 hover:border-[#F27D26]/60 shadow-md transition-all duration-200 cursor-pointer"
              id="carousel-btn-inquiry"
            >
              <ExternalLink className="w-4 h-4 mr-2 text-[#F27D26]" />
              <span>INQUIRE NOW</span>
            </button>

            {/* Blueprint */}
            {onOpenBlueprint && (
              <button
                onClick={onOpenBlueprint}
                className="w-full sm:w-auto inline-flex items-center justify-center px-5 sm:px-7 py-3.5 sm:py-4 rounded-sm font-bold text-xs sm:text-sm uppercase tracking-wider bg-white/5 text-slate-200 hover:text-white hover:bg-white/10 border border-white/15 hover:border-white/30 transition-all cursor-pointer"
                id="carousel-btn-blueprint"
              >
                <FileCode2 className="w-4 h-4 mr-2 text-[#F27D26]" />
                <span>BLUEPRINT</span>
              </button>
            )}

            {/* WhatsApp */}
            <a
              href={`https://wa.me/${COMPANY_INFO.phoneRaw}?text=Hello%20Tatva%20Structura,%20I%20am%20interested%20in%20structural%20design%20consultation.`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center px-5 sm:px-7 py-3.5 sm:py-4 rounded-sm font-bold text-xs sm:text-sm uppercase tracking-wider text-emerald-400 hover:text-white hover:bg-emerald-600 bg-emerald-950/40 border border-emerald-500/50 shadow-lg shadow-emerald-950/30 transition-all duration-200 cursor-pointer"
              id="carousel-btn-whatsapp"
            >
              <PhoneCall className="w-4 h-4 mr-2" />
              <span>WHATSAPP</span>
            </a>
          </div>

        </div>

        {/* Subtle Minimalist Carousel Controls at Bottom */}
        <div className="flex items-center justify-between pt-12 sm:pt-16 max-w-4xl">
          {/* Subtle Slide Indicator Dots */}
          <div className="flex items-center gap-2">
            {CAROUSEL_SLIDES.map((_, idx) => (
              <button
                key={idx}
                onClick={() => goToSlide(idx)}
                className={`h-1.5 transition-all duration-300 rounded-full cursor-pointer ${
                  idx === currentSlideIndex 
                    ? 'w-8 bg-[#F27D26]' 
                    : 'w-2 bg-white/20 hover:bg-white/40'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>

          {/* Minimalist Prev/Next Arrows */}
          <div className="flex items-center gap-2">
            <button
              onClick={goToPrevSlide}
              className="p-2 rounded-sm bg-[#161C27]/80 border border-white/10 text-slate-300 hover:text-white hover:border-[#F27D26] hover:bg-[#F27D26]/20 transition-all cursor-pointer"
              title="Previous Slide"
              aria-label="Previous Slide"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={goToNextSlide}
              className="p-2 rounded-sm bg-[#161C27]/80 border border-white/10 text-slate-300 hover:text-white hover:border-[#F27D26] hover:bg-[#F27D26]/20 transition-all cursor-pointer"
              title="Next Slide"
              aria-label="Next Slide"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
