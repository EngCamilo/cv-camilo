import React from 'react';
import { GraduationCap } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import SectionTitle from './SectionTitle';

export default function Education() {
  const { t } = useTranslation();
  
  const itemsedu = [
    { major: t('ingenieria_software'), university: 'Institución Universitaria de Colombia', years: '2023-2026', extra: t('graduacion_estimada') },
    { major: t('diplomado_ciberseguridad'), university: 'Institución Universitaria de Colombia', years: '2025-2' },
    { major: t('comunicacion_grafica'), university: 'Corporación Universitaria Minuto de Dios', years: '2009-2012' },
    { major: t('estudios_secundarios'), university: 'Colegio Marco Fidel Suarez', years: '2008' },
  ];
  const itemscert = [
    { major: 'Project Management and Fundamentals of Agile Methodology', university: 'Santander Open Academy', years: 'Ago - 2025' },
    { major: 'Operating Systems Basics', university: 'CISCO', years: 'Nov - 2024' },
    { major: 'JavaScript Essentials 1', university: 'CISCO', years: 'Feb - 2024' },
  ];

  return (
    <section className="cv-section w-full rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8 dark:border-slate-800 dark:bg-slate-900">
      <SectionTitle icon={GraduationCap} title={t('educacion')} eyebrow={t('formacion_y_certificacion')} />
      <div className="mb-8 space-y-4">
        {itemsedu.map((edu, index) => (
          <article key={index} className="w-full rounded-2xl border border-slate-200 bg-slate-50 p-5 dark:border-slate-700 dark:bg-slate-800">
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{edu.major}</h3>
            <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">{edu.university} | <span className='font-medium'>{edu.years}</span></p>
            {edu.extra && <p className="mt-2 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-700">{edu.extra}</p>}
          </article>
        ))}
      </div>
      <h3 className="mb-4 text-lg font-bold text-slate-700 dark:text-slate-200">{t('certificaciones')}</h3>
      <div className="space-y-4">
        {itemscert.map((edu, index) => (
          <article key={index} className="w-full rounded-2xl border border-dashed border-slate-300 bg-white p-4 dark:border-slate-700 dark:bg-slate-900">
            <h3 className="text-base font-semibold text-slate-900 dark:text-white">{edu.major}</h3>
            <p className="text-sm text-slate-600 dark:text-slate-300">{edu.university} | <span className='font-medium'>{edu.years}</span></p>
          </article>
        ))}
      </div>
    </section>
  );
}
