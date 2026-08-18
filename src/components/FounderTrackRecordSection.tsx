import { useState } from 'react';
import { 
  Briefcase, 
  ChevronDown, 
  ChevronUp, 
  CheckCircle, 
  FileCheck2, 
  Search,
  Filter,
  ArrowRight
} from 'lucide-react';
import { FOUNDER_TRACK_RECORD } from '../data/companyData';

interface FounderTrackRecordProps {
  onOpenInquiry: (subject?: string) => void;
}

export default function FounderTrackRecordSection({ onOpenInquiry }: FounderTrackRecordProps) {
  const [expandedCard, setExpandedCard] = useState<string | null>(null);
  const [filterCategory, setFilterCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { key: 'all', label: 'All Track Record Assets' },
    { key: 'Water Infrastructure', label: 'Water & STPs' },
    { key: 'Heavy Energy & Power', label: 'Energy & Power' },
    { key: 'Industrial', label: 'Heavy Process & Silos' },
    { key: 'Institutional', label: 'Universities & Campuses' },
    { key: 'High-Rise RCC', label: 'High-Rise Towers' },
  ];

  const filteredTrack = FOUNDER_TRACK_RECORD.filter(item => {
    const matchesCategory = filterCategory === 'all' || item.category === filterCategory;
    const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          item.engineeringScope.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const toggleExpand = (id: string) => {
    setExpandedCard(expandedCard === id ? null : id);
  };

  return (
    <section id="track-record" className="py-12 sm:py-16 lg:py-24 bg-[#0F141E] relative border-t border-white/10">
      <div className="absolute inset-0 blueprint-grid opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-10 space-y-3">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-sm bg-[#161C27] border border-[#F27D26]/40 text-[#F27D26] text-xs font-mono-tech uppercase tracking-wider">
            <Briefcase className="w-3.5 h-3.5" />
            <span>ENGINEERING LEADERSHIP PORTFOLIO</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white font-heading tracking-tight uppercase">
            FOUNDER'S TRACK RECORD
          </h2>
          <p className="text-sm sm:text-base text-slate-400 max-w-2xl mx-auto">
            Decade-plus verified engineering career portfolio encompassing mega thermal power plants, monumental memorials, 215 MLD wastewater assets, and deep urban retention works.
          </p>
        </div>

        {/* Filters & Search */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10 pb-4 border-b border-slate-800">
          <div className="flex items-center space-x-2 overflow-x-auto w-full md:w-auto pb-2 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat.key}
                onClick={() => setFilterCategory(cat.key)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-mono-tech whitespace-nowrap transition-colors cursor-pointer ${
                  filterCategory === cat.key
                    ? 'bg-[#E06D14] text-white font-bold'
                    : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          <div className="relative w-full md:w-64">
            <Search className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input 
              type="text"
              placeholder="Search track record..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3 py-1.5 text-xs rounded-lg bg-slate-900 border border-slate-800 text-slate-200 placeholder-slate-500 focus:outline-none focus:border-[#E06D14] font-mono-tech"
            />
          </div>
        </div>

        {/* Expandable Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredTrack.map((item) => {
            const isExpanded = expandedCard === item.id;

            return (
              <div
                key={item.id}
                className={`bg-[#0D1829]/90 border rounded-xl transition-all duration-300 backdrop-blur-sm overflow-hidden flex flex-col justify-between ${
                  isExpanded 
                    ? 'border-[#E06D14] shadow-xl shadow-black/60 bg-[#0F1D36]' 
                    : 'border-slate-800 hover:border-slate-700 hover:bg-slate-900/90'
                }`}
              >
                <div className="p-5">
                  {/* Top Category & Scale */}
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] font-mono-tech px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-slate-400 uppercase">
                      {item.category}
                    </span>
                    {item.scale && (
                      <span className="text-[11px] font-mono-tech text-[#E06D14] font-semibold bg-[#E06D14]/10 px-2 py-0.5 rounded">
                        {item.scale}
                      </span>
                    )}
                  </div>

                  {/* Title */}
                  <h3 className="text-base font-bold text-white font-heading mb-2">
                    {item.title}
                  </h3>

                  {/* Short description */}
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {item.description}
                  </p>

                  {/* Expandable Section */}
                  {isExpanded && (
                    <div className="mt-4 pt-3 border-t border-slate-800 text-xs space-y-2 animate-fadeIn">
                      <div className="text-[10px] font-mono-tech text-slate-500 uppercase tracking-wider">
                        DETAILED ENGINEERING SPECIFICATIONS:
                      </div>
                      <p className="text-slate-300 bg-slate-900/90 p-3 rounded-lg border border-slate-800 leading-relaxed font-mono-tech text-[11px]">
                        {item.engineeringScope}
                      </p>
                    </div>
                  )}
                </div>

                {/* Bottom Toggle Button */}
                <div className="px-5 py-3 bg-slate-900/60 border-t border-slate-800/80 flex items-center justify-between">
                  <button
                    onClick={() => toggleExpand(item.id)}
                    className="inline-flex items-center space-x-1.5 text-xs font-semibold text-sky-400 hover:text-sky-300 transition-colors cursor-pointer"
                  >
                    <span>{isExpanded ? 'Collapse Details' : 'Expand Engineering Specs'}</span>
                    {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                  </button>

                  <button
                    onClick={() => onOpenInquiry(`Inquiry regarding expertise in: ${item.title}`)}
                    className="text-[11px] font-mono-tech text-[#E06D14] hover:underline"
                  >
                    Inquire
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Verification Note */}
        <div className="mt-12 text-center text-xs text-slate-500 font-mono-tech">
          * Track record includes direct technical directorship, structural analysis modeling, and proof checking credentials.
        </div>

      </div>
    </section>
  );
}
