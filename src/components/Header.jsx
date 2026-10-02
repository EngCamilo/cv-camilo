import React from 'react';
import { Bot, Github, Globe, Linkedin, ServerCog, Waypoints } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import ProfileImage from './ProfileImage';

export default function Header() {
  const { t } = useTranslation();
  
  return (
    <header className="cv-header">
      <div className="relative mx-auto mt-40 md:mt-10">
        <div className="cv-header-banner relative overflow-hidden rounded-[2rem] bg-slate-900 text-white shadow-2xl">
          <div className="cv-header-decoration absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(246,203,0,0.18),transparent_28%),linear-gradient(135deg,rgba(15,23,42,0.96),rgba(30,41,59,0.92))]" />
          <div className="cv-header-layout relative grid gap-8 px-6 pb-10 pt-16 md:p-10 xl:grid-cols-[260px_minmax(0,760px)] xl:items-center xl:justify-center xl:px-10 xl:pb-10 xl:pt-10">
            <div className="flex justify-center">
              <ProfileImage />
            </div>
            <div className="z-10 mx-auto max-w-3xl">
              <h1 className="mb-3 text-center text-4xl font-light tracking-[0.08em] text-white md:text-left md:text-6xl">
                Camilo <br /> <span className="font-bold text-yellow-per1">Contreras</span>
              </h1>
              <p className="max-w-3xl text-center text-lg font-semibold text-slate-100 md:text-left md:text-2xl">
                {t('titulo_profesional')}
              </p>
              <p className="mt-4 max-w-3xl text-center text-sm leading-7 text-slate-300 md:text-left md:text-base">
                {t('hero_subtitulo')}
              </p>
              <div className="mt-6 flex flex-wrap justify-center gap-3 md:justify-start">
                <span className="inline-flex items-center gap-2 rounded-full border border-yellow-per1/40 bg-yellow-per1/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-yellow-100">
                  <ServerCog className="h-4 w-4 text-yellow-per1" />
                  {t('enfoque_backend')}
                </span>
                <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-slate-100">
                  <Waypoints className="h-4 w-4 text-yellow-per1" />
                  {t('enfoque_arquitectura')}
                </span>
                <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-slate-100">
                  <Bot className="h-4 w-4 text-yellow-per1" />
                  {t('enfoque_ia')}
                </span>
              </div>
              <div className="cv-print-socials hidden mt-6">
                <div className="cv-print-social-item flex items-center justify-center gap-2 md:justify-start">
                  <Globe className="h-4 w-4 text-yellow-per1" />
                  <span>engcamilo.github.io</span>
                </div>
                <div className="cv-print-social-item flex items-center justify-center gap-2 md:justify-start">
                  <Linkedin className="h-4 w-4 text-yellow-per1" />
                  <span>LinkedIn</span>
                </div>
                <div className="cv-print-social-item flex items-center justify-center gap-2 md:justify-start">
                  <Github className="h-4 w-4 text-yellow-per1" />
                  <span>github.com/EngCamilo</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
