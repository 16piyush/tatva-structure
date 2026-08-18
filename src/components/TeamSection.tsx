import React from 'react';
import { 
  Users, 
  GraduationCap, 
  Briefcase, 
  CheckCircle2, 
  Mail, 
  Phone,
  ShieldCheck 
} from 'lucide-react';
import { TEAM_MEMBERS, COMPANY_INFO } from '../data/companyData';

interface TeamSectionProps {
  onOpenInquiry: (subject?: string) => void;
}

export default function TeamSection({ onOpenInquiry }: TeamSectionProps) {
  return (
    <section id="team" className="py-12 sm:py-16 lg:py-24 bg-[#0F141E] relative border-t border-white/10">
      <div className="absolute inset-0 blueprint-grid opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-sm bg-[#161C27] border border-[#F27D26]/40 text-[#F27D26] text-xs font-mono-tech uppercase tracking-wider">
            <Users className="w-3.5 h-3.5" />
            <span>ENGINEERING LEADERSHIP</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white font-heading tracking-tight uppercase">
            OUR CORE TEAM
          </h2>
          <p className="text-base text-slate-400">
            Led by seasoned structural engineers with advanced postgraduate qualifications from premier institutions and extensive field experience in complex infrastructure design.
          </p>
        </div>

        {/* 3 Core Team Members Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TEAM_MEMBERS.map((member) => (
            <div
              key={member.name}
              className="bg-[#0B1526] border border-slate-800 hover:border-[#E06D14]/80 rounded-2xl p-6 sm:p-8 transition-all duration-300 hover:-translate-y-1 shadow-xl hover:shadow-black/70 flex flex-col justify-between group relative overflow-hidden"
            >
              <div>
                {/* Avatar / Initials Crest */}
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-slate-800 to-slate-950 border border-slate-700 flex items-center justify-center text-xl font-bold font-mono-tech text-[#E06D14] shadow-inner group-hover:border-[#E06D14] transition-colors">
                    {member.initials}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white font-heading">
                      {member.name}
                    </h3>
                    <div className="text-xs font-bold text-[#E06D14] font-mono-tech mt-0.5">
                      {member.role}
                    </div>
                  </div>
                </div>

                {/* Academic Credentials */}
                <div className="flex items-center space-x-2 p-3 rounded-lg bg-slate-900/90 border border-slate-800 text-xs font-mono-tech text-sky-300 mb-4">
                  <GraduationCap className="w-4 h-4 text-sky-400 shrink-0" />
                  <span>{member.credentials}</span>
                </div>

                {/* Experience Bio */}
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                  {member.experience}
                </p>

                {/* Specialization Areas */}
                <div className="space-y-2 pt-2 border-t border-slate-800">
                  <div className="text-[10px] font-mono-tech text-slate-500 uppercase tracking-wider">
                    Core Focus:
                  </div>
                  {member.specialization.map((spec, i) => (
                    <div key={i} className="flex items-start space-x-2 text-xs text-slate-400">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{spec}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Card Action */}
              <div className="pt-6 mt-6 border-t border-slate-800/80 flex items-center justify-between">
                <button
                  onClick={() => onOpenInquiry(`Consultation request for ${member.name} (${member.role})`)}
                  className="text-xs font-semibold text-[#E06D14] hover:text-amber-400 transition-colors inline-flex items-center"
                >
                  <span>Connect Directly</span>
                </button>
                <span className="text-[10px] font-mono-tech text-slate-600">CORE LEADERSHIP</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
