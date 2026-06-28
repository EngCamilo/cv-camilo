import React from 'react';
import { Briefcase } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import SectionTitle from './SectionTitle';

export default function Experience() {
  const { t } = useTranslation();

  const jobs = [
    { role: t('analista_ciber_i'), company: 'Invotecsa SAS', years: '2025 - ' + t('presente'), desc: t('descripcion_analista_ciber_i') },
    { role: 'CEO', company: 'Lápiz Blanco SAS', years: '2012 - ' + t('presente'), desc:t('descripcion_ceo') },
    { role: t('disenador_grafico_editorial'), company: 'Hipertexto Ltda.', years: '4 ' + t('meses'), desc: t('descripcion_editorial') },
    { role: t('disenador_grafico_industrial'), company: 'SGM Servicios Globales de Mercadeo SAS', years:  '12 ' + t('meses'), desc: t('descripcion_industrial') },
    { role: t('disenador_grafico'), company: 'Fundación Tecnológica San Francisco de Asís', years: '12 ' + t('meses'), desc: t('descripcion_grafico') },
  ];

  return (
    <section className="cv-section rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8 dark:border-slate-800 dark:bg-slate-900">
      <SectionTitle icon={Briefcase} title={t('experiencia')} eyebrow={t('trayectoria_profesional')} />
      <ul className="space-y-4">
        {jobs.map((job, index) => (
          <li key={index} className="cv-item rounded-2xl border border-slate-200 bg-slate-50 p-5 dark:border-slate-700 dark:bg-slate-800">
            <div className="mb-2">
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white">{job.company}</h3>
              <h4 className="text-base font-medium text-slate-600 dark:text-slate-300">{job.role}</h4>
            </div>
            <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">{job.desc}</p>
            <p className="mt-3 inline-flex rounded-full border border-slate-300 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500 dark:border-slate-600 dark:text-slate-300">{job.years}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
