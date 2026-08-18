import { useState } from 'react';
import { 
  Building2, 
  Factory, 
  ShieldCheck, 
  Cpu, 
  Globe2, 
  ArrowRight, 
  Check, 
  Layers, 
  ChevronRight,
  ExternalLink
} from 'lucide-react';
import { CORE_EXPERTISE } from '../data/companyData';

interface CoreExpertiseProps {
  onSelectExpertise?: (id: string) => void;
  onOpenInquiry: (initialSubject?: string) => void;
}

export default function CoreExpertiseSection({ onSelectExpertise, onOpenInquiry }: CoreExpertiseProps) {
  const [activeCategory, setActiveCategory] = useState(CORE_EXPERTISE[0].id);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Building2': return Building2;
      case 'Factory': return Factory;
      case 'ShieldCheck': return ShieldCheck;
      case 'Cpu': return Cpu;
      case 'Globe2': return Globe2;
      default: return Layers;
    }
  };

  const selectedExpertise = CORE_EXPERTISE.find(item => item.id === activeCategory) || CORE_EXPERTISE[0];
  const SelectedIcon = getIcon(selectedExpertise.icon);

  return (
    <section id="expertise" className="py-12 sm:py-16 lg:py-24 bg-[#0F141E] relative border-t border-white/10">
      <div className="absolute inset-0 blueprint-grid opacity-25 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="flex items-center justify-center gap-4 mb-2">
            <div className="w-12 h-px bg-[#F27D26]"></div>
            <span className="text-[#F27D26] uppercase tracking-[0.3em] font-bold text-xs font-mono-tech">
              DISCIPLINARY CAPABILITIES
            </span>
            <div className="w-12 h-px bg-[#F27D26]"></div>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white font-heading tracking-tight uppercase">
            OUR CORE EXPERTISE
          </h2>
          <p className="text-base text-slate-400">
            Comprehensive structural engineering, computational finite element analysis, and multi-jurisdictional code compliance for high-value industrial and infrastructure projects.
          </p>
        </div>

        {/* 5 Core Expertise Interactive Grid / Selector */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: 5 Expertise Cards Navigation */}
          <div className="lg:col-span-5 space-y-3">
            {CORE_EXPERTISE.map((item, idx) => {
              const Icon = getIcon(item.icon);
              const isActive = activeCategory === item.id;

              return (
                <button
                  key={item.id}
                  onClick={() => setActiveCategory(item.id)}
                  className={`w-full text-left p-4 sm:p-5 rounded-sm border transition-all duration-300 flex items-start justify-between group cursor-pointer ${
                    isActive
                      ? 'bg-[#161C27] border-[#F27D26] shadow-lg shadow-[#F27D26]/10 translate-x-1 accent-glow'
                      : 'bg-[#161C27]/60 border-white/10 hover:border-white/20 hover:bg-[#161C27]'
                  }`}
                >
                  <div className="flex items-start space-x-4">
                    <div className={`p-3 rounded-sm border transition-colors ${
                      isActive 
                        ? 'bg-[#F27D26] border-[#F27D26] text-white' 
                        : 'bg-white/5 border-white/10 text-slate-400 group-hover:text-white group-hover:border-white/20'
                    }`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="flex items-center space-x-2">
                        <span className="text-[10px] font-mono-tech font-bold text-[#F27D26]">0{idx + 1}</span>
                        <h3 className={`text-base font-bold font-heading uppercase transition-colors ${
                          isActive ? 'text-white' : 'text-slate-200 group-hover:text-white'
                        }`}>
                          {item.title}
                        </h3>
                      </div>
                      <p className="text-xs text-slate-400 mt-1 font-mono-tech">
                        {item.subtitle}
                      </p>
                    </div>
                  </div>
                  <ChevronRight className={`w-5 h-5 mt-1 transition-transform ${
                    isActive ? 'text-[#F27D26] translate-x-1' : 'text-slate-600 group-hover:text-slate-400'
                  }`} />
                </button>
              );
            })}
          </div>

          {/* Right Column: Active Category Deep Dive Detail Card */}
          <div className="lg:col-span-7">
            <div className="bg-[#161C27] border border-white/10 rounded-sm p-6 sm:p-8 shadow-2xl relative overflow-hidden accent-glow">
              
              {/* Header inside detail */}
              <div className="flex items-center space-x-3 mb-4">
                <div className="p-3 bg-[#F27D26]/10 border border-[#F27D26]/30 rounded-sm text-[#F27D26]">
                  <SelectedIcon className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-mono-tech text-[#F27D26] uppercase font-bold tracking-widest">
                    DEEP DIVE SPECIFICATION
                  </span>
                  <h3 className="text-2xl font-black text-white font-heading uppercase">
                    {selectedExpertise.title}
                  </h3>
                </div>
              </div>

              <div className="text-xs font-bold text-slate-300 font-mono-tech uppercase mb-4 pb-3 border-b border-white/10">
                {selectedExpertise.subtitle}
              </div>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-6">
                {selectedExpertise.description}
              </p>

              {/* Key Deliverables / Highlights list */}
              <div className="space-y-3 mb-8">
                <div className="text-xs font-mono-tech text-[#F27D26] uppercase tracking-wider font-bold">
                  ENGINEERING SCOPE & DELIVERABLES:
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {selectedExpertise.bulletPoints.map((bullet, idx) => (
                    <div 
                      key={idx}
                      className="p-3 rounded-sm bg-white/5 border border-white/10 flex items-start space-x-2.5 text-xs text-slate-200"
                    >
                      <Check className="w-4 h-4 text-[#F27D26] shrink-0 mt-0.5" />
                      <span>{bullet}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Interactive Action Bar */}
              <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center space-x-2 text-xs text-slate-400 font-mono-tech uppercase">
                  <span className="w-2 h-2 rounded-full bg-[#F27D26]" />
                  <span>INDUSTRY-GRADE COMPLIANCE</span>
                </div>

                <div className="flex items-center space-x-3">
                  <button
                    onClick={() => onOpenInquiry(`Consultation Request: ${selectedExpertise.title}`)}
                    className="inline-flex items-center space-x-2 px-5 py-2.5 text-xs font-bold uppercase tracking-wider rounded-sm bg-[#F27D26] hover:bg-[#ff8c38] text-white transition-colors cursor-pointer"
                  >
                    <span>REQUEST PROPOSAL</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
