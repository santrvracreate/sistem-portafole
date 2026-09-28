import { ArrowUpRight, ExternalLink, Sparkles } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import ProjectLogo from './ProjectLogos';

interface Project {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  url: string;
  tags: string[];
  displayDomain: string;
  image: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "JULIET",
    subtitle: "Consultora Contable & Tributaria",
    description: "Plataforma web corporativa para consultoría contable, balances financieros y auditoría fiscal.",
    url: "https://consultora-contable-juliet.netlify.app/",
    tags: ["Contabilidad", "Corporativo", "Finanzas"],
    displayDomain: "consultora-contable-juliet.netlify.app",
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=800&h=500"
  },
  {
    id: 2,
    title: "Claros R. & Asociados",
    subtitle: "Estudio Jurídico de Élite",
    description: "Interfaz legal y corporativa con agendamiento de citas, asesoría penal y civil de alta especialidad.",
    url: "https://estudio-juridico-clarosr-asoc.netlify.app/",
    tags: ["Abogados", "Derecho", "Agendamiento"],
    displayDomain: "estudio-juridico-clarosr-asoc.netlify.app",
    image: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&q=80&w=800&h=500"
  },
  {
    id: 3,
    title: "Escarlet FISIO CENTER",
    subtitle: "Rehabilitación & Estética Médica",
    description: "Landing page premium de fisioterapia, estética integral, tratamientos corporales y reserva de sesiones.",
    url: "https://escarlet-fisio-center.netlify.app/",
    tags: ["Salud", "Fisioterapia", "Estética"],
    displayDomain: "escarlet-fisio-center.netlify.app",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800&h=500"
  },
  {
    id: 4,
    title: "Criales & Urcullo",
    subtitle: "Abogados Bancarios & Financieros",
    description: "Plataforma institucional para prestigiosa firma legal en derecho corporativo, finanzas y fusiones.",
    url: "https://www.bolivialaw.com/",
    tags: ["Banca", "Corporativo", "M&A"],
    displayDomain: "bolivialaw.com",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800&h=500"
  },
  {
    id: 5,
    title: "Tetris Retro",
    subtitle: "Emprendimiento & Gaming Vintage",
    description: "Tienda y catálogo interactivo para gamers nostálgicos, venta de consolas portátiles y accesorios clásicos.",
    url: "https://tetris-retro-emprendimiento.netlify.app/",
    tags: ["E-Commerce", "Retro Gaming", "Tienda"],
    displayDomain: "tetris-retro-emprendimiento.netlify.app",
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=800&h=500"
  },
  {
    id: 6,
    title: "Borcelle",
    subtitle: "Cosmética & Salud Natural",
    description: "E-Commerce botánico con catálogo de productos orgánicos, cuidado de la piel y bienestar holístico.",
    url: "https://borcellesant.netlify.app/",
    tags: ["E-Commerce", "Botánico", "Orgánico"],
    displayDomain: "borcellesant.netlify.app",
    image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&q=80&w=800&h=500"
  }
];

export default function Portfolio() {
  const { isDark } = useTheme();

  // Function to open project safely in a new tab across any browser/device
  const handleOpenProject = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section
      id="portfolio"
      className={`py-20 md:py-32 relative z-10 border-t transition-colors duration-300 ${
        isDark ? 'border-white/10' : 'border-[#0F2247]/10'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="mb-14 text-center">
          <h2
            className={`text-xs md:text-sm font-semibold tracking-widest uppercase mb-3 ${
              isDark ? 'text-gray-400' : 'text-[#3A506B]'
            }`}
          >
            NOCTUA STUDIO // CASOS DE ÉXITO & PORTFOLIO
          </h2>
          <h3
            className={`text-3xl md:text-5xl font-display font-bold ${
              isDark ? 'text-white text-glow' : 'text-[#0F2247]'
            }`}
          >
            Showcase de Excelencia Digital
          </h3>
          <p
            className={`text-sm md:text-base mt-3 max-w-xl mx-auto leading-relaxed ${
              isDark ? 'text-gray-400' : 'text-[#374B6E]'
            }`}
          >
            Páginas web reales diseñadas a medida, con identidades visuales únicas, código ligero y alta conversión.
          </p>

          {/* User Experience Tip */}
          <div className="mt-4 inline-flex items-center gap-2 px-4 py-1 rounded-full text-xs font-medium backdrop-blur-sm border opacity-90 transition-colors">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span className={isDark ? 'text-gray-300' : 'text-[#0F2247]'}>
              Haz clic o toca en cualquier imagen o tarjeta para abrir el sitio web en vivo
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 lg:gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              onClick={() => handleOpenProject(project.url)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  handleOpenProject(project.url);
                }
              }}
              aria-label={`Abrir sitio web de ${project.title}`}
              className={`rounded-2xl overflow-hidden border transition-all duration-300 flex flex-col justify-between group cursor-pointer hover:-translate-y-2 select-none shadow-xl ${
                isDark
                  ? 'bg-[#0A1124] border-white/10 hover:border-white/40 hover:bg-[#0D1630] hover:shadow-2xl hover:shadow-white/5 shadow-black/50'
                  : 'bg-white border-[#0F2247]/15 hover:border-[#0F2247]/40 hover:shadow-2xl hover:shadow-[#0F2247]/15 shadow-[#0F2247]/5'
              }`}
            >
              <div>
                {/* Browser-style Top Bar with Brand Logo (Clickable) */}
                <div
                  className={`px-5 py-3.5 border-b flex items-center justify-between transition-colors ${
                    isDark ? 'border-white/10 bg-[#060B18] group-hover:bg-[#091024]' : 'border-[#0F2247]/10 bg-[#F4F7FB] group-hover:bg-[#EBF1F8]'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    {/* Brand Logo for each project */}
                    <ProjectLogo projectId={project.id} className="w-8 h-8 flex-shrink-0" isDark={isDark} />
                    <div className="flex flex-col">
                      <span
                        className={`text-xs font-bold font-display leading-none tracking-wide transition-colors ${
                          isDark ? 'text-white group-hover:text-blue-300' : 'text-[#0F2247] group-hover:text-[#1A3A75]'
                        }`}
                      >
                        {project.title}
                      </span>
                      <span
                        className={`text-[10px] font-medium leading-tight mt-0.5 ${
                          isDark ? 'text-gray-400' : 'text-[#566B8B]'
                        }`}
                      >
                        {project.subtitle}
                      </span>
                    </div>
                  </div>

                  {/* Window Action Dots + Quick Indicator */}
                  <div className="flex items-center gap-2">
                    <span
                      className={`text-[10px] font-mono font-semibold uppercase tracking-wider hidden sm:inline opacity-0 group-hover:opacity-100 transition-opacity ${
                        isDark ? 'text-blue-300' : 'text-[#0F2247]'
                      }`}
                    >
                      Abrir ↗
                    </span>
                    <div className="flex items-center gap-1.5 opacity-60">
                      <span className="w-2 h-2 rounded-full bg-red-400" />
                      <span className="w-2 h-2 rounded-full bg-amber-400" />
                      <span className="w-2 h-2 rounded-full bg-emerald-400" />
                    </div>
                  </div>
                </div>

                {/* Website Preview Banner: 100% Clickable with interactive hover overlay */}
                <div
                  className={`relative h-52 w-full overflow-hidden ${
                    isDark ? 'bg-[#060B18]' : 'bg-[#EAEFF6]'
                  }`}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-108"
                  />

                  {/* Subtle Gradient Overlays */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-t via-transparent to-transparent opacity-75 ${
                      isDark ? 'from-[#0A1124]' : 'from-white'
                    }`}
                  />

                  {/* Interactive Hover Backdrop Overlay */}
                  <div
                    className={`absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 backdrop-blur-[2px] ${
                      isDark ? 'bg-[#040711]/60' : 'bg-[#0F2247]/40'
                    }`}
                  >
                    <span
                      className={`px-4 py-2 rounded-full font-bold text-xs uppercase tracking-wider flex items-center gap-2 shadow-2xl transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300 ${
                        isDark
                          ? 'bg-white text-[#040711] shadow-white/20'
                          : 'bg-white text-[#0F2247] shadow-black/30'
                      }`}
                    >
                      <span>Visitar sitio web</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </span>
                  </div>

                  {/* External Link Pill Button on Top-Right */}
                  <div className="absolute top-3 right-3 z-10">
                    <span
                      className={`px-3 py-1.5 rounded-full text-xs font-semibold backdrop-blur-md border flex items-center gap-1.5 shadow-md transition-all duration-200 ${
                        isDark
                          ? 'bg-[#040711]/85 border-white/20 text-white group-hover:bg-white group-hover:text-[#040711]'
                          : 'bg-white/90 border-[#0F2247]/20 text-[#0F2247] group-hover:bg-[#0F2247] group-hover:text-white'
                      }`}
                    >
                      <span>Abrir</span>
                      <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </span>
                  </div>

                  {/* Domain Tag on Bottom-Left */}
                  <div className="absolute bottom-3 left-4 z-10">
                    <span
                      className={`text-[11px] font-mono font-medium px-2.5 py-1 rounded-md backdrop-blur-md shadow-sm ${
                        isDark
                          ? 'bg-black/75 text-gray-200 border border-white/10'
                          : 'bg-white/90 text-[#0F2247] border border-[#0F2247]/15'
                      }`}
                    >
                      {project.displayDomain}
                    </span>
                  </div>
                </div>

                {/* Description & Tags */}
                <div className="p-6">
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className={`px-2.5 py-0.5 text-[10px] font-semibold tracking-wider uppercase rounded-full border transition-colors ${
                          isDark
                            ? 'bg-white/5 border-white/10 text-gray-300'
                            : 'bg-[#0F2247]/5 border-[#0F2247]/15 text-[#0F2247]'
                        }`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <p
                    className={`text-xs md:text-sm leading-relaxed transition-colors ${
                      isDark ? 'text-gray-300' : 'text-[#374B6E]'
                    }`}
                  >
                    {project.description}
                  </p>
                </div>
              </div>

              {/* Bottom CTA to View Website */}
              <div
                className={`p-5 pt-0 mt-auto border-t flex items-center justify-between ${
                  isDark ? 'border-white/5' : 'border-[#0F2247]/5'
                }`}
              >
                <div
                  className={`w-full py-2.5 px-4 rounded-xl text-xs font-bold tracking-wide uppercase flex items-center justify-center gap-2 transition-all duration-200 ${
                    isDark
                      ? 'bg-white/10 group-hover:bg-white text-white group-hover:text-[#040711] shadow-sm'
                      : 'bg-[#0F2247]/10 group-hover:bg-[#0F2247] text-[#0F2247] group-hover:text-white shadow-sm'
                  }`}
                >
                  <span>Ver Sitio Web en Vivo</span>
                  <ExternalLink className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
