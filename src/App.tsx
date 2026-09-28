/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ThemeProvider, useTheme } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Portfolio from './components/Portfolio';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';

function MainContent() {
  const { isDark } = useTheme();

  return (
    <div
      className={`relative min-h-screen transition-colors duration-300 ${
        isDark
          ? 'bg-[#040711] text-white cyber-grid-dark'
          : 'bg-[#F8FAFD] text-[#0F2247] cyber-grid-light'
      }`}
    >
      <Navbar />
      <main>
        <Hero />
        <Experience />
        <Portfolio />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <MainContent />
    </ThemeProvider>
  );
}
