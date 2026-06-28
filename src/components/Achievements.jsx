import React from 'react';
import { Award } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import SectionTitle from './SectionTitle';

export default function Achievements() {
  const { t } = useTranslation();

  const achievements = [
    t('logro_1'),
    t('logro_2'),
    t('logro_3'),
    t('logro_4'),
    t('logro_5'),
    t('logro_6'),
  ];

  return (
    <section className="cv-section rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8 dark:border-slate-800 dark:bg-slate-900">
      <SectionTitle icon={Award} title={t('logros')} eyebrow={t('propuesta_profesional')} />
      <div className="grid gap-3 md:grid-cols-2">
        {achievements.map((achievement) => (
          <div
            key={achievement}
            className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4 text-sm leading-6 text-slate-700 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300"
          >
            {achievement}
          </div>
        ))}
      </div>
    </section>
  );
}
