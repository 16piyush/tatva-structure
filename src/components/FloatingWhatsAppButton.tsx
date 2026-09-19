import { useState } from 'react';
import { MessageSquare, X } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

export default function FloatingWhatsAppButton() {
  const [showTooltip, setShowTooltip] = useState(false);

  const defaultMessage = encodeURIComponent(
    'Hello Tatva Structura, I would like to discuss a structural engineering consultation for my project.'
  );

  return (
    <aside aria-label="WhatsApp Quick Contact" className="fixed bottom-6 right-6 z-50 flex items-center group">
      {/* Floating Tooltip / Banner on Hover */}
      <div 
        className={`hidden sm:flex items-center mr-3 px-3.5 py-2 rounded-lg bg-[#0F172A] border border-emerald-500/30 shadow-2xl shadow-emerald-950/50 backdrop-blur-md transition-all duration-300 ${
          showTooltip ? 'opacity-100 translate-x-0 pointer-events-auto' : 'opacity-0 translate-x-2 pointer-events-none group-hover:opacity-100 group-hover:translate-x-0 group-hover:pointer-events-auto'
        }`}
      >
        <div className="flex flex-col text-right">
          <span className="text-[11px] font-bold text-emerald-400 uppercase tracking-wider font-mono-tech flex items-center justify-end gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
            Online Consultation
          </span>
          <span className="text-xs text-slate-200 font-medium whitespace-nowrap">
            Chat on WhatsApp (+91 72066 04020)
          </span>
        </div>
      </div>

      {/* Floating Action Button */}
      <a
        href={`https://wa.me/${COMPANY_INFO.phoneRaw}?text=${defaultMessage}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp with Tatva Structura Engineering"
        id="floating-whatsapp-btn"
        className="relative flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20ba59] active:scale-95 text-slate-950 shadow-2xl shadow-[#25D366]/40 hover:shadow-[#25D366]/60 transition-all duration-300 cursor-pointer"
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
      >
        {/* Ripple / Radar Ping Animation */}
        <span className="absolute -inset-1 rounded-full bg-[#25D366]/30 animate-ping pointer-events-none" />
        
        {/* Active status badge */}
        <span className="absolute top-0 right-0 w-3.5 h-3.5 bg-emerald-400 border-2 border-slate-900 rounded-full" />

        {/* WhatsApp Icon */}
        <MessageSquare className="w-7 h-7 fill-slate-950 text-slate-950" />
      </a>
    </aside>
  );
}
