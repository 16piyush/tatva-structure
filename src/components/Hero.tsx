import { useState, useEffect } from 'react';
import { 
  ArrowRight, 
  Layers, 
  ShieldCheck, 
  Building2, 
  Cpu, 
  ExternalLink,
  ChevronDown,
  Sparkles
} from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

interface HeroProps {
  onExploreExpertise?: () => void;
  onViewProjects?: () => void;
  onOpenInquiry: () => void;
  onOpenBlueprint?: () => void;
}

export default function Hero({ onExploreExpertise, onViewProjects, onOpenInquiry, onOpenBlueprint }: HeroProps) {
  const [activeTab, setActiveTab] = useState<'steel' | 'metro' | 'industrial'>('steel');

  const handleExplore = () => {
    if (onExploreExpertise) {
      onExploreExpertise();
    } else {
      const el = document.getElementById('expertise');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleProjects = () => {
    if (onViewProjects) {
      onViewProjects();
    } else {
      const el = document.getElementById('projects');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Background visuals switcher
  const heroBackgrounds = {
    steel: '/images/project_peb_site_erection.jpg',
    metro: '/images/project_patna_six_lane_flyover.jpg',
    industrial: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=2000&q=85',
  };

  return (
    <section 
      id="home" 
      className="relative overflow-hidden bg-[#0F141E] pt-6 pb-10 sm:pt-10 sm:pb-16 lg:py-20 lg:min-h-[85vh] lg:flex lg:items-center lg:justify-center"
    >
      {/* Background Visual Layer with Blueprint Grid & Dark Theme */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroBackgrounds[activeTab]} 
          alt="Tatva Structura Structural Engineering" 
          className="w-full h-full object-cover object-center scale-105 transition-all duration-1000 ease-out opacity-20 filter grayscale contrast-125"
        />
        {/* Multi-tier gradient overlay for readability & industrial aesthetic */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0F141E] via-[#0F141E]/95 to-[#161C27]/90" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0F141E] via-transparent to-[#0F141E]/90" />
        <div className="absolute inset-0 blueprint-grid pointer-events-none opacity-40" />
      </div>

      {/* Decorative Glow Orbs & Engineering Accent Lines */}
      <div className="absolute top-[-100px] right-[-100px] w-[500px] h-[500px] rounded-full bg-[#F27D26] opacity-[0.04] blur-[120px] pointer-events-none" />
      <div className="absolute top-1/2 left-0 w-full line-decor opacity-20 pointer-events-none" />
      <div className="absolute bottom-[100px] left-[5%] w-[1px] h-[250px] bg-gradient-to-b from-transparent via-[#F27D26] to-transparent opacity-30 pointer-events-none" />

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Core Value Proposition */}
          <div className="lg:col-span-8 space-y-4 sm:space-y-6 text-left">
            
            {/* Tagline Line & Label */}
            <div className="flex items-center gap-3 sm:gap-4 mb-1">
              <div className="w-8 sm:w-12 h-px bg-[#F27D26]"></div>
              <span className="text-[#F27D26] uppercase tracking-[0.25em] font-bold text-[11px] sm:text-xs">
                Structural Design Consultancy
              </span>
            </div>

            {/* Massive Bold Headline with Stroke Effect */}
            <div className="space-y-2 sm:space-y-3">
              <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[88px] font-black leading-[0.95] sm:leading-[0.88] tracking-tighter uppercase text-white font-heading">
                TATVA<br/>
                <span className="text-transparent" style={{ WebkitTextStroke: '1.5px #F27D26' }}>
                  STRUCTURA
                </span>
              </h1>
              
              <div className="flex items-center gap-2 pt-1">
                <span className="text-sm sm:text-lg md:text-xl font-bold uppercase tracking-widest text-[#F27D26] font-mono-tech">
                  YOU THINK WE MAKE
                </span>
                <span className="text-xs text-slate-500">&bull;</span>
                <span className="text-xs sm:text-sm uppercase tracking-wider text-slate-300 font-mono-tech">
                  {COMPANY_INFO.subtitle}
                </span>
              </div>
            </div>

            {/* Supporting Text */}
            <p className="text-sm sm:text-base lg:text-lg text-slate-400 max-w-2xl leading-relaxed">
              {COMPANY_INFO.taglineDesc}
            </p>

            {/* Metric Stat Boxes from Theme */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3 pt-1 sm:pt-2">
              <div className="px-3 sm:px-5 py-2.5 sm:py-3.5 bg-[#161C27] border border-white/10 flex flex-col justify-center rounded-sm shadow-sm">
                <span className="text-[#F27D26] font-bold text-xl sm:text-3xl font-heading">12+</span>
                <span className="text-[9px] sm:text-[10px] uppercase tracking-wider text-slate-400 font-mono-tech">Years Expertise</span>
              </div>
              <div className="px-3 sm:px-5 py-2.5 sm:py-3.5 bg-[#161C27] border border-white/10 flex flex-col justify-center rounded-sm shadow-sm">
                <span className="text-white font-bold text-xl sm:text-3xl font-heading">215 <span className="text-[10px] sm:text-xs font-mono-tech text-[#F27D26]">MLD</span></span>
                <span className="text-[9px] sm:text-[10px] uppercase tracking-wider text-slate-400 font-mono-tech">STP Assets</span>
              </div>
              <div className="px-3 sm:px-5 py-2.5 sm:py-3.5 bg-[#161C27] border border-white/10 flex flex-col justify-center rounded-sm shadow-sm">
                <span className="text-white font-bold text-xl sm:text-3xl font-heading">100K <span className="text-[10px] sm:text-xs font-mono-tech text-[#F27D26]">SQFT</span></span>
                <span className="text-[9px] sm:text-[10px] uppercase tracking-wider text-slate-400 font-mono-tech">PEB Sheds</span>
              </div>
              <div className="px-3 sm:px-5 py-2.5 sm:py-3.5 bg-[#161C27] border border-white/10 flex flex-col justify-center rounded-sm shadow-sm">
                <span className="text-[#F27D26] font-bold text-xl sm:text-3xl font-heading">GLOBAL</span>
                <span className="text-[9px] sm:text-[10px] uppercase tracking-wider text-slate-400 font-mono-tech">Design Codes</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="grid grid-cols-2 sm:flex sm:flex-wrap gap-2.5 sm:gap-3 pt-2">
              <button
                onClick={handleExplore}
                className="w-full sm:w-auto inline-flex items-center justify-center px-4 sm:px-7 py-3 sm:py-3.5 rounded-sm font-bold text-xs sm:text-sm uppercase tracking-wider bg-[#F27D26] text-white hover:bg-[#ff8c38] shadow-lg shadow-[#F27D26]/20 transition-all duration-200 cursor-pointer"
                id="hero-btn-explore"
              >
                <span>EXPLORE</span>
                <ArrowRight className="w-4 h-4 ml-1.5 hidden sm:inline" />
              </button>

              <button
                onClick={handleProjects}
                className="w-full sm:w-auto inline-flex items-center justify-center px-3 sm:px-6 py-3 sm:py-3.5 rounded-sm font-bold text-xs sm:text-sm uppercase tracking-wider bg-[#161C27] text-slate-200 hover:text-white border border-white/10 hover:border-white/30 transition-all duration-200 cursor-pointer"
                id="hero-btn-projects"
              >
                <Layers className="w-3.5 h-3.5 mr-1.5 text-[#F27D26]" />
                <span>PORTFOLIO</span>
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

              <button
                onClick={onOpenInquiry}
                className="w-full sm:w-auto inline-flex items-center justify-center px-3 sm:px-5 py-3 sm:py-3.5 rounded-sm font-bold text-xs sm:text-sm uppercase tracking-wider text-[#F27D26] hover:text-white hover:bg-[#F27D26]/10 border border-[#F27D26]/30 transition-colors cursor-pointer"
              >
                <span>INQUIRE NOW</span>
                <ExternalLink className="w-3.5 h-3.5 ml-1 opacity-80" />
              </button>
            </div>
          </div>

          {/* Right Column: Interactive Structural Card / Blueprint Snapshot */}
          <div className="lg:col-span-4 space-y-4">
            <div className="bg-[#161C27] border border-white/10 rounded-sm p-6 shadow-2xl relative overflow-hidden accent-glow">
              
              {/* Top card bar */}
              <div className="flex items-center justify-between pb-3 mb-4 border-b border-white/10">
                <h3 className="text-xs font-bold text-[#F27D26] tracking-[0.2em] uppercase font-mono-tech">
                  CORE CAPABILITIES
                </h3>
                <div className="flex space-x-1">
                  {(['steel', 'metro', 'industrial'] as const).map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className={`text-[10px] font-mono-tech px-2.5 py-1 rounded-sm uppercase tracking-wider transition-colors ${
                        activeTab === tab 
                          ? 'bg-[#F27D26] text-white font-bold' 
                          : 'bg-white/5 text-slate-400 hover:text-slate-200 border border-white/10'
                      }`}
                    >
                      {tab}
                    </button>
                  ))}
                </div>
              </div>

              {/* Dynamic Showcase Item */}
              {activeTab === 'steel' && (
                <div className="space-y-3">
                  <div className="text-sm font-bold uppercase tracking-wide text-white font-heading">Heavy Industrial & PEB Systems</div>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    High-tonnage mill sheds, long-span Pre-Engineered Buildings (PEB) up to 100,000 sqft, and heavy equipment foundation mat designs.
                  </p>
                  <div className="grid grid-cols-2 gap-2 pt-2 text-[11px] font-mono-tech">
                    <div className="bg-white/5 p-2 rounded-sm border border-white/10">
                      <div className="text-[#F27D26] font-bold">CODES</div>
                      <div className="text-slate-300">IS 800 / AISC 360</div>
                    </div>
                    <div className="bg-white/5 p-2 rounded-sm border border-white/10">
                      <div className="text-white font-bold">DELIVERY</div>
                      <div className="text-slate-300">GA & Fab. Drawings</div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'metro' && (
                <div className="space-y-3">
                  <div className="text-sm font-bold uppercase tracking-wide text-white font-heading">Metro Viaducts & Cross Arms</div>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Precast post-tensioned pier caps, concourse cross arms, track cantilever structures, and elastomeric bearings for Delhi MRTS and Mumbai Metro.
                  </p>
                  <div className="grid grid-cols-2 gap-2 pt-2 text-[11px] font-mono-tech">
                    <div className="bg-white/5 p-2 rounded-sm border border-white/10">
                      <div className="text-[#F27D26] font-bold">SYSTEMS</div>
                      <div className="text-slate-300">Post-Tensioned RCC</div>
                    </div>
                    <div className="bg-white/5 p-2 rounded-sm border border-white/10">
                      <div className="text-white font-bold">ANALYSIS</div>
                      <div className="text-slate-300">IRS / IRC Standards</div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'industrial' && (
                <div className="space-y-3">
                  <div className="text-sm font-bold uppercase tracking-wide text-white font-heading">Power, STPs & Heavy Process</div>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Substations approved by AECOM, 200m high chimneys for NBCC, and wastewater plants up to 215 MLD with IS 3370 water-retaining criteria.
                  </p>
                  <div className="grid grid-cols-2 gap-2 pt-2 text-[11px] font-mono-tech">
                    <div className="bg-white/5 p-2 rounded-sm border border-white/10">
                      <div className="text-[#F27D26] font-bold">VETTING</div>
                      <div className="text-slate-300">AECOM / IIT Roorkee</div>
                    </div>
                    <div className="bg-white/5 p-2 rounded-sm border border-white/10">
                      <div className="text-white font-bold">DYNAMIC</div>
                      <div className="text-slate-300">Machine Bases</div>
                    </div>
                  </div>
                </div>
              )}

              {/* Technical Stack Pills */}
              <div className="mt-4 pt-3 border-t border-white/10">
                <div className="text-[10px] font-bold text-slate-400 tracking-[0.2em] uppercase mb-2 font-mono-tech">
                  TECHNICAL STACK
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {['STAAD PRO', 'ETABS', 'SAFE', 'TEKLA', 'AUTOCAD'].map((tool) => (
                    <span key={tool} className="px-2.5 py-1 bg-white/5 text-[10px] font-mono-tech font-semibold text-slate-300 border border-white/10 rounded-sm">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Quick Contact snippet card */}
            <div className="bg-[#161C27]/80 border border-white/10 rounded-sm p-3.5 flex items-center justify-between text-xs">
              <div className="text-slate-300">
                <span className="text-slate-500 font-mono-tech uppercase">DIRECTOR: </span>
                <span className="font-bold text-white uppercase">Jitendra Arya</span> (M.Tech DCE)
              </div>
              <div className="font-mono-tech text-[#F27D26] font-bold text-[11px]">12 YRS EXP</div>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom subtle scroll cue on desktop */}
      <div className="hidden lg:flex absolute bottom-3 left-1/2 transform -translate-x-1/2 flex-col items-center opacity-60 hover:opacity-100 transition-opacity pointer-events-auto">
        <a href="#about" className="text-slate-400 hover:text-[#F27D26] transition-colors" aria-label="Scroll Down">
          <ChevronDown className="w-5 h-5 animate-bounce" />
        </a>
      </div>
    </section>
  );
}
