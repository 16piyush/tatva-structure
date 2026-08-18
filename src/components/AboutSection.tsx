import React from 'react';
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

export default function AboutSection({ onOpenInquiry, onOpenBlueprintModal }: AboutSectionProps) {
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
    <section id="about" className="py-20 lg:py-28 bg-[#0F141E] relative border-t border-white/10">
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
          <div className="lg:col-span-6 space-y-4">
            
            {/* Primary Visual with Blueprint HUD */}
            <div className="relative rounded-sm overflow-hidden border border-white/10 bg-[#161C27] shadow-2xl group accent-glow">
              <img 
                src="https://images.unsplash.com/photo-1541888946425-d0fbb18086f6?auto=format&fit=crop&w=1200&q=80" 
                alt="Engineering Precision and Structural Framework" 
                className="w-full h-80 sm:h-96 object-cover object-center group-hover:scale-105 transition-transform duration-700 opacity-40 filter grayscale contrast-125"
              />
              
              {/* Technical Drawing Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F141E] via-transparent to-[#0F141E]/80" />
              <div className="absolute inset-0 blueprint-grid opacity-50 pointer-events-none" />

              {/* HUD Graphics on Visual */}
              <div className="absolute top-4 left-4 right-4 flex justify-between items-start">
                <div className="bg-[#161C27]/90 border border-white/10 px-3 py-1.5 rounded-sm text-[11px] font-mono-tech text-slate-300 backdrop-blur-md">
                  <span className="text-[#F27D26] font-bold">DISCIPLINE:</span> STRUCTURAL & FOUNDATION
                </div>
                <div className="bg-white/10 border border-white/20 px-2.5 py-1 rounded-sm text-[10px] font-mono-tech text-white uppercase font-bold">
                  STAAD / ETABS / TEKLA
                </div>
              </div>

              {/* Floating Technical Blueprint Box */}
              <div className="absolute bottom-4 left-4 right-4 bg-[#161C27]/95 border border-white/10 p-4 rounded-sm backdrop-blur-lg">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center space-x-2">
                    <FileCode2 className="w-4 h-4 text-[#F27D26]" />
                    <span className="text-xs font-mono-tech font-bold text-white uppercase tracking-wider">
                      Technical Drawing Detail #TS-04
                    </span>
                  </div>
                  <button 
                    onClick={onOpenBlueprintModal}
                    className="inline-flex items-center space-x-1 text-[11px] font-mono-tech text-[#F27D26] hover:text-[#ff8c38] font-bold uppercase transition-colors"
                  >
                    <span>View Schematics</span>
                    <Maximize2 className="w-3 h-3" />
                  </button>
                </div>
                <div className="text-xs text-slate-300">
                  Full 3D coordinate-verified drafting covering superstructure, substructure pile caps, seismic cross arms, and fabrication connection detailing.
                </div>
                <div className="mt-3 flex items-center justify-between pt-2 border-t border-white/10 text-[10px] font-mono-tech text-slate-400 uppercase">
                  <span>ISO-GRADE PRECISION WORKFLOW</span>
                  <span className="text-emerald-400 font-bold">ALL MAJOR CODES COMPLIANT</span>
                </div>
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
