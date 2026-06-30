import React from 'react';

export default function ProfileImage() {
  return (
    <div className="cv-profile-image relative justify-center">
        <div className="mx-auto h-48 w-48 overflow-hidden rounded-full border-4 border-yellow-per1 bg-white shadow-2xl md:h-56 md:w-56">
        <img
            src="./foto.jpg"
            alt="Foto de perfil"
            draggable="false"
            className="pointer-events-none w-full h-full object-cover"
        />
        {/* Visual watermark to discourage reuse of the public profile image. */}
        <div className="pointer-events-none absolute inset-x-0 bottom-4 rotate-[-10deg] bg-slate-950/65 px-3 py-1 text-center text-[10px] font-semibold uppercase tracking-[0.32em] text-white">
          Camilo Contreras
        </div>
        </div>
    </div>
  );
}
