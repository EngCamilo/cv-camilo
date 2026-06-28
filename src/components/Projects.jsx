import React from 'react';
import { FolderKanban, ExternalLink, Github } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import SectionTitle from './SectionTitle';

export default function Projects() {
  const { t } = useTranslation();

  const projects = [
    {
      name: 'SIPRO',
      description: t('proyecto_sipro_descripcion'),
      status: t('proyecto_estado_privado'),
      github: null,
      demo: 'https://sipro-xi.vercel.app/auth/login',
      tech: ['Next.js 14', 'FastAPI', 'Supabase PostgreSQL', 'TypeScript', 'Tailwind CSS'],
    },
    {
      name: 'Ecommerce Editorial Unisabana',
      description: t('proyecto_editorial_unisabana_descripcion'),
      status: t('proyecto_estado_produccion'),
      github: null,
      demo: 'https://editorial.unisabana.edu.co',
      tech: ['WordPress', 'WooCommerce', 'REST API', 'DRM', 'Payment Gateway'],
    },
    {
      name: 'MedicalCareApp',
      description: t('proyecto_medicalcare_descripcion'),
      status: t('proyecto_estado_academico'),
      github: 'https://github.com/EngCamilo/MedicalCareApp',
      demo: null,
      tech: ['React', 'Node.js', 'PostgreSQL', 'Express', 'JWT'],
    },
    {
      name: 'cv-camilo',
      description: t('proyecto_cv_camilo_descripcion'),
      status: t('proyecto_estado_produccion'),
      github: 'https://github.com/EngCamilo/cv-camilo',
      demo: 'https://engcamilo.github.io/cv-camilo/',
      tech: ['React', 'Vite', 'TailwindCSS', 'i18next'],
    },
  ];

  return (
    <section className="cv-section rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8 dark:border-slate-800 dark:bg-slate-900">
      <SectionTitle icon={FolderKanban} title={t('proyectos_destacados')} eyebrow={t('construyendo_portafolio')} />
      <div className="grid gap-5">
        {projects.map((project) => (
          <article
            key={project.name}
            className="rounded-3xl border border-slate-200 bg-slate-50 p-5 transition duration-300 hover:-translate-y-1 hover:shadow-md dark:border-slate-700 dark:bg-slate-800"
          >
            <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{project.name}</h3>
              <span className="rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">
                {project.status}
              </span>
            </div>
            <p className="mb-4 text-sm leading-6 text-slate-600 dark:text-slate-300">{project.description}</p>
            <div className="mb-5 flex flex-wrap gap-2">
              {project.tech.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-slate-300 bg-white px-3 py-1 text-xs font-medium text-slate-700 dark:border-slate-600 dark:bg-slate-900 dark:text-slate-200"
                >
                  {item}
                </span>
              ))}
            </div>
            <div className="flex flex-wrap gap-3 text-sm font-medium text-slate-700 dark:text-slate-200">
              {project.github ? (
                <a href={project.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-slate-300 px-4 py-2 hover:border-slate-500 dark:border-slate-600 dark:hover:border-slate-400">
                  <Github className="h-4 w-4" />
                  GitHub
                </a>
              ) : (
                <span className="inline-flex items-center gap-2 rounded-full border border-slate-300 px-4 py-2 text-slate-500 dark:border-slate-700 dark:text-slate-400">
                  <Github className="h-4 w-4" />
                  {t('repositorio_no_publico')}
                </span>
              )}
              {project.demo && (
                <a href={project.demo} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-slate-300 px-4 py-2 hover:border-slate-500 dark:border-slate-600 dark:hover:border-slate-400">
                  <ExternalLink className="h-4 w-4" />
                  Demo
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
