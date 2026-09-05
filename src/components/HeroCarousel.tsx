import React, { useState, useEffect, useRef, useCallback, ElementType } from 'react';
import { 
  ArrowRight, 
  ChevronLeft, 
  ChevronRight, 
  Pause, 
  Play, 
  Layers, 
  ShieldCheck, 
  Building2, 
  Cpu, 
  ExternalLink,
  TrainTrack,
  Droplets,
  Zap,
  Globe2,
  Factory,
  CheckCircle2,
  FileCode2,
  Compass,
  PhoneCall,
  LucideIcon
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
  categoryTag: string;
  categoryIcon: LucideIcon | ElementType;
  titlePart1: string;
  titlePart2: string;
  subtitle: string;
  description: string;
  bgImage: string;
  siteLabel: string;
  stats: {
    value: string;
    label: string;
  }[];
  specPills: string[];
  inquirySubject: string;
  sectionTarget: string;
}

const CAROUSEL_SLIDES: SlideItem[] = [
  {
    id: 'industrial-peb',
    categoryTag: 'INDUSTRIAL & STEEL INFRASTRUCTURE',
    categoryIcon: Factory,
    titlePart1: 'HEAVY INDUSTRIAL',
    titlePart2: '& PEB STRUCTURES',
    subtitle: '100,000+ SQ.FT MANUFACTURING SHEDS, CRANE GIRDERS & STORAGE SILOS',
    description: 'High-precision structural design of massive manufacturing facilities, long-span Pre-Engineered Buildings (PEB), heavy gantry crane supporting systems, and dynamic machine foundation mats.',
    bgImage: '/images/project_peb_warehouse_3d.jpg',
    siteLabel: '100,000+ SQ.FT PEB INDUSTRIAL FACILITY',
    stats: [
      { value: '100K+', label: 'SQ.FT PEB SHEDS' },
      { value: 'IS 800', label: '& AISC 360 CODES' },
      { value: 'FEA', label: 'FINITE ELEMENT SIM' },
      { value: 'FAB-READY', label: 'GA & BBS DRAWINGS' }
    ],
    specPills: ['High Crane Gantry Design', 'Dynamic Machine Bases', 'STAAD.Pro 3D Models', 'Structural Steel Optimization'],
    inquirySubject: 'Industrial & PEB Structural Design Inquiry',
    sectionTarget: 'projects'
  },
  {
    id: 'peb-site-execution',
    categoryTag: 'SITE EXECUTION & STEEL ERECTION',
    categoryIcon: Layers,
    titlePart1: 'PEB PORTAL FRAMING',
    titlePart2: '& SITE EXECUTION',
    subtitle: 'HEAVY PORTAL RAFTERS, HIGH-BAY GABLES, PURLIN NETWORKS & ROOF TRUSSES',
    description: 'Direct field engineering oversight for structural steel erection, anchor bolt coordinate survey, high-tensile connection torquing, and integrated tubular roof trussing with natural daylight skylights.',
    bgImage: '/images/project_peb_site_erection.jpg',
    siteLabel: 'LIVE PEB ERECTION & PORTAL FRAME SITE',
    stats: [
      { value: 'IS 800', label: 'PEB CODE DESIGN' },
      { value: 'HIGH-BAY', label: 'CLEAR SPAN GABLES' },
      { value: 'TUBULAR', label: 'ROOF TRUSS SYSTEMS' },
      { value: 'ON-SITE', label: 'ERECTION OVERSIGHT' }
    ],
    specPills: ['Anchor Bolt Verification', 'Rafter Erection Sequences', 'Tubular Truss Fabrication', 'Wind Uplift Bracing'],
    inquirySubject: 'PEB Structural Erection & Fabrication Consultation',
    sectionTarget: 'site-gallery'
  },
  {
    id: 'metro-viaducts',
    categoryTag: 'MASS RAPID TRANSIT SYSTEMS',
    categoryIcon: TrainTrack,
    titlePart1: 'METRO RAIL VIADUCTS',
    titlePart2: '& CANTILEVER PIER CAPS',
    subtitle: 'DELHI METRO PHASE 4, CONCOURSE CROSS ARMS & SPECIAL LAUNCHING GIRDERS',
    description: 'Specialized structural engineering for precast post-tensioned metro pier caps, curved track viaducts, double-track concourse cross-arms, and elastomeric bridge bearings engineered for rigorous dynamic IRS loads.',
    bgImage: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=2000&q=85',
    siteLabel: 'ELEVATED METRO VIADUCT & PIER SYSTEM',
    stats: [
      { value: 'PHASE 4', label: 'DELHI MRTS TRACKS' },
      { value: 'PT-RCC', label: 'POST-TENSIONED ARMS' },
      { value: 'IRS / IRC', label: 'RAILWAY STANDARDS' },
      { value: 'DMRC', label: 'APPROVED DESIGNS' }
    ],
    specPills: ['Precast Segmental Viaducts', 'Post-Tensioning Schedules', 'Torsional Stress Checks', 'Seismic Zone IV/V Ductility'],
    inquirySubject: 'Metro & Elevated Rail Structural Design Inquiry',
    sectionTarget: 'metro'
  },
  {
    id: 'concrete-highrise',
    categoryTag: 'RCC & TOWER CRANE CIVIL CASTING',
    categoryIcon: Building2,
    titlePart1: 'MASS RAFT & RCC',
    titlePart2: 'HIGH-RISE FRAMING',
    subtitle: '2.5M THICK MASS RAFT FOUNDATIONS, SHEAR WALLS & SEISMIC DUCTILITY',
    description: 'High-rise residential and commercial tower structural engineering with thermal crack-width mitigation for mass concrete pours, rebar detailing under IS 13920, and dual-system core shear wall design.',
    bgImage: 'https://images.unsplash.com/photo-1541888946425-d0fbb18086f6?auto=format&fit=crop&w=2000&q=85',
    siteLabel: 'MASS CONCRETE RAFT & TOWER CRANE SITE',
    stats: [
      { value: 'M50 GRADE', label: 'HIGH-STRENGTH RCC' },
      { value: 'IS 13920', label: 'DUCTILE DETAILING' },
      { value: 'ETABS 3D', label: 'NON-LINEAR P-DELTA' },
      { value: 'ZONE V', label: 'SEISMIC RESILIENT' }
    ],
    specPills: ['Mass Concrete Thermal Checks', 'Core Shear Wall Detailing', 'Transfer Girder Analysis', 'Rebar Congestion Optimization'],
    inquirySubject: 'High-Rise RCC & Foundation Structural Inquiry',
    sectionTarget: 'expertise'
  },
  {
    id: 'water-stp',
    categoryTag: 'WATER & WASTEWATER INFRASTRUCTURE',
    categoryIcon: Droplets,
    titlePart1: '215 MLD WATER &',
    titlePart2: 'SEWAGE PLANTS (STP)',
    subtitle: 'OKHLA STP NEW DELHI, AEROBIC DIGESTERS & DEEP WATER INTAKE WELLS',
    description: 'Heavy reinforced concrete hydraulic design for 215 MLD wastewater treatment facilities, circular clariflocculators, aerobic digesters, pump houses, and deep retention intake structures conforming to IS 3370 liquid retaining criteria.',
    bgImage: 'https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=2000&q=85',
    siteLabel: '215 MLD OKHLA STP & LIQUID TANKS',
    stats: [
      { value: '215 MLD', label: 'LARGEST STP ASSET' },
      { value: 'IS 3370', label: 'LIQUID CRACK WIDTH' },
      { value: 'DEEP MAT', label: 'HYDROSTATIC BASES' },
      { value: '100% WATER', label: 'TIGHT INTEGRITY' }
    ],
    specPills: ['Crack Width < 0.1mm', 'Hydrodynamic Pressure Analysis', 'Uplift & Buoyancy Safety', 'Deep Soil Shoring'],
    inquirySubject: 'Water / Sewage Treatment Plant (STP) Design Inquiry',
    sectionTarget: 'expertise'
  },
  {
    id: 'bridges-flyovers',
    categoryTag: 'CIVIL BRIDGES & HIGHWAY FLYOVERS',
    categoryIcon: Compass,
    titlePart1: 'MULTI-SPAN BRIDGES',
    titlePart2: '& HIGHWAY FLYOVERS',
    subtitle: 'COMPOSITE STEEL GIRDERS, PRESTRESSED I-BEAMS & UK CURVED BRIDGES',
    description: 'Comprehensive structural analysis and vetting for 140m composite bridges, continuous highway flyovers across major Indian arterial corridors, and UK Highways curved superstructure assessments under CS 454.',
    bgImage: 'https://images.unsplash.com/photo-1506157786151-b8491531f063?auto=format&fit=crop&w=2000&q=85',
    siteLabel: '140M COMPOSITE BRIDGE & FLYOVERS',
    stats: [
      { value: '140M', label: 'MULTI-SPAN BRIDGES' },
      { value: 'CS 454', label: 'UK HIGHWAYS CODE' },
      { value: 'IRC 112', label: 'CONCRETE BRIDGES' },
      { value: 'DYNAMIC', label: 'LIVE LOAD MODEL' }
    ],
    specPills: ['Continuous Steel Plate Girders', 'Prestressed Concrete Beams', 'Bearing Seat Analysis', 'Expansion Joint Detailing'],
    inquirySubject: 'Bridge & Flyover Structural Engineering Inquiry',
    sectionTarget: 'bridges'
  },
  {
    id: 'deep-foundations',
    categoryTag: 'GEOTECHNICAL & DEEP SHORING',
    categoryIcon: ShieldCheck,
    titlePart1: 'DEEP BASEMENTS &',
    titlePart2: 'DIAPHRAGM SHORING',
    subtitle: 'MULTI-TIER EXCAVATIONS, GROUND ANCHORS & CONTIGUOUS PILING',
    description: 'Specialized geotechnical structural engineering for multi-tier subterranean basements up to 18m deep, contiguous pile walls, prestressed ground anchors, and settlement prediction for adjacent infrastructure.',
    bgImage: 'https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?auto=format&fit=crop&w=2000&q=85',
    siteLabel: '18M DEEP EXCAVATION & PILING SHORING',
    stats: [
      { value: '18M DEEP', label: 'EXCAVATION WALLS' },
      { value: 'IS 2911', label: 'PILE CAP DESIGNS' },
      { value: 'PLAXIS 2D', label: 'SOIL-STRUCTURE FEA' },
      { value: 'ZERO-MOVE', label: 'SETTLEMENT CONTROL' }
    ],
    specPills: ['Diaphragm Slurry Walls', 'Pre-stressed Tieback Anchors', 'Hydrostatic Water Cut-Off', 'Adjacent Building Safety'],
    inquirySubject: 'Deep Basement & Foundation Shoring Inquiry',
    sectionTarget: 'expertise'
  },
  {
    id: 'power-substations',
    categoryTag: 'POWER STATIONS & SPECIAL STRUCTURES',
    categoryIcon: Zap,
    titlePart1: 'POWER STATIONS &',
    titlePart2: 'GIS SUBSTATIONS',
    subtitle: '85M TALL CHIMNEYS, TURBINE FOUNDATIONS & 400KV GIS BUILDINGS',
    description: 'High-complexity structural solutions for thermal power generation assets, 85-meter industrial chimneys for NBCC, heavy dynamic vibrating turbine foundations, and 400kV gas-insulated substations vetted by AECOM.',
    bgImage: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=2000&q=85',
    siteLabel: '400KV GIS SUBSTATION & POWER ASSETS',
    stats: [
      { value: '85M TALL', label: 'RCC CHIMNEYS' },
      { value: '400 KV', label: 'GIS SUBSTATIONS' },
      { value: 'AECOM', label: 'VETTED DESIGNS' },
      { value: 'VIBRATION', label: 'IS 2974 MACHINE MAT' }
    ],
    specPills: ['Resonance Avoidance Analysis', 'Thermal Expansion Relief', 'Blast & Fire Resistance', 'High Wind Aero Shedding'],
    inquirySubject: 'Power & Substation Facility Structural Design Inquiry',
    sectionTarget: 'expertise'
  },
  {
    id: 'global-consultancy',
    categoryTag: 'GLOBAL REACH & MULTI-CODE ENGINEERING',
    categoryIcon: Globe2,
    titlePart1: 'CROSS-BORDER',
    titlePart2: 'GLOBAL CONSULTANCY',
    subtitle: 'PROJECTS IN ETHIOPIA, UAE & UNITED KINGDOM ACCORDING TO EUROCODES & ACI',
    description: 'Turnkey structural consultancy delivering projects worldwide in accordance with British Standards (BS), Eurocodes (EN 1991-1993), American Concrete Institute (ACI 318), AISC 360, and Abu Dhabi International Building Codes.',
    bgImage: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2000&q=85',
    siteLabel: 'INTERNATIONAL HIGH-RISE & EDIBLE OIL PLANTS',
    stats: [
      { value: 'EUROCODES', label: 'EN 1991 / 1992 / 1993' },
      { value: 'ACI / AISC', label: 'US CODE COMPLIANCE' },
      { value: 'ADIBC', label: 'UAE BUILDING CODES' },
      { value: 'BS 5950', label: 'BRITISH STANDARDS' }
    ],
    specPills: ['Multi-Currency Execution', 'BIM LOD 350 Deliverables', 'Remote Peer Reviews', 'International Statutory Compliance'],
    inquirySubject: 'International Structural Design Consultation',
    sectionTarget: 'international'
  }
];

const AUTOPLAY_INTERVAL = 4500; // 4.5 seconds per slide for responsive auto-run

export default function HeroCarousel({ 
  onOpenInquiry, 
  onOpenBlueprint, 
  onExploreExpertise, 
  onViewProjects 
}: HeroCarouselProps) {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [progress, setProgress] = useState(0);

  const currentSlide = CAROUSEL_SLIDES[currentSlideIndex];

  const goToNextSlide = useCallback(() => {
    setCurrentSlideIndex((prev) => (prev + 1) % CAROUSEL_SLIDES.length);
    setProgress(0);
  }, []);

  const goToPrevSlide = useCallback(() => {
    setCurrentSlideIndex((prev) => (prev - 1 + CAROUSEL_SLIDES.length) % CAROUSEL_SLIDES.length);
    setProgress(0);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentSlideIndex(index);
    setProgress(0);
  };

  // Continuous auto-run loop with animated progress tracking
  useEffect(() => {
    if (!isPlaying) return;

    const stepTime = 50; // update progress every 50ms
    const totalSteps = AUTOPLAY_INTERVAL / stepTime;
    let stepCount = 0;

    const progressInterval = setInterval(() => {
      stepCount++;
      setProgress((stepCount / totalSteps) * 100);
    }, stepTime);

    const slideTimer = setTimeout(() => {
      goToNextSlide();
    }, AUTOPLAY_INTERVAL);

    return () => {
      clearInterval(progressInterval);
      clearTimeout(slideTimer);
    };
  }, [currentSlideIndex, isPlaying, goToNextSlide]);

  const handleActionNavigation = (targetId: string) => {
    const el = document.getElementById(targetId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="home" 
      className="relative overflow-hidden bg-[#0F141E] border-b border-white/10 select-none"
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
                alt={slide.titlePart1 + ' ' + slide.titlePart2} 
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center transition-transform duration-[7000ms] ease-out transform brightness-110 contrast-105 saturate-110"
                style={{
                  transform: isActive ? 'scale(1.05)' : 'scale(1.0)'
                }}
              />
              {/* Lighter, high-clarity scrim: transparent on the right & center so the bright photo is clearly visible, gentle left fade for text legibility */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#0F141E]/80 via-[#0F141E]/40 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-b from-[#0F141E]/45 via-transparent to-[#0F141E]/60" />
            </div>
          );
        })}
        {/* Subtle Technical Blueprint Grid */}
        <div className="absolute inset-0 blueprint-grid pointer-events-none opacity-15 z-10" />
      </div>

      {/* Decorative Glow Orbs & Architectural Accents */}
      <div className="absolute top-[-80px] right-[-80px] w-[550px] h-[550px] rounded-full bg-[#F27D26] opacity-[0.05] blur-[140px] pointer-events-none z-10" />
      <div className="absolute bottom-[40px] left-[5%] w-[1px] h-[300px] bg-gradient-to-b from-transparent via-[#F27D26] to-transparent opacity-30 pointer-events-none z-10" />

      {/* Main Carousel Container */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-6 sm:pt-10 sm:pb-8 lg:pt-14 lg:pb-12 min-h-[72vh] lg:min-h-[82vh] flex flex-col justify-between">
        
        {/* Top Bar: Slide Indicator / Controls / Play-Pause */}
        <div className="flex items-center justify-between gap-4 pb-2 border-b border-white/10">
          
          {/* Active Sector Tag */}
          <div className="flex items-center gap-2.5 sm:gap-3">
            <div className="w-6 sm:w-10 h-px bg-[#F27D26]"></div>
            <div className="flex items-center gap-2 px-2.5 py-1 rounded-sm bg-[#161C27] border border-[#F27D26]/40 text-[#F27D26] text-[10px] sm:text-xs font-mono-tech uppercase tracking-wider">
              <currentSlide.categoryIcon className="w-3.5 h-3.5" />
              <span>{currentSlide.categoryTag}</span>
            </div>
          </div>

          {/* Controls: Slide Counter & Nav Buttons */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Auto-run status tag */}
            <div className="hidden sm:flex items-center gap-1.5 px-2 py-1 bg-white/5 border border-white/10 rounded-sm text-[10px] font-mono-tech text-slate-300">
              <span className={`w-2 h-2 rounded-full ${isPlaying ? 'bg-emerald-400 animate-pulse' : 'bg-amber-400'}`} />
              <span>{isPlaying ? 'AUTO-PLAY' : 'PAUSED'}</span>
            </div>

            {/* Numerical Slide Counter */}
            <div className="font-mono-tech text-xs sm:text-sm text-slate-300 px-2 py-1 bg-white/5 border border-white/10 rounded-sm">
              <span className="text-[#F27D26] font-bold">0{currentSlideIndex + 1}</span>
              <span className="text-slate-500"> / 0{CAROUSEL_SLIDES.length}</span>
            </div>

            {/* Play/Pause Toggle */}
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="p-1.5 sm:p-2 rounded-sm bg-[#161C27] border border-white/10 text-slate-300 hover:text-white hover:border-[#F27D26] transition-colors cursor-pointer"
              title={isPlaying ? 'Pause Auto-slide' : 'Play Auto-slide'}
              aria-label={isPlaying ? 'Pause Carousel' : 'Play Carousel'}
            >
              {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5 text-[#F27D26]" />}
            </button>

            {/* Prev Button */}
            <button
              onClick={goToPrevSlide}
              className="p-1.5 sm:p-2 rounded-sm bg-[#161C27] border border-white/10 text-slate-300 hover:text-white hover:border-[#F27D26] hover:bg-[#F27D26]/20 transition-all cursor-pointer"
              title="Previous Slide"
              aria-label="Previous Slide"
              id="carousel-btn-prev"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            {/* Next Button */}
            <button
              onClick={goToNextSlide}
              className="p-1.5 sm:p-2 rounded-sm bg-[#161C27] border border-white/10 text-slate-300 hover:text-white hover:border-[#F27D26] hover:bg-[#F27D26]/20 transition-all cursor-pointer"
              title="Next Slide"
              aria-label="Next Slide"
              id="carousel-btn-next"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Middle Body: Dynamic Hero Headline + Stats + CTAs */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center my-auto py-3 sm:py-5">
          
          {/* Left Column: Big Headline & Info */}
          <div className="lg:col-span-8 space-y-3 sm:space-y-4 text-left">
            
            {/* Top Brand Tagline Lead */}
            <div className="flex items-center gap-2.5 sm:gap-3">
              <div className="w-6 sm:w-10 h-px bg-[#F27D26]"></div>
              <span className="text-[#F27D26] uppercase tracking-[0.22em] font-bold text-[10px] sm:text-xs font-mono-tech">
                STRUCTURAL DESIGN CONSULTANCY
              </span>
            </div>

            {/* Signature Brand Headline: YOU THINK WE MAKE + Dynamic Sector */}
            <div className="space-y-1 sm:space-y-1.5">
              <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-[0.95] sm:leading-[0.9] tracking-tighter uppercase text-white font-heading">
                YOU THINK <br className="hidden sm:inline" />
                <span className="text-transparent" style={{ WebkitTextStroke: '1.5px #F27D26' }}>
                  WE MAKE
                </span>
              </h1>
              
              {/* Dynamic Sector Title & Subtitle */}
              <div className="pt-1 flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
                <span className="inline-flex items-center gap-1 text-white font-heading font-black text-sm sm:text-lg uppercase tracking-wide bg-[#161C27] border border-[#F27D26]/40 px-2.5 py-0.5 rounded-sm">
                  <span className="text-[#F27D26]">▸</span> {currentSlide.titlePart1} {currentSlide.titlePart2}
                </span>
                <span className="text-[11px] sm:text-xs text-slate-300 font-mono-tech uppercase">
                  {currentSlide.subtitle}
                </span>
              </div>
            </div>

            {/* Slide Narrative Description */}
            <p className="text-xs sm:text-sm lg:text-base text-slate-300 max-w-2xl leading-relaxed">
              {currentSlide.description}
            </p>

            {/* Technical Specification Pills */}
            <div className="flex flex-wrap gap-1.5 sm:gap-2 pt-1">
              {currentSlide.specPills.map((pill) => (
                <span 
                  key={pill} 
                  className="px-2.5 py-1 bg-white/5 border border-white/10 text-[10px] sm:text-xs font-mono-tech text-slate-300 rounded-sm flex items-center gap-1.5"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#F27D26]" />
                  {pill}
                </span>
              ))}
            </div>

            {/* 4 Technical Metric Stat Boxes */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3 pt-1">
              {currentSlide.stats.map((st) => (
                <div 
                  key={st.label} 
                  className="px-3 sm:px-4 py-2 sm:py-3 bg-[#161C27] border border-white/10 flex flex-col justify-center rounded-sm shadow-sm"
                >
                  <span className="text-[#F27D26] font-bold text-lg sm:text-2xl font-heading">
                    {st.value}
                  </span>
                  <span className="text-[9px] sm:text-[10px] uppercase tracking-wider text-slate-400 font-mono-tech leading-tight mt-0.5">
                    {st.label}
                  </span>
                </div>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="grid grid-cols-2 sm:flex sm:flex-wrap gap-2.5 sm:gap-3 pt-2">
              <button
                onClick={() => handleActionNavigation(currentSlide.sectionTarget)}
                className="w-full sm:w-auto inline-flex items-center justify-center px-4 sm:px-6 py-3 sm:py-3.5 rounded-sm font-bold text-xs sm:text-sm uppercase tracking-wider bg-[#F27D26] text-white hover:bg-[#ff8c38] shadow-lg shadow-[#F27D26]/20 transition-all duration-200 cursor-pointer"
                id="carousel-btn-explore"
              >
                <span>EXPLORE DETAILS</span>
                <ArrowRight className="w-4 h-4 ml-1.5 hidden sm:inline" />
              </button>

              <button
                onClick={() => onOpenInquiry(currentSlide.inquirySubject)}
                className="w-full sm:w-auto inline-flex items-center justify-center px-3 sm:px-5 py-3 sm:py-3.5 rounded-sm font-bold text-xs sm:text-sm uppercase tracking-wider bg-[#161C27] text-slate-200 hover:text-white border border-white/10 hover:border-white/30 transition-all duration-200 cursor-pointer"
                id="carousel-btn-inquiry"
              >
                <ExternalLink className="w-3.5 h-3.5 mr-1.5 text-[#F27D26]" />
                <span>INQUIRE NOW</span>
              </button>

              {onOpenBlueprint && (
                <button
                  onClick={onOpenBlueprint}
                  className="w-full sm:w-auto inline-flex items-center justify-center px-3 sm:px-5 py-3 sm:py-3.5 rounded-sm font-bold text-xs sm:text-sm uppercase tracking-wider bg-white/5 text-slate-300 hover:text-white hover:bg-white/10 border border-white/10 transition-colors cursor-pointer"
                >
                  <Cpu className="w-3.5 h-3.5 mr-1.5 text-[#F27D26]" />
                  <span>BLUEPRINTS</span>
                </button>
              )}

              <a
                href={`https://wa.me/${COMPANY_INFO.phoneRaw}?text=Hello%20Tatva%20Structura,%20I%20am%20interested%20in%20${encodeURIComponent(currentSlide.inquirySubject)}.`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center px-3 sm:px-5 py-3 sm:py-3.5 rounded-sm font-bold text-xs sm:text-sm uppercase tracking-wider text-emerald-400 hover:text-white hover:bg-emerald-950/60 border border-emerald-700/50 transition-colors cursor-pointer"
              >
                <span>WHATSAPP</span>
              </a>
            </div>
          </div>

          {/* Right Column: Mini Civil Engineering Site Photo & Engineering Specs Card */}
          <div className="lg:col-span-4 space-y-3">
            <div className="bg-[#161C27] border border-white/10 rounded-sm p-4 sm:p-5 shadow-2xl relative overflow-hidden accent-glow">
              
              {/* Card Top Technical Header */}
              <div className="flex items-center justify-between pb-2.5 mb-2.5 border-b border-white/10">
                <span className="text-[10px] font-bold text-[#F27D26] tracking-[0.2em] uppercase font-mono-tech flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  CIVIL SITE INSPECTION
                </span>
                <span className="text-[9px] font-mono-tech px-2 py-0.5 rounded-sm bg-[#F27D26]/20 border border-[#F27D26]/40 text-[#F27D26] uppercase font-bold">
                  LIVE WORK ASSET
                </span>
              </div>

              {/* Civil Engineering Photo Box */}
              <div className="relative rounded-sm overflow-hidden border border-white/10 bg-black/60 aspect-[16/9] mb-3 group/img">
                <img 
                  src={currentSlide.bgImage} 
                  alt={currentSlide.siteLabel}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center group-hover/img:scale-105 transition-transform duration-500 brightness-105 contrast-105" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#161C27] via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-2 left-2 right-2 flex items-center justify-between text-[9px] font-mono-tech">
                  <span className="bg-black/80 px-2 py-0.5 rounded-sm text-slate-200 border border-white/10 backdrop-blur-xs truncate max-w-[190px]">
                    {currentSlide.siteLabel}
                  </span>
                  <span className="bg-[#F27D26] text-white font-bold px-1.5 py-0.5 rounded-sm">
                    FEA VETTED
                  </span>
                </div>
              </div>

              {/* Sector Quick Details */}
              <div className="space-y-2">
                <div className="text-sm font-bold uppercase tracking-wide text-white font-heading">
                  {currentSlide.titlePart1} {currentSlide.titlePart2}
                </div>
                <p className="text-xs text-slate-300 leading-relaxed line-clamp-2">
                  {currentSlide.description}
                </p>

                {/* Micro Key-Value Matrix */}
                <div className="grid grid-cols-2 gap-2 pt-1 text-[11px] font-mono-tech">
                  <div className="bg-white/5 p-2 rounded-sm border border-white/10">
                    <div className="text-[#F27D26] font-bold text-[10px]">CONSULTANCY</div>
                    <div className="text-slate-200 truncate">Turnkey Design</div>
                  </div>
                  <div className="bg-white/5 p-2 rounded-sm border border-white/10">
                    <div className="text-white font-bold text-[10px]">DELIVERY</div>
                    <div className="text-slate-200 truncate">Vetted Models</div>
                  </div>
                </div>
              </div>

              {/* Computational Software Badges */}
              <div className="mt-2.5 pt-2.5 border-t border-white/10">
                <div className="text-[9px] font-bold text-slate-400 tracking-[0.2em] uppercase mb-1 font-mono-tech">
                  COMPUTATIONAL TOOLS
                </div>
                <div className="flex flex-wrap gap-1">
                  {['STAAD.PRO', 'ETABS', 'SAFE', 'TEKLA', 'AUTOCAD'].map((tool) => (
                    <span key={tool} className="px-2 py-0.5 bg-white/5 text-[9px] font-mono-tech font-semibold text-slate-300 border border-white/10 rounded-sm">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Quick Director Contact Bar */}
            <div className="bg-[#161C27]/90 border border-white/10 rounded-sm p-2.5 flex items-center justify-between text-xs">
              <div className="text-slate-300">
                <span className="text-slate-500 font-mono-tech uppercase text-[10px]">DIRECTOR: </span>
                <span className="font-bold text-white uppercase text-[11px]">Jitendra Arya</span>
                <span className="text-slate-400 text-[10px] ml-1">(M.Tech DCE)</span>
              </div>
              <div className="font-mono-tech text-[#F27D26] font-bold text-[11px]">12+ YRS EXP</div>
            </div>
          </div>

        </div>

        {/* Bottom Carousel Selector Bar (Interactive Tabs + Real-Time Progress Bar) */}
        <div className="pt-2 sm:pt-4 border-t border-white/10">
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2">
            {CAROUSEL_SLIDES.map((slide, idx) => {
              const isActive = idx === currentSlideIndex;
              const Icon = slide.categoryIcon;
              return (
                <button
                  key={slide.id}
                  onClick={() => goToSlide(idx)}
                  className={`text-left p-2 sm:p-2.5 rounded-sm border transition-all cursor-pointer relative overflow-hidden flex flex-col justify-between ${
                    isActive 
                      ? 'bg-[#161C27] border-[#F27D26] shadow-md shadow-[#F27D26]/10' 
                      : 'bg-[#161C27]/50 border-white/10 hover:border-white/30 hover:bg-[#161C27]'
                  }`}
                  id={`carousel-thumb-${idx}`}
                >
                  {/* Active Slide Progress Line */}
                  {isActive && isPlaying && (
                    <div 
                      className="absolute top-0 left-0 bottom-0 bg-[#F27D26]/20 transition-all duration-75 pointer-events-none"
                      style={{ width: `${progress}%` }}
                    />
                  )}
                  {isActive && (
                    <div className="absolute top-0 left-0 right-0 h-0.5 bg-[#F27D26]" />
                  )}

                  <div className="flex items-center justify-between mb-1 relative z-10">
                    <span className={`text-[10px] font-mono-tech font-bold ${isActive ? 'text-[#F27D26]' : 'text-slate-400'}`}>
                      0{idx + 1}
                    </span>
                    <Icon className={`w-3 h-3 ${isActive ? 'text-[#F27D26]' : 'text-slate-400'}`} />
                  </div>

                  <div className={`text-[11px] sm:text-xs font-bold font-heading uppercase truncate relative z-10 ${isActive ? 'text-white' : 'text-slate-300'}`}>
                    {slide.titlePart1}
                  </div>
                </button>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
