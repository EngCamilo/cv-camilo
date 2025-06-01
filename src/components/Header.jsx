import React from 'react';
import ProfileImage from './ProfileImage';

export default function Header() {
  return (
    <header>
      <div className="relative mx-auto grid-rows-2 items-center justify-between h-48">
        <div className="bg-violet-per2 text-white flex p-6">
          <div className='w-1/2'>
            
          </div>
          <ProfileImage />
          <div className='w-1/2 z-10'>
            <h1 className="text-5xl font-light tracking-wider mb-2">Camilo <br/> <span className='font-bold underline decoration-yellow-500 decoration-2 underline-offset-8'>Contreras</span></h1>
            <p className="text-s font-thin">Diseñador Gráfico / Ing. de Software</p>
          </div>
        </div>
      </div>
    </header>
  );
}