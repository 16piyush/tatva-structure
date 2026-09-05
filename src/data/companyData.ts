import { 
  ProjectItem, 
  ServiceItem, 
  IndustryItem, 
  FounderTrackItem, 
  TeamMember, 
  EngineeringTool, 
  DesignCode 
} from '../types';

export const COMPANY_INFO = {
  name: 'TATVA STRUCTURA',
  tagline: 'YOU THINK WE MAKE',
  subtitle: 'Structural Engineering Solutions for Complex Projects',
  taglineDesc: 'Tatva Structura is an exponentially growing structural design consultancy specializing in safe, economical and innovative solutions for complex engineering challenges.',
  aboutDetailed: 'Tatva Structura is an exponentially growing structural design consultancy specializing in delivering safe, economical, and innovative solutions for complex engineering challenges. With expertise spanning industrial, commercial, and residential sectors, we bring precision, reliability, and creativity to every project we undertake.',
  contactPerson: 'Sumit Rohiwal',
  phone: '+91 72066 04020',
  phoneRaw: '917206604020',
  email: 'tatvastructura@gmail.com',
  address: 'SF-76, Gaur City Centre, Greater Noida West, Greater Noida, Uttar Pradesh – 201318',
  workingHours: 'Monday – Saturday: 9:00 AM – 7:00 PM IST',
};

export const CORE_EXPERTISE = [
  {
    id: 'analysis-design',
    title: 'Structural Analysis & Design',
    subtitle: 'Steel, RCC and Composite Structures',
    description: 'Comprehensive static, dynamic, seismic, and wind analysis for heavy industrial and infrastructure assets using advanced finite element modelling.',
    bulletPoints: [
      'RCC high-rise & industrial frame design',
      'Structural steel framing & heavy truss systems',
      'Composite deck slabs & column sections',
      'Rigorous seismic & wind response modeling'
    ],
    icon: 'Building2'
  },
  {
    id: 'industrial-facilities',
    title: 'Industrial Facilities',
    subtitle: 'Heavy Process & Plant Infrastructure',
    description: 'Specialized structural engineering for power plants, steel mills, refineries, water & wastewater treatment plants, substations, and intake works.',
    bulletPoints: [
      'Power plants & turbine generator foundations',
      'Steel plants, blast furnace & rolling mill sheds',
      'Refineries & petrochemical supporting structures',
      'Wastewater (STP/ETP) & water intake structures',
      'Substations, switchyards & transmission gantries'
    ],
    icon: 'Factory'
  },
  {
    id: 'special-engineering',
    title: 'Special Engineering',
    subtitle: 'Challenging Terrains & Structural Rehabilitation',
    description: 'Engineered solutions for hilly terrain buildings, deep earth retention systems, non-destructive testing evaluation, and structural restrengthening.',
    bulletPoints: [
      'Hilly terrain stepped & suspended foundations',
      'Earth retention, contiguous piling & soil nailing',
      'Blast-resistant structures (MES criteria)',
      'Retrofitting & GFRP composite wrap restrengthening'
    ],
    icon: 'ShieldCheck'
  },
  {
    id: 'advanced-tools',
    title: 'Advanced Engineering Tools',
    subtitle: 'High-Precision Analytical & Detailing Suites',
    description: 'Utilizing industry-standard software suites for rigorous structural validation, non-linear analysis, 3D BIM coordination, and automated drafting.',
    bulletPoints: [
      'STAAD Pro & ETABS 3D Finite Element Analysis',
      'SAFE for complex mat & deep foundation systems',
      'MATHCAD for validated design calculations',
      'TEKLA STRUCTURES & AUTOCAD for fabrication detailing'
    ],
    icon: 'Cpu'
  },
  {
    id: 'global-codes',
    title: 'Global Design Codes',
    subtitle: 'Multi-Jurisdictional International Compliance',
    description: 'Multinational code compliance capability ensuring structures meet stringent safety factors across Indian, American, European, Russian, and Middle East jurisdictions.',
    bulletPoints: [
      'Indian Codes (IS 456, IS 800, IS 1893, IS 875, IS 13920)',
      'American Codes (ACI 318, AISC 360, ASCE 7, IBC)',
      'European Codes (Eurocode 2, 3, 4, 8)',
      'Russian Codes (SNiP / SP regulations)',
      'Abu Dhabi / Gulf Regional Building Codes'
    ],
    icon: 'Globe2'
  }
];

export const SERVICES_LIST: ServiceItem[] = [
  {
    id: 'structural-analysis',
    number: '01',
    title: 'Structural Analysis',
    shortDesc: 'Rigorous 3D finite element, dynamic, modal, and non-linear analysis for complex structural frameworks.',
    fullDesc: 'Comprehensive computational modeling simulating wind aerodynamic loads, seismic spectrum responses, thermal variations, and vibrating machine dynamics.',
    deliverables: ['3D Finite Element Model Analysis', 'Seismic Response Spectrum Reports', 'Dynamic & Vibration Assessments', 'Load Combination Matrix Tables'],
    category: 'core'
  },
  {
    id: 'structural-design',
    number: '02',
    title: 'Structural Design',
    shortDesc: 'End-to-end structural engineering from conceptual framing schemes to final member sizing and verification.',
    fullDesc: 'Optimized structural framing designed to balance architectural vision, constructability, safety standards, and economic material distribution.',
    deliverables: ['Design Basis Reports (DBR)', 'Member Sizing & Calculations', 'Joint & Connection Calculations', 'Bill of Materials Optimization'],
    category: 'core'
  },
  {
    id: 'steel-structure-design',
    number: '03',
    title: 'Steel Structure Design',
    shortDesc: 'Heavy industrial steel frames, portal frames, trusses, pipe racks, and Pre-Engineered Buildings (PEB).',
    fullDesc: 'Specialized design of heavy mill buildings, mezzanine floors, conveyor gantries, crane runways, and high-span PEB warehouses.',
    deliverables: ['PEB Primary & Secondary Framing', 'Crane Girders & Monorail Beams', 'Moment & Shear Connection Calculations', 'Base Plate & Anchor Bolt Design'],
    category: 'design'
  },
  {
    id: 'rcc-structure-design',
    number: '04',
    title: 'RCC Structure Design',
    shortDesc: 'Reinforced cement concrete frames, shear walls, flat slabs, transfer plates, and subterranean basements.',
    fullDesc: 'Ductile reinforced concrete design engineered in strict accordance with seismic detailing provisions for commercial, residential, and institutional buildings.',
    deliverables: ['Column & Shear Wall Schedules', 'Beam Reinforcement Layouts', 'Two-way & Flat Slab Layouts', 'Ductile Detailing Sheets'],
    category: 'design'
  },
  {
    id: 'composite-structure-design',
    number: '05',
    title: 'Composite Structure Design',
    shortDesc: 'Steel-concrete composite columns, castellated beams, and profile metal deck flooring systems.',
    fullDesc: 'Hybrid structural systems leveraging the compressive strength of concrete and tensile capacity of steel for high-speed construction and slender floor depths.',
    deliverables: ['Shear Connector Stud Spacing Schedules', 'Composite Deck Slab Profiles', 'Encased & Concrete-Filled Tube Design', 'Deflection & Vibration Criteria Reports'],
    category: 'design'
  },
  {
    id: 'foundation-design',
    number: '06',
    title: 'Foundation Design',
    shortDesc: 'Isolated, combined, raft/mat foundations, deep pile caps, and heavy vibrating equipment machine bases.',
    fullDesc: 'Substructure engineering tailored to geotechnical soil parameters, accommodating high overturning moments, water table uplift, and heavy dynamic machinery.',
    deliverables: ['Raft / Mat Foundation Calculations', 'Bored Cast-in-Situ Pile Cap Layouts', 'Transformer & Turbine Foundation Drawings', 'Settlement & Bearing Capacity Verification'],
    category: 'design'
  },
  {
    id: 'industrial-structure-design',
    number: '07',
    title: 'Industrial Structure Design',
    shortDesc: 'Refineries, power plants, steel mills, cement factories, substations, and wastewater treatment plants.',
    fullDesc: 'Robust structural design resisting aggressive environmental conditions, high operating temperatures, heavy crane loadings, and heavy process equipment.',
    deliverables: ['Substation Gantry & Equipment Support', 'STP / ETP Retaining Basins & Clarifiers', 'Chimney & Flue Gas Support Structures', 'Heavy Equipment Skid Framing'],
    category: 'specialized'
  },
  {
    id: 'structural-review',
    number: '08',
    title: 'Structural Review & Proof Checking',
    shortDesc: 'Independent third-party proof checking and structural audit of external designs and drawings.',
    fullDesc: 'Thorough examination of design calculations, mathematical models, boundary conditions, and drawing details against applicable national and international codes.',
    deliverables: ['Third-Party Vetting Reports', 'Safety Margin & Code Compliance Audits', 'Design Discrepancy Rectification Notes', 'Proof-Checking Certifications'],
    category: 'specialized'
  },
  {
    id: 'retrofitting-strengthening',
    number: '09',
    title: 'Retrofitting & Strengthening',
    shortDesc: 'Structural rehabilitation using GFRP composites, steel jacketing, micro-concreting, and load enhancement.',
    fullDesc: 'Restoration and capacity enhancement of distressed, aged, or repurposed structures to carry increased operational loads or satisfy updated seismic requirements.',
    deliverables: ['NDT Assessment Evaluation', 'GFRP / CFRP Strip Application Schemes', 'Column & Beam Jacketing Details', 'Post-Strengthening Capacity Verification'],
    category: 'specialized'
  },
  {
    id: 'earth-retention-systems',
    number: '10',
    title: 'Earth Retention Systems',
    shortDesc: 'Diaphragm walls, soldier pile & lagging, contiguous piles, soil nailing, and deep basement shoring.',
    fullDesc: 'Geotechnical structural design for deep urban excavations and slope stabilization, preventing settlement of adjoining structures and roads.',
    deliverables: ['Deep Shoring Structural Drawings', 'Strutting & Tie-Back Anchor Details', 'Excavation Stage-Wise Stability Reports', 'Seepage & Dewatering Interface Plans'],
    category: 'specialized'
  },
  {
    id: 'special-structure-design',
    number: '11',
    title: 'Special Structure Design',
    shortDesc: 'Blast-resistant MES bunkers, igloo structures, high chimneys, escalators, and complex architectural geometries.',
    fullDesc: 'High-end engineering for non-standard structures involving extreme dynamic blast overpressures, aerodynamic wind vortex shedding, and specialized modular geometry.',
    deliverables: ['Blast Overpressure Dynamic Sizing', 'Igloo Vault Structural Mechanics', 'Lifting Frame & Monorail Rigging Layouts', 'High-Rise Chimney Interform Structures'],
    category: 'specialized'
  },
  {
    id: 'civil-structural-drawings',
    number: '12',
    title: 'Civil & Structural Drawings',
    shortDesc: 'Comprehensive, coordinated civil construction drawings ready for seamless on-site contractor execution.',
    fullDesc: 'Clear, accurate graphical representations covering setting-out plans, foundation schedules, reinforcement details, expansion joints, and waterproofing interfaces.',
    deliverables: ['Excavation & Setting-Out Plans', 'RCC Element Reinforcement Details', 'Bar Bending Schedules (BBS)', 'Civil Finishes Interface Details'],
    category: 'drawings'
  },
  {
    id: 'ga-fabrication-drawings',
    number: '13',
    title: 'GA & Fabrication Drawings',
    shortDesc: 'Structural steel General Arrangement (GA), shop fabrication drawings, connection details, and BOM.',
    fullDesc: 'Millimeter-precise fabrication drawings including part drawings, assembly mark numbers, weld symbols, and bolt schedules for error-free workshop production.',
    deliverables: ['General Arrangement (GA) Layouts', 'Shop Assembly & Part Detail Sheets', 'Erection Mark Plans', 'Detailed Bolt & Connection Schedules'],
    category: 'drawings'
  },
  {
    id: 'infrastructure-structural-design',
    number: '14',
    title: 'Infrastructure Structural Design',
    shortDesc: 'Metro viaducts, pier caps, concourse cross arms, multi-lane flyovers, bridges, and transport gantries.',
    fullDesc: 'Heavy civil infrastructure engineering including post-tensioned prestressed concrete, elastomeric bearings, cantilever arms, and long-span bridge superstructures.',
    deliverables: ['Precast Post-Tensioned Pier Cap Design', 'Viaduct & Cross Arm GA Drawings', 'Pier & Pile Foundation Schedules', 'Bearing & Expansion Joint Detailing'],
    category: 'specialized'
  }
];

export const PROJECTS_DATA: ProjectItem[] = [
  // 1. Industrial & Infrastructure
  {
    id: 'camwell-industrial-shed',
    title: 'Industrial Shed — 100,000 sqft',
    category: 'industrial',
    client: 'Camwell Industries',
    location: 'Mathura, Uttar Pradesh',
    scope: 'Review of shed design and construction drawings.',
    specs: '100,000 sqft Heavy Industrial Shed',
    highlights: ['Structural Steel Review', 'Long-span framing verification', 'Construction drawing audit'],
    imageUrl: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80',
    tag: 'Industrial Facility',
    featured: true
  },
  {
    id: 'durga-filters-warehouse',
    title: 'Industrial Warehouse — 94,080 sqft',
    category: 'industrial',
    client: 'Durga Filters',
    location: 'Industrial Zone',
    scope: 'Structural steel GA and foundation drawings.',
    specs: '94,080 sqft Manufacturing & Storage Facility',
    highlights: ['Structural Steel GA', 'Heavy equipment foundation', 'Fabrication detailing'],
    imageUrl: '/images/project_peb_warehouse_3d.jpg',
    tag: 'Warehouse / Industrial',
    featured: true
  },
  {
    id: 'delhi-peb-warehouse',
    title: 'Industrial Warehouse — G+1 PEB',
    category: 'industrial',
    location: 'Delhi NCR',
    scope: 'Structural steel GA and foundation drawings.',
    specs: 'G+1 Pre-Engineered Building (PEB)',
    highlights: ['PEB Multi-level Framing', 'Foundation design for heavy racking', 'Complete GA drawings'],
    imageUrl: '/images/project_peb_portal_front.jpg',
    tag: 'PEB Industrial'
  },
  {
    id: 'archlife-shed-review',
    title: 'Industrial Shed Review — 57,000 sqft',
    category: 'industrial',
    client: 'Archlife Associates',
    scope: 'Structural review of shed according to American codes.',
    specs: '57,000 sqft Industrial Shed (AISC / ASCE Compliance)',
    highlights: ['American Code (AISC/ASCE) compliance review', 'Wind & load combination assessment', 'Structural optimization'],
    imageUrl: '/images/project_warehouse_truss_roof.jpg',
    tag: 'Code Compliance Review'
  },
  {
    id: 'ahuja-temp-office',
    title: 'Temporary Office — 4,800 sqft',
    category: 'industrial',
    client: 'Ahuja Interiors',
    location: 'Gurugram, Haryana',
    scope: 'Detailed design and development of superstructure and foundation drawings for shed structure.',
    specs: '4,800 sqft Quick-Erect Modular Shed Structure',
    highlights: ['Superstructure framing', 'Economical foundation drawings', 'Rapid construction scheme'],
    imageUrl: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80',
    tag: 'Commercial / Shed'
  },

  // 2. Government & Public Works
  {
    id: 'nbcc-chimney',
    title: '200m High Industrial Chimney',
    category: 'government',
    client: 'NBCC',
    scope: 'Structural design and preparation of drawings for chimney interform structure.',
    specs: '200-meter Tall Chimney Interform System',
    highlights: ['Extreme height dynamic wind response', 'Slipform/interform structural sizing', 'High-grade concrete & steel reinforcement'],
    imageUrl: 'https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&w=1200&q=80',
    tag: 'Public Infrastructure',
    featured: true
  },
  {
    id: 'mes-blast-resistant',
    title: 'MES Blast Resistant Structure',
    category: 'government',
    client: 'Archlife Associates',
    scope: 'Structural design of blast-resistant building based on client load data.',
    specs: 'Military Engineer Services (MES) Blast-Resistant Criteria',
    highlights: ['Dynamic impulsive blast loading', 'Heavy ductile reinforcement detailing', 'Specialized protective structural geometry'],
    imageUrl: '/images/project_mass_raft_rcc.jpg',
    tag: 'Defense / Special Structure',
    featured: true
  },
  {
    id: 'dmrc-escalator-10t',
    title: 'DMRC Escalator Lifting Structure (10-Ton)',
    category: 'metro',
    client: 'Johnson',
    scope: 'Structure GA and fabrication drawings for maximum 10-ton loading.',
    specs: 'DMRC Metro Station Escalator Erection System',
    highlights: ['10-Ton heavy dynamic lifting load', 'Rigging and overhead crane frame GA', 'Fabrication shop drawings'],
    imageUrl: '/images/project_tekla_cad_model.jpg',
    tag: 'Metro Infrastructure'
  },
  {
    id: 'dmrc-escalator-2t',
    title: 'DMRC Escalator Lifting Structure (2-Ton)',
    category: 'metro',
    client: 'TKE',
    scope: 'Structure GA and fabrication drawings for maximum 2-ton loading.',
    specs: 'DMRC Station Escalator Installation Framing',
    highlights: ['2-Ton hoist frame design', 'General Arrangement detailing', 'Precision fabrication plans'],
    imageUrl: '/images/project_tekla_cad_model.jpg',
    tag: 'Metro Infrastructure'
  },
  {
    id: 'hmel-transformer-foundation',
    title: 'Transformer Foundation — 2 MVA',
    category: 'power-utilities',
    client: 'VRC Constructions / HMEL',
    location: 'Bhatinda, Punjab',
    scope: 'GA and reinforcement drawings for transformer foundation.',
    specs: '2 MVA Substation Transformer Foundation & Oil Pit',
    highlights: ['Vibrating machine base design', 'Reinforcement drawings', 'HMEL refinery standards compliance'],
    imageUrl: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=1200&q=80',
    tag: 'Power & Substation'
  },

  // 3. Power & Utilities
  {
    id: 'stt-data-centre-substation',
    title: 'STT Data Centre Substation — Noida',
    category: 'power-utilities',
    client: 'Blue Star',
    location: 'Noida, Uttar Pradesh',
    scope: 'Structural steel GA and fabrication drawings, reviewed and approved by AECOM.',
    specs: 'Mission-Critical High-Voltage Substation Facility',
    highlights: ['Approved by AECOM', 'Heavy steel structural GA', 'Shop fabrication drawings for high-reliability data center'],
    imageUrl: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80',
    tag: 'Data Center Substation',
    approvalAuthority: 'AECOM Approved',
    featured: true
  },
  {
    id: '75kld-stp',
    title: '75 KLD Sewage Treatment Plant',
    category: 'power-utilities',
    client: 'Jalvarney Technologies Pvt. Ltd.',
    scope: 'Structural design and civil construction drawings for STP.',
    specs: '75 KLD Modular Wastewater Treatment Facility',
    highlights: ['Water retaining structure design (IS 3370)', 'Civil construction drawings', 'Pump room & equalization tank'],
    imageUrl: '/images/project_water_treatment_stp.jpg',
    tag: 'Water Treatment'
  },
  {
    id: '10mld-stp',
    title: '10 MLD Sewage Treatment Plant',
    category: 'power-utilities',
    client: 'S S Engineering Works Ltd.',
    scope: 'Complete civil design and drawings for all units.',
    specs: '10 MLD Municipal / Industrial STP System',
    highlights: ['Multi-unit treatment basin design', 'Clarifier & aeration tank structural design', 'Full civil execution drawings'],
    imageUrl: '/images/project_water_treatment_stp.jpg',
    tag: 'Water & Wastewater',
    featured: true
  },
  {
    id: '3-5mld-stp',
    title: '3.5 MLD Sewage Treatment Plant',
    category: 'power-utilities',
    client: 'S S Engineering Works Ltd.',
    scope: 'Complete civil design and drawings for all units.',
    specs: '3.5 MLD Complete Treatment Facility',
    highlights: ['Civil structural calculations', 'Underground & above-ground holding units', 'Detailed rebar drawings'],
    imageUrl: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=80',
    tag: 'Water & Wastewater'
  },

  // 4. Commercial & Hospitality
  {
    id: 'banquet-hall-bareilly',
    title: 'Banquet Hall — 40,000 sqft',
    category: 'commercial-hospitality',
    client: 'Anas Enterprises',
    location: 'Bareilly, Uttar Pradesh',
    scope: [
      'RCC design',
      'Civil drawings',
      'Structural steel GA',
      'Fabrication drawings'
    ],
    specs: '40,000 sqft Column-Free Hospitality Space',
    highlights: ['Large column-free ballroom spans', 'Hybrid RCC and structural steel framing', 'Complete fabrication and civil detailing'],
    imageUrl: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=1200&q=80',
    tag: 'Commercial Hospitality',
    featured: true
  },
  {
    id: 'banquet-hall-gurugram',
    title: 'Banquet Hall — 55,000 sqft',
    category: 'commercial-hospitality',
    client: 'Archlife Associates',
    location: 'Gurugram, Haryana',
    scope: [
      'Design review',
      'Fabrication drawings'
    ],
    specs: '55,000 sqft Event & Banquet Complex',
    highlights: ['Structural engineering review', 'High-span roof truss fabrication drawings', 'Connection design verification'],
    imageUrl: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1200&q=80',
    tag: 'Commercial Hospitality'
  },
  {
    id: 'residential-mangalore',
    title: 'Residential Building — B+G+1',
    category: 'commercial-hospitality',
    location: 'Mangalore, Karnataka',
    scope: [
      'Structural design',
      'Civil drawings'
    ],
    specs: 'Basement + Ground + 1 Floor Residential Villa',
    highlights: ['Retaining basement wall design for coastal soil', 'Seismic frame sizing', 'Full civil execution drawings'],
    imageUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
    tag: 'Residential'
  },

  // 5. Special Structures & Rehabilitation
  {
    id: 'igloo-structure-mes',
    title: 'Igloo Blast / Storage Structure',
    category: 'special-structures',
    client: 'MES / Archlife Associates',
    scope: 'Structural design of igloo structure, approved by IIT Roorkee.',
    specs: 'Specialized Arch Vaulted Igloo Structure',
    highlights: ['Approved by IIT Roorkee', 'Arch structural analysis & thrust balancing', 'Defense/MES standard compliance'],
    imageUrl: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80',
    tag: 'Special Structure',
    approvalAuthority: 'Approved by IIT Roorkee',
    featured: true
  },
  {
    id: 'slab-strengthening-gfrp',
    title: 'Slab Strengthening Using GFRP',
    category: 'special-structures',
    client: 'Archlife Associates',
    scope: 'Strengthening of an existing slab to carry additional load using GFRP strips.',
    specs: 'Advanced Glass Fiber Reinforced Polymer (GFRP) Retrofit',
    highlights: ['Capacity upgrade for increased load requirements', 'Epoxy bonded GFRP strip layout', 'Flexural and shear capacity verification'],
    imageUrl: '/images/project_mass_raft_rcc.jpg',
    tag: 'Rehabilitation & Retrofitting',
    featured: true
  },
  {
    id: 'cnt-block-aiims',
    title: 'CNT Block — AIIMS',
    category: 'special-structures',
    client: 'HSCC',
    location: 'AIIMS Campus',
    scope: 'Structural stability report based on NDT test results.',
    specs: 'Hospital Block Structural Audit & Condition Assessment',
    highlights: ['Non-Destructive Testing (NDT) data analysis', 'Structural stability report for HSCC', 'Distress mapping & safety index'],
    imageUrl: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1200&q=80',
    tag: 'Structural Audit / NDT'
  },

  // 6. Metro & Infrastructure
  {
    id: 'delhi-mrts-phase4',
    title: 'Delhi MRTS Phase-4 — Package DC-02',
    category: 'metro',
    location: 'Delhi MRTS Network',
    scope: [
      'Precast post-tensioned concourse-level pier caps',
      'Track-level pier caps',
      'Viaduct pier caps',
      'Piles & pile caps',
      'Piers & portal structures',
      'Normal and cantilever structures'
    ],
    specs: 'High-Density Metro Viaduct & Elevated Stations',
    highlights: ['Precast post-tensioned pier caps', 'Cantilever arms & track supports', 'Deep pile foundation designs'],
    imageUrl: '/images/project_patna_six_lane_flyover.jpg',
    tag: 'Metro Mass Transit',
    featured: true
  },
  {
    id: 'mumbai-metro-line6-bc03',
    title: 'Mumbai Metro Line 6 — Package BC03',
    category: 'metro',
    location: 'Mumbai, Maharashtra',
    scope: [
      'Design Basis Report (DBR)',
      'Precast post-tensioned flyover pier caps',
      'Concourse cross arms & Track cross arms',
      'Pile, pile cap and pier designs',
      'Elastomeric bearings and RCC beams'
    ],
    specs: 'Elevated Corridor & Flyover Integration',
    highlights: ['Design Basis Report preparation', 'Cross arms & precast post-tensioned elements', 'Elastomeric bearing sizing'],
    imageUrl: '/images/mumbai_metro_line6_bc03.jpg',
    tag: 'Metro Mass Transit',
    featured: true
  },
  {
    id: 'mumbai-metro-line6-bc01',
    title: 'Mumbai Metro Line 6 — Package BC01',
    category: 'metro',
    location: 'Mumbai, Maharashtra',
    scope: [
      'Design Basis Report (DBR)',
      'Concourse cross arms & Alignment drawings',
      'Track cross arms & Viaduct pier caps',
      'Pile, pile cap and pier engineering',
      'Elastomeric bearings and RCC beams'
    ],
    specs: 'Elevated Mass Transit Metro Corridor',
    highlights: ['Complex alignment drawings', 'Viaduct pier caps & track arms', 'Heavy load foundation engineering'],
    imageUrl: '/images/mumbai_metro_line6_bc01.jpg',
    tag: 'Metro Mass Transit',
    featured: true
  },

  // 7. Bridges
  {
    id: 'patna-flyover',
    title: 'Patna Six-Lane Flyover Project',
    category: 'infrastructure',
    location: 'Patna, Bihar',
    scope: [
      'Design Basis Report (DBR)',
      'Precast post-tensioned and RCC flyover pier caps',
      'Pile, pile cap, and pier substructures'
    ],
    specs: '6-Lane High Capacity Urban Flyover',
    highlights: ['Heavy 6-lane live traffic loading', 'Precast post-tensioned pier caps', 'Deep bored piling systems'],
    imageUrl: '/images/project_patna_six_lane_flyover.jpg',
    tag: 'Highway & Flyover',
    featured: true
  },
  {
    id: 'uk-lanarkshire-bridge',
    title: 'NHS Lanarkshire, Monkland Active Travel Route Bridge',
    category: 'international',
    location: 'Scotland, United Kingdom',
    scope: '140m three-span continuous composite bridge consisting of steel beams and an in-situ concrete deck.',
    specs: '140m 3-Span Continuous Composite Superstructure',
    highlights: ['Continuous composite steel-concrete action', 'Eurocode compliance', 'Active travel pedestrian & cyclist bridge'],
    imageUrl: 'https://images.unsplash.com/photo-1513880989635-6eb491ce7f5b?auto=format&fit=crop&w=1200&q=80',
    tag: 'UK International Project',
    featured: true
  },
  {
    id: 'uk-m8-st-georges',
    title: 'M8 St Georges Road Bridge Assessment',
    category: 'international',
    location: 'Glasgow, United Kingdom',
    scope: 'Assessment of superstructure and substructure with radius of 28.8m according to CS 454 & CS 455.',
    specs: 'Curved Bridge Assessment (Radius = 28.8m)',
    highlights: ['UK Highways standard CS 454 & CS 455', 'Curved deck torsion and shear evaluation', 'Superstructure & substructure rating'],
    imageUrl: '/images/project_patna_six_lane_flyover.jpg',
    tag: 'UK Infrastructure Assessment'
  },
  {
    id: 'ethiopia-oil-plant',
    title: '250 TPD Edible Oil Plant — Ethiopia',
    category: 'international',
    location: 'Ethiopia, Africa',
    scope: 'Structural design of processing facility, silos, and refinery foundations using Euro Codes.',
    specs: '250 Tons Per Day (TPD) Industrial Processing Facility',
    highlights: ['Eurocode design framework', 'Heavy process equipment support', 'International cross-border collaboration'],
    imageUrl: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80',
    tag: 'Global Industrial Facility',
    featured: true
  },
  {
    id: 'abu-dhabi-steel-plants',
    title: 'Abu Dhabi Steel Processing Facilities',
    category: 'international',
    location: 'Abu Dhabi, United Arab Emirates',
    scope: 'Steel plant structural and heavy equipment foundation design experience according to Abu Dhabi & international codes.',
    specs: 'Heavy Steel Mill & Foundation Infrastructure',
    highlights: ['Abu Dhabi regional code compliance', 'Heavy rolling mill vibration isolation', 'Severe coastal desert corrosion design'],
    imageUrl: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80',
    tag: 'Middle East Steel Facility'
  }
];

export const FOUNDER_TRACK_RECORD: FounderTrackItem[] = [
  {
    id: 'wwtp-215mld',
    title: 'Wastewater Treatment Plants',
    scale: 'Up to 215 MLD',
    category: 'Water Infrastructure',
    description: 'Extensive structural engineering for massive municipal and industrial sewage treatment plants, clarifiers, aeration basins, and digesters.',
    engineeringScope: 'IS 3370 water-retaining concrete design, crack width limitation, flotation stability, and heavy hydraulic pumping stations.'
  },
  {
    id: 'rwtp-45mld',
    title: 'Raw Water Treatment Plants',
    scale: 'Up to 45 MLD',
    category: 'Water Infrastructure',
    description: 'Comprehensive civil and structural design of raw water intake works, flash mixers, clariflocculators, and filtered water storage reservoirs.',
    engineeringScope: 'Submerged intake wells, high-capacity chemical house frames, and gravity filter galleries.'
  },
  {
    id: 'power-plants-800mw',
    title: 'Thermal Power Plants',
    scale: '800 MW & 660 MW',
    category: 'Heavy Energy & Power',
    description: 'Heavy industrial structural engineering for mega thermal power generation units, boiler structures, turbine generator pedestals, and coal handling plants.',
    engineeringScope: 'Dynamic analysis of machine foundations, high-temperature structural steel frames, and bunker houses.'
  },
  {
    id: 'steel-plants-global',
    title: 'Steel Plants & Rolling Mills',
    scale: 'Heavy Industrial Scale',
    category: 'Metallurgical Plants',
    description: 'Complete structural solutions for blast furnaces, SMS (Steel Melting Shops), continuous casting machines, and rolling mill crane sheds.',
    engineeringScope: 'High-tonnage EOT crane gantry girders, heavy foundation mats, and fatigue-resistant structural steel connections.'
  },
  {
    id: 'substations-66-22kv',
    title: '66 / 22 KV Electrical Substations',
    scale: 'High Voltage Utility',
    category: 'Power Transmission',
    description: 'Structural design of control room buildings, GIS (Gas Insulated Switchgear) buildings, transformer bays, cable trenches, and gantry towers.',
    engineeringScope: 'Short-circuit dynamic forces, transformer blast containment walls, and gantry deflection control.'
  },
  {
    id: 'highrise-17-storey',
    title: '17-Storey High-Rise — Aurel Town',
    scale: '17-Storey Residential Tower',
    category: 'High-Rise RCC',
    description: 'Structural analysis and ductile design of a 17-storey residential tower at Greater Noida, accommodating high seismic Zone IV forces.',
    engineeringScope: 'ETABS 3D dual-system analysis (moment frames + shear walls), raft foundation on piles, and wind drift limitation.'
  },
  {
    id: 'ambedkar-memorial',
    title: 'Ambedkar Memorial Proof Checking',
    scale: 'Monumental Public Structure',
    category: 'Vetting & Proof Checking',
    description: 'Independent third-party structural review and proof checking of complex architectural domes, monumental colonnades, and public gathering halls.',
    engineeringScope: 'Rigorous finite element model verification, code compliance vetting, and structural safety certification.'
  },
  {
    id: 'ranchi-univ',
    title: 'Ranchi Technical University',
    scale: 'Large Campus Institutional Blocks',
    category: 'Institutional',
    description: 'Structural engineering for academic blocks, research laboratories, auditoriums, and administrative headquarters.',
    engineeringScope: 'Long-span lecture hall trusses, earthquake-resistant framed structures, and expansive floor plates.'
  },
  {
    id: 'crsu-univ',
    title: 'Chaudhary Ranbir Singh University',
    scale: 'Campus Infrastructure',
    category: 'Institutional',
    description: 'Comprehensive civil and structural design of multi-storey academic wings, library complexes, and sports facilities.',
    engineeringScope: 'RCC framed structures, basement parking systems, and open plaza canopy structures.'
  },
  {
    id: 'ggs-univ',
    title: 'Guru Gobind Singh University',
    scale: 'Institutional Development',
    category: 'Institutional',
    description: 'Structural consultancy for multi-disciplinary academic towers, specialized science laboratories, and high-occupancy assembly halls.',
    engineeringScope: 'Vibration control in precision laboratories, transfer girders, and architectural exposed concrete detailing.'
  },
  {
    id: 'airport-baggage',
    title: 'Airport Baggage Handling System',
    scale: 'Aviation Infrastructure',
    category: 'Aviation & Logistics',
    description: 'Specialized mezzanine steel structures, catwalks, conveyor support gantries, and dynamic baggage sorting frame systems.',
    engineeringScope: 'Dynamic operational vibration damping, tight architectural clearances, and high-speed mechanical equipment integration.'
  },
  {
    id: 'large-warehouses-29k',
    title: 'Mega Logistics Warehouses',
    scale: 'Up to 29,185 sqm',
    category: 'Logistics & Warehousing',
    description: 'High-span Pre-Engineered Building (PEB) logistics hubs with super-flat industrial floor slabs and automated racking interfaces.',
    engineeringScope: 'Long-span tapered portal frames, crane loadings, FM2 floor flatness specifications, and optimized steel tonnage.'
  },
  {
    id: 'pumping-stations',
    title: 'High-Capacity Pumping Stations',
    scale: 'Critical Water Works',
    category: 'Water Infrastructure',
    description: 'Deep subterranean pump houses designed against heavy buoyant uplift, earth pressures, and pump pulsating dynamic forces.',
    engineeringScope: 'Heavy mass concrete substructures, pump discharge thrust blocks, and overhead maintenance crane gantries.'
  },
  {
    id: 'fgd-system',
    title: 'Flue Gas Desulfurization (FGD) System',
    scale: 'Power Plant Environmental Package',
    category: 'Environmental Engineering',
    description: 'Complex supporting steel and concrete structures for absorber towers, slurry pump houses, limestone storage silos, and duct supports.',
    engineeringScope: 'Severe chemical/acidic corrosive environment protection, gas pressure surges, and elevated heavy absorber loads.'
  },
  {
    id: 'cement-plants',
    title: 'Cement Plants & Clinker Storage',
    scale: 'Heavy Process Plants',
    category: 'Industrial',
    description: 'Structural systems for pre-heater towers, kiln piers, raw mill buildings, and deep clinker silo foundations.',
    engineeringScope: 'Thermal expansion accommodation, high-frequency vibratory screen isolation, and high-capacity slipform silos.'
  },
  {
    id: 'fertilizer-plants',
    title: 'Fertilizer Plants & Storage Silos',
    scale: 'Chemical Processing Complex',
    category: 'Industrial',
    description: 'Prilling towers, bagging plants, and bulk fertilizer storage portal sheds engineered for highly corrosive chemical atmospheres.',
    engineeringScope: 'Special chemical-resistant coatings, precast prestressed arch frames, and airtight hopper design.'
  },
  {
    id: 'ghats-crematoria',
    title: 'Ghats & Crematoria Public Works',
    scale: 'Riverfront Infrastructure',
    category: 'Public Infrastructure',
    description: 'Riverfront retention retaining walls, stepped bathing ghats, pedestrian promenades, and eco-friendly crematorium facilities.',
    engineeringScope: 'Hydraulic scour protection, high flood level buoyant design, and durable riverfront concrete mix specifications.'
  },
  {
    id: 'earth-retention-track',
    title: 'Deep Earth Retention & Soil Nailing',
    scale: 'Challenging Ground Projects',
    category: 'Geotechnical Structural',
    description: 'Deep excavation retaining systems in constrained urban environments adjacent to existing sensitive buildings and metro lines.',
    engineeringScope: 'Contiguous/secant piles, pre-stressed ground anchors, finite element soil-structure interaction modeling.'
  },
  {
    id: 'air-preheaters',
    title: 'Air Pre-Heater Structures',
    scale: 'Heavy Industrial Equipment',
    category: 'Thermal Equipment',
    description: 'Elevated industrial support steelwork for rotating regenerative air pre-heaters in power and processing boilers.',
    engineeringScope: 'High-temperature thermal relief joints, differential thermal growth analysis, and structural stiffness control.'
  },
  {
    id: 'signage-gantry',
    title: 'High-Speed Highway Signage Gantries',
    scale: 'Transportation Gantries',
    category: 'Highway Infrastructure',
    description: 'Full-span cantilever and portal highway overhead sign trusses engineered for high cyclonic wind gusts and fatigue vibration.',
    engineeringScope: 'AASHTO / IRC wind aeroelastic stability, hollow tubular connection design, and foundation overturning safety.'
  }
];

export const TEAM_MEMBERS: TeamMember[] = [
  {
    name: 'Jitendra Arya',
    role: 'Founder / Technical Director',
    credentials: 'M.Tech. — Structural Engineering, DCE',
    experience: '12 years of proven expertise in industrial, commercial and special structures.',
    specialization: [
      'Industrial & Power Plant Structures',
      'High-Rise & Special Structures',
      'Advanced FEA & Earthquake Engineering',
      'Global Code Application (IS, ACI, Eurocodes)'
    ],
    initials: 'JA'
  },
  {
    name: 'Kunwar Khalique Ahmad',
    role: 'Structural Engineer',
    credentials: 'M.Tech. — Structural Engineering, DCE',
    experience: 'Expertise in multi-storey buildings, industrial facilities and special structures.',
    specialization: [
      'Multi-Storey RCC & Steel Frames',
      'Industrial Process Facilities',
      'Retrofitting & Structural Rehabilitation',
      'BIM & Technical Drawing Detailing'
    ],
    initials: 'KA'
  },
  {
    name: 'Sumit Rohiwal',
    role: 'Director — Business Development',
    credentials: 'B.Tech.',
    experience: 'Experienced in new client acquisition and high-value project wins.',
    specialization: [
      'Client Relationship & Contract Management',
      'Engineering Project Scoping',
      'Consultancy Partnerships',
      'Turnkey Structural Advisory'
    ],
    initials: 'SR'
  }
];

export const ENGINEERING_TOOLS: EngineeringTool[] = [
  {
    name: 'STAAD Pro',
    category: '3D Structural Analysis',
    usage: 'General 3D finite element frame analysis, industrial structures, pipe racks, and multi-material steel & concrete structures.',
    code: 'STAAD.Pro CONNECT Edition'
  },
  {
    name: 'ETABS',
    category: 'Building Systems & High-Rise',
    usage: 'Non-linear dynamic analysis, modal response spectrum, high-rise shear wall systems, and seismic performance modeling.',
    code: 'ETABS Ultimate'
  },
  {
    name: 'SAFE',
    category: 'Slabs, Mats & Foundations',
    usage: 'Finite element modeling of complex mat foundations, post-tensioned slabs, basement rafts, and punching shear design.',
    code: 'CSI SAFE'
  },
  {
    name: 'MATHCAD',
    category: 'Engineering Calculations',
    usage: 'Rigorous calculation sheets, custom mathematical formulas, code validation, and verifiable structural engineering documentation.',
    code: 'PTC Mathcad Prime'
  },
  {
    name: 'TEKLA STRUCTURES',
    category: 'BIM & Steel Detailing',
    usage: '3D structural steel detailing, clash detection, fabrication shop drawings, anchor bolt layouts, and erection plans.',
    code: 'Tekla Structures BIM'
  },
  {
    name: 'AUTOCAD',
    category: 'Drafting & Construction Drawings',
    usage: 'Precision General Arrangement (GA) drawings, civil construction layouts, reinforcement details, and bar bending schedules.',
    code: 'Autodesk AutoCAD'
  }
];

export const DESIGN_CODES: DesignCode[] = [
  {
    region: 'Indian Codes',
    standards: ['IS 456 (RCC)', 'IS 800 (Steel)', 'IS 1893 (Seismic)', 'IS 875 (Wind & Live Loads)', 'IS 13920 (Ductility)', 'IS 3370 (Liquid Storage)'],
    coverage: 'Complete compliance with Bureau of Indian Standards for heavy industrial, metro, residential, and infrastructure projects.',
    iconName: 'Building'
  },
  {
    region: 'American Codes',
    standards: ['ACI 318 (Building Code for Concrete)', 'AISC 360 & 341 (Steel Structures & Seismic)', 'ASCE 7 (Minimum Design Loads)', 'IBC (International Building Code)'],
    coverage: 'US standard engineering for overseas projects, multinational clients, industrial sheds, and blast-resistant facilities.',
    iconName: 'Compass'
  },
  {
    region: 'European Codes',
    standards: ['Eurocode 1 (Actions on Structures)', 'Eurocode 2 (Design of Concrete)', 'Eurocode 3 (Design of Steel)', 'Eurocode 4 (Composite Structures)', 'Eurocode 8 (Earthquake)'],
    coverage: 'Applied in bridge designs (UK Lanarkshire Bridge), European industrial assets, and African projects (Ethiopia 250 TPD Oil Plant).',
    iconName: 'Shield'
  },
  {
    region: 'Russian Codes',
    standards: ['SNiP & SP Building Regulations', 'GOST Material & Loading Standards', 'Permafrost & Extreme Climate Structural Criteria'],
    coverage: 'Industrial and infrastructure facilities engineered in accordance with Russian Federation engineering codes and standards.',
    iconName: 'Layers'
  },
  {
    region: 'Abu Dhabi Codes',
    standards: ['Abu Dhabi International Building Code (ADIBC)', 'ADSSC Standards for Infrastructure', 'Gulf Region Wind & High Ambient Thermal Criteria'],
    coverage: 'Specialized structural and foundation engineering for steel processing mills and heavy facilities across the UAE.',
    iconName: 'Globe'
  }
];

export const INDUSTRIES_SERVED: IndustryItem[] = [
  {
    id: 'industrial',
    title: 'Industrial Facilities',
    description: 'Heavy manufacturing plants, assembly sheds, warehouses, and crane-operated fabrication halls.',
    imageUrl: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80',
    focusAreas: ['Heavy Crane Gantry Systems', 'Pre-Engineered Buildings (PEB)', 'Vibration-Free Heavy Floors']
  },
  {
    id: 'infrastructure',
    title: 'Infrastructure & Highways',
    description: 'Flyovers, long-span continuous bridges, pedestrian overpasses, and high-speed signage gantries.',
    imageUrl: '/images/project_patna_six_lane_flyover.jpg',
    focusAreas: ['Multi-Lane Elevated Corridors', 'Precast Post-Tensioned Pier Caps', 'Deep Bored Piling']
  },
  {
    id: 'power-utilities',
    title: 'Power & Utilities',
    description: 'Thermal power plants, high-voltage electrical substations, switchyards, and transformer foundations.',
    imageUrl: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=800&q=80',
    focusAreas: ['Turbine Generator Pedestals', '66/22KV Substation Gantries', 'Transformer Blast Walls']
  },
  {
    id: 'steel-plants',
    title: 'Steel Plants & Mills',
    description: 'Blast furnace structures, steel melting shops, rolling mills, and heavy material handling conveyors.',
    imageUrl: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80',
    focusAreas: ['Heavy Crane Sheds', 'Billet Casting Platforms', 'High Thermal Zone Framing']
  },
  {
    id: 'oil-gas',
    title: 'Oil & Gas',
    description: 'Refinery structures, pipe racks, storage tank foundations, and process skid support frames.',
    imageUrl: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=80',
    focusAreas: ['Modular Process Skids', 'Multi-Tier Pipe Racks', 'Containment Dykes']
  },
  {
    id: 'chemical-plants',
    title: 'Chemical & Fertilizer Plants',
    description: 'Prilling towers, chemical reaction vessel platforms, and corrosive chemical storage warehouses.',
    imageUrl: '/images/project_peb_site_erection.jpg',
    focusAreas: ['Acid-Resistant Coatings', 'Bulk Storage Portals', 'Vessel Support Platforms']
  },
  {
    id: 'cement-plants',
    title: 'Cement Plants',
    description: 'Preheater towers, clinker silos, kiln foundations, and raw material conveyor galleries.',
    imageUrl: '/images/project_mass_raft_rcc.jpg',
    focusAreas: ['Slipform Concrete Silos', 'Vibratory Mill Foundations', 'Dynamic Kiln Piers']
  },
  {
    id: 'water-wastewater',
    title: 'Water & Wastewater',
    description: 'Sewage treatment plants (STP up to 215 MLD), water treatment plants (up to 45 MLD), and intake wells.',
    imageUrl: '/images/project_water_treatment_stp.jpg',
    focusAreas: ['Liquid Retaining Tanks (IS 3370)', 'Aeration Basins & Clarifiers', 'Underground Pump Houses']
  },
  {
    id: 'commercial',
    title: 'Commercial & Hospitality',
    description: 'Large banquet halls, high-span shopping complexes, corporate office towers, and institutional campuses.',
    imageUrl: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=800&q=80',
    focusAreas: ['Column-Free Ballroom Spans', 'Composite Steel Deck Floors', 'Modern Facade Bracing']
  },
  {
    id: 'residential',
    title: 'Residential Multi-Storey',
    description: 'High-rise residential towers (up to 17 storeys), luxury villas with basements, and township developments.',
    imageUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
    focusAreas: ['Ductile Shear Wall Cores', 'Basement Shoring & Rafts', 'Seismic Zone IV Resilience']
  },
  {
    id: 'metro-transportation',
    title: 'Metro & Mass Transit',
    description: 'Elevated viaducts, precast pier caps, concourse and track cross arms, and escalator erection gantries.',
    imageUrl: '/images/project_patna_six_lane_flyover.jpg',
    focusAreas: ['Precast Post-Tensioned Caps', 'Concourse & Track Cross Arms', 'Elastomeric Bearings & Piers']
  },
  {
    id: 'special-structures',
    title: 'Special Structures & Retrofit',
    description: 'Blast-resistant MES defense bunkers, igloo storage arches, 200m chimneys, and GFRP retrofitting.',
    imageUrl: 'https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&w=800&q=80',
    focusAreas: ['Impulsive Dynamic Blast Sizing', 'GFRP Composite Restrengthening', 'NDT Structural Audits']
  }
];

export const WHY_CHOOSE_US = [
  {
    title: 'Heavy Industrial Experience',
    description: 'Proven track record in handling large-scale, complex designs across power plants, steel mills, refineries, and mega STPs.',
    icon: 'Factory'
  },
  {
    title: 'Global Code Expertise',
    description: 'Experience with Indian, American, European, Russian, and Middle East international design codes and engineering standards.',
    icon: 'Globe'
  },
  {
    title: 'Client-Centric Service',
    description: 'Tailored structural solutions designed around specific architectural concepts, budget constraints, and constructability.',
    icon: 'Users'
  },
  {
    title: 'Commitment to Quality',
    description: 'Designs strictly focused on safety, structural reliability, optimal material efficiency, and long-term asset performance.',
    icon: 'ShieldCheck'
  }
];

export const OUR_APPROACH_STEPS = [
  {
    step: '01',
    title: 'Safety & Compliance',
    description: 'Ensuring absolute structural safety, rigorous load factor evaluations, and stringent code compliance at every stage.',
    icon: 'Shield'
  },
  {
    step: '02',
    title: 'Material Optimization',
    description: 'Optimizing concrete volume, rebar density, and steel section tonnage for maximum economy without compromising safety.',
    icon: 'Sliders'
  },
  {
    step: '03',
    title: 'Advanced Engineering',
    description: 'Using advanced 3D FEA simulation software, non-linear analysis tools, and automated drafting workflows.',
    icon: 'Cpu'
  },
  {
    step: '04',
    title: 'Seamless Coordination',
    description: 'Maintaining continuous technical coordination with architects, MEP disciplines, contractors, and project stakeholders.',
    icon: 'GitFork'
  }
];
