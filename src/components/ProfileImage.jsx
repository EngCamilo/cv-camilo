import React from 'react';

export default function ProfileImage() {
  return (
    <div className="relative justify-center  md:absolute md:left-1/3 md:top-1/2 md:transform md:-translate-x-1/2 md:-translate-y-1/2">
        <div className="w-48 h-48 md:w-60 md:h-60 mx-auto rounded-full border-4 border-yellow-500 shadow-lg overflow-hidden transform transition duration-500 hover:scale-105 hover:shadow-2xl bg-white">
        <img
            src="./foto.jpg"
            alt="Foto de perfil"
            className="w-full h-full object-cover"
        />
        </div>
    </div>
  );
}