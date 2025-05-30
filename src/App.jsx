import React from 'react';
import Header from './components/Header';
import Education from './components/Education';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="bg-white text-gray-900 font-sans">
      <Header />
      <main className="container mx-auto px-4">
        <Education />
        <Experience />
        <Skills />
      </main>
      <Footer />
    </div>
  );
}
