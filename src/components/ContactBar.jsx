import React from 'react';
import {
  MapPin,
  FileText,
  Moon,
  Sun,
  Linkedin,
  Globe,
  Github
} from 'lucide-react';
import { useTranslation } from 'react-i18next';
import LanguageSelector from '../LanguageSelector';

export default function ContactBar({ isDarkMode, onToggleDarkMode }) {
  const { t } = useTranslation();

  const handleExportPdf = () => {
    window.print();
  };

  return (
    <section className="contact-bar fixed top-0 z-40 w-full border-b border-slate-200 bg-white/90 py-4 shadow-sm backdrop-blur transition-colors duration-300 dark:border-slate-800 dark:bg-slate-950/90">
      <div className="max-w-7xl mx-auto flex flex-col items-center justify-center gap-2 px-4 text-xs text-gray-700 md:flex-row md:justify-between md:px-8 xl:flex-wrap xl:gap-4 dark:text-slate-300">
        <div className="flex items-center gap-2 xl:basis-2/4">
          <LanguageSelector />
          <button
            type="button"
            onClick={onToggleDarkMode}
            className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-slate-50 p-2 text-slate-700 shadow-sm transition duration-300 hover:border-slate-400 hover:bg-white dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:hover:border-slate-500 dark:hover:bg-slate-800"
            aria-label={isDarkMode ? t('activar_modo_claro') : t('activar_modo_oscuro')}
            title={isDarkMode ? t('activar_modo_claro') : t('activar_modo_oscuro')}
          >
            {isDarkMode ? <Sun className="h-4 w-4 text-yellow-per1" /> : <Moon className="h-4 w-4 text-slate-600" />}
          </button>
          <div className="cv-tooltip-wrapper relative inline-flex">
            <button
              type="button"
              onClick={handleExportPdf}
              className="cv-print-trigger inline-flex items-center justify-center rounded-full border border-slate-200 bg-slate-50 p-2 text-sm text-slate-800 shadow-sm transition duration-300 hover:border-slate-400 hover:text-slate-600 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:hover:border-slate-500"
              aria-label={t('descargar_cv_pdf')}
              title={t('descargar_cv_pdf')}
            >
              <FileText className="w-4 h-4 text-yellow-per1" />
            </button>
            <span className="cv-tooltip pointer-events-none absolute left-1/2 top-full z-50 mt-2 -translate-x-1/2 whitespace-nowrap rounded-md bg-slate-800 px-2 py-1 text-[11px] text-white opacity-0 shadow-md transition-opacity duration-200">
              {t('descargar_cv_pdf')}
            </span>
          </div>
          <MapPin className="w-4 h-4 text-yellow-per1" />
          <span>Madrid, Colombia</span>
        </div>
        <div className="flex items-center gap-2">
          <Globe className="w-4 h-4 text-yellow-per1" />
          <a href="https://engcamilo.github.io/cv-camilo/" target="_blank" className="hover:font-medium hover:text-slate-600 dark:hover:text-white">engcamilo.github.io</a>
        </div>
        <div className="flex items-center gap-2">
          <Linkedin className="w-4 h-4 text-yellow-per1" />
          <a href="https://linkedin.com/in/camilo-contreras-betancourt" target="_blank" className="hover:font-medium hover:text-slate-600 dark:hover:text-white">Camilo Contreras Betancourt</a>
        </div>
        <div className="flex items-center gap-2">
          <Github className="w-4 h-4 text-yellow-per1" />
          <a href="https://github.com/EngCamilo" target="_blank" className="hover:font-medium hover:text-slate-600 dark:hover:text-white">EngCamilo</a>
        </div>
      </div>
    </section>
  );
}
