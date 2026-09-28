import { Code2, Layout, Layers, Zap } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const skills = [
  {
    icon: <Layout className="w-6 h-6" />,
    title: "UI/UX Layout Design",
    description: "Diseño de flujos intuitivos y arquitectura visual enfocada en conversión con precisión milimétrica."
  },
  {
    icon: <Code2 className="w-6 h-6" />,
    title: "Tailwind CSS Architecture",
    description: "Estructuras de estilos ultraligeras, escalables y optimizadas para rendimiento instantáneo."
  },
  {
    icon: <Layers className="w-6 h-6" />,
    title: "Dynamic Interfaces",
    description: "Desarrollo de interfaces reactivas y componentes limpios sin librerías pesadas innecesarias."
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: "Responsive Engineering",
    description: "Adaptabilidad fluida y máxima velocidad de carga en smartphones, tablets y pantallas 4K."
  }
];

export default function Experience() {
  const { isDark } = useTheme();

  return (
    <section
      id="experience"
      className={`py-20 md:py-28 relative z-10 border-t transition-colors duration-300 ${
        isDark
          ? 'border-white/10 bg-[#070D1F]/70'
          : 'border-[#0F2247]/10 bg-[#EDF3FA]/70'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="mb-12 md:mb-16 flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
          <div className="max-w-2xl">
            <h2
              className={`text-xs md:text-sm font-semibold tracking-widest uppercase mb-3 ${
                isDark ? 'text-gray-400' : 'text-[#3A506B]'
              }`}
            >
              Experiencia // Habilidades Clave
            </h2>
            <h3
              className={`text-3xl md:text-5xl font-display font-bold leading-tight ${
                isDark ? 'text-white' : 'text-[#0F2247]'
              }`}
            >
              Transformando conceptos de negocio en sitios web de alto impacto.
            </h3>
          </div>
          <p
            className={`text-sm md:text-base max-w-sm ${
              isDark ? 'text-gray-400' : 'text-[#374B6E]'
            }`}
          >
            Especializado en crear soluciones digitales rápidas, elegantes y enfocadas en captar clientes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill) => (
            <div
              key={skill.title}
              className={`border transition-all duration-200 p-7 rounded-2xl group flex flex-col justify-between ${
                isDark
                  ? 'bg-[#0B1328]/80 border-white/10 hover:border-white/30 hover:bg-[#101C38] text-white shadow-lg shadow-black/20'
                  : 'bg-white border-[#0F2247]/15 hover:border-[#0F2247]/40 hover:bg-white text-[#0F2247] shadow-md shadow-[#0F2247]/5'
              }`}
            >
              <div>
                <div
                  className={`w-12 h-12 rounded-xl border flex items-center justify-center mb-5 transition-colors ${
                    isDark
                      ? 'bg-white/5 border-white/10 text-gray-300 group-hover:text-white group-hover:bg-white/10'
                      : 'bg-[#0F2247]/5 border-[#0F2247]/15 text-[#0F2247] group-hover:bg-[#0F2247]/10'
                  }`}
                >
                  {skill.icon}
                </div>
                <h4 className="text-lg font-semibold mb-2 font-display">{skill.title}</h4>
                <p
                  className={`text-xs md:text-sm leading-relaxed transition-colors ${
                    isDark ? 'text-gray-400 group-hover:text-gray-300' : 'text-[#4A5D7C] group-hover:text-[#283C5B]'
                  }`}
                >
                  {skill.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
