import React, { useState } from 'react';
import { 
  X, 
  FileCode2, 
  ZoomIn, 
  ZoomOut, 
  Layers, 
  Download, 
  Compass,
  CheckCircle2,
  Info
} from 'lucide-react';

interface BlueprintViewerModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function BlueprintViewerModal({ isOpen, onClose }: BlueprintViewerModalProps) {
  const [activeSchematic, setActiveSchematic] = useState<'pier' | 'truss' | 'foundation'>('pier');

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md animate-fadeIn">
      <div 
        className="bg-[#070D18] border border-sky-900/80 rounded-2xl max-w-4xl w-full max-h-[92vh] overflow-hidden flex flex-col shadow-2xl relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="p-4 sm:p-5 bg-slate-900/90 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="p-2 rounded bg-sky-950 border border-sky-700/60 text-sky-400">
              <FileCode2 className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-mono-tech text-[#E06D14] uppercase">
                TATVA STRUCTURA &bull; SCHEMATIC DRAFTING VIEWER
              </div>
              <h3 className="text-base sm:text-lg font-bold text-white font-heading">
                Engineering Blueprint & Detailing Inspector
              </h3>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Controls */}
        <div className="bg-[#09111E] px-4 py-2 border-b border-slate-800 flex flex-wrap gap-2">
          <button
            onClick={() => setActiveSchematic('pier')}
            className={`px-3 py-1.5 rounded text-xs font-mono-tech transition-colors ${
              activeSchematic === 'pier'
                ? 'bg-[#E06D14] text-white font-bold'
                : 'bg-slate-900 text-slate-400 hover:text-slate-200 border border-slate-800'
            }`}
          >
            DWG-01: Metro Pier Cap & Cross Arm
          </button>
          <button
            onClick={() => setActiveSchematic('truss')}
            className={`px-3 py-1.5 rounded text-xs font-mono-tech transition-colors ${
              activeSchematic === 'truss'
                ? 'bg-[#E06D14] text-white font-bold'
                : 'bg-slate-900 text-slate-400 hover:text-slate-200 border border-slate-800'
            }`}
          >
            DWG-02: Industrial Steel Truss & Gantry
          </button>
          <button
            onClick={() => setActiveSchematic('foundation')}
            className={`px-3 py-1.5 rounded text-xs font-mono-tech transition-colors ${
              activeSchematic === 'foundation'
                ? 'bg-[#E06D14] text-white font-bold'
                : 'bg-slate-900 text-slate-400 hover:text-slate-200 border border-slate-800'
            }`}
          >
            DWG-03: Machine Foundation & Mat Raft
          </button>
        </div>

        {/* Blueprint Canvas Area */}
        <div className="flex-1 p-6 overflow-y-auto bg-[#040810] relative blueprint-grid-dense min-h-[360px] flex items-center justify-center">
          
          {/* Subtle Grid Coordinate Watermark */}
          <div className="absolute top-3 left-3 text-[10px] font-mono-tech text-sky-500/40 space-y-0.5">
            <div>SCALE: 1:50 @ A1</div>
            <div>PROJECTION: FIRST ANGLE</div>
            <div>VERIFIED BY: JA (M.TECH DCE)</div>
          </div>

          <div className="w-full max-w-2xl bg-[#091528]/80 border border-sky-500/30 rounded-xl p-6 relative shadow-inner">
            
            {activeSchematic === 'pier' && (
              <div className="space-y-4">
                <div className="text-center font-mono-tech text-xs text-sky-400 font-bold tracking-wider uppercase border-b border-sky-900/60 pb-2">
                  SECTION A-A: PRECAST POST-TENSIONED METRO PIER CAP (DC-02 / BC03)
                </div>

                {/* SVG Pier Cap Diagram */}
                <svg className="w-full h-48 text-sky-400 stroke-current" viewBox="0 0 400 160" fill="none">
                  {/* Pier column */}
                  <rect x="160" y="80" width="80" height="75" strokeWidth="2" fill="#0E223D" />
                  <line x1="200" y1="80" x2="200" y2="155" strokeWidth="1" strokeDasharray="3 3" stroke="#38BDF8" />
                  
                  {/* Pier Cap Cantilever */}
                  <polygon points="40,80 80,40 320,40 360,80 240,80 240,80 160,80" strokeWidth="2" fill="#132B4F" />
                  
                  {/* Bearing Pedestals */}
                  <rect x="90" y="30" width="30" height="10" strokeWidth="1.5" fill="#E06D14" stroke="#E06D14" />
                  <rect x="280" y="30" width="30" height="10" strokeWidth="1.5" fill="#E06D14" stroke="#E06D14" />
                  
                  {/* Prestressing Tendon Parabola Lines */}
                  <path d="M 60 70 Q 200 45 340 70" stroke="#F59E0B" strokeWidth="2" fill="none" strokeDasharray="4 2" />
                  <path d="M 70 75 Q 200 55 330 75" stroke="#F59E0B" strokeWidth="2" fill="none" strokeDasharray="4 2" />

                  {/* Dimension markers */}
                  <line x1="40" y1="20" x2="360" y2="20" stroke="#94A3B8" strokeWidth="1" />
                  <text x="180" y="16" fill="#94A3B8" fontSize="9" fontFamily="monospace">OVERALL SPAN</text>
                </svg>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-[11px] font-mono-tech text-slate-300">
                  <div className="bg-slate-900/90 p-2 rounded border border-slate-800">
                    <span className="text-slate-500 block">CONCRETE GRADE:</span>
                    <span className="text-sky-300 font-bold">M50 / M60</span>
                  </div>
                  <div className="bg-slate-900/90 p-2 rounded border border-slate-800">
                    <span className="text-slate-500 block">PRESTRESSING:</span>
                    <span className="text-[#E06D14] font-bold">19T13 / 19T15 Tendons</span>
                  </div>
                  <div className="bg-slate-900/90 p-2 rounded border border-slate-800">
                    <span className="text-slate-500 block">CODE BASIS:</span>
                    <span className="text-emerald-400 font-bold">IRS Concrete / IRC 112</span>
                  </div>
                </div>
              </div>
            )}

            {activeSchematic === 'truss' && (
              <div className="space-y-4">
                <div className="text-center font-mono-tech text-xs text-sky-400 font-bold tracking-wider uppercase border-b border-sky-900/60 pb-2">
                  ELEVATION: INDUSTRIAL STEEL PRATT TRUSS & EOT CRANE GANTRY
                </div>

                {/* SVG Truss Diagram */}
                <svg className="w-full h-48 text-sky-400 stroke-current" viewBox="0 0 400 160" fill="none">
                  {/* Columns */}
                  <rect x="30" y="40" width="15" height="110" strokeWidth="2" fill="#0E223D" />
                  <rect x="355" y="40" width="15" height="110" strokeWidth="2" fill="#0E223D" />
                  
                  {/* Crane Brackets */}
                  <polygon points="45,85 70,85 45,105" strokeWidth="1.5" fill="#E06D14" stroke="#E06D14" />
                  <polygon points="355,85 330,85 355,105" strokeWidth="1.5" fill="#E06D14" stroke="#E06D14" />
                  <rect x="65" y="80" width="10" height="5" fill="#F59E0B" />
                  <rect x="325" y="80" width="10" height="5" fill="#F59E0B" />

                  {/* Roof Truss Triangular Framework */}
                  <polygon points="30,40 200,10 370,40" strokeWidth="2" fill="none" stroke="#38BDF8" />
                  <line x1="30" y1="40" x2="370" y2="40" strokeWidth="2" stroke="#38BDF8" />
                  
                  {/* Web Verticals & Diagonals */}
                  <line x1="75" y1="40" x2="75" y2="33" strokeWidth="1.5" />
                  <line x1="120" y1="40" x2="120" y2="25" strokeWidth="1.5" />
                  <line x1="160" y1="40" x2="160" y2="17" strokeWidth="1.5" />
                  <line x1="200" y1="40" x2="200" y2="10" strokeWidth="1.5" stroke="#E06D14" />
                  <line x1="240" y1="40" x2="240" y2="17" strokeWidth="1.5" />
                  <line x1="280" y1="40" x2="280" y2="25" strokeWidth="1.5" />
                  <line x1="325" y1="40" x2="325" y2="33" strokeWidth="1.5" />

                  <line x1="30" y1="40" x2="75" y2="33" strokeWidth="1" strokeDasharray="2 2" />
                  <line x1="75" y1="40" x2="120" y2="25" strokeWidth="1" strokeDasharray="2 2" />
                  <line x1="120" y1="40" x2="160" y2="17" strokeWidth="1" strokeDasharray="2 2" />
                  <line x1="200" y1="10" x2="240" y2="40" strokeWidth="1" strokeDasharray="2 2" />
                  <line x1="240" y1="17" x2="280" y2="40" strokeWidth="1" strokeDasharray="2 2" />
                  <line x1="280" y1="25" x2="325" y2="40" strokeWidth="1" strokeDasharray="2 2" />
                </svg>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-[11px] font-mono-tech text-slate-300">
                  <div className="bg-slate-900/90 p-2 rounded border border-slate-800">
                    <span className="text-slate-500 block">STEEL GRADE:</span>
                    <span className="text-sky-300 font-bold">E250 / E350 (IS 2062)</span>
                  </div>
                  <div className="bg-slate-900/90 p-2 rounded border border-slate-800">
                    <span className="text-slate-500 block">CRANE CAPACITY:</span>
                    <span className="text-[#E06D14] font-bold">Up to 50 MT EOT</span>
                  </div>
                  <div className="bg-slate-900/90 p-2 rounded border border-slate-800">
                    <span className="text-slate-500 block">CODE BASIS:</span>
                    <span className="text-emerald-400 font-bold">IS 800 / AISC 360</span>
                  </div>
                </div>
              </div>
            )}

            {activeSchematic === 'foundation' && (
              <div className="space-y-4">
                <div className="text-center font-mono-tech text-xs text-sky-400 font-bold tracking-wider uppercase border-b border-sky-900/60 pb-2">
                  CROSS SECTION: HEAVY SUBSTATION & TRANSFORMER FOUNDATION MAT
                </div>

                {/* SVG Foundation Diagram */}
                <svg className="w-full h-48 text-sky-400 stroke-current" viewBox="0 0 400 160" fill="none">
                  {/* Ground Level */}
                  <line x1="20" y1="60" x2="380" y2="60" stroke="#64748B" strokeWidth="1.5" strokeDasharray="4 2" />
                  <text x="25" y="55" fill="#64748B" fontSize="8" fontFamily="monospace">NGL / FINISHED GRADE</text>

                  {/* Transformer Pedestal */}
                  <rect x="130" y="20" width="140" height="50" strokeWidth="2" fill="#132B4F" stroke="#38BDF8" />
                  
                  {/* Oil Sump / Retaining Trench */}
                  <rect x="70" y="70" width="260" height="50" strokeWidth="2" fill="#0B1A30" stroke="#38BDF8" />

                  {/* Piles */}
                  <rect x="90" y="120" width="24" height="35" fill="#1E293B" stroke="#E06D14" strokeWidth="1.5" />
                  <rect x="190" y="120" width="24" height="35" fill="#1E293B" stroke="#E06D14" strokeWidth="1.5" />
                  <rect x="290" y="120" width="24" height="35" fill="#1E293B" stroke="#E06D14" strokeWidth="1.5" />

                  {/* Anchor Bolts */}
                  <line x1="150" y1="10" x2="150" y2="40" stroke="#F59E0B" strokeWidth="2" />
                  <line x1="250" y1="10" x2="250" y2="40" stroke="#F59E0B" strokeWidth="2" />
                </svg>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-[11px] font-mono-tech text-slate-300">
                  <div className="bg-slate-900/90 p-2 rounded border border-slate-800">
                    <span className="text-slate-500 block">FOUNDATION:</span>
                    <span className="text-sky-300 font-bold">Raft on Bored Piles</span>
                  </div>
                  <div className="bg-slate-900/90 p-2 rounded border border-slate-800">
                    <span className="text-slate-500 block">DYNAMIC VIBRATION:</span>
                    <span className="text-[#E06D14] font-bold">IS 2974 Compliance</span>
                  </div>
                  <div className="bg-slate-900/90 p-2 rounded border border-slate-800">
                    <span className="text-slate-500 block">APPLICATION:</span>
                    <span className="text-emerald-400 font-bold">HMEL / STT Data Center</span>
                  </div>
                </div>
              </div>
            )}

          </div>

        </div>

        {/* Modal Footer */}
        <div className="p-4 bg-slate-900 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
          <div className="flex items-center space-x-2 font-mono-tech text-[11px]">
            <Info className="w-4 h-4 text-[#E06D14]" />
            <span>Drawings prepared in compliance with IS, Eurocode, and AISC frameworks.</span>
          </div>
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-white font-mono-tech"
          >
            Close Inspector
          </button>
        </div>

      </div>
    </div>
  );
}
