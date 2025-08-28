import React from 'react';
import { useTranslation } from 'react-i18next';

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="bg-grey-per2 text-white text-center p-4 mt-10 text-xs">
      <p>&copy; {new Date().getFullYear()} Camilo Contreras. {t('copyright')}</p>
    </footer>
  );
}