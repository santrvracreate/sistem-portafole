interface ProjectLogoProps {
  projectId: number;
  className?: string;
  isDark?: boolean;
}

export default function ProjectLogo({ projectId, className = 'w-12 h-12', isDark = true }: ProjectLogoProps) {
  // Common colors
  const primaryStroke = isDark ? '#FFFFFF' : '#0F2247';
  const secondaryColor = isDark ? 'rgba(255,255,255,0.7)' : '#3A506B';

  switch (projectId) {
    case 1:
      // JULIET — Consultora Contable (Financial / Accounting Crest)
      return (
        <div className={`flex items-center justify-center ${className}`}>
          <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
            <rect x="8" y="8" width="84" height="84" rx="20" stroke={primaryStroke} strokeWidth="3" opacity={isDark ? 0.9 : 0.8} />
            {/* Balance Bar & Chart */}
            <path d="M26 68V48" stroke={primaryStroke} strokeWidth="4" strokeLinecap="round" />
            <path d="M42 68V36" stroke={primaryStroke} strokeWidth="4" strokeLinecap="round" />
            <path d="M58 68V26" stroke={primaryStroke} strokeWidth="4" strokeLinecap="round" />
            <path d="M74 68V40" stroke={primaryStroke} strokeWidth="4" strokeLinecap="round" />
            {/* Dynamic Upward Growth Line */}
            <path d="M24 52L40 38L56 28L76 22" stroke={secondaryColor} strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
            <circle cx="76" cy="22" r="3.5" fill={primaryStroke} />
          </svg>
        </div>
      );

    case 2:
      // Claros R. & Asociados — Estudio Jurídico (Scales of Justice & Legal Temple)
      return (
        <div className={`flex items-center justify-center ${className}`}>
          <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
            <circle cx="50" cy="50" r="42" stroke={primaryStroke} strokeWidth="3" opacity={isDark ? 0.9 : 0.8} />
            {/* Balance Beam */}
            <path d="M50 25V75" stroke={primaryStroke} strokeWidth="3.5" strokeLinecap="round" />
            <path d="M26 38H74" stroke={primaryStroke} strokeWidth="3.5" strokeLinecap="round" />
            <circle cx="50" cy="24" r="4" fill={primaryStroke} />
            {/* Left Scale */}
            <path d="M26 38L18 54H34L26 38Z" stroke={primaryStroke} strokeWidth="2.5" strokeLinejoin="round" />
            {/* Right Scale */}
            <path d="M74 38L66 54H82L74 38Z" stroke={primaryStroke} strokeWidth="2.5" strokeLinejoin="round" />
            {/* Base Pedestal */}
            <path d="M38 75H62" stroke={primaryStroke} strokeWidth="4" strokeLinecap="round" />
          </svg>
        </div>
      );

    case 3:
      // Escarlet FISIO CENTER (Wellness / Aesthetic Medical Spine & Lotus)
      return (
        <div className={`flex items-center justify-center ${className}`}>
          <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
            <rect x="10" y="10" width="80" height="80" rx="40" stroke={primaryStroke} strokeWidth="3" opacity={isDark ? 0.9 : 0.8} />
            {/* Medical Aesthetic Cross & Organic Curve */}
            <path d="M50 26C50 26 34 40 34 54C34 64 42 72 50 72C58 72 66 64 66 54C66 40 50 26 50 26Z" stroke={primaryStroke} strokeWidth="3" strokeLinejoin="round" />
            <circle cx="50" cy="48" r="6" stroke={secondaryColor} strokeWidth="2.5" />
            <path d="M50 38V62" stroke={secondaryColor} strokeWidth="2.5" strokeLinecap="round" />
            <path d="M38 50H62" stroke={secondaryColor} strokeWidth="2.5" strokeLinecap="round" />
          </svg>
        </div>
      );

    case 4:
      // Criales & Urcullo Abogados (Corporate Financial & Banking Law Firm)
      return (
        <div className={`flex items-center justify-center ${className}`}>
          <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
            {/* Banking Shield */}
            <path d="M50 16L78 28V52C78 68 66 81 50 86C34 81 22 68 22 52V28L50 16Z" stroke={primaryStroke} strokeWidth="3.2" strokeLinejoin="round" />
            {/* Monogram C & U Pillars */}
            <path d="M42 42C42 36 46 34 50 34C54 34 58 36 58 42V56C58 62 54 64 50 64C46 64 42 62 42 56" stroke={primaryStroke} strokeWidth="2.8" strokeLinecap="round" />
            <path d="M35 48H65" stroke={secondaryColor} strokeWidth="2" strokeLinecap="round" />
          </svg>
        </div>
      );

    case 5:
      // Tetris Retro Emprendimiento (Arcade Pixel & Tetromino Logo)
      return (
        <div className={`flex items-center justify-center ${className}`}>
          <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
            <rect x="12" y="12" width="76" height="76" rx="16" stroke={primaryStroke} strokeWidth="3" opacity={isDark ? 0.9 : 0.8} />
            {/* T-Piece */}
            <rect x="38" y="26" width="12" height="12" stroke={primaryStroke} strokeWidth="2.5" fill={isDark ? '#FFFFFF' : '#0F2247'} fillOpacity="0.2" />
            <rect x="50" y="26" width="12" height="12" stroke={primaryStroke} strokeWidth="2.5" fill={isDark ? '#FFFFFF' : '#0F2247'} fillOpacity="0.2" />
            <rect x="26" y="26" width="12" height="12" stroke={primaryStroke} strokeWidth="2.5" fill={isDark ? '#FFFFFF' : '#0F2247'} fillOpacity="0.2" />
            <rect x="38" y="38" width="12" height="12" stroke={primaryStroke} strokeWidth="2.5" fill={isDark ? '#FFFFFF' : '#0F2247'} fillOpacity="0.2" />
            {/* L-Piece and Base Blocks */}
            <rect x="26" y="58" width="12" height="12" stroke={secondaryColor} strokeWidth="2.5" />
            <rect x="38" y="58" width="12" height="12" stroke={secondaryColor} strokeWidth="2.5" />
            <rect x="50" y="58" width="12" height="12" stroke={secondaryColor} strokeWidth="2.5" />
            <rect x="62" y="58" width="12" height="12" stroke={secondaryColor} strokeWidth="2.5" />
            <rect x="62" y="46" width="12" height="12" stroke={secondaryColor} strokeWidth="2.5" />
          </svg>
        </div>
      );

    case 6:
      // Borcelle — Productos Naturales (Botanical Leaf & Pure Drop Emblem)
      return (
        <div className={`flex items-center justify-center ${className}`}>
          <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
            <circle cx="50" cy="50" r="40" stroke={primaryStroke} strokeWidth="3" opacity={isDark ? 0.9 : 0.8} />
            {/* Organic Botanical Leaf */}
            <path d="M30 68C30 68 34 38 68 32C68 32 64 64 30 68Z" stroke={primaryStroke} strokeWidth="3" strokeLinejoin="round" />
            {/* Central Leaf Vein */}
            <path d="M34 64C44 54 54 44 64 36" stroke={primaryStroke} strokeWidth="2.5" strokeLinecap="round" />
            {/* Dew Drop */}
            <circle cx="58" cy="54" r="5" fill={isDark ? '#FFFFFF' : '#0F2247'} opacity="0.85" />
          </svg>
        </div>
      );

    default:
      return null;
  }
}
