import React from 'react';
import { 
  ShieldCheck, 
  Layers, 
  Cpu, 
  GitFork, 
  ArrowRight,
  CheckCircle2
} from 'lucide-react';
import { OUR_APPROACH_STEPS } from '../data/companyData';

export default function ApproachSection() {
  const getStepIcon = (step: string) => {
    switch (step) {
      case '01': return ShieldCheck;
      case '02': return Layers;
      case '03': return Cpu;
      case '04': return GitFork;
      default: return CheckCircle2;
    }
  };

  return (
    <section className="py-20 lg:py-24 bg-[#0B1320] relative border-t border-slate-800/80">
      <div className="absolute inset-0 blueprint-grid opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-slate-900 border border-[#E06D14]/40 text-[#E06D14] text-xs font-mono-tech uppercase tracking-wider">
            <span className="w-2 h-2 rounded-full bg-[#E06D14]" />
            <span>METHODOLOGY & EXECUTION</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-heading tracking-tight">
            OUR APPROACH
          </h2>
          <p className="text-base text-slate-400">
            A disciplined engineering workflow structured to deliver rigorous safety, economical material utilization, and synchronized project delivery.
          </p>
        </div>

        {/* Horizontal Process Steps (Desktop & Tablet) */}
        <div className="relative">
          
          {/* Connecting Line between steps (Desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-8 right-8 h-[2px] bg-gradient-to-r from-[#E06D14]/30 via-sky-500/30 to-[#E06D14]/30 -translate-y-8 z-0" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
            {OUR_APPROACH_STEPS.map((item, idx) => {
              const Icon = getStepIcon(item.step);

              return (
                <div
                  key={item.step}
                  className="bg-[#09111E]/90 border border-slate-800 hover:border-[#E06D14]/60 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 shadow-lg hover:shadow-black/50 flex flex-col justify-between group backdrop-blur-sm"
                >
                  <div>
                    {/* Step Number & Icon */}
                    <div className="flex items-center justify-between mb-5">
                      <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-700/80 flex items-center justify-center text-[#E06D14] group-hover:bg-[#E06D14] group-hover:text-white transition-all duration-200">
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="text-xl font-bold font-mono-tech text-slate-600 group-hover:text-[#E06D14] transition-colors">
                        {item.step}
                      </span>
                    </div>

                    {/* Step Title */}
                    <h3 className="text-lg font-bold text-white font-heading mb-2 group-hover:text-amber-400 transition-colors">
                      {item.title}
                    </h3>

                    {/* Exact text */}
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  {/* Bottom Indicator */}
                  <div className="pt-4 mt-6 border-t border-slate-800/80 flex items-center justify-between text-[10px] font-mono-tech text-slate-500">
                    <span>STAGE {idx + 1} OF 4</span>
                    <span className="text-emerald-400">QUALITY VERIFIED</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
