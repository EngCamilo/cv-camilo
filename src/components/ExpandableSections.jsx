import React, { useState } from 'react';
import { Blocks, FolderKanban, Github } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import Skills from './Skills';
import Projects from './Projects';
import FeaturedRepos from './FeaturedRepos';

export default function ExpandableSections() {
  const { t } = useTranslation();

  const sections = [
    {
      id: 'skills',
      label: t('habilidades_tecnicas'),
      icon: Blocks,
      content: <Skills />,
    },
    {
      id: 'projects',
      label: t('proyectos_destacados'),
      icon: FolderKanban,
      content: <Projects />,
    },
    {
      id: 'repos',
      label: t('github_destacado'),
      icon: Github,
      content: <FeaturedRepos />,
    },
  ];

  const [activeSection, setActiveSection] = useState(sections[0].id);

  return (
    <section className="cv-section rounded-3xl border border-slate-200 bg-white p-4 shadow-sm md:p-6 dark:border-slate-800 dark:bg-slate-900">
      <div className="cv-tabs-nav mb-5 grid gap-3 md:grid-cols-3">
        {sections.map((section) => {
          const Icon = section.icon;
          const isActive = section.id === activeSection;

          return (
            <button
              key={section.id}
              type="button"
              onClick={() => setActiveSection(section.id)}
              className={`flex w-full items-center justify-center gap-2 rounded-full border px-4 py-3 text-sm font-semibold transition duration-300 ${
                isActive
                  ? 'border-slate-900 bg-slate-900 text-white shadow-sm dark:border-yellow-per1 dark:bg-slate-950'
                  : 'border-slate-200 bg-slate-50 text-slate-600 hover:border-slate-400 hover:bg-white dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300 dark:hover:border-slate-500 dark:hover:bg-slate-700'
              }`}
            >
              <Icon className={`h-4 w-4 ${isActive ? 'text-yellow-per1' : 'text-slate-500'}`} />
              <span>{section.label}</span>
            </button>
          );
        })}
      </div>

      <div>
        {sections.map((section) => (
          <div
            key={section.id}
            className={`cv-tab-panel ${section.id === activeSection ? 'block print:block' : 'hidden print:block'}`}
          >
            {section.content}
          </div>
        ))}
      </div>
    </section>
  );
}
