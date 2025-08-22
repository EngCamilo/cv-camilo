import React from 'react';
import {
  Mail,
  Phone,
  MapPin,
  Globe,
  Linkedin,
  Github
} from 'lucide-react';
import LanguageSelector from '../LanguageSelector';

export default function ContactBar() {

  return (
    <section className="bg-white shadow-sm py-4 border-b fixed top-0 w-full z-40">
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col md:flex-row xl:flex-wrap justify-center md:justify-between items-center gap-2 xl:gap-4 text-xs text-gray-700">
        <div className="flex items-center gap-2 xl:basis-2/4">
          <LanguageSelector />
          <MapPin className="w-4 h-4 text-yellow-600" />
          <span>Madrid, Colombia</span>
        </div>
        <div className="flex items-center gap-2">
          <Globe className="w-4 h-4 text-yellow-600" />
          <a href="https://engcamilo.github.io/cv-camilo/" target="_blank" className="hover:font-medium hover:text-slate-600">engcamilo.github.io</a>
        </div>
        <div className="flex items-center gap-2">
          <Linkedin className="w-4 h-4 text-yellow-600" />
          <a href="https://linkedin.com/in/camilo-contreras-betancourt" target="_blank" className="hover:font-medium hover:text-slate-600">Camilo Contreras Betancourt</a>
        </div>
        <div className="flex items-center gap-2">
          <Github className="w-4 h-4 text-yellow-600" />
          <a href="https://github.com/EngCamilo" target="_blank" className="hover:font-medium hover:text-slate-600">EngCamilo</a>
        </div>
      </div>
    </section>
  );
}