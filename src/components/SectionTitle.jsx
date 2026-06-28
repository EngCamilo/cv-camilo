import React from 'react';

export default function SectionTitle({
  icon: Icon,
  title,
  eyebrow,
  titleClassName = 'text-slate-900 dark:text-white',
  iconClassName = 'bg-slate-900 text-yellow-per1 dark:bg-slate-950'
}) {
  return (
    <div className="mb-6">
      <div className="flex items-center gap-3">
        {Icon && (
          <span className={`inline-flex h-10 w-10 items-center justify-center rounded-xl shadow-sm ${iconClassName}`}>
            <Icon className="h-5 w-5" />
          </span>
        )}
        <h2 className={`mb-0 text-2xl font-bold tracking-wide md:text-3xl ${titleClassName}`}>
          {title}
        </h2>
      </div>
      {eyebrow && <span className="sr-only">{eyebrow}</span>}
    </div>
  );
}
