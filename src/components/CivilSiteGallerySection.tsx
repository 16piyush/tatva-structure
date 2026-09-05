import { useState } from 'react';
import { 
  Camera, 
  Maximize2, 
  Layers, 
  ShieldCheck, 
  MapPin, 
  CheckCircle2, 
  HardHat, 
  FileCode2, 
  X,
  ArrowRight,
  ExternalLink
} from 'lucide-react';

interface CivilPhoto {
  id: string;
  title: string;
  category: 'steel' | 'concrete' | 'bridges' | 'metro' | 'water' | 'foundations';
  categoryLabel: string;
  location: string;
  specs: string;
  description: string;
  imageUrl: string;
  codeStandard: string;
}

const CIVIL_GALLERY_PHOTOS: CivilPhoto[] = [
  {
    id: 'photo-steel-shed-portal',
    title: 'PEB Industrial Shed Portal Frame Erection',
    category: 'steel',
    categoryLabel: 'INDUSTRIAL STEEL & PEB',
    location: 'Heavy Industrial Corridor / Delhi NCR',
    specs: 'Clear Span Portal Frames | Heavy Brickwork Enclosure',
    description: 'On-site execution of high-clearance pre-engineered structural steel portal frames, heavy rafter bolting, anchor bolt survey, and side brick perimeter masonry.',
    imageUrl: '/images/project_peb_site_erection.jpg',
    codeStandard: 'IS 800:2007 (PEB) / AISC 360'
  },
  {
    id: 'photo-warehouse-portal-corridor',
    title: 'High-Bay Industrial Warehouse Portal Span',
    category: 'steel',
    categoryLabel: 'INDUSTRIAL STEEL & PEB',
    location: 'Logistics Park & Manufacturing Hub',
    specs: 'High Ridge Apex | Longitudinal Multi-Bay Portal Framing',
    description: 'Longitudinal interior view of pre-engineered building portal frames with high-capacity steel racks, machine foundations, and heavy seismic cross-bracing.',
    imageUrl: '/images/project_peb_portal_front.jpg',
    codeStandard: 'IS 875 Wind Zone IV / IS 1893'
  },
  {
    id: 'photo-warehouse-truss-roof',
    title: 'Tubular Steel Roof Trusses & Natural Skylights',
    category: 'steel',
    categoryLabel: 'INDUSTRIAL STEEL & PEB',
    location: 'Factory Shed Complex',
    specs: 'Tubular Roof Trusses | Polycarbonate Skylight Integration',
    description: 'Lightweight hollow structural section (HSS) roof truss grid engineered for distributed gravity loads, natural lighting transmission, and anti-corrosion paint durability.',
    imageUrl: '/images/project_warehouse_truss_roof.jpg',
    codeStandard: 'IS 4923 / IS 1161 Tubular Trusses'
  },
  {
    id: 'photo-peb-warehouse-3d-model',
    title: 'Turnkey PEB Industrial Facility 3D Architectural Model',
    category: 'steel',
    categoryLabel: 'INDUSTRIAL STEEL & PEB',
    location: 'Turnkey Manufacturing Plant',
    specs: '100,000+ Sq.Ft. Facility | Cantilever Loading Canopy',
    description: 'Master 3D BIM coordination of modern pre-engineered warehouse facility with cantilever front canopy, heavy transport road circulation, and integrated storm drainage.',
    imageUrl: '/images/project_peb_warehouse_3d.jpg',
    codeStandard: 'BIM LOD 350 / PEB Standards'
  },
  {
    id: 'photo-tekla-fea-model',
    title: '3D FEA Structural Model & Curved Truss Wireframe',
    category: 'steel',
    categoryLabel: 'INDUSTRIAL STEEL & PEB',
    location: 'Tatva Structura Design Studio',
    specs: 'Finite Element Analysis | Tekla & STAAD.Pro Verification',
    description: 'Complete 3D structural analysis verifying curved truss geometry, nodal displacements, dynamic modal frequencies, and steel tonnage optimization.',
    imageUrl: '/images/project_tekla_cad_model.jpg',
    codeStandard: 'STAAD.Pro / Tekla Structures / FEA'
  },
  {
    id: 'photo-metro-viaduct',
    title: 'Elevated Metro Viaduct & Precast Pier Caps',
    category: 'metro',
    categoryLabel: 'MASS RAPID TRANSIT (MRTS)',
    location: 'Mumbai Metro Line 6 / Delhi MRTS',
    specs: 'Precast Post-Tensioned Pier Caps | IRS Dynamic Rail Load',
    description: 'Segmental prestressed viaduct casting, cantilever concourse cross-arms, and elastomeric bridge bearings engineered for high-frequency railway braking and dynamic loads.',
    imageUrl: '/images/mumbai_metro_line6_bc03.jpg',
    codeStandard: 'IRS Concrete Bridge Code / IRC 112'
  },
  {
    id: 'photo-concrete-highrise',
    title: 'High-Rise Raft Foundation & Heavy Concrete Casting',
    category: 'concrete',
    categoryLabel: 'RCC & HIGH-RISE',
    location: 'Gurugram / Noida',
    specs: '2.5m Thick Mass Raft | High-Grade M50 Concrete',
    description: 'Thermal cracking control during mass concrete pours, multi-tier column rebar cages, and ductile shear wall layouts designed for Seismic Zone IV/V.',
    imageUrl: '/images/project_mass_raft_rcc.jpg',
    codeStandard: 'IS 456:2000 / IS 13920 / IS 1893'
  },
  {
    id: 'photo-water-stp',
    title: '215 MLD Okhla STP & Liquid Retention Tanks',
    category: 'water',
    categoryLabel: 'HYDRAULIC & STP ASSETS',
    location: 'New Delhi (Yamuna Clean Mission)',
    specs: '215 MLD Capacity | Circular Clarifiers & Digesters',
    description: 'Fluid-retaining reinforced concrete tanks designed with stringent crack-width limitation (< 0.1 mm) and uplift hydrostatic relief under IS 3370.',
    imageUrl: '/images/project_water_treatment_stp.jpg',
    codeStandard: 'IS 3370 (Parts 1-4) Water Retaining'
  },
  {
    id: 'photo-bridge-girders',
    title: 'Multi-Span Composite Steel & Concrete Bridges',
    category: 'bridges',
    categoryLabel: 'BRIDGES & FLYOVERS',
    location: 'National Highway Corridors / UK',
    specs: '140m Continuous Composite Span | CS 454 Assessed',
    description: 'Fabricated steel plate girders with shear stud connectors, elastomeric pot bearings, and dynamic vehicle live-load simulations under IRC:6 and Eurocodes.',
    imageUrl: '/images/project_patna_six_lane_flyover.jpg',
    codeStandard: 'IRC 112 / IRC 24 / UK CS 454'
  },
  {
    id: 'photo-deep-basements',
    title: 'Deep Basements, Diaphragm Walls & Soil Anchors',
    category: 'foundations',
    categoryLabel: 'GEOTECHNICAL & FOUNDATIONS',
    location: 'Metro Stations & High-Density Hubs',
    specs: '18m Deep Excavation | Multi-Tier Struts & Tie-Backs',
    description: 'Contiguous pile walls, pre-stressed ground anchor tendons, and finite element soil-structure interaction modeling to prevent settlement of adjacent historic structures.',
    imageUrl: '/images/project_mass_raft_rcc.jpg',
    codeStandard: 'IS 2911 / IS 14458 / Eurocode 7'
  },
  {
    id: 'photo-substation-power',
    title: '400kV Gas-Insulated Substations (GIS) & Chimneys',
    category: 'concrete',
    categoryLabel: 'POWER & UTILITIES',
    location: 'Thermal Stations / Data Centers',
    specs: '85m Tall Chimneys | AECOM-Vetted GIS Towers',
    description: 'Resonance avoidance design for heavy turbine vibrating bases under IS 2974, blast-resistant electrical switchgear enclosures, and tall aerodynamic chimney slipforms.',
    imageUrl: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=1200&q=80',
    codeStandard: 'IS 2974 Machine Bases / IS 4998'
  },
  {
    id: 'photo-global-highrise',
    title: 'Cross-Border International Structural Engineering',
    category: 'steel',
    categoryLabel: 'INTERNATIONAL PROJECTS',
    location: 'Ethiopia / UAE / United Kingdom',
    specs: 'Edible Oil Refineries | Commercial High-Rise Towers',
    description: 'Global turnkey structural drawings delivered in strict compliance with British Standards, Eurocodes (EN 1991-1993), American ACI 318, AISC 360, and ADIBC.',
    imageUrl: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80',
    codeStandard: 'Eurocodes / ACI 318 / ADIBC UAE'
  }
];

interface CivilSiteGalleryProps {
  onOpenInquiry: (initialSubject?: string) => void;
  onOpenBlueprintModal?: () => void;
}

export default function CivilSiteGallerySection({ onOpenInquiry, onOpenBlueprintModal }: CivilSiteGalleryProps) {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedPhoto, setSelectedPhoto] = useState<CivilPhoto | null>(null);

  const categories = [
    { key: 'all', label: 'All Civil Photos' },
    { key: 'steel', label: 'Steel & PEB' },
    { key: 'metro', label: 'Metro & Rail' },
    { key: 'concrete', label: 'RCC & High-Rise' },
    { key: 'bridges', label: 'Bridges & Flyovers' },
    { key: 'water', label: 'Water & STP' },
    { key: 'foundations', label: 'Deep Foundations' }
  ];

  const filteredPhotos = activeCategory === 'all' 
    ? CIVIL_GALLERY_PHOTOS 
    : CIVIL_GALLERY_PHOTOS.filter(p => p.category === activeCategory);

  return (
    <section id="civil-gallery" className="py-12 sm:py-16 lg:py-24 bg-[#0B1019] relative border-t border-white/10">
      {/* Background blueprint subtle texture */}
      <div className="absolute inset-0 blueprint-grid opacity-25 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 pb-6 border-b border-white/10">
          <div className="space-y-3 max-w-2xl">
            <div className="flex items-center gap-3">
              <div className="w-8 sm:w-12 h-px bg-[#F27D26]"></div>
              <span className="text-[#F27D26] uppercase tracking-[0.25em] font-bold text-xs font-mono-tech flex items-center gap-1.5">
                <HardHat className="w-4 h-4" />
                CIVIL & STRUCTURAL FIELD EXECUTION
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white font-heading tracking-tight uppercase">
              ENGINEERING ON-SITE GALLERY
            </h2>
            <p className="text-sm sm:text-base text-slate-300">
              High-definition photographic documentation of real civil engineering works, steel fabrication, precast segmental launching, mass concrete pours, and hydraulic water assets.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => onOpenInquiry('Civil Engineering Consultation')}
              className="inline-flex items-center space-x-2 px-5 py-3 rounded-sm font-bold text-xs sm:text-sm uppercase tracking-wider bg-[#F27D26] text-white hover:bg-[#ff8c38] shadow-lg shadow-[#F27D26]/20 transition-all cursor-pointer font-mono-tech"
            >
              <span>DISCUSS YOUR PROJECT</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActiveCategory(cat.key)}
              className={`px-4 py-2 rounded-sm text-xs font-mono-tech uppercase tracking-wider transition-all whitespace-nowrap cursor-pointer ${
                activeCategory === cat.key
                  ? 'bg-[#F27D26] text-white font-bold shadow-md shadow-[#F27D26]/20 border border-[#F27D26]'
                  : 'bg-[#161C27] text-slate-300 hover:text-white hover:bg-[#1f2838] border border-white/10'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Photos Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {filteredPhotos.map((photo) => (
            <div
              key={photo.id}
              onClick={() => setSelectedPhoto(photo)}
              className="group bg-[#161C27] border border-white/10 hover:border-[#F27D26] rounded-sm overflow-hidden flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/80 cursor-pointer relative"
            >
              {/* Photo Frame */}
              <div className="relative h-52 sm:h-56 w-full overflow-hidden bg-slate-950">
                <img 
                  src={photo.imageUrl} 
                  alt={photo.title} 
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-700 brightness-[0.9] group-hover:brightness-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#161C27] via-transparent to-black/30" />
                
                {/* Category Pill */}
                <div className="absolute top-2.5 left-2.5">
                  <span className="text-[9px] font-mono-tech px-2 py-0.5 rounded-sm bg-[#0F141E]/90 border border-white/20 text-[#F27D26] font-bold uppercase backdrop-blur-md">
                    {photo.categoryLabel}
                  </span>
                </div>

                {/* Quick Enlarge Action */}
                <div className="absolute top-2.5 right-2.5 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="p-1.5 rounded-sm bg-[#0F141E]/90 border border-white/20 text-white hover:text-[#F27D26] backdrop-blur-md">
                    <Maximize2 className="w-3.5 h-3.5" />
                  </div>
                </div>

                {/* Location Badge */}
                <div className="absolute bottom-2.5 left-2.5 flex items-center space-x-1 text-[10px] font-mono-tech text-slate-200 bg-black/70 px-2 py-0.5 rounded-sm backdrop-blur-sm border border-white/10">
                  <MapPin className="w-3 h-3 text-[#F27D26]" />
                  <span>{photo.location}</span>
                </div>
              </div>

              {/* Card Meta Content */}
              <div className="p-4 flex-1 flex flex-col justify-between space-y-3">
                <div className="space-y-1.5">
                  <h3 className="text-sm font-bold text-white font-heading uppercase group-hover:text-[#F27D26] transition-colors line-clamp-2">
                    {photo.title}
                  </h3>
                  <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">
                    {photo.description}
                  </p>
                </div>

                {/* Technical Code & Specs Tag */}
                <div className="pt-2.5 border-t border-white/10 flex items-center justify-between text-[10px] font-mono-tech">
                  <span className="text-[#F27D26] font-bold truncate max-w-[170px]">
                    {photo.codeStandard}
                  </span>
                  <span className="text-slate-400 group-hover:text-white uppercase font-bold flex items-center gap-1">
                    <span>VIEW</span>
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal Lightbox for Fullscreen Photo & Civil Engineering Details */}
        {selectedPhoto && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fade-in">
            <div className="relative w-full max-w-4xl bg-[#161C27] border border-white/20 rounded-sm shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
              
              {/* Modal Header */}
              <div className="flex items-center justify-between p-4 border-b border-white/10 bg-[#0F141E]">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#F27D26] animate-pulse" />
                  <span className="text-xs font-mono-tech text-[#F27D26] font-bold uppercase">
                    CIVIL FIELD INSPECTION • {selectedPhoto.categoryLabel}
                  </span>
                </div>
                <button
                  onClick={() => setSelectedPhoto(null)}
                  className="p-1.5 rounded-sm bg-white/5 text-slate-400 hover:text-white hover:bg-white/10 border border-white/10 transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Modal Body */}
              <div className="overflow-y-auto p-4 sm:p-6 space-y-6">
                
                {/* Large Civil Photo */}
                <div className="relative rounded-sm overflow-hidden border border-white/10 bg-black aspect-video max-h-[420px]">
                  <img 
                    src={selectedPhoto.imageUrl} 
                    alt={selectedPhoto.title} 
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
                  
                  <div className="absolute bottom-4 left-4 right-4 flex flex-wrap items-center justify-between gap-3 text-xs font-mono-tech text-white">
                    <div className="bg-black/80 px-3 py-1 rounded-sm border border-white/20 backdrop-blur-sm flex items-center gap-2">
                      <MapPin className="w-3.5 h-3.5 text-[#F27D26]" />
                      <span>{selectedPhoto.location}</span>
                    </div>
                    <div className="bg-[#F27D26] text-white font-bold px-3 py-1 rounded-sm">
                      {selectedPhoto.codeStandard}
                    </div>
                  </div>
                </div>

                {/* Details Matrix */}
                <div className="space-y-4">
                  <h3 className="text-xl sm:text-2xl font-black text-white font-heading uppercase">
                    {selectedPhoto.title}
                  </h3>

                  <p className="text-sm text-slate-300 leading-relaxed">
                    {selectedPhoto.description}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                    <div className="p-3.5 bg-[#0F141E] rounded-sm border border-white/10">
                      <div className="text-[10px] font-mono-tech text-[#F27D26] uppercase font-bold mb-1">
                        ENGINEERING SPECIFICATIONS
                      </div>
                      <div className="text-xs text-slate-200 font-mono-tech font-bold">
                        {selectedPhoto.specs}
                      </div>
                    </div>
                    <div className="p-3.5 bg-[#0F141E] rounded-sm border border-white/10">
                      <div className="text-[10px] font-mono-tech text-[#F27D26] uppercase font-bold mb-1">
                        REGULATORY STANDARDS
                      </div>
                      <div className="text-xs text-slate-200 font-mono-tech font-bold">
                        {selectedPhoto.codeStandard}
                      </div>
                    </div>
                  </div>
                </div>

              </div>

              {/* Modal Footer CTAs */}
              <div className="p-4 border-t border-white/10 bg-[#0F141E] flex flex-wrap items-center justify-between gap-3">
                {onOpenBlueprintModal && (
                  <button
                    onClick={() => {
                      setSelectedPhoto(null);
                      onOpenBlueprintModal();
                    }}
                    className="inline-flex items-center space-x-2 px-4 py-2.5 rounded-sm font-bold text-xs uppercase tracking-wider bg-white/5 text-slate-200 hover:text-white hover:bg-white/10 border border-white/10 transition-colors font-mono-tech"
                  >
                    <FileCode2 className="w-4 h-4 text-[#F27D26]" />
                    <span>VIEW RELATED BLUEPRINTS</span>
                  </button>
                )}

                <button
                  onClick={() => {
                    const subj = selectedPhoto.title;
                    setSelectedPhoto(null);
                    onOpenInquiry(`Inquiry for: ${subj}`);
                  }}
                  className="inline-flex items-center space-x-2 px-6 py-2.5 rounded-sm font-bold text-xs uppercase tracking-wider bg-[#F27D26] text-white hover:bg-[#ff8c38] shadow-lg shadow-[#F27D26]/20 transition-all font-mono-tech cursor-pointer ml-auto"
                >
                  <span>INQUIRE FOR SIMILAR DESIGN</span>
                  <ExternalLink className="w-4 h-4" />
                </button>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
}
