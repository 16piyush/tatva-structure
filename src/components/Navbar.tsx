import { useState, useEffect } from 'react';
import { 
  Menu, 
  X, 
  Phone, 
  Mail, 
  Compass, 
  ArrowRight,
  MessageSquare
} from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

interface NavbarProps {
  onOpenInquiry: (initialSubject?: string) => void;
  onOpenBlueprint?: () => void;
}

export default function Navbar({ onOpenInquiry, onOpenBlueprint }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      const sections = ['home', 'about', 'expertise', 'services', 'projects', 'metro', 'bridges', 'track-record', 'international', 'contact'];
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 140 && rect.bottom >= 140) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Projects', href: '#projects' },
    { label: 'Site Gallery', href: '#civil-gallery' },
    { label: 'Expertise', href: '#expertise' },
    { label: 'Track Record', href: '#track-record' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Top micro bar */}
      <div className="hidden lg:block bg-[#0A0E17] border-b border-white/10 text-xs text-slate-400 py-1.5 px-6 font-mono-tech">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-6">
            <span className="flex items-center space-x-2 text-slate-300 tracking-wider">
              <span className="w-1.5 h-1.5 bg-[#F27D26] animate-pulse inline-block" />
              <span className="text-[11px] uppercase tracking-widest font-semibold">CONSULTANCY OPERATIONAL — INDUSTRIAL & INFRASTRUCTURE</span>
            </span>
            <span className="text-white/20">|</span>
            <a 
              href={`tel:${COMPANY_INFO.phoneRaw}`} 
              className="flex items-center space-x-1.5 hover:text-[#F27D26] transition-colors"
            >
              <Phone className="w-3 h-3 text-[#F27D26]" />
              <span className="font-bold">{COMPANY_INFO.phone}</span>
            </a>
            <span className="text-white/20">|</span>
            <a 
              href={`mailto:${COMPANY_INFO.email}`} 
              className="flex items-center space-x-1.5 hover:text-[#F27D26] transition-colors"
            >
              <Mail className="w-3 h-3 text-[#F27D26]" />
              <span>{COMPANY_INFO.email}</span>
            </a>
          </div>
          <div className="flex items-center space-x-4 uppercase tracking-widest text-[11px]">
            <span className="text-[#F27D26] font-bold">YOU THINK WE MAKE</span>
            <span className="text-white/20">/</span>
            <span className="text-slate-400">GREATER NOIDA WEST</span>
          </div>
        </div>
      </div>

      {/* Main Sticky Navbar */}
      <header 
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-[#0F141E]/95 backdrop-blur-md shadow-2xl border-b border-white/10 py-3' 
            : 'bg-[#0F141E]/85 backdrop-blur-sm border-b border-white/10 py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo Brand */}
          <a 
            href="#home" 
            className="flex items-center space-x-3 group"
            id="brand-logo-link"
          >
            <div className="w-11 h-11 bg-white p-1 rounded-sm shadow-md border border-white/20 flex items-center justify-center shrink-0 group-hover:border-[#F27D26] transition-all">
              <img 
                src="/images/tatva_structura_mark.svg" 
                alt="Tatva Structura Emblem" 
                className="w-full h-full object-contain"
              />
            </div>
            <div>
              <div className="text-xl sm:text-2xl font-black tracking-widest text-white font-heading uppercase flex items-center space-x-1.5">
                <span>TATVA</span>
                <span className="text-[#F27D26]">STRUCTURA</span>
              </div>
              <div className="text-[9px] tracking-[0.3em] uppercase font-mono-tech text-slate-400 group-hover:text-slate-300 transition-colors">
                Structural Design Consultancy
              </div>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center space-x-2 bg-[#161C27]/90 p-1.5 border border-white/10 text-xs font-bold tracking-wider uppercase">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <button
                  key={link.label}
                  onClick={() => handleNavClick(link.href)}
                  className={`px-3.5 py-1.5 rounded-sm transition-all duration-200 cursor-pointer ${
                    isActive 
                      ? 'bg-[#F27D26] text-white shadow-sm font-bold' 
                      : 'text-slate-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </nav>

          {/* Quick CTA and Mobile Toggle */}
          <div className="flex items-center space-x-3">
            <a
              href={`https://wa.me/${COMPANY_INFO.phoneRaw}?text=Hello%20Tatva%20Structura,%20I%20would%20like%20to%20discuss%20a%20structural%20engineering%20project.`}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center space-x-1.5 px-3 py-2 text-xs font-bold uppercase tracking-wider rounded-sm bg-emerald-950/80 text-emerald-400 border border-emerald-600/40 hover:bg-emerald-900 transition-colors"
              title="Chat on WhatsApp"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>WhatsApp</span>
            </a>

            <button
              onClick={() => onOpenInquiry()}
              className="relative inline-flex items-center justify-center px-5 py-2.5 text-xs sm:text-sm font-bold uppercase tracking-wider rounded-sm bg-[#F27D26] text-white hover:bg-[#ff8c38] shadow-lg shadow-[#F27D26]/20 transition-all duration-200 active:scale-95 cursor-pointer"
              id="nav-cta-discuss"
            >
              <span>DISCUSS PROJECT</span>
              <ArrowRight className="w-4 h-4 ml-1.5 hidden sm:inline" />
            </button>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-2 rounded-sm bg-[#161C27] border border-white/10 text-slate-300 hover:text-white hover:bg-white/10 focus:outline-none"
              aria-label="Toggle Navigation Menu"
              id="mobile-menu-toggle"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="xl:hidden fixed inset-0 top-[60px] z-40 bg-[#0F141E]/98 backdrop-blur-xl border-b border-white/10 flex flex-col p-6 animate-fadeIn">
          <div className="flex flex-col space-y-2 mb-6">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleNavClick(link.href)}
                className="text-left px-4 py-3 rounded-sm text-sm font-bold uppercase tracking-wider text-slate-200 hover:bg-[#161C27] hover:text-[#F27D26] transition-colors border-b border-white/5"
              >
                {link.label}
              </button>
            ))}
          </div>

          <div className="mt-auto pt-4 border-t border-white/10 space-y-3">
            <div className="text-xs text-[#F27D26] font-mono-tech mb-2 tracking-widest uppercase">
              DIRECT INQUIRY & CONSULTATION:
            </div>
            <a 
              href={`tel:${COMPANY_INFO.phoneRaw}`}
              className="flex items-center space-x-2 text-sm text-slate-200 bg-[#161C27] p-3 rounded-sm border border-white/10"
            >
              <Phone className="w-4 h-4 text-[#F27D26]" />
              <span>{COMPANY_INFO.phone} (Sumit Rohiwal)</span>
            </a>
            <a 
              href={`mailto:${COMPANY_INFO.email}`}
              className="flex items-center space-x-2 text-sm text-slate-200 bg-[#161C27] p-3 rounded-sm border border-white/10"
            >
              <Mail className="w-4 h-4 text-[#F27D26]" />
              <span>{COMPANY_INFO.email}</span>
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenInquiry();
              }}
              className="w-full py-3 text-center font-bold uppercase tracking-wider bg-[#F27D26] hover:bg-[#ff8c38] text-white rounded-sm shadow-lg"
            >
              DISCUSS YOUR PROJECT
            </button>
          </div>
        </div>
      )}
    </>
  );
}
