import React from 'react';

export default function ProfileImage() {
  return (
    <>
      {/* Versión móvil (estática) */}
      <div className="block md:hidden w-32 h-32 mx-auto mb-4 rounded-full border-4 border-yellow-500 shadow-lg overflow-hidden">
        <img src="./foto.jpg" alt="Foto de perfil" className="w-full h-full object-cover" />
      </div>

      {/* Versión desktop (flotante y centrada sobre el header) */}
      <div className="hidden md:block absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div className="w-40 h-40 md:w-48 md:h-48 rounded-full border-4 border-yellow-500 shadow-xl overflow-hidden transition duration-500 hover:scale-105 hover:shadow-2xl bg-white">
          <img src="./foto.jpg" alt="Foto de perfil" className="w-full h-full object-cover" />
        </div>
      </div>
    </>
  );
}