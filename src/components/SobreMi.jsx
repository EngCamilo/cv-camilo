import React from 'react';
import { BriefcaseBusiness, UserRound } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import SectionTitle from './SectionTitle';

export default function SobreMi() {
  const { t } = useTranslation();

  const highlights = [
    t('highlight_1'),
    t('highlight_2'),
    t('highlight_3'),
    t('highlight_4'),
  ];

  return (
    <section className="cv-section cv-about my-2 grid gap-8 xl:grid-cols-[1.3fr_0.7fr]">
        <div className="cv-card rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8 dark:border-slate-800 dark:bg-slate-900">
          <SectionTitle icon={UserRound} title={t('perfil_titulo')} eyebrow={t('posicionamiento')} />
          <p className="mb-4 text-sm leading-7 text-slate-600 md:text-base dark:text-slate-300">{t('perfil_parrafo1')}</p>
          <p className="mb-4 text-sm leading-7 text-slate-600 md:text-base dark:text-slate-300">{t('perfil_parrafo2')}</p>
          <p className="text-sm leading-7 text-slate-600 md:text-base dark:text-slate-300">{t('perfil_parrafo3')}</p>
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {highlights.map((highlight) => (
              <div key={highlight} className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4 text-sm font-medium text-slate-700 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200">
                {highlight}
              </div>
            ))}
          </div>
        </div>

        <div className="cv-card rounded-3xl border border-slate-200 bg-slate-900 p-6 text-sm text-slate-200 shadow-sm md:p-8 dark:border-slate-700 dark:bg-slate-950">
          <SectionTitle
            icon={BriefcaseBusiness}
            title={t('informacion_personal')}
            eyebrow={t('datos_clave')}
            titleClassName="text-white"
            iconClassName="bg-yellow-per1 text-slate-900"
          />
          <div className="space-y-4">
            <p><span className="text-xs uppercase tracking-[0.24em] text-slate-400">{t('documento')}</span><br /><b className="text-white">1.031.135.635</b></p>
            <p><span className="text-xs uppercase tracking-[0.24em] text-slate-400">{t('nacimiento')}</span><br /><b className="text-white">{t('fecha_nacimiento')}</b></p>
            <p><span className="text-xs uppercase tracking-[0.24em] text-slate-400">{t('lugar')}</span><br /><b className="text-white">Bogotá D.C.</b></p>
            <p><span className="text-xs uppercase tracking-[0.24em] text-slate-400">{t('direccion')}</span><br /><b className="text-white">Madrid, Cundinamarca</b></p>
            <p><span className="text-xs uppercase tracking-[0.24em] text-slate-400">{t('telefonos')}</span><br /><b className="text-white">+57 316 8255217</b></p>
            <p><span className="text-xs uppercase tracking-[0.24em] text-slate-400">{t('email')}</span><br /><b className="text-white">camilocb.design@gmail.com</b></p>
          </div>
        </div>
    </section>
  );
}
