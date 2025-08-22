import React from 'react';
import { useTranslation } from 'react-i18next';

export default function Experience() {
  const { t } = useTranslation();

  const jobs = [
    { role: 'CEO', company: 'Lápiz Blanco SAS', years: '2012 - ' + t('presente'), desc:t('descripcion_ceo') },
    { role: t('disenador_grafico_editorial'), company: 'Hipertexto Ltda.', years: '4 ' + t('meses'), desc: t('descripcion_editorial') },
    { role: t('disenador_grafico_industrial'), company: 'SGM Servicios Globales de Mercadeo SAS', years:  '12 ' + t('meses'), desc: t('descripcion_industrial') },
    { role: t('disenador_grafico'), company: 'Fundación Tecnológica San Francisco de Asís', years: '12 ' + t('meses'), desc: t('descripcion_grafico') },
  ];

  return (
    <section className="my-10">
      <h2>{t('experiencia')}</h2>
      <ul className="space-y-4">
        {jobs.map((job, index) => (
          <li key={index} className="border-l-4 border-gray-400 pl-4">
            <h3 className="text-xl font-semibold">{job.company}</h3>
            <h3 className="text-xl font-light">{job.role}</h3>
            <p className="text-sm font-extralight">{job.years}</p>
            <p>{job.desc}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}