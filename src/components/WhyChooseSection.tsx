import React from 'react';
import { 
  Factory, 
  Globe, 
  Users, 
  ShieldCheck, 
  CheckCircle2, 
  Compass, 
  ArrowUpRight 
} from 'lucide-react';
import { WHY_CHOOSE_US } from '../data/companyData';

export default function WhyChooseSection() {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Factory': return Factory;
      case 'Globe': return Globe;
      case 'Users': return Users;
      case 'ShieldCheck': return ShieldCheck;
      default: return CheckCircle2;
    }
  };

  return (
    <section className="py-12 sm:py-16 lg:py-24 bg-[#0F141E] relative border-t border-white/10">
      <div className="absolute inset-0 blueprint-grid opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-sm bg-[#161C27] border border-[#F27D26]/40 text-[#F27D26] text-xs font-mono-tech uppercase tracking-wider">
            <span className="w-2 h-2 rounded-full bg-[#F27D26]" />
            <span>VALUE & TRUST PRINCIPLES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white font-heading tracking-tight uppercase">
            WHY CHOOSE US
          </h2>
          <p className="text-base text-slate-400">
            Engineered for high-consequence structures where safety margins, structural reliability, and cost-efficiency define project success.
          </p>
        </div>

        {/* 4 Premium Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {WHY_CHOOSE_US.map((item, index) => {
            const Icon = getIcon(item.icon);

            return (
              <div
                key={item.title}
                className="bg-[#0B1526]/90 border border-slate-800 hover:border-[#E06D14]/60 rounded-2xl p-6 sm:p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/60 flex flex-col justify-between group relative overflow-hidden"
              >
                {/* Background technical accent */}
                <div className="absolute top-0 right-0 p-4 text-slate-800/40 font-mono-tech text-3xl font-black group-hover:text-[#E06D14]/10 transition-colors">
                  0{index + 1}
                </div>

                <div>
                  {/* Icon Box */}
                  <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-700/80 flex items-center justify-center text-[#E06D14] group-hover:bg-[#E06D14] group-hover:text-white group-hover:border-[#E06D14] transition-all duration-300 mb-6 shadow-md">
                    <Icon className="w-6 h-6" />
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-white font-heading mb-3 group-hover:text-amber-400 transition-colors">
                    {item.title}
                  </h3>

                  {/* Exact text requirement */}
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    "{item.description}"
                  </p>
                </div>

                {/* Subtle bottom indicator */}
                <div className="pt-6 mt-4 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-mono-tech text-slate-500">
                  <span>TATVA STRUCTURA</span>
                  <span className="text-[#E06D14] font-semibold">VERIFIED</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
