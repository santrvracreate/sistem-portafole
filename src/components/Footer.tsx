import { MessageSquareText } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import NoctuaLogo from './NoctuaLogo';
import { WHATSAPP_URL, WHATSAPP_DISPLAY } from '../constants/contact';

export default function Footer() {
  const { isDark, theme } = useTheme();

  return (
    <footer
      id="contact"
      className={`relative z-10 border-t transition-colors duration-300 ${
        isDark ? 'border-white/10 bg-[#040711]' : 'border-[#0F2247]/10 bg-white'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-20 md:py-28 flex flex-col items-center text-center">
        
        <div className="max-w-3xl w-full flex flex-col items-center">
          {/* Prominent nocturnal emblem */}
          <div className="mb-8">
            <NoctuaLogo mode={theme} size="lg" showText={true} />
          </div>

          <h2
            className={`text-4xl sm:text-6xl md:text-7xl font-display font-bold mb-6 leading-tight ${
              isDark ? 'text-white text-glow' : 'text-[#0F2247]'
            }`}
          >
            ¿Listo para ir <br className="hidden sm:block" /> Beyond Digital?
          </h2>
          
          <p
            className={`text-base sm:text-lg mb-10 max-w-xl mx-auto leading-relaxed ${
              isDark ? 'text-gray-300' : 'text-[#334668]'
            }`}
          >
            Hablemos hoy para diseñar una experiencia digital de alto impacto, ultra rápida y optimizada para convertir visitas en clientes.
          </p>

          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center gap-3 px-9 py-4 sm:px-10 sm:py-5 rounded-full font-bold text-base sm:text-lg transition-transform hover:scale-105 active:scale-95 shadow-xl ${
              isDark
                ? 'bg-white text-[#040711] shadow-white/10 hover:bg-gray-100'
                : 'bg-[#0F2247] text-white shadow-[#0F2247]/20 hover:bg-[#162C5B]'
            }`}
          >
            <MessageSquareText className="w-5 h-5 sm:w-6 sm:h-6" />
            <span>Chatear por WhatsApp ({WHATSAPP_DISPLAY})</span>
          </a>
        </div>

      </div>

      <div
        className={`border-t py-8 transition-colors ${
          isDark ? 'border-white/5 bg-[#02040A]' : 'border-[#0F2247]/5 bg-[#F4F7FB]'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col sm:flex-row justify-between items-center gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <NoctuaLogo mode={theme} size="sm" showText={false} className="w-6 h-6" />
            <span
              className={`font-display font-extrabold tracking-widest text-xs uppercase ${
                isDark ? 'text-white' : 'text-[#0F2247]'
              }`}
            >
              NOCTUA // Beyond Digital
            </span>
          </div>
          <p className={`text-xs font-medium ${isDark ? 'text-gray-500' : 'text-gray-600'}`}>
            © 2026 NOCTUA Studio. Fundado por Santiago Orellana Rivera — Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
