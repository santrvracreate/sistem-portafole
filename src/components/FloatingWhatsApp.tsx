import { MessageSquare, ExternalLink } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { WHATSAPP_URL, WHATSAPP_DISPLAY } from '../constants/contact';

export default function FloatingWhatsApp() {
  const { isDark } = useTheme();

  return (
    <aside
      aria-label="Contacto directo por WhatsApp"
      className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-50 flex items-center group select-none"
    >
      {/* Tooltip on hover/focus */}
      <span
        className={`hidden sm:flex items-center gap-1.5 mr-3 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide shadow-xl backdrop-blur-md transition-all duration-300 transform translate-x-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 ${
          isDark
            ? 'bg-[#0B1328]/95 text-white border border-white/15'
            : 'bg-white/95 text-[#0F2247] border border-[#0F2247]/15 shadow-lg'
        }`}
      >
        <span>Chatear al {WHATSAPP_DISPLAY}</span>
        <ExternalLink className="w-3 h-3 opacity-70" />
      </span>

      {/* Floating Action Button */}
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Abrir chat de WhatsApp con el número ${WHATSAPP_DISPLAY}`}
        className="relative flex items-center justify-center w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-emerald-500 hover:bg-emerald-400 text-white shadow-2xl shadow-emerald-500/30 transition-all duration-300 hover:scale-110 active:scale-95 focus:outline-none focus:ring-4 focus:ring-emerald-400/40"
      >
        {/* Radar ping animation ring */}
        <span className="absolute inset-0 rounded-full bg-emerald-400 opacity-60 animate-ping pointer-events-none" />

        <MessageSquare className="w-6 h-6 sm:w-7 sm:h-7 fill-white text-white relative z-10" />

        {/* Small live notification dot */}
        <span className="absolute top-0 right-0 w-3.5 h-3.5 bg-white border-2 border-emerald-500 rounded-full z-20" />
      </a>
    </aside>
  );
}
