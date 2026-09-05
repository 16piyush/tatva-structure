import React from 'react';

interface TatvaLogoProps {
  variant?: 'horizontal' | 'vertical' | 'emblem';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  textColor?: 'light' | 'navy';
  className?: string;
}

export default function TatvaLogo({
  variant = 'horizontal',
  size = 'md',
  textColor = 'light',
  className = '',
}: TatvaLogoProps) {
  // Dimensions mapping
  const sizeStyles = {
    sm: {
      emblem: 'w-7 h-7',
      title: 'text-base sm:text-lg',
      sub: 'text-[8px]',
      gap: 'gap-2',
    },
    md: {
      emblem: 'w-10 h-10',
      title: 'text-xl sm:text-2xl',
      sub: 'text-[9px]',
      gap: 'gap-3',
    },
    lg: {
      emblem: 'w-14 h-14',
      title: 'text-2xl sm:text-3xl',
      sub: 'text-[11px]',
      gap: 'gap-3.5',
    },
    xl: {
      emblem: 'w-20 h-20',
      title: 'text-3xl sm:text-4xl',
      sub: 'text-xs',
      gap: 'gap-4',
    },
  }[size];

  // Colors based on theme
  const titleColor = textColor === 'light' ? 'text-white' : 'text-[#0E2841]';
  const subColor = textColor === 'light' ? 'text-slate-300' : 'text-[#2B3F56]';
  const navyFill = textColor === 'light' ? '#3B82F6' : '#0E2841'; // Navy on light, or highlighted navy/slate

  // The Emblem SVG (Exact replica of Tatva Structura official brand mark)
  const Emblem = ({ className: emblemClass = '' }: { className?: string }) => (
    <svg 
      viewBox="0 0 120 120" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={`${sizeStyles.emblem} ${emblemClass} shrink-0 drop-shadow-sm`}
      aria-label="Tatva Structura Logo Emblem"
    >
      {/* 1. Orange Mini-House Silhouette (Bottom Left Foundation Block) */}
      <path 
        d="M 24 100 L 24 74 L 42 62 L 60 74 L 60 100 Z" 
        fill="#E25822" 
      />

      {/* 2. Navy Blue Outer Gable Roof & Right Wall Framework */}
      <path 
        d="
          M 24 58 
          L 24 40 
          L 60 16 
          L 96 40 
          L 96 100 
          L 78 100 
          L 78 46 
          L 60 34 
          L 40 48 
          L 40 58 
          Z
        " 
        fill="#0E2841" 
      />

      {/* 3. Interlocking Geometric 'S' Structural Frame */}
      <path 
        d="
          M 40 48 
          L 60 34 
          L 80 48 
          L 80 62 
          L 62 62 
          L 62 76 
          L 80 76 
          L 80 100 
          L 60 100 
          L 60 88 
          L 70 88 
          L 70 76 
          L 50 76 
          L 50 50 
          L 70 50 
          L 70 42 
          L 60 36 
          L 48 44 
          Z
        " 
        fill="#0E2841" 
      />
    </svg>
  );

  if (variant === 'emblem') {
    return (
      <div className={`inline-flex items-center justify-center ${className}`}>
        <Emblem />
      </div>
    );
  }

  if (variant === 'vertical') {
    return (
      <div className={`inline-flex flex-col items-center text-center ${sizeStyles.gap} ${className}`}>
        <div className="p-2.5 rounded-sm bg-white shadow-md border border-slate-200">
          <Emblem className="w-16 h-16 sm:w-20 sm:h-20" />
        </div>
        <div>
          <div className={`font-black tracking-widest uppercase font-heading ${titleColor} ${sizeStyles.title}`}>
            TATVA
          </div>
          <div className={`font-bold tracking-[0.28em] uppercase font-mono-tech ${subColor} ${sizeStyles.sub}`}>
            STRUCTURA
          </div>
        </div>
      </div>
    );
  }

  // Default: 'horizontal'
  return (
    <div className={`inline-flex items-center ${sizeStyles.gap} ${className}`}>
      <div className="relative p-1 rounded-sm bg-white shadow-sm border border-white/20 flex items-center justify-center shrink-0">
        <Emblem />
      </div>
      <div className="flex flex-col leading-tight">
        <div className={`font-black tracking-wider uppercase font-heading flex items-center space-x-1.5 ${titleColor} ${sizeStyles.title}`}>
          <span>TATVA</span>
          <span className="text-[#F27D26]">STRUCTURA</span>
        </div>
        <div className={`tracking-[0.24em] uppercase font-mono-tech ${subColor} ${sizeStyles.sub}`}>
          Structural Design Consultancy
        </div>
      </div>
    </div>
  );
}
