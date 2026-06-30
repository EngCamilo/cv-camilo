import React, { useEffect, useState } from 'react';
import ContactBar from './components/ContactBar';
import Header from './components/Header';
import SobreMi from './components/SobreMi';
import Education from './components/Education';
import Experience from './components/Experience';
import Achievements from './components/Achievements';
import ExpandableSections from './components/ExpandableSections';
import Footer from './components/Footer';
import useContentProtection from './hooks/useContentProtection';

export default function App() {
  useContentProtection();

  const [isDarkMode, setIsDarkMode] = useState(() => {
    if (typeof window === 'undefined') return false;
    const savedTheme = window.localStorage.getItem('cv-theme');
    if (savedTheme) return savedTheme === 'dark';
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  useEffect(() => {
    // Persist the preferred theme and keep Tailwind's class-based dark mode in sync.
    document.documentElement.classList.toggle('dark', isDarkMode);
    window.localStorage.setItem('cv-theme', isDarkMode ? 'dark' : 'light');
  }, [isDarkMode]);

  return (
    <div className="cv-document min-h-screen bg-[linear-gradient(180deg,#e2e8f0_0%,#f8fafc_22%,#f8fafc_100%)] text-gray-800 font-sans transition-colors duration-300 dark:bg-[linear-gradient(180deg,#020617_0%,#0f172a_24%,#111827_100%)] dark:text-slate-100">
      <ContactBar
        isDarkMode={isDarkMode}
        onToggleDarkMode={() => setIsDarkMode((current) => !current)}
      />
      <Header />
      <main className="cv-main w-full max-w-7xl mx-auto px-4 pb-16 md:px-8 lg:px-12 xl:py-10 flex flex-col gap-8">
        <section className="space-y-8">
          <SobreMi />
          <Achievements />
        </section>
        <section className="cv-print-stack grid gap-8 xl:grid-cols-[0.7fr_1.3fr]">
          <Education />
          <Experience />
        </section>
        <ExpandableSections />
      </main>
      <Footer />
    </div>
  );
}
