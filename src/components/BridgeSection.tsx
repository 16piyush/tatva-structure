import React from 'react';
import { 
  Building2, 
  MapPin, 
  ArrowRight, 
  Compass, 
  CheckCircle2,
  FileSpreadsheet,
  Globe
} from 'lucide-react';

interface BridgeSectionProps {
  onOpenInquiry: (subject?: string) => void;
}

export default function BridgeSection({ onOpenInquiry }: BridgeSectionProps) {
  const bridges = [
    {
      id: 'patna-flyover',
      title: 'Patna Six-Lane Flyover Project',
      location: 'Patna, Bihar, India',
      type: 'Heavy Urban Flyover',
      scope: [
        'Design Basis Report (DBR) preparation',
        'Precast post-tensioned and RCC flyover pier caps',
        'Deep bored pile foundation designs',
        'Substructure pier and pile cap schedules'
      ],
      standards: 'IRC 112 / IRC 6 / MoRTH Standards',
      imageUrl: '/images/project_patna_six_lane_flyover.jpg',
      badge: 'Six-Lane Flyover'
    },
    {
      id: 'uk-lanarkshire',
      title: 'NHS Lanarkshire, Monkland Active Travel Route Bridge',
      location: 'Scotland, United Kingdom',
      type: '140m Continuous Composite Bridge',
      scope: [
        '140m three-span continuous composite superstructure',
        'Fabricated structural steel girders with composite concrete deck',
        'Vibration damping and active travel pedestrian/cyclist criteria',
        'Full Eurocode compliance'
      ],
      standards: 'BS EN 1993 (Eurocode 3) & BS EN 1994 (Eurocode 4)',
      imageUrl: 'https://images.unsplash.com/photo-1513880989635-6eb491ce7f5b?auto=format&fit=crop&w=1200&q=80',
      badge: 'UK International Bridge'
    },
    {
      id: 'uk-m8-st-georges',
      title: 'M8 St Georges Road Bridge Assessment',
      location: 'Glasgow, United Kingdom',
      type: 'Curved Bridge Structural Assessment',
      scope: [
        'Assessment of superstructure and substructure',
        'Curved bridge deck with radius of 28.8m',
        'Strict structural evaluation according to CS 454 & CS 455',
        'Capacity rating and load assessment report'
      ],
      standards: 'UK Highways Standards CS 454 & CS 455',
      imageUrl: 'https://images.unsplash.com/photo-1506157786151-b8491531f063?auto=format&fit=crop&w=1200&q=80',
      badge: 'UK Bridge Assessment'
    }
  ];

  return (
    <section id="bridges" className="py-12 sm:py-16 lg:py-24 bg-[#0F141E] relative border-t border-white/10">
      <div className="absolute inset-0 blueprint-grid opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-sm bg-[#161C27] border border-[#F27D26]/40 text-[#F27D26] text-xs font-mono-tech uppercase tracking-wider">
            <span className="w-2 h-2 rounded-full bg-[#F27D26]" />
            <span>CIVIL INFRASTRUCTURE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white font-heading tracking-tight uppercase">
            BRIDGE PROJECTS & FLYOVERS
          </h2>
          <p className="text-base text-slate-400">
            From heavy multi-lane highway flyovers in India to continuous composite steel bridges and curvature assessments across the United Kingdom.
          </p>
        </div>

        {/* Bridge Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {bridges.map((bridge) => (
            <div
              key={bridge.id}
              className="bg-[#0B1526] border border-slate-800 hover:border-[#E06D14]/80 rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/70 flex flex-col justify-between group"
            >
              {/* Bridge Image Header */}
              <div className="relative h-56 w-full overflow-hidden bg-slate-950">
                <img 
                  src={bridge.imageUrl} 
                  alt={bridge.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-80 group-hover:opacity-95"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1526] via-transparent to-transparent" />
                
                <div className="absolute top-3 left-3">
                  <span className="text-[10px] font-mono-tech px-2.5 py-1 rounded bg-[#E06D14] text-white font-bold uppercase shadow">
                    {bridge.badge}
                  </span>
                </div>

                <div className="absolute bottom-3 left-3 flex items-center space-x-1 text-[11px] font-mono-tech text-slate-300 bg-slate-900/80 px-2 py-0.5 rounded backdrop-blur-sm">
                  <MapPin className="w-3 h-3 text-[#E06D14]" />
                  <span>{bridge.location}</span>
                </div>
              </div>

              {/* Bridge Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="text-lg font-bold text-white font-heading mb-2 group-hover:text-amber-400 transition-colors">
                    {bridge.title}
                  </h3>

                  <div className="text-xs font-mono-tech text-sky-400 mb-4 pb-2 border-b border-slate-800">
                    {bridge.type}
                  </div>

                  {/* Scope list */}
                  <div className="space-y-2 mb-4">
                    <div className="text-[10px] font-mono-tech text-slate-500 uppercase tracking-wider">
                      ENGINEERING SCOPE:
                    </div>
                    {bridge.scope.map((s, i) => (
                      <div key={i} className="flex items-start space-x-2 text-xs text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{s}</span>
                      </div>
                    ))}
                  </div>

                  <div className="p-2.5 rounded-lg bg-slate-900/90 border border-slate-800 text-[11px] font-mono-tech text-slate-400">
                    <span className="text-[#E06D14] font-semibold">CODES: </span>
                    <span>{bridge.standards}</span>
                  </div>
                </div>

                {/* Card Action */}
                <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
                  <button
                    onClick={() => onOpenInquiry(`Bridge Engineering Inquiry: ${bridge.title}`)}
                    className="inline-flex items-center space-x-1 text-xs font-bold text-[#E06D14] hover:text-amber-400 transition-colors cursor-pointer"
                  >
                    <span>Inquire for Bridge Design</span>
                    <ArrowRight className="w-3.5 h-3.5 ml-1 group-hover:translate-x-1 transition-transform" />
                  </button>
                  <span className="text-[10px] font-mono-tech text-slate-600">CERTIFIED</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
