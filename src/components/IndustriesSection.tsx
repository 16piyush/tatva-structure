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
    <section className="py-20 lg:py-28 bg-[#070D18] relative border-t border-slate-800/80">
      <div className="absolute inset-0 blueprint-grid opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-slate-900 border border-[#E06D14]/40 text-[#E06D14] text-xs font-mono-tech uppercase tracking-wider">
            <span className="w-2 h-2 rounded-full bg-[#E06D14]" />
            <span>SECTOR FOOTPRINT</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-heading tracking-tight">
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
                {/* Background Image with Dark Tint */}
                <div className="absolute inset-0 z-0">
                  <img 
                    src={ind.imageUrl} 
                    alt={ind.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-25 group-hover:opacity-40"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B1526] via-[#0B1526]/80 to-transparent" />
                  <div className="absolute inset-0 blueprint-grid opacity-15" />
                </div>

                {/* Top Badge */}
                <div className="relative z-10 p-5 flex justify-between items-start">
                  <span className="text-[11px] font-mono-tech text-slate-400 group-hover:text-[#E06D14] transition-colors">
                    #{(index + 1).toString().padStart(2, '0')}
                  </span>
                  <div className="w-8 h-8 rounded-lg bg-slate-900/80 border border-slate-700/80 flex items-center justify-center text-slate-300 group-hover:bg-[#E06D14] group-hover:text-white group-hover:border-[#E06D14] transition-all">
                    <ArrowRight className="w-4 h-4 -rotate-45 group-hover:rotate-0 transition-transform" />
                  </div>
                </div>

                {/* Content at Bottom */}
                <div className="relative z-10 p-5 space-y-2">
                  <h3 className="text-base font-bold text-white font-heading group-hover:text-amber-400 transition-colors">
                    {ind.title}
                  </h3>
                  <p className="text-xs text-slate-300 line-clamp-2 leading-relaxed">
                    {ind.description}
                  </p>
                  
                  {/* Focus Areas Pills */}
                  <div className="pt-2 flex flex-wrap gap-1">
                    {ind.focusAreas.slice(0, 2).map((focus, i) => (
                      <span 
                        key={i} 
                        className="text-[10px] font-mono-tech px-2 py-0.5 rounded bg-slate-900/90 border border-slate-800 text-slate-400 group-hover:border-slate-700 group-hover:text-slate-200"
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
