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
      <main className="cmax-w-5xl mx-auto px-6 py-10">
        <Education />
        <Experience />
        <Skills />
      </main>
      <Footer />
    </div>
  );
}
