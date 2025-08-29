import React from 'react';
import { useTranslation } from 'react-i18next';

export default function Education() {
  const { t } = useTranslation();
  
  const itemsedu = [
    { major: t('ingenieria_software'), university: 'Institución Universitaria de Colombia', years: '2023-2026' },
    { major: t('comunicacion_grafica'), university: 'Corporación Universitaria Minuto de Dios', years: '2009-2012' },
    { major: t('estudios_secundarios'), university: 'Colegio Marco Fidel Suarez', years: '2008' },
  ];
  const itemscert = [
    { major: 'Project Management and Fundamentals of Agile Methodology', university: 'Santander Open Academy', years: 'Ago - 2025' },
    { major: 'Operating Systems Basics', university: 'CISCO', years: 'Nov - 2024' },
    { major: 'JavaScript Essentials 1', university: 'CISCO', years: 'Feb - 2024' },
  ];

  return (
    <section className="my-10">
      <h2>{t('educacion')}</h2>
      <ul className="space-y-4 mb-8">
        {itemsedu.map((edu, index) => (
          <li key={index} className="border-l-4 border-gray-400 pl-4">
            <h3 className="text-xl font-semibold">{edu.major}</h3>
            <p>{edu.university} | <span className='font-extralight'>{edu.years}</span></p>
          </li>
        ))}
      </ul>
      <h3 className="text-xl font-bold mb-4 text-gray-600">{t('certificaciones')}</h3>
      <ul className="space-y-4">
        {itemscert.map((edu, index) => (
          <li key={index} className="border-l-4 border-gray-400 pl-4">
            <h3 className="text-xl font-semibold">{edu.major}</h3>
            <p>{edu.university} | <span className='font-extralight'>{edu.years}</span></p>
          </li>
        ))}
      </ul>
    </section>
  );
}