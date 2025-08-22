import React from 'react';
import { useTranslation } from 'react-i18next';
import ProfileImage from './ProfileImage';

export default function Header() {
  const { t } = useTranslation();
  
  return (
    <header>
      <div className="relative mt-32 mx-auto z-50 md:mt-14">
        <div className="bg-violet-per2 text-white flex flex-col md:flex-row p-6 items-center md:items-start justify-between gap-4 h-auto md:h-48">
          <div className='hidden md:block md:w-1/2'>
            
          </div>
          <ProfileImage />
          <div className='w-full md:w-1/2 text-center md:text-left z-10'>
            <h1 className="text-4xl md:text-5xl font-light tracking-wider mb-2">Camilo <br/> <span className='font-bold underline decoration-yellow-500 decoration-2 underline-offset-8'>Contreras</span></h1>
            <p className="text-base md:text-lg font-thin">{t('titulo_profesional')}</p>
          </div>
        </div>
      </div>
    </header>
  );
}