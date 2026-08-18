import React from 'react';
import { 
  Cpu, 
  Globe2, 
  Terminal, 
  Layers, 
  ShieldCheck, 
  FileCode, 
  FileSpreadsheet, 
  Compass, 
  CheckCircle2 
} from 'lucide-react';
import { ENGINEERING_TOOLS, DESIGN_CODES } from '../data/companyData';

export default function ToolsAndCodesSection() {
  return (
    <section className="py-20 lg:py-28 bg-[#0B1320] relative border-t border-slate-800/80">
      <div className="absolute inset-0 blueprint-grid opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-20">
        
        {/* Part 1: Advanced Engineering Tools & Software Suites */}
        <div>
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-slate-900 border border-[#E06D14]/40 text-[#E06D14] text-xs font-mono-tech uppercase tracking-wider">
              <Cpu className="w-3.5 h-3.5" />
              <span>COMPUTATIONAL SUITES</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-heading tracking-tight">
              ENGINEERING TOOLS
            </h2>
            <p className="text-base text-slate-400">
              Industry-standard structural engineering modeling, dynamic finite element analysis, 3D steel detailing, and mathematical validation platforms.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ENGINEERING_TOOLS.map((tool) => (
              <div
                key={tool.name}
                className="bg-[#0D1829] border border-slate-800 hover:border-slate-600 rounded-xl p-6 transition-all duration-300 hover:shadow-xl hover:shadow-black/60 flex flex-col justify-between group backdrop-blur-sm relative"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 text-[#E06D14] group-hover:bg-[#E06D14] group-hover:text-white transition-colors">
                      <Terminal className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-mono-tech text-slate-500 uppercase">
                      {tool.category}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white font-heading tracking-wide">
                    {tool.name}
                  </h3>

                  <p className="text-xs text-slate-300 leading-relaxed">
                    {tool.usage}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-[10px] font-mono-tech text-slate-500">
                  <span className="text-sky-400">{tool.code}</span>
                  <span>LICENSED / VETTED</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Part 2: Global Design Code Standards */}
        <div className="pt-10 border-t border-slate-800/80">
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-slate-900 border border-[#E06D14]/40 text-[#E06D14] text-xs font-mono-tech uppercase tracking-wider">
              <Globe2 className="w-3.5 h-3.5" />
              <span>STATUTORY COMPLIANCE</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-heading tracking-tight">
              GLOBAL DESIGN CODE EXPERTISE
            </h2>
            <p className="text-base text-slate-400">
              Rigorous compliance across leading global structural design codes, seismic criteria, and material standards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
            {DESIGN_CODES.map((code) => (
              <div
                key={code.region}
                className="bg-[#0D1829] border border-slate-800 hover:border-[#E06D14]/60 rounded-xl p-5 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-700/80 flex items-center justify-center text-[#E06D14] mb-3">
                    <Compass className="w-4 h-4" />
                  </div>

                  <h3 className="text-base font-bold text-white font-heading mb-2">
                    {code.region}
                  </h3>

                  <p className="text-xs text-slate-400 mb-4 leading-relaxed">
                    {code.coverage}
                  </p>

                  <div className="space-y-1 pt-2 border-t border-slate-800/80">
                    {code.standards.map((st, i) => (
                      <div key={i} className="text-[11px] font-mono-tech text-sky-300/90 flex items-center space-x-1.5">
                        <span className="w-1 h-1 bg-[#E06D14] rounded-full" />
                        <span>{st}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-800/60 text-[10px] font-mono-tech text-slate-500">
                  STANDARD COMPLIANT
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
