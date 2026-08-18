import React from 'react';
import { 
  X, 
  Building, 
  MapPin, 
  UserCheck, 
  CheckCircle2, 
  ShieldCheck, 
  FileText, 
  ExternalLink,
  ArrowRight
} from 'lucide-react';
import { ProjectItem } from '../types';

interface ProjectDetailModalProps {
  project: ProjectItem | null;
  onClose: () => void;
  onOpenInquiry: (projectName: string) => void;
}

export default function ProjectDetailModal({ project, onClose, onOpenInquiry }: ProjectDetailModalProps) {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div 
        className="bg-[#0B1526] border border-slate-700 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 rounded-full bg-slate-900/80 border border-slate-700 text-slate-300 hover:text-white hover:bg-slate-800 transition-colors"
          aria-label="Close Project Modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header Image */}
        <div className="relative h-60 sm:h-72 w-full overflow-hidden rounded-t-2xl">
          <img 
            src={project.imageUrl} 
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B1526] via-[#0B1526]/60 to-transparent" />
          
          <div className="absolute bottom-4 left-6 right-6">
            <span className="inline-block px-3 py-1 rounded bg-[#E06D14] text-white text-xs font-mono-tech uppercase font-bold mb-2">
              {project.tag}
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-white font-heading">
              {project.title}
            </h3>
          </div>
        </div>

        {/* Modal Body Content */}
        <div className="p-6 sm:p-8 space-y-6">
          
          {/* Metadata Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 p-4 rounded-xl bg-slate-900/90 border border-slate-800 text-xs font-mono-tech">
            {project.client && (
              <div>
                <span className="text-slate-500 block">CLIENT / PARTNER:</span>
                <span className="text-white font-semibold text-sm">{project.client}</span>
              </div>
            )}
            {project.location && (
              <div>
                <span className="text-slate-500 block">LOCATION:</span>
                <span className="text-white font-semibold text-sm flex items-center gap-1 mt-0.5">
                  <MapPin className="w-3.5 h-3.5 text-[#E06D14]" />
                  {project.location}
                </span>
              </div>
            )}
            {project.specs && (
              <div className="sm:col-span-2 pt-2 border-t border-slate-800">
                <span className="text-slate-500 block">PROJECT SPECIFICATION:</span>
                <span className="text-sky-300 font-semibold text-sm">{project.specs}</span>
              </div>
            )}
            {project.approvalAuthority && (
              <div className="sm:col-span-2 pt-2 border-t border-slate-800">
                <span className="text-emerald-400 font-semibold flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4" />
                  {project.approvalAuthority}
                </span>
              </div>
            )}
          </div>

          {/* Detailed Engineering Scope */}
          <div>
            <h4 className="text-xs font-mono-tech uppercase text-slate-400 tracking-wider mb-3 flex items-center space-x-2">
              <FileText className="w-4 h-4 text-[#E06D14]" />
              <span>CONSULTANCY SCOPE OF WORK</span>
            </h4>
            
            {Array.isArray(project.scope) ? (
              <div className="space-y-2">
                {project.scope.map((item, idx) => (
                  <div key={idx} className="flex items-start space-x-2.5 text-xs sm:text-sm text-slate-200 bg-slate-900/60 p-3 rounded-lg border border-slate-800/80">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-sm text-slate-200 bg-slate-900/60 p-4 rounded-lg border border-slate-800 leading-relaxed">
                {project.scope}
              </p>
            )}
          </div>

          {/* Project Highlights / Deliverables */}
          {project.highlights && project.highlights.length > 0 && (
            <div>
              <h4 className="text-xs font-mono-tech uppercase text-slate-400 tracking-wider mb-2">
                STRUCTURAL HIGHLIGHTS:
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.highlights.map((h, i) => (
                  <span 
                    key={i}
                    className="px-3 py-1 rounded-md bg-slate-900 border border-slate-800 text-xs text-slate-300 font-mono-tech"
                  >
                    &bull; {h}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Modal Footer Actions */}
          <div className="pt-6 border-t border-slate-800 flex flex-wrap items-center justify-between gap-4">
            <div className="text-[11px] font-mono-tech text-slate-500">
              TATVA STRUCTURA &bull; VERIFIED RECORD
            </div>
            <div className="flex items-center space-x-3">
              <button
                onClick={onClose}
                className="px-4 py-2 text-xs rounded-lg text-slate-400 hover:text-white border border-slate-800 hover:bg-slate-800 transition-colors"
              >
                Close
              </button>
              <button
                onClick={() => {
                  onClose();
                  onOpenInquiry(`Inquiry for similar project to: ${project.title}`);
                }}
                className="inline-flex items-center space-x-1.5 px-4 py-2 text-xs font-semibold rounded-lg bg-[#E06D14] hover:bg-[#EA7A24] text-white transition-colors"
              >
                <span>Inquire for Similar Project</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
