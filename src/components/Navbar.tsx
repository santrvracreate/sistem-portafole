import { useState, useEffect, type MouseEvent } from 'react';
import { Menu, X, Sun, Moon, MessageSquare } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import NoctuaLogo from './NoctuaLogo';
import { WHATSAPP_URL, WHATSAPP_DISPLAY } from '../constants/contact';

const links = [
  { name: 'Inicio', href: '#home' },
  { name: 'Experiencia', href: '#experience' },
  { name: 'Portfolio', href: '#portfolio' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, toggleTheme, isDark } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollTo = (e: MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-40 transition-all duration-300 ${
          scrolled
            ? isDark
              ? 'py-3.5 bg-[#040711]/90 backdrop-blur-md border-b border-white/10 shadow-xl shadow-black/30'
              : 'py-3.5 bg-white/90 backdrop-blur-md border-b border-[#0F2247]/10 shadow-lg shadow-[#0F2247]/5'
            : 'py-5 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
          <a
            href="#home"
            onClick={(e) => handleScrollTo(e, '#home')}
            className="flex items-center gap-2.5 group"
          >
            <NoctuaLogo mode={theme} size="md" showText={false} className="w-10 h-10" />
            <div className="flex flex-col leading-none">
              <span
                className={`font-display font-extrabold text-base tracking-[0.2em] uppercase transition-colors ${
                  isDark ? 'text-white group-hover:text-gray-200' : 'text-[#0F2247] group-hover:text-[#162C5B]'
                }`}
              >
                NOCTUA
              </span>
              <span
                className={`text-[9px] uppercase tracking-[0.25em] font-medium mt-0.5 ${
                  isDark ? 'text-gray-400' : 'text-[#3A506B]'
                }`}
              >
                Beyond Digital
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-7">
            <div className="flex items-center gap-6">
              {links.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleScrollTo(e, link.href)}
                  className={`text-sm font-medium transition-colors relative group py-1 ${
                    isDark
                      ? 'text-gray-300 hover:text-white'
                      : 'text-[#283E66] hover:text-[#0F2247]'
                  }`}
                >
                  {link.name}
                  <span
                    className={`absolute -bottom-0.5 left-0 w-0 h-0.5 transition-all duration-200 group-hover:w-full ${
                      isDark ? 'bg-white' : 'bg-[#0F2247]'
                    }`}
                  />
                </a>
              ))}
            </div>

            {/* Theme Toggle Button (Day / Night) */}
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-full border transition-all duration-200 flex items-center justify-center ${
                isDark
                  ? 'border-white/20 bg-white/5 text-white hover:bg-white/15 hover:border-white/40'
                  : 'border-[#0F2247]/20 bg-[#0F2247]/5 text-[#0F2247] hover:bg-[#0F2247]/10 hover:border-[#0F2247]/40'
              }`}
              title={isDark ? 'Cambiar a Modo Día (Claro)' : 'Cambiar a Modo Noche (Oscuro)'}
              aria-label="Alternar modo de color"
            >
              {isDark ? (
                <Sun className="w-4 h-4 text-amber-300" />
              ) : (
                <Moon className="w-4 h-4 text-[#0F2247]" />
              )}
            </button>

            <a
              href="#contact"
              onClick={(e) => handleScrollTo(e, '#contact')}
              className={`px-5 py-2 rounded-full font-semibold text-xs tracking-wide uppercase transition-all duration-200 shadow-sm ${
                isDark
                  ? 'border border-white/20 hover:border-white hover:bg-white hover:text-[#040711] text-white'
                  : 'bg-[#0F2247] text-white hover:bg-[#162C5B] hover:shadow-md'
              }`}
            >
              Contacto
            </a>
          </div>

          {/* Mobile Actions: Theme Toggle + Menu */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-full border transition-colors ${
                isDark
                  ? 'border-white/20 text-white'
                  : 'border-[#0F2247]/20 text-[#0F2247]'
              }`}
              aria-label="Alternar modo de color"
            >
              {isDark ? <Sun className="w-4 h-4 text-amber-300" /> : <Moon className="w-4 h-4 text-[#0F2247]" />}
            </button>
            <button
              className={`p-2 rounded-md ${isDark ? 'text-white' : 'text-[#0F2247]'}`}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Abrir menú"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Nav Overlay */}
      {mobileMenuOpen && (
        <div
          className={`fixed inset-0 z-30 pt-24 px-6 md:hidden backdrop-blur-lg ${
            isDark ? 'bg-[#040711]/95 text-white' : 'bg-white/95 text-[#0F2247]'
          }`}
        >
          <div className="flex flex-col gap-6 items-center text-lg">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleScrollTo(e, link.href)}
                className="font-display tracking-wider py-1 font-semibold"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              onClick={(e) => handleScrollTo(e, '#contact')}
              className={`mt-4 w-full text-center px-8 py-3 rounded-full font-bold text-sm uppercase tracking-wider transition-all duration-200 ${
                isDark
                  ? 'border border-white/20 bg-white text-[#040711]'
                  : 'bg-[#0F2247] text-white'
              }`}
            >
              Contacto
            </a>

            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-emerald-400 font-bold text-sm tracking-wider uppercase py-2"
            >
              <MessageSquare className="w-4 h-4 fill-emerald-400" />
              <span>WhatsApp: {WHATSAPP_DISPLAY}</span>
            </a>
          </div>
        </div>
      )}
    </>
  );
}
