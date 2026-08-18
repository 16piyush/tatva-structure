import React from 'react';
import { 
  Globe2, 
  MapPin, 
  ShieldCheck, 
  Compass, 
  ArrowRight,
  ExternalLink,
  BookOpen
} from 'lucide-react';

interface InternationalProps {
  onOpenInquiry: (subject?: string) => void;
}

export default function InternationalExperienceSection({ onOpenInquiry }: InternationalProps) {
  const globalProjects = [
    {
      country: 'Ethiopia',
      flag: '🇪🇹',
      region: 'East Africa',
      project: '250 TPD Edible Oil Plant',
      scope: 'Complete structural design of processing towers, raw seed storage silos, refinery units, and heavy industrial foundation systems.',
      codeStandard: 'European Codes (Eurocodes EN 1991, EN 1992, EN 1993)',
      iconBg: 'from-amber-900/30 to-amber-950/50'
    },
    {
      country: 'Abu Dhabi (UAE)',
      flag: '🇦🇪',
      region: 'Middle East',
      project: 'Heavy Steel Processing Facilities',
      scope: 'Structural design and heavy vibrating machine foundation engineering for steel processing mills adhering to severe ambient thermal criteria.',
      codeStandard: 'Abu Dhabi International Building Codes (ADIBC) & British Standards',
      iconBg: 'from-emerald-900/30 to-emerald-950/50'
    },
    {
      country: 'United Kingdom',
      flag: '🇬🇧',
      region: 'Europe / UK',
      project: 'Bridges & Highways Assessments',
      scope: '140m three-span composite bridge (NHS Lanarkshire) and curved bridge superstructure assessment with 28.8m radius (M8 St Georges Road).',
      codeStandard: 'UK Highways Standards CS 454, CS 455 & Eurocode 3 / 4',
      iconBg: 'from-sky-900/30 to-sky-950/50'
    }
  ];

  return (
    <section id="international" className="py-12 sm:py-16 lg:py-24 bg-[#0F141E] relative border-t border-white/10">
      {/* Subtle World Map / Global Network Graphic */}
      <div className="absolute inset-0 blueprint-grid opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-sm bg-[#161C27] border border-[#F27D26]/40 text-[#F27D26] text-xs font-mono-tech uppercase tracking-wider">
            <Globe2 className="w-3.5 h-3.5" />
            <span>CROSS-BORDER PROJECT REACH</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white font-heading tracking-tight uppercase">
            GLOBAL ENGINEERING EXPERIENCE
          </h2>
          <p className="text-base text-slate-400">
            Demonstrated international design capability executing complex structural projects across Africa, the Middle East, and the United Kingdom in strict alignment with regional codes.
          </p>
        </div>

        {/* Global Highlight Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {globalProjects.map((item) => (
            <div
              key={item.country}
              className="bg-[#0B1526] border border-slate-800 hover:border-[#E06D14]/70 rounded-2xl p-6 sm:p-8 transition-all duration-300 hover:-translate-y-1 shadow-xl hover:shadow-black/70 flex flex-col justify-between group relative overflow-hidden"
            >
              {/* Country & Flag Header */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl">{item.flag}</span>
                    <div>
                      <h3 className="text-lg font-bold text-white font-heading">
                        {item.country}
                      </h3>
                      <span className="text-[10px] font-mono-tech text-slate-400 uppercase">
                        {item.region}
                      </span>
                    </div>
                  </div>
                  <span className="text-xs font-mono-tech text-[#E06D14] font-semibold bg-[#E06D14]/10 px-2 py-1 rounded">
                    INT'L PROJECT
                  </span>
                </div>

                {/* Project Title */}
                <div className="text-sm font-bold text-amber-400 font-heading mb-3">
                  {item.project}
                </div>

                {/* Scope */}
                <p className="text-xs text-slate-300 leading-relaxed mb-6">
                  {item.scope}
                </p>

                {/* Code Standards */}
                <div className="p-3 rounded-lg bg-slate-900/90 border border-slate-800 text-xs font-mono-tech text-sky-300">
                  <span className="text-slate-500 block text-[10px]">APPLIED CODES:</span>
                  <span>{item.codeStandard}</span>
                </div>
              </div>

              {/* Bottom Action */}
              <div className="pt-6 mt-6 border-t border-slate-800/80 flex items-center justify-between">
                <span className="text-[11px] font-mono-tech text-slate-500">EUROCODE / BS / ADIBC</span>
                <button
                  onClick={() => onOpenInquiry(`International Project Inquiry: ${item.country} scope`)}
                  className="text-xs font-bold text-[#E06D14] hover:text-amber-400 transition-colors inline-flex items-center"
                >
                  <span>Inquire</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-1" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Global Multi-Code Capability Banner */}
        <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-slate-900 via-[#0E1A30] to-slate-900 border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <div className="inline-flex items-center space-x-2 text-xs font-mono-tech text-sky-400">
              <Compass className="w-4 h-4" />
              <span>SEAMLESS MULTI-JURISDICTIONAL ADAPTATION</span>
            </div>
            <h4 className="text-xl font-bold text-white font-heading">
              Ready for Cross-Border Engineering Collaboration
            </h4>
            <p className="text-xs sm:text-sm text-slate-300 max-w-2xl">
              Whether your project requires Indian (IS), American (ACI/AISC), European (Eurocodes), Russian (SNiP), or Abu Dhabi codes, Tatva Structura provides verifiable calculations and coordinated drafting.
            </p>
          </div>
          <button
            onClick={() => onOpenInquiry('Global Code & Overseas Project Consultation')}
            className="px-6 py-3 rounded-lg text-xs sm:text-sm font-bold bg-[#E06D14] hover:bg-[#EA7A24] text-white shadow-lg transition-colors shrink-0 cursor-pointer"
          >
            Discuss Global Standards
          </button>
        </div>

      </div>
    </section>
  );
}
