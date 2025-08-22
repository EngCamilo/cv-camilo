import React from 'react';
import ContactBar from './components/ContactBar';
import Header from './components/Header';
import SobreMi from './components/SobreMi';
import ValorPopup from './components/ValorPopup';
import Education from './components/Education';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800 font-sans">
      <ContactBar />
      <Header />
      <main className="w-full max-w-7xl mx-auto px-6 md:px-10 lg:px-12 xl:py-10 grid grid-cols-1 md:grid-cols-2 gap-8">
        <section className="col-span-1 md:col-span-2 space-y-8">
          <SobreMi />
          <ValorPopup />
        </section>
        <section className="space-y-8">
          <Education />
          <Experience />
        </section>
        <section>
          <Skills />
        </section>
      </main>
      <Footer />
    </div>
  );
}
