import { useState } from 'react';
import { 
  Building2, 
  MapPin, 
  User, 
  ArrowRight, 
  CheckCircle2, 
  Layers, 
  ShieldCheck, 
  ExternalLink,
  Search
} from 'lucide-react';
import { PROJECTS_DATA } from '../data/companyData';
import { ProjectCategory, ProjectItem } from '../types';

interface ProjectsPortfolioProps {
  onSelectProject: (project: ProjectItem) => void;
  onOpenInquiry: (projectName?: string) => void;
}

export default function ProjectsPortfolio({ onSelectProject, onOpenInquiry }: ProjectsPortfolioProps) {
  const [activeFilter, setActiveFilter] = useState<ProjectCategory>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filterTabs: { key: ProjectCategory; label: string }[] = [
    { key: 'all', label: 'All Projects' },
    { key: 'industrial', label: 'Industrial' },
    { key: 'government', label: 'Government' },
    { key: 'power-utilities', label: 'Power & Utilities' },
    { key: 'commercial-hospitality', label: 'Commercial & Hospitality' },
    { key: 'special-structures', label: 'Special Structures' },
    { key: 'infrastructure', label: 'Infrastructure' },
    { key: 'metro', label: 'Metro' },
    { key: 'international', label: 'International' },
  ];

  const filteredProjects = PROJECTS_DATA.filter((proj) => {
    const matchesFilter = activeFilter === 'all' || proj.category === activeFilter;
    const matchesSearch = proj.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (proj.client && proj.client.toLowerCase().includes(searchQuery.toLowerCase())) ||
      (proj.location && proj.location.toLowerCase().includes(searchQuery.toLowerCase())) ||
      (typeof proj.scope === 'string' ? proj.scope.toLowerCase().includes(searchQuery.toLowerCase()) : false);
    return matchesFilter && matchesSearch;
  });

  return (
    <section id="projects" className="py-12 sm:py-16 lg:py-24 bg-[#0F141E] relative border-t border-white/10">
      <div className="absolute inset-0 blueprint-grid opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-10 space-y-3">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-sm bg-[#161C27] border border-[#F27D26]/40 text-[#F27D26] text-xs font-mono-tech uppercase tracking-wider">
            <span className="w-2 h-2 rounded-full bg-[#F27D26]" />
            <span>PORTFOLIO SHOWCASE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white font-heading tracking-tight uppercase">
            OUR PROJECTS
          </h2>
          <div className="text-xs sm:text-sm text-[#F27D26] font-mono-tech uppercase tracking-wider">
            Industrial & Infrastructure | Power & Utilities | Commercial & Hospitality | Metro & Bridges
          </div>
          <p className="text-sm text-slate-400 max-w-2xl mx-auto">
            Executed and vetted structural engineering designs for manufacturing sheds, high chimneys, metro stations, substations, water treatment facilities, and complex hospitality venues.
          </p>
        </div>

        {/* Filter Navigation Bar & Search */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-10 pb-4 border-b border-slate-800">
          
          {/* Scrollable Filters */}
          <div className="flex items-center space-x-2 overflow-x-auto pb-2 scrollbar-none">
            {filterTabs.map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveFilter(tab.key)}
                className={`px-3.5 py-2 rounded-lg text-xs font-mono-tech whitespace-nowrap transition-all duration-200 cursor-pointer ${
                  activeFilter === tab.key
                    ? 'bg-[#E06D14] text-white font-bold shadow-md shadow-[#E06D14]/20'
                    : 'bg-slate-900/80 text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Search box */}
          <div className="relative w-full lg:w-64">
            <Search className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input 
              type="text"
              placeholder="Search projects or clients..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3 py-1.5 text-xs rounded-lg bg-slate-900 border border-slate-800 text-slate-200 placeholder-slate-500 focus:outline-none focus:border-[#E06D14] font-mono-tech"
            />
          </div>
        </div>

        {/* Project Cards Grid */}
        {filteredProjects.length === 0 ? (
          <div className="text-center py-16 bg-slate-900/40 rounded-2xl border border-slate-800">
            <Layers className="w-8 h-8 text-slate-600 mx-auto mb-3" />
            <p className="text-sm text-slate-400 font-mono-tech">No projects matched the selected filter.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                onClick={() => onSelectProject(project)}
                className="bg-[#0B1526] border border-slate-800 hover:border-[#E06D14]/80 rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/70 flex flex-col justify-between group cursor-pointer"
              >
                {/* Project Image Header */}
                <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-slate-950">
                  <img 
                    src={project.imageUrl} 
                    alt={project.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-70 group-hover:opacity-90"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B1526] via-transparent to-transparent" />
                  
                  {/* Category Tag */}
                  <div className="absolute top-3 left-3">
                    <span className="text-[10px] font-mono-tech px-2.5 py-1 rounded bg-slate-900/90 border border-slate-700/80 text-white uppercase font-bold backdrop-blur-md">
                      {project.tag}
                    </span>
                  </div>

                  {project.approvalAuthority && (
                    <div className="absolute top-3 right-3">
                      <span className="text-[10px] font-mono-tech px-2 py-0.5 rounded bg-emerald-950/90 border border-emerald-700/70 text-emerald-300 font-semibold backdrop-blur-md flex items-center gap-1">
                        <ShieldCheck className="w-3 h-3" />
                        {project.approvalAuthority}
                      </span>
                    </div>
                  )}

                  {project.location && (
                    <div className="absolute bottom-3 left-3 flex items-center space-x-1 text-[11px] font-mono-tech text-slate-300 bg-slate-900/80 px-2 py-0.5 rounded backdrop-blur-sm">
                      <MapPin className="w-3 h-3 text-[#E06D14]" />
                      <span>{project.location}</span>
                    </div>
                  )}
                </div>

                {/* Card Body */}
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div className="space-y-3">
                    {/* Title */}
                    <h3 className="text-base sm:text-lg font-bold text-white font-heading group-hover:text-amber-400 transition-colors">
                      {project.title}
                    </h3>

                    {/* Client Name if present */}
                    {project.client && (
                      <div className="text-xs text-slate-400 font-mono-tech flex items-center space-x-1.5">
                        <span className="text-slate-500">Client:</span>
                        <span className="text-slate-200 font-medium">{project.client}</span>
                      </div>
                    )}

                    {/* Scope Preview */}
                    <div className="text-xs text-slate-300 line-clamp-3 leading-relaxed">
                      {Array.isArray(project.scope) ? project.scope.join(', ') : project.scope}
                    </div>
                  </div>

                  {/* Card Bottom CTA */}
                  <div className="pt-4 mt-4 border-t border-slate-800/80 flex items-center justify-between text-xs">
                    <span className="text-[#E06D14] font-semibold group-hover:underline inline-flex items-center">
                      <span>View Full Scope</span>
                      <ArrowRight className="w-3.5 h-3.5 ml-1 group-hover:translate-x-1 transition-transform" />
                    </span>
                    <span className="text-[10px] font-mono-tech text-slate-500">DETAILS &bull; SPECS</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
}
