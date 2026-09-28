interface NoctuaLogoProps {
  mode?: 'dark' | 'light';
  className?: string;
  showText?: boolean;
  size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'hero' | 'massive';
}

export default function NoctuaLogo({
  mode = 'dark',
  className = '',
  showText = true,
  size = 'md',
}: NoctuaLogoProps) {
  const isDark = mode === 'dark';

  // Sizing definitions
  const sizeMap = {
    sm: { icon: 'w-9 h-auto max-h-9', text: 'text-xs', sub: 'text-[7px]' },
    md: { icon: 'w-14 h-auto max-h-14', text: 'text-base', sub: 'text-[9px]' },
    lg: { icon: 'w-24 h-auto max-h-24', text: 'text-xl', sub: 'text-[10px]' },
    xl: { icon: 'w-40 h-auto sm:w-48', text: 'text-2xl sm:text-3xl', sub: 'text-xs' },
    '2xl': { icon: 'w-56 h-auto sm:w-72', text: 'text-3xl sm:text-4xl', sub: 'text-xs sm:text-sm' },
    hero: { icon: 'w-64 sm:w-80 md:w-[380px] lg:w-[440px] h-auto', text: 'text-3xl sm:text-5xl lg:text-6xl', sub: 'text-xs sm:text-sm md:text-base' },
    massive: { icon: 'w-72 sm:w-96 md:w-[460px] lg:w-[540px] h-auto', text: 'text-4xl sm:text-6xl lg:text-7xl', sub: 'text-sm sm:text-base md:text-lg' },
  };

  const currentSize = sizeMap[size] || sizeMap.md;
  const strokeColor = isDark ? '#FFFFFF' : '#0F2247';
  
  const glowStyle = isDark
    ? {
        filter: 'drop-shadow(0 0 10px rgba(255,255,255,0.95)) drop-shadow(0 0 24px rgba(255,255,255,0.5)) drop-shadow(0 0 45px rgba(255,255,255,0.2))',
      }
    : {
        filter: 'drop-shadow(0 4px 12px rgba(15,34,71,0.18))',
      };

  return (
    <div className={`inline-flex flex-col items-center justify-center select-none ${className}`}>
      {/* High-Fidelity Vector Art of NOCTUA Brand Owl */}
      <svg
        viewBox="0 0 500 290"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`${currentSize.icon} transition-all duration-300`}
        style={glowStyle}
      >
        <g stroke={strokeColor} strokeWidth="3.6" strokeLinecap="round" strokeLinejoin="round">
          
          {/* Head Tufted Horns */}
          <path d="M205 78 C195 55 180 44 165 42 C155 41 152 48 160 56 C172 68 188 80 210 92" />
          <path d="M295 78 C305 55 320 44 335 42 C345 41 348 48 340 56 C328 68 312 80 290 92" />
          
          {/* Crown Arch between horns */}
          <path d="M210 75 C230 65 250 62 250 62 C250 62 270 65 290 75" />

          {/* Left Wing Top Flourish & Swoop */}
          <path d="M210 92 C180 75 130 62 78 52 C65 49 55 56 60 68 C64 78 78 85 92 84 C115 82 145 92 180 110" />
          {/* Left Wing Scroll Curl */}
          <path d="M60 68 C56 60 62 52 70 54 C78 56 80 66 74 72 C68 78 60 76 58 72" />

          {/* Right Wing Top Flourish & Swoop */}
          <path d="M290 92 C320 75 370 62 422 52 C435 49 445 56 440 68 C436 78 422 85 408 84 C385 82 355 92 320 110" />
          {/* Right Wing Scroll Curl */}
          <path d="M440 68 C444 60 438 52 430 54 C422 56 420 66 426 72 C432 78 440 76 442 72" />

          {/* Left Wing Ribbon Loops (Outer & Inner) */}
          <path d="M92 84 C75 110 90 145 125 152 C155 158 178 135 158 115 C140 98 116 114 126 136 C136 156 172 165 210 155" />
          <path d="M125 152 C115 168 126 182 142 180 C162 178 175 156 170 140" />

          {/* Right Wing Ribbon Loops (Outer & Inner) */}
          <path d="M408 84 C425 110 410 145 375 152 C345 158 322 135 342 115 C360 98 384 114 374 136 C364 156 328 165 290 155" />
          <path d="M375 152 C385 168 374 182 358 180 C338 178 325 156 330 140" />

          {/* Fierce Eyebrows Arch / Mask */}
          <path d="M210 102 L250 128 L290 102" strokeWidth="4.5" />
          <path d="M210 102 C190 98 170 102 152 112" />
          <path d="M290 102 C310 98 330 102 348 112" />

          {/* Eyes (Outer Ring & Inner Rings) */}
          <circle cx="218" cy="116" r="19" strokeWidth="3.6" />
          <circle cx="218" cy="116" r="11" strokeWidth="2.2" strokeDasharray="1 3" />
          <circle cx="220" cy="116" r="6" fill={strokeColor} />

          <circle cx="282" cy="116" r="19" strokeWidth="3.6" />
          <circle cx="282" cy="116" r="11" strokeWidth="2.2" strokeDasharray="1 3" />
          <circle cx="280" cy="116" r="6" fill={strokeColor} />

          {/* Geometric Beak */}
          <path d="M243 126 L250 144 L257 126" strokeWidth="3.8" fill={isDark ? '#FFFFFF' : '#0F2247'} fillOpacity="0.1" />

          {/* Chest & Body Outline */}
          <path d="M210 135 C208 160 225 174 250 174 C275 174 292 160 290 135" strokeWidth="3.2" />

          {/* Perch Bar (Horizontal branch with knob ends) */}
          <path d="M140 175 H360" strokeWidth="4.8" />
          <circle cx="137" cy="175" r="6.5" fill={strokeColor} />
          <circle cx="363" cy="175" r="6.5" fill={strokeColor} />

          {/* Claws (Rings holding perch) */}
          <rect x="226" y="167" width="8" height="16" rx="4" strokeWidth="3" />
          <rect x="237" y="167" width="8" height="16" rx="4" strokeWidth="3" />
          <rect x="255" y="167" width="8" height="16" rx="4" strokeWidth="3" />
          <rect x="266" y="167" width="8" height="16" rx="4" strokeWidth="3" />

          {/* Tail Feathers / Bottom Curvature */}
          <path d="M210 180 C205 212 230 234 250 234 C270 234 295 212 290 180" strokeWidth="3.4" />
          
          {/* Feather Inter-loops */}
          <path d="M222 180 C218 205 230 220 240 212 C248 204 244 180 244 180" strokeWidth="3" />
          <path d="M278 180 C282 205 270 220 260 212 C252 204 256 180 256 180" strokeWidth="3" />

          {/* Tail Accent Dots */}
          <circle cx="234" cy="222" r="3.5" fill={strokeColor} />
          <circle cx="250" cy="226" r="3.5" fill={strokeColor} />
          <circle cx="266" cy="222" r="3.5" fill={strokeColor} />
        </g>
      </svg>

      {showText && (
        <div className="text-center mt-3 sm:mt-4 flex flex-col items-center">
          <span
            className={`font-display font-black tracking-[0.26em] uppercase ${currentSize.text} leading-none`}
            style={{
              color: strokeColor,
              ...(isDark ? glowStyle : {}),
            }}
          >
            NOCTUA
          </span>
          <span
            className={`font-sans tracking-[0.42em] uppercase font-bold mt-2 ${currentSize.sub}`}
            style={{
              color: isDark ? '#E2E8F0' : '#0F2247',
              opacity: 0.9,
            }}
          >
            Beyond Digital
          </span>
        </div>
      )}
    </div>
  );
}
