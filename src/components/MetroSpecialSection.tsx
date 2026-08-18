import React, { useState } from 'react';
import { 
  TrainTrack, 
  Layers, 
  ShieldCheck, 
  FileText, 
  ArrowRight,
  CheckCircle2,
  Maximize2
} from 'lucide-react';

interface MetroSpecialSectionProps {
  onOpenInquiry: (subject?: string) => void;
}

export default function MetroSpecialSection({ onOpenInquiry }: MetroSpecialSectionProps) {
  const [activePackage, setActivePackage] = useState<'dc02' | 'bc03' | 'bc01'>('dc02');

  const packages = {
    dc02: {
      title: 'Delhi MRTS Phase-4 — Package DC-02',
      location: 'Delhi Metro Mass Rapid Transit System',
      description: 'Comprehensive structural analysis and detailed engineering of high-density elevated viaducts, multi-tier station pier caps, and specialized cantilever arm supports.',
      components: [
        'Precast post-tensioned concourse-level pier caps',
        'Track-level precast pier caps',
        'Viaduct pier caps with elastomeric bearing pedestals',
        'Deep bored piles & high-capacity pile caps',
        'Normal & cantilever heavy structural elements',
        'Portal frame piers for urban road alignment constraints'
      ],
      techSpecs: 'DMRC Standard Specifications & IRS Concrete Bridge Code',
      image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=1200&q=80'
    },
    bc03: {
      title: 'Mumbai Metro Line 6 — Package BC03',
      location: 'Mumbai Elevated Metro & Integrated Flyover',
      description: 'Integrated dual-deck transit corridor engineering encompassing high-load flyover cross arms, concourse arm cantilevers, and structural substructure detailing.',
      components: [
        'Design Basis Report (DBR) Preparation',
        'Precast post-tensioned flyover pier caps',
        'Concourse cross arms & Track cross arms',
        'Pile, pile cap, and pier substructures',
        'Elastomeric bearings and RCC longitudinal beams',
        'Seismic dynamic response modeling for coastal Mumbai'
      ],
      techSpecs: 'MMRDA Criteria, IRS Bridge Code & IRC 112',
      image: 'https://images.unsplash.com/photo-1570125909232-eb263c188f7e?auto=format&fit=crop&w=1200&q=80'
    },
    bc01: {
      title: 'Mumbai Metro Line 6 — Package BC01',
      location: 'Mumbai Elevated Mass Transit Corridor',
      description: 'Elevated viaduct and station superstructure design with comprehensive alignment analysis, multi-track cross arms, and specialized bearing interface drawings.',
      components: [
        'Design Basis Report (DBR) formulation',
        'Concourse cross arms & complex alignment drawings',
        'Track cross arms & elevated viaduct pier caps',
        'Deep substructure piles & high-rigidity piers',
        'Elastomeric bearings & precast beam schedules',
        'Heavy live load rolling stock dynamic evaluation'
      ],
      techSpecs: 'MMRDA Criteria & RDSO Guidelines',
      image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80'
    }
  };

  const current = packages[activePackage];

  return (
    <section id="metro" className="py-12 sm:py-16 lg:py-24 bg-[#0F141E] relative border-t border-white/10">
      <div className="absolute inset-0 blueprint-grid opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-sm bg-[#161C27] border border-[#F27D26]/40 text-[#F27D26] text-xs font-mono-tech uppercase tracking-wider">
            <TrainTrack className="w-3.5 h-3.5" />
            <span>MASS RAPID TRANSIT SYSTEMS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white font-heading tracking-tight uppercase">
            METRO & TRANSPORTATION PROJECTS
          </h2>
          <p className="text-base text-slate-400">
            Specialized precast post-tensioned viaduct pier caps, concourse cantilever cross arms, and foundation engineering for premier metro lines across India.
          </p>
        </div>

        {/* Tab Switcher for the 3 packages */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex p-1.5 rounded-xl bg-slate-900 border border-slate-800 space-x-1 sm:space-x-2">
            <button
              onClick={() => setActivePackage('dc02')}
              className={`px-4 sm:px-6 py-2.5 rounded-lg text-xs sm:text-sm font-bold font-mono-tech transition-all cursor-pointer ${
                activePackage === 'dc02'
                  ? 'bg-[#E06D14] text-white shadow-lg shadow-[#E06D14]/20'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800'
              }`}
            >
              Delhi MRTS DC-02
            </button>
            <button
              onClick={() => setActivePackage('bc03')}
              className={`px-4 sm:px-6 py-2.5 rounded-lg text-xs sm:text-sm font-bold font-mono-tech transition-all cursor-pointer ${
                activePackage === 'bc03'
                  ? 'bg-[#E06D14] text-white shadow-lg shadow-[#E06D14]/20'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800'
              }`}
            >
              Mumbai Metro BC03
            </button>
            <button
              onClick={() => setActivePackage('bc01')}
              className={`px-4 sm:px-6 py-2.5 rounded-lg text-xs sm:text-sm font-bold font-mono-tech transition-all cursor-pointer ${
                activePackage === 'bc01'
                  ? 'bg-[#E06D14] text-white shadow-lg shadow-[#E06D14]/20'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800'
              }`}
            >
              Mumbai Metro BC01
            </button>
          </div>
        </div>

        {/* Detailed Showcase Container */}
        <div className="bg-[#09111E] border border-slate-700/80 rounded-2xl overflow-hidden shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
            
            {/* Left Column: Visual & Schematic */}
            <div className="lg:col-span-5 relative min-h-[320px] lg:min-h-full">
              <img 
                src={current.image} 
                alt={current.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-[#09111E] via-[#09111E]/50 to-transparent" />
              <div className="absolute inset-0 blueprint-grid opacity-30 pointer-events-none" />

              <div className="absolute top-4 left-4">
                <span className="text-[10px] font-mono-tech px-2.5 py-1 rounded bg-[#E06D14] text-white font-bold uppercase shadow">
                  MASS TRANSIT CORRIDOR
                </span>
              </div>

              {/* Technical Drawing Callout on Visual */}
              <div className="absolute bottom-4 left-4 right-4 p-3 rounded-lg bg-slate-900/90 border border-slate-700/80 backdrop-blur-md text-[11px] font-mono-tech">
                <div className="text-sky-300 font-bold mb-0.5">STRUCTURAL SPECIFICATION:</div>
                <div className="text-slate-300">{current.techSpecs}</div>
              </div>
            </div>

            {/* Right Column: Technical Details */}
            <div className="lg:col-span-7 p-6 sm:p-8 lg:p-10 space-y-6 flex flex-col justify-between">
              <div className="space-y-4">
                <div>
                  <span className="text-xs font-mono-tech text-[#E06D14] uppercase tracking-wider">
                    PACKAGE DETAILS
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-bold text-white font-heading mt-1">
                    {current.title}
                  </h3>
                  <p className="text-xs text-sky-400 font-mono-tech mt-1">
                    {current.location}
                  </p>
                </div>

                <p className="text-sm text-slate-300 leading-relaxed">
                  {current.description}
                </p>

                {/* Structural Components Grid */}
                <div className="space-y-3 pt-2">
                  <div className="text-xs font-mono-tech text-slate-400 uppercase tracking-wider">
                    ENGINEERED STRUCTURAL COMPONENTS:
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {current.components.map((item, idx) => (
                      <div 
                        key={idx}
                        className="p-3 rounded-lg bg-slate-900/80 border border-slate-800 flex items-start space-x-2.5 text-xs text-slate-200"
                      >
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Bar */}
              <div className="pt-6 border-t border-slate-800 flex flex-wrap items-center justify-between gap-4">
                <div className="text-xs font-mono-tech text-slate-500">
                  POST-TENSIONED &bull; CANTILEVER &bull; SEISMIC GRADE
                </div>

                <button
                  onClick={() => onOpenInquiry(`Metro Structural Inquiry: ${current.title}`)}
                  className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-lg text-xs font-bold bg-[#E06D14] hover:bg-[#EA7A24] text-white transition-colors cursor-pointer"
                >
                  <span>Discuss Metro Engineering</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
