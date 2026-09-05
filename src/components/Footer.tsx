import React from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  ArrowUp, 
  ShieldCheck, 
  Compass, 
  Building2,
  TrainTrack
} from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

interface FooterProps {
  onOpenInquiry: () => void;
}

export default function Footer({ onOpenInquiry }: FooterProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'About Us', href: '#about' },
    { label: 'Core Services', href: '#services' },
    { label: 'Projects Portfolio', href: '#projects' },
    { label: 'Technical Expertise', href: '#expertise' },
    { label: 'Metro & Transportation', href: '#metro' },
    { label: 'Bridge Projects', href: '#bridges' },
    { label: "Founder's Track Record", href: '#track-record' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="bg-[#0F141E] border-t border-white/10 text-slate-400 text-xs relative">
      
      {/* Top Banner Micro Bar */}
      <div className="border-b border-white/10 py-4 px-4 sm:px-6 lg:px-8 bg-[#161C27]">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left font-mono-tech text-[11px]">
          <div className="flex items-center space-x-2 text-slate-300">
            <span className="w-2 h-2 rounded-full bg-[#F27D26]" />
            <span className="font-bold text-white uppercase tracking-wider">TATVA STRUCTURA</span>
            <span>&bull;</span>
            <span className="text-[#F27D26] font-bold uppercase tracking-widest">YOU THINK WE MAKE</span>
          </div>
          <div className="text-slate-400 tracking-wider">
            GREATER NOIDA WEST &bull; UTTAR PRADESH &bull; GLOBAL DESIGN CODE CAPABILITY
          </div>
        </div>
      </div>

      {/* Main Footer Body */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          
          {/* Col 1: Brand & Tagline */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center space-x-3.5">
              <div className="w-14 h-14 bg-white p-1 rounded-sm shadow-md border border-white/20 flex items-center justify-center shrink-0">
                <img 
                  src="/images/tatva_structura_logo.svg" 
                  alt="Tatva Structura" 
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <div className="text-xl font-black text-white font-heading tracking-wider uppercase">
                  TATVA <span className="text-slate-300 font-bold">STRUCTURA</span>
                </div>
                <div className="text-[10px] font-mono-tech text-[#E05926] uppercase tracking-widest font-bold">
                  Structural Design Consultancy
                </div>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Tatva Structura is an exponentially growing structural design consultancy specializing in delivering safe, economical, and innovative solutions for complex engineering challenges.
            </p>

            <div className="pt-2 text-[11px] font-mono-tech text-slate-400 space-y-1">
              <div>DISCIPLINE: STRUCTURAL ENGINEERING CONSULTANCY</div>
              <div>TECHNICAL DIRECTOR: JITENDRA ARYA (M.TECH DCE)</div>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-mono-tech text-white uppercase tracking-widest font-bold border-b border-white/10 pb-2">
              NAVIGATION
            </h4>
            <ul className="grid grid-cols-1 gap-2">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a 
                    href={link.href}
                    className="text-slate-400 hover:text-[#F27D26] transition-colors flex items-center space-x-2 font-mono-tech text-xs uppercase"
                  >
                    <span className="w-1 h-1 bg-[#F27D26] rounded-full" />
                    <span>{link.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Key Sectors & Standards */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-mono-tech text-white uppercase tracking-widest font-bold border-b border-white/10 pb-2">
              KEY SECTORS
            </h4>
            <div className="space-y-1.5 text-xs text-slate-400 font-mono-tech uppercase">
              <div>Industrial & PEB Sheds</div>
              <div>Metro & Viaduct Pier Caps</div>
              <div>Bridges & Flyovers</div>
              <div>Power & Substations</div>
              <div>Water & Wastewater STPs</div>
              <div>Blast Resistance (MES)</div>
              <div>High-Rise RCC Towers</div>
              <div>GFRP Retrofitting</div>
            </div>
          </div>

          {/* Col 4: Contact & Office Location */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-mono-tech text-white uppercase tracking-widest font-bold border-b border-white/10 pb-2">
              GET IN TOUCH
            </h4>
            
            <div className="space-y-3">
              <div className="flex items-start space-x-2.5">
                <MapPin className="w-4 h-4 text-[#F27D26] shrink-0 mt-0.5" />
                <span className="text-xs text-slate-300 leading-relaxed">
                  {COMPANY_INFO.address}
                </span>
              </div>

              <div className="flex items-center space-x-2.5">
                <Phone className="w-4 h-4 text-[#F27D26] shrink-0" />
                <a 
                  href={`tel:${COMPANY_INFO.phoneRaw}`} 
                  className="text-xs text-slate-200 hover:text-[#F27D26] font-mono-tech transition-colors"
                >
                  {COMPANY_INFO.phone}
                </a>
              </div>

              <div className="flex items-center space-x-2.5">
                <Mail className="w-4 h-4 text-[#F27D26] shrink-0" />
                <a 
                  href={`mailto:${COMPANY_INFO.email}`} 
                  className="text-xs text-slate-200 hover:text-[#F27D26] font-mono-tech transition-colors break-all"
                >
                  {COMPANY_INFO.email}
                </a>
              </div>

              <div className="pt-2">
                <button
                  onClick={onOpenInquiry}
                  className="w-full py-2.5 px-3 rounded-sm bg-[#F27D26] hover:bg-[#ff8c38] text-white font-bold text-xs uppercase tracking-wider transition-colors cursor-pointer"
                >
                  DISCUSS YOUR PROJECT
                </button>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs text-slate-500 font-mono-tech text-center sm:text-left uppercase">
            &copy; 2026 Tatva Structura. All Rights Reserved.
          </div>

          <div className="flex items-center space-x-4">
            <button
              onClick={scrollToTop}
              className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-sm bg-[#161C27] border border-white/10 text-slate-400 hover:text-white hover:border-white/30 transition-colors font-mono-tech text-[11px] uppercase tracking-wider cursor-pointer"
            >
              <span>BACK TO TOP</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
