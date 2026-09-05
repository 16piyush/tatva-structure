import React, { useState } from 'react';
import { 
  Building2, 
  Factory, 
  Zap, 
  Flame, 
  Droplets, 
  TrainTrack, 
  ShieldAlert, 
  Home, 
  Building,
  ArrowRight,
  Sparkles
} from 'lucide-react';
import { INDUSTRIES_SERVED } from '../data/companyData';

interface IndustriesSectionProps {
  onOpenInquiry: (industryName?: string) => void;
}

export default function IndustriesSection({ onOpenInquiry }: IndustriesSectionProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="py-12 sm:py-16 lg:py-24 bg-[#0F141E] relative border-t border-white/10">
      <div className="absolute inset-0 blueprint-grid opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-sm bg-[#161C27] border border-[#F27D26]/40 text-[#F27D26] text-xs font-mono-tech uppercase tracking-wider">
            <span className="w-2 h-2 rounded-full bg-[#F27D26]" />
            <span>SECTOR FOOTPRINT</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white font-heading tracking-tight uppercase">
            INDUSTRIES WE SERVE
          </h2>
          <p className="text-base text-slate-400">
            Delivering mission-critical structural engineering and design services across 12 diversified industrial, energy, and infrastructure sectors.
          </p>
        </div>

        {/* 12 Industry Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {INDUSTRIES_SERVED.map((ind, index) => {
            return (
              <div
                key={ind.id}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="group relative rounded-xl overflow-hidden border border-slate-800 bg-[#0B1526] hover:border-[#E06D14]/70 transition-all duration-300 flex flex-col justify-between h-72 shadow-lg hover:shadow-2xl hover:shadow-black/70 cursor-pointer"
                onClick={() => onOpenInquiry(`Industry Consultation: ${ind.title}`)}
              >
                {/* Background Image with Bright Industrial Clarity */}
                <div className="absolute inset-0 z-0">
                  <img 
                    src={ind.imageUrl} 
                    alt={ind.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-80 group-hover:opacity-95 brightness-95 group-hover:brightness-105 contrast-[1.05]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#070D18] via-[#070D18]/65 via-45% to-black/20" />
                  <div className="absolute inset-0 blueprint-grid opacity-10" />
                </div>

                {/* Top Badge */}
                <div className="relative z-10 p-4 flex justify-between items-start">
                  <span className="text-[11px] font-mono-tech text-white font-bold px-2 py-0.5 rounded bg-black/60 backdrop-blur-sm border border-white/20 group-hover:text-[#F27D26] group-hover:border-[#F27D26]/60 transition-colors">
                    #{(index + 1).toString().padStart(2, '0')}
                  </span>
                  <div className="w-8 h-8 rounded-lg bg-black/60 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white group-hover:bg-[#F27D26] group-hover:text-white group-hover:border-[#F27D26] transition-all shadow-md">
                    <ArrowRight className="w-4 h-4 -rotate-45 group-hover:rotate-0 transition-transform" />
                  </div>
                </div>

                {/* Content at Bottom with Legible Backdrop */}
                <div className="relative z-10 p-5 space-y-2 bg-gradient-to-t from-[#070D18] via-[#070D18]/90 to-transparent pt-8">
                  <h3 className="text-base font-bold text-white font-heading group-hover:text-[#F27D26] transition-colors drop-shadow-sm">
                    {ind.title}
                  </h3>
                  <p className="text-xs text-slate-200 line-clamp-2 leading-relaxed drop-shadow-sm">
                    {ind.description}
                  </p>
                  
                  {/* Focus Areas Pills */}
                  <div className="pt-2 flex flex-wrap gap-1.5">
                    {ind.focusAreas.slice(0, 2).map((focus, i) => (
                      <span 
                        key={i} 
                        className="text-[10px] font-mono-tech px-2 py-0.5 rounded bg-black/60 backdrop-blur-sm border border-white/15 text-slate-200 group-hover:border-slate-500 group-hover:text-white"
                      >
                        {focus}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
