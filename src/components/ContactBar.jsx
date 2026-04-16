import React from 'react';
import {
  MapPin,
  FileText,
  Linkedin,
  Globe,
  Github
} from 'lucide-react';
import { useTranslation } from 'react-i18next';
import LanguageSelector from '../LanguageSelector';

export default function ContactBar() {
  const { t } = useTranslation();

  const handleExportPdf = () => {
    window.print();
  };

  return (
    <section className="contact-bar bg-white shadow-sm py-4 border-b fixed top-0 w-full z-40">
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col md:flex-row xl:flex-wrap justify-center md:justify-between items-center gap-2 xl:gap-4 text-xs text-gray-700">
        <div className="flex items-center gap-2 xl:basis-2/4">
          <LanguageSelector />
          <button
            type="button"
            onClick={handleExportPdf}
            className="cv-print-trigger inline-flex items-center gap-2 rounded-full border border-gray-300 bg-white px-4 py-1 text-sm text-gray-800 shadow-sm transition duration-300 hover:border-gray-500 hover:text-slate-600"
            aria-label={t('descargar_cv_pdf')}
          >
            <FileText className="w-4 h-4 text-yellow-600" />
            <span>{t('ver_descargar_cv')}</span>
          </button>
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
