import React from 'react';
import Header from './components/Header';
import Education from './components/Education';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 font-sans">
      <Header />
      <main className="w-full max-w-7xl mx-auto px-4 md:px-8 lg:px-12 py-10 grid grid-cols-1 md:grid-cols-2 gap-8">
        <section className="col-span-1 space-y-8">
          <Education />
          <Experience />
        </section>
        <section className="col-span-1">
          <Skills />
        </section>
      </main>
      <Footer />
    </div>
  );
}
