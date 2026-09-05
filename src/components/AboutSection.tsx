import React, { useState } from 'react';
import { 
  ShieldCheck, 
  Coins, 
  Lightbulb, 
  CheckCircle2, 
  FileCode2, 
  Cpu, 
  Maximize2
} from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

interface AboutSectionProps {
  onOpenInquiry?: (subject?: string) => void;
  onOpenBlueprintModal?: () => void;
}

const PROJECT_PHOTOS = [
  {
    id: 'tekla-cad',
    title: '3D STRUCTURAL FEA CAD MODEL',
    shortTitle: '3D TEKLA MODEL',
    sub: 'STAAD / Tekla Analysis',
    discipline: 'STRUCTURAL ANALYSIS & FEA',
    code: 'STAAD / ETABS / TEKLA',
    detailBadge: 'Technical Drawing Detail #TS-04',
    description: '3D finite-element coordinate model with member stress analysis, deflection verification, and space-frame curved truss nodes.',
    image: '/images/project_tekla_cad_model.jpg'
  },
  {
    id: 'peb-erection',
    title: 'PEB SHED PORTAL FRAME ERECTION',
    shortTitle: 'SITE ERECTION',
    sub: 'IS 800 Portal Framing',
    discipline: 'CIVIL & STRUCTURAL EXECUTION',
    code: 'IS 800:2007 (PEB)',
    detailBadge: 'Field Erection Inspection #PEB-01',
    description: 'Ground erection of high-clearance pre-engineered steel portal frames, anchor bolt alignment, and side masonry enclosures.',
    image: '/images/project_peb_site_erection.jpg'
  },
  {
    id: 'peb-portal-front',
    title: 'HIGH-BAY INDUSTRIAL WAREHOUSE',
    shortTitle: 'PEB PORTAL SPAN',
    sub: 'Heavy Gable Framing',
    discipline: 'HEAVY INDUSTRIAL PEB',
    code: 'IS 875 WIND (ZONE IV)',
    detailBadge: 'Clear Span Superstructure #CS-02',
    description: 'Full axial-span portal frames designed for heavy wind uplift, overhead crane movement, and high internal clearance.',
    image: '/images/project_peb_portal_front.jpg'
  },
  {
    id: 'roof-trusses',
    title: 'TUBULAR ROOF TRUSS & SKYLIGHTS',
    shortTitle: 'ROOF TRUSSES',
    sub: 'Tubular Steel & Skylights',
    discipline: 'ROOF ENVELOPE & FABRICATION',
    code: 'IS 4923 / IS 1161',
    detailBadge: 'Fabricated Roof Truss Detail #RT-03',
    description: 'High-strength steel tubular roof trusses engineered with natural daylight roof monitors, anti-sag rods, and purlin bracing.',
    image: '/images/project_warehouse_truss_roof.jpg'
  },
  {
    id: 'peb-warehouse-render',
    title: 'TURNKEY PEB INDUSTRIAL FACILITY',
    shortTitle: '3D FACILITY RENDER',
    sub: 'Turnkey PEB Master Plan',
    discipline: '3D ARCHITECTURAL & BIM',
    code: 'BIM LOD 350 / PEB',
    detailBadge: 'Industrial Facility Layout #IF-05',
    description: 'Architectural and structural 3D render showcasing wide-span factory shed, front cantilever loading canopy, and access infrastructure.',
    image: '/images/project_peb_warehouse_3d.jpg'
  }
];

export default function AboutSection({ onOpenInquiry, onOpenBlueprintModal }: AboutSectionProps) {
  const [activePhotoIndex, setActivePhotoIndex] = useState(0);
  const activePhoto = PROJECT_PHOTOS[activePhotoIndex];

  const highlights = [
    {
      title: 'Safe Design',
      description: 'Zero-compromise structural safety adhering to seismic ductility, extreme wind resistance, and stringent code compliance.',
      icon: ShieldCheck,
      color: 'text-emerald-400',
      bg: 'bg-emerald-950/40 border-emerald-800/50'
    },
    {
      title: 'Cost Efficient',
      description: 'Intelligent section optimization reducing unnecessary structural tonnage and concrete volume while retaining full safety margins.',
      icon: Coins,
      color: 'text-amber-400',
      bg: 'bg-amber-950/40 border-amber-800/50'
    },
    {
      title: 'Innovative Engineering',
      description: 'Advanced 3D finite element simulation and customized framing geometries for complex, non-standard project topologies.',
      icon: Lightbulb,
      color: 'text-sky-400',
      bg: 'bg-sky-950/40 border-sky-800/50'
    },
    {
      title: 'Reliable Solutions',
      description: 'Constructible, practical civil and structural drawings with comprehensive General Arrangement and Bar Bending schedules.',
      icon: CheckCircle2,
      color: 'text-[#E06D14]',
      bg: 'bg-orange-950/40 border-orange-800/50'
    }
  ];

  return (
    <section id="about" className="py-12 sm:py-16 lg:py-24 bg-[#0F141E] relative border-t border-white/10">
      {/* Background blueprint subtle texture */}
      <div className="absolute inset-0 blueprint-grid opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header Eyebrow */}
        <div className="flex items-center gap-4 mb-4">
          <div className="w-12 h-px bg-[#F27D26]"></div>
          <span className="text-[#F27D26] uppercase tracking-[0.3em] font-bold text-xs font-mono-tech">
            ABOUT TATVA STRUCTURA
          </span>
        </div>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Description & Highlights */}
          <div className="lg:col-span-6 space-y-6">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white font-heading tracking-tight uppercase leading-tight">
              ENGINEERING PRECISION.<br />
              <span className="text-transparent" style={{ WebkitTextStroke: '1px #F27D26' }}>
                BUILT FOR COMPLEXITY.
              </span>
            </h2>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              {COMPANY_INFO.aboutDetailed}
            </p>

            <p className="text-sm text-slate-400 leading-relaxed">
              From heavy industrial manufacturing plants, refineries, and power generation units to high-density metro viaducts, post-tensioned flyover pier caps, and blast-resistant bunkers, our engineering core blends rigorous mathematical analysis with deep constructability insight.
            </p>

            {/* 4 Key Highlight Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {highlights.map((item, idx) => {
                const IconComponent = item.icon;
                return (
                  <div 
                    key={item.title} 
                    className="p-5 rounded-sm border border-white/10 bg-[#161C27] hover:border-white/20 transition-all duration-200"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <div className="p-2 rounded-sm bg-white/5 border border-white/10 text-[#F27D26]">
                        <IconComponent className="w-4 h-4" />
                      </div>
                      <span className="text-xs font-mono-tech font-bold text-[#F27D26]">0{idx + 1}</span>
                    </div>
                    <h3 className="text-sm font-bold text-white font-heading tracking-wide uppercase mb-1.5">
                      {item.title}
                    </h3>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Engineering Visual & Interactive Blueprint Viewer Widget */}
          <div className="lg:col-span-6 space-y-3.5">
            
            {/* Primary Visual with Blueprint HUD */}
            <div className="relative rounded-sm overflow-hidden border border-white/20 bg-[#161C27] shadow-2xl group accent-glow">
              <img 
                src={activePhoto.image} 
                alt={activePhoto.title} 
                referrerPolicy="no-referrer"
                className="w-full h-80 sm:h-96 object-cover object-center group-hover:scale-102 transition-transform duration-700 brightness-95"
              />
              
              {/* Technical Drawing Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F141E] via-[#0F141E]/30 to-transparent pointer-events-none" />
              <div className="absolute inset-0 blueprint-grid opacity-30 pointer-events-none" />

              {/* HUD Graphics on Visual */}
              <div className="absolute top-3.5 left-3.5 right-3.5 flex justify-between items-start">
                <div className="bg-[#161C27]/95 border border-white/20 px-3 py-1.5 rounded-sm text-[11px] font-mono-tech text-slate-200 backdrop-blur-md shadow-md">
                  <span className="text-[#F27D26] font-bold">DISCIPLINE:</span> {activePhoto.discipline}
                </div>
                <div className="bg-[#F27D26]/20 border border-[#F27D26]/60 px-2.5 py-1 rounded-sm text-[10px] font-mono-tech text-[#F27D26] uppercase font-bold backdrop-blur-md">
                  {activePhoto.code}
                </div>
              </div>

              {/* Floating Technical Blueprint Box */}
              <div className="absolute bottom-3.5 left-3.5 right-3.5 bg-[#161C27]/95 border border-white/20 p-3.5 sm:p-4 rounded-sm backdrop-blur-lg">
                <div className="flex items-center justify-between mb-1.5">
                  <div className="flex items-center space-x-2">
                    <FileCode2 className="w-4 h-4 text-[#F27D26]" />
                    <span className="text-xs font-mono-tech font-bold text-white uppercase tracking-wider">
                      {activePhoto.detailBadge}
                    </span>
                  </div>
                  <button 
                    onClick={onOpenBlueprintModal}
                    className="inline-flex items-center space-x-1 text-[11px] font-mono-tech text-[#F27D26] hover:text-[#ff8c38] font-bold uppercase transition-colors cursor-pointer"
                  >
                    <span>View Schematics</span>
                    <Maximize2 className="w-3 h-3" />
                  </button>
                </div>
                <div className="text-xs text-slate-300 line-clamp-2 leading-relaxed">
                  {activePhoto.description}
                </div>
                <div className="mt-2.5 flex items-center justify-between pt-2 border-t border-white/10 text-[10px] font-mono-tech text-slate-400 uppercase">
                  <span className="text-white font-bold">{activePhoto.title}</span>
                  <span className="text-emerald-400 font-bold">VERIFIED PROJECT ASSET</span>
                </div>
              </div>
            </div>

            {/* 5-Photo Interactive Civil Engineering Project Grid */}
            <div className="space-y-1.5">
              <div className="flex items-center justify-between text-[11px] font-mono-tech text-slate-400 px-0.5">
                <span className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#F27D26]" />
                  <span>PROJECT GALLERY (CLICK TO VIEW)</span>
                </span>
                <span className="text-[#F27D26] font-bold">
                  {activePhotoIndex + 1} OF {PROJECT_PHOTOS.length}
                </span>
              </div>
              <div className="grid grid-cols-5 gap-2">
                {PROJECT_PHOTOS.map((item, idx) => {
                  const isSelected = idx === activePhotoIndex;
                  return (
                    <button
                      key={item.id}
                      onClick={() => setActivePhotoIndex(idx)}
                      className={`relative rounded-sm overflow-hidden text-left transition-all duration-300 aspect-[4/3] bg-slate-950 cursor-pointer group ${
                        isSelected 
                          ? 'ring-2 ring-[#F27D26] border border-[#F27D26] scale-102 shadow-lg shadow-[#F27D26]/20' 
                          : 'border border-white/15 opacity-70 hover:opacity-100 hover:border-white/40'
                      }`}
                    >
                      <img 
                        src={item.image} 
                        alt={item.title} 
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 brightness-95"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/30 to-transparent pointer-events-none" />
                      <div className="absolute bottom-1 left-1 right-1 pointer-events-none">
                        <div className="text-[8px] sm:text-[9px] font-mono-tech font-bold text-white uppercase truncate">
                          {item.shortTitle}
                        </div>
                      </div>
                      {isSelected && (
                        <div className="absolute top-1 right-1 w-2 h-2 rounded-full bg-[#F27D26]" />
                      )}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Quick Consultation Ribbon */}
            <div className="p-4 rounded-sm bg-[#161C27] border border-white/10 flex items-center justify-between text-xs">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 rounded-full bg-[#F27D26]" />
                <span className="text-slate-300">
                  Consultancy under technical direction of <strong className="text-white uppercase font-bold">Jitendra Arya</strong> (M.Tech DCE)
                </span>
              </div>
              <span className="font-mono-tech text-[#F27D26] font-bold uppercase tracking-wider hidden sm:inline text-[11px]">
                YOU THINK WE MAKE
              </span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
