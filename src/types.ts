export type ProjectCategory = 
  | 'all'
  | 'industrial'
  | 'government'
  | 'power-utilities'
  | 'commercial-hospitality'
  | 'special-structures'
  | 'infrastructure'
  | 'metro'
  | 'international';

export interface ProjectItem {
  id: string;
  title: string;
  category: ProjectCategory;
  client?: string;
  location?: string;
  scope: string | string[];
  specs?: string;
  highlights?: string[];
  imageUrl: string;
  tag: string;
  featured?: boolean;
  approvalAuthority?: string;
}

export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  deliverables: string[];
  category: 'core' | 'design' | 'specialized' | 'drawings';
}

export interface IndustryItem {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  focusAreas: string[];
}

export interface FounderTrackItem {
  id: string;
  title: string;
  category: string;
  scale?: string;
  description: string;
  engineeringScope: string;
}

export interface TeamMember {
  name: string;
  role: string;
  credentials: string;
  experience: string;
  specialization: string[];
  initials: string;
}

export interface EngineeringTool {
  name: string;
  category: string;
  usage: string;
  code: string;
}

export interface DesignCode {
  region: string;
  standards: string[];
  coverage: string;
  iconName: string;
}
