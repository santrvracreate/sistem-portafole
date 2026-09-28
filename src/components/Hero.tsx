import { ArrowRight, MessageCircle, Sparkles, Zap, ShieldCheck, Trophy, ChevronDown } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import NoctuaLogo from './NoctuaLogo';
import { WHATSAPP_URL, WHATSAPP_DISPLAY } from '../constants/contact';

export default function Hero() {
  const { isDark, theme } = useTheme();

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center items-center pt-28 pb-20 overflow-hidden z-10"
    >
      {/* Dynamic Ambient Background Glows */}
      <div
        className={`absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] sm:w-[850px] h-[550px] rounded-full blur-[120px] pointer-events-none transition-colors duration-700 ${
          isDark ? 'bg-white/[0.04]' : 'bg-[#0F2247]/[0.05]'
        }`}
      />
      <div
        className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full blur-[90px] pointer-events-none ${
          isDark ? 'bg-[#3A506B]/15' : 'bg-[#0F2247]/5'
        }`}
      />

      <div className="max-w-6xl mx-auto px-6 md:px-12 w-full flex flex-col items-center text-center relative z-10">
        
        {/* Brand Status Badge */}
        <div
          className={`inline-flex items-center gap-2.5 px-5 py-2 rounded-full text-xs font-bold uppercase tracking-widest mb-8 border transition-all duration-300 shadow-sm ${
            isDark
              ? 'bg-[#0B1328]/90 border-white/15 text-gray-200 shadow-black/40'
              : 'bg-white/90 border-[#0F2247]/15 text-[#0F2247] shadow-[#0F2247]/5'
          }`}
        >
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span>NOCTUA STUDIO // ESTUDIO DE DISEÑO & DESARROLLO WEB</span>
        </div>

        {/* Central Imposing Brand Emblem (MUCH BIGGER) */}
        <div className="relative my-2 sm:my-4 flex flex-col items-center group cursor-default">
          {/* Subtle Radial Backlight behind the owl */}
          <div
            className={`absolute inset-0 m-auto w-4/5 h-4/5 rounded-full blur-2xl transition-opacity duration-300 pointer-events-none ${
              isDark ? 'bg-white/10 opacity-70 group-hover:opacity-100' : 'bg-[#0F2247]/5 opacity-60'
            }`}
          />
          
          <NoctuaLogo
            mode={theme}
            size="hero"
            showText={true}
            className="transform transition-transform duration-300 group-hover:scale-[1.02]"
          />
        </div>

        {/* Dynamic Studio Headline */}
        <div className="max-w-3xl mt-6 sm:mt-8 space-y-4">
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-display font-extrabold tracking-tight leading-[1.12]">
            Creamos experiencias digitales <br className="hidden sm:inline" />
            <span
              className={`bg-clip-text text-transparent transition-all duration-300 ${
                isDark
                  ? 'bg-gradient-to-r from-white via-slate-100 to-gray-300 text-glow'
                  : 'bg-gradient-to-r from-[#0F2247] via-[#1A3362] to-[#3A506B]'
              }`}
            >
              que superan los límites tradicionales.
            </span>
          </h1>

          <p
            className={`text-base sm:text-lg md:text-xl font-light leading-relaxed max-w-2xl mx-auto transition-colors ${
              isDark ? 'text-gray-300' : 'text-[#2C3E5E]'
            }`}
          >
            En <strong className="font-semibold">NOCTUA</strong> diseñamos y programamos sitios web corporativos y e-commerce de alto impacto: ultrarrápidos, visualmente memorables y diseñados para captar clientes reales.
          </p>

          {/* Founder Credit */}
          <div className="pt-2">
            <span
              className={`inline-block px-4 py-1 rounded-full text-xs font-mono font-medium tracking-wider uppercase border ${
                isDark
                  ? 'bg-white/5 border-white/10 text-gray-300'
                  : 'bg-[#0F2247]/5 border-[#0F2247]/15 text-[#0F2247]'
              }`}
            >
              Dirigido por Santiago Orellana Rivera — Founder & Principal Web Architect
            </span>
          </div>
        </div>

        {/* Action CTAs */}
        <div className="flex flex-col sm:flex-row items-center gap-4 justify-center w-full max-w-md pt-8">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={`w-full sm:w-auto px-9 py-4 rounded-full font-bold text-sm tracking-wider uppercase flex items-center justify-center gap-3 transition-all duration-200 hover:scale-105 active:scale-95 shadow-xl ${
              isDark
                ? 'bg-white text-[#040711] hover:bg-gray-100 shadow-white/15'
                : 'bg-[#0F2247] text-white hover:bg-[#162C5B] shadow-[#0F2247]/20'
            }`}
          >
            <MessageCircle className="w-4 h-4" />
            <span>Chat WhatsApp // {WHATSAPP_DISPLAY}</span>
          </a>

          <a
            href="#portfolio"
            className={`w-full sm:w-auto px-8 py-4 rounded-full border text-sm font-semibold tracking-wide flex items-center justify-center gap-2 transition-all duration-200 group ${
              isDark
                ? 'border-white/20 hover:border-white hover:bg-white/10 text-gray-200'
                : 'border-[#0F2247]/25 hover:border-[#0F2247] hover:bg-[#0F2247]/5 text-[#0F2247]'
            }`}
          >
            <span>Ver Portafolio</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>

        {/* Value Propositions / Key Metrics */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 w-full max-w-4xl mt-14 pt-8 border-t border-white/10 text-left">
          
          <div
            className={`p-4 rounded-xl border transition-all ${
              isDark ? 'bg-[#0A1124]/60 border-white/10' : 'bg-white border-[#0F2247]/10 shadow-sm'
            }`}
          >
            <div className="flex items-center gap-2 mb-1.5">
              <Zap className="w-4 h-4 text-emerald-400" />
              <span className={`text-xs font-bold uppercase tracking-wider ${isDark ? 'text-white' : 'text-[#0F2247]'}`}>
                &lt;1s Rendimiento
              </span>
            </div>
            <p className={`text-xs leading-snug ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              Carga ultrarrápida sin librerías pesadas ni demoras.
            </p>
          </div>

          <div
            className={`p-4 rounded-xl border transition-all ${
              isDark ? 'bg-[#0A1124]/60 border-white/10' : 'bg-white border-[#0F2247]/10 shadow-sm'
            }`}
          >
            <div className="flex items-center gap-2 mb-1.5">
              <ShieldCheck className="w-4 h-4 text-blue-400" />
              <span className={`text-xs font-bold uppercase tracking-wider ${isDark ? 'text-white' : 'text-[#0F2247]'}`}>
                Diseño a Medida
              </span>
            </div>
            <p className={`text-xs leading-snug ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              Arquitectura visual única para diferenciar tu marca.
            </p>
          </div>

          <div
            className={`p-4 rounded-xl border transition-all ${
              isDark ? 'bg-[#0A1124]/60 border-white/10' : 'bg-white border-[#0F2247]/10 shadow-sm'
            }`}
          >
            <div className="flex items-center gap-2 mb-1.5">
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span className={`text-xs font-bold uppercase tracking-wider ${isDark ? 'text-white' : 'text-[#0F2247]'}`}>
                Alta Conversión
              </span>
            </div>
            <p className={`text-xs leading-snug ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              Diseñado estratégicamente para convertir clics en ventas.
            </p>
          </div>

          <div
            className={`p-4 rounded-xl border transition-all ${
              isDark ? 'bg-[#0A1124]/60 border-white/10' : 'bg-white border-[#0F2247]/10 shadow-sm'
            }`}
          >
            <div className="flex items-center gap-2 mb-1.5">
              <Trophy className="w-4 h-4 text-purple-400" />
              <span className={`text-xs font-bold uppercase tracking-wider ${isDark ? 'text-white' : 'text-[#0F2247]'}`}>
                Garantía Noctua
              </span>
            </div>
            <p className={`text-xs leading-snug ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              Soporte, dominio propio, SSL y optimización continua.
            </p>
          </div>

        </div>

        {/* Scroll Indicator */}
        <a
          href="#experience"
          className={`mt-10 inline-flex flex-col items-center gap-1 transition-opacity opacity-60 hover:opacity-100 ${
            isDark ? 'text-white' : 'text-[#0F2247]'
          }`}
          aria-label="Ir a experiencia"
        >
          <span className="text-[10px] uppercase font-mono tracking-widest">Descubrir</span>
          <ChevronDown className="w-4 h-4 animate-bounce" />
        </a>

      </div>
    </section>
  );
}
