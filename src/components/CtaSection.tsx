import React from 'react';
import { ArrowRight, MessageSquare, Phone, Mail } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

interface CtaSectionProps {
  onOpenInquiry: (subject?: string) => void;
}

export default function CtaSection({ onOpenInquiry }: CtaSectionProps) {
  return (
    <section className="relative py-20 lg:py-28 overflow-hidden bg-[#070D18] border-t border-slate-800">
      {/* Background Visual with Heavy Steel/Industrial Tint */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=2000&q=85" 
          alt="Complex Structural Framework" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#070D18] via-[#070D18]/90 to-[#0B1526]/90" />
        <div className="absolute inset-0 blueprint-grid opacity-30" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div className="max-w-3xl mx-auto space-y-6">
          
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-slate-900/90 border border-[#E06D14]/40 text-[#E06D14] text-xs font-mono-tech uppercase tracking-wider">
            <span className="w-2 h-2 rounded-full bg-[#E06D14] animate-pulse" />
            <span>DIRECT STRUCTURAL ADVISORY</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white font-heading tracking-tight">
            Have a Complex Structural Project?
          </h2>

          <p className="text-base sm:text-xl text-slate-300">
            Let's discuss your structural engineering requirements.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <button
              onClick={() => onOpenInquiry('New Project Consultation Request')}
              className="inline-flex items-center space-x-2 px-8 py-4 rounded-lg font-bold text-sm bg-gradient-to-r from-[#E06D14] to-[#C25E00] text-white hover:from-[#EA7A24] hover:to-[#D46706] shadow-xl shadow-[#E06D14]/30 hover:scale-105 transition-all cursor-pointer"
              id="cta-start-conversation"
            >
              <span>Start a Conversation</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <a
              href="#contact"
              className="inline-flex items-center space-x-2 px-8 py-4 rounded-lg font-bold text-sm bg-slate-900/90 text-slate-200 hover:text-white border border-slate-700 hover:border-slate-500 hover:bg-slate-800 transition-colors"
              id="cta-contact-us"
            >
              <span>Contact Us</span>
            </a>

            <a
              href={`https://wa.me/${COMPANY_INFO.phoneRaw}?text=Hello%20Tatva%20Structura,%20I%20have%20a%20structural%20project%20inquiry.`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 px-6 py-4 rounded-lg font-bold text-sm bg-emerald-950/80 text-emerald-400 border border-emerald-700/60 hover:bg-emerald-900 transition-colors"
            >
              <MessageSquare className="w-4 h-4" />
              <span>WhatsApp Direct</span>
            </a>
          </div>

          <div className="pt-6 flex items-center justify-center space-x-6 text-xs font-mono-tech text-slate-400">
            <span>PHONE: {COMPANY_INFO.phone}</span>
            <span>&bull;</span>
            <span>EMAIL: {COMPANY_INFO.email}</span>
          </div>

        </div>
      </div>
    </section>
  );
}
