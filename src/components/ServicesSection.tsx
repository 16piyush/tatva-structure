import { useState } from 'react';
import { 
  Building, 
  Layers, 
  FileText, 
  Wrench, 
  ArrowRight, 
  CheckCircle,
  FileSpreadsheet,
  Search,
  Sparkles
} from 'lucide-react';
import { SERVICES_LIST } from '../data/companyData';
import { ServiceItem } from '../types';

interface ServicesSectionProps {
  onOpenInquiry: (serviceName?: string) => void;
}

export default function ServicesSection({ onOpenInquiry }: ServicesSectionProps) {
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'core' | 'design' | 'specialized' | 'drawings'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedService, setExpandedService] = useState<string | null>(null);

  const categories = [
    { key: 'all', label: 'All 14 Services' },
    { key: 'core', label: 'Core Analysis & Design' },
    { key: 'design', label: 'RCC, Steel & Composite' },
    { key: 'specialized', label: 'Specialized & Industrial' },
    { key: 'drawings', label: 'Civil & Fabrication Drawings' },
  ];

  const filteredServices = SERVICES_LIST.filter(service => {
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    const matchesSearch = service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          service.shortDesc.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="services" className="py-20 lg:py-28 bg-[#0F141E] relative border-t border-white/10">
      <div className="absolute inset-0 blueprint-grid opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-3">
            <div className="flex items-center gap-4 mb-2">
              <div className="w-12 h-px bg-[#F27D26]"></div>
              <span className="text-[#F27D26] uppercase tracking-[0.3em] font-bold text-xs font-mono-tech">
                CONSULTANCY SCOPE
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white font-heading tracking-tight uppercase">
              ENGINEERING SERVICES
            </h2>
            <p className="text-sm sm:text-base text-slate-400 max-w-2xl">
              Specialized structural design and analysis services delivered with precision, statutory compliance, and construction-ready graphical documentation.
            </p>
          </div>

          {/* Quick Search */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input 
              type="text"
              placeholder="SEARCH SERVICES..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 text-xs rounded-sm bg-[#161C27] border border-white/10 text-slate-200 placeholder-slate-500 focus:outline-none focus:border-[#F27D26] font-mono-tech uppercase"
            />
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap gap-2 mb-10 pb-4 border-b border-white/10">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setSelectedCategory(cat.key as any)}
              className={`px-4 py-2 rounded-sm text-xs font-bold font-mono-tech uppercase tracking-wider transition-all cursor-pointer ${
                selectedCategory === cat.key
                  ? 'bg-[#F27D26] text-white shadow-md'
                  : 'bg-[#161C27] text-slate-400 hover:text-white hover:bg-white/10 border border-white/10'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* 14 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredServices.map((service) => {
            const isExpanded = expandedService === service.id;

            return (
              <div
                key={service.id}
                className="bg-[#161C27] border border-white/10 hover:border-white/20 rounded-sm p-6 transition-all duration-300 hover:shadow-xl flex flex-col justify-between group relative overflow-hidden"
              >
                {/* Top Accent Line */}
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-white/10 group-hover:bg-[#F27D26] transition-colors" />

                <div>
                  {/* Service Number & Category */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-black font-mono-tech text-[#F27D26]/40 group-hover:text-[#F27D26] transition-colors">
                      {service.number}
                    </span>
                    <span className="text-[10px] font-mono-tech px-2.5 py-0.5 rounded-sm bg-white/5 border border-white/10 text-slate-400 uppercase font-bold">
                      {service.category}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-base sm:text-lg font-bold text-white font-heading mb-2 uppercase group-hover:text-[#F27D26] transition-colors">
                    {service.title}
                  </h3>

                  {/* Short Description */}
                  <p className="text-xs text-slate-400 leading-relaxed mb-4">
                    {service.shortDesc}
                  </p>

                  {/* Deliverables / Scope */}
                  <div className="space-y-1.5 pt-3 border-t border-white/10 mb-4">
                    <div className="text-[10px] font-mono-tech text-[#F27D26] uppercase tracking-wider font-bold">
                      Key Deliverables:
                    </div>
                    {service.deliverables.slice(0, isExpanded ? service.deliverables.length : 2).map((del, idx) => (
                      <div key={idx} className="flex items-center space-x-2 text-[11px] text-slate-300">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#F27D26] shrink-0" />
                        <span>{del}</span>
                      </div>
                    ))}
                    {service.deliverables.length > 2 && (
                      <button
                        onClick={() => setExpandedService(isExpanded ? null : service.id)}
                        className="text-[10px] font-mono-tech text-[#F27D26] hover:underline pt-1 font-bold uppercase"
                      >
                        {isExpanded ? 'Show less' : `+${service.deliverables.length - 2} more deliverables`}
                      </button>
                    )}
                  </div>
                </div>

                {/* Card Footer Button */}
                <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                  <button
                    onClick={() => onOpenInquiry(`Service Inquiry: ${service.title}`)}
                    className="inline-flex items-center space-x-1.5 text-xs font-bold uppercase tracking-wider text-slate-300 group-hover:text-[#F27D26] transition-colors cursor-pointer"
                  >
                    <span>INQUIRE FOR PROJECT</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </button>
                  <span className="text-[10px] font-mono-tech text-slate-500 uppercase font-bold">IS / ACI / BS</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner */}
        <div className="mt-12 p-6 rounded-sm bg-[#161C27] border border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left accent-glow">
          <div className="space-y-1">
            <h4 className="text-base font-bold text-white font-heading uppercase">
              Need custom structural calculations or proof checking?
            </h4>
            <p className="text-xs text-slate-400">
              Our engineering directorship handles bespoke industrial framing, STAAD/ETABS validation, and client design audits.
            </p>
          </div>
          <button
            onClick={() => onOpenInquiry('Custom Structural Engineering Requirement')}
            className="px-6 py-3 rounded-sm text-xs font-bold uppercase tracking-wider bg-[#F27D26] hover:bg-[#ff8c38] text-white shadow-md transition-colors shrink-0 cursor-pointer"
          >
            CONSULT OUR ENGINEERS
          </button>
        </div>

      </div>
    </section>
  );
}
