import React from 'react';
import { Blocks } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import SectionTitle from './SectionTitle';

export default function Skills() {
  const { t } = useTranslation();
  
  const groups = [
    { title: t('categoria_backend'), color: 'bg-emerald-500 text-white', items: ['ASP.NET Core', '.NET Web API', 'Django', 'Express.js', 'REST APIs'] },
    { title: t('categoria_frontend'), color: 'bg-sky-500 text-white', items: ['React', 'HTML5', 'CSS3', 'TailwindCSS', 'JavaScript'] },
    { title: t('lenguajes'), color: 'bg-amber-500 text-slate-950', items: ['C#', 'Python', 'JavaScript', 'Java', 'PHP'] },
    { title: t('categoria_bases_datos'), color: 'bg-violet-500 text-white', items: ['PostgreSQL', 'SQL Server', 'MySQL'] },
    { title: t('categoria_devops'), color: 'bg-rose-500 text-white', items: ['Docker', 'Git', 'GitHub', 'CI/CD'] },
    { title: t('categoria_cms_ecommerce'), color: 'bg-indigo-500 text-white', items: ['WordPress', 'WooCommerce', 'REST API Integrations', 'DRM Services', 'Payment Gateways'] },
    { title: t('categoria_diseno'), color: 'bg-slate-500 text-white', items: ['Figma', 'Framer', 'Photoshop', 'Illustrator'] },
  ];

  return (
    <section className="cv-section rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8 dark:border-slate-800 dark:bg-slate-900">
      <SectionTitle icon={Blocks} title={t('habilidades_tecnicas')} eyebrow={t('stack_tecnologico')} />
      <div className="grid gap-4">
        {groups.map((group) => (
          <div key={group.title} className="rounded-2xl border border-slate-200 bg-slate-50 p-4 dark:border-slate-700 dark:bg-slate-800">
            <h3 className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-slate-600 dark:text-slate-300">{group.title}</h3>
            <div className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <div
                  key={item}
                  className={`inline-flex items-center px-4 py-2 pr-8 text-xs font-semibold tracking-[0.08em] shadow-sm ${group.color}`}
                  style={{ clipPath: 'polygon(0 0, 88% 0, 100% 50%, 88% 100%, 0 100%)' }}
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
