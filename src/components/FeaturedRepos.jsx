import React from 'react';
import { Github } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import SectionTitle from './SectionTitle';

export default function FeaturedRepos() {
  const { t } = useTranslation();

  const repos = [
    {
      name: 'SIPRO',
      summary: t('repo_sipro_desc'),
      stack: ['TypeScript', 'Next.js 14', 'FastAPI', 'Supabase', 'Tailwind CSS'],
      url: null,
    },
    {
      name: 'MedicalCareApp',
      summary: t('repo_medicalcare_desc'),
      stack: ['JavaScript', 'CSS', 'PLpgSQL', 'HTML'],
      url: 'https://github.com/EngCamilo/MedicalCareApp',
    },
    {
      name: 'cv-camilo',
      summary: t('repo_cv_camilo_desc'),
      stack: ['JavaScript', 'CSS', 'HTML'],
      url: 'https://github.com/EngCamilo/cv-camilo',
    },
  ];

  return (
    <section className="cv-section rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8 dark:border-slate-800 dark:bg-slate-900">
      <SectionTitle icon={Github} title={t('github_destacado')} eyebrow={t('codigo_y_arquitectura')} />
      <div className="grid gap-4">
        {repos.map((repo) => (
          <div
            key={repo.name}
            className="rounded-2xl border border-slate-200 bg-slate-50 p-5 transition duration-300 hover:-translate-y-1 hover:border-slate-400 hover:bg-white dark:border-slate-700 dark:bg-slate-800 dark:hover:border-slate-500 dark:hover:bg-slate-800"
          >
            <div className="mb-2 flex items-center justify-between gap-3">
              <h3 className="text-base font-semibold text-slate-900 dark:text-white">{repo.name}</h3>
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-400">
                {repo.url ? 'GitHub' : t('repositorio_no_publico')}
              </span>
            </div>
            <p className="mb-3 text-sm leading-6 text-slate-600 dark:text-slate-300">{repo.summary}</p>
            <div className="flex flex-wrap gap-2">
              {repo.stack.map((item) => (
                <span
                  key={item}
                  className="rounded-full bg-slate-900 px-3 py-1 text-xs font-medium text-white"
                >
                  {item}
                </span>
              ))}
            </div>
            {repo.url && (
              <a
                href={repo.url}
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-slate-700 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white"
              >
                <Github className="h-4 w-4" />
                GitHub
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
