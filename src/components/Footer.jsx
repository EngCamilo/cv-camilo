import React from 'react';
import { useTranslation } from 'react-i18next';

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="cv-footer mt-10 bg-grey-per2 p-4 text-center text-xs text-white dark:border-t dark:border-slate-800 dark:bg-slate-950">
      <p>&copy; {new Date().getFullYear()} Camilo Contreras. {t('copyright')}</p>
    </footer>
  );
}
