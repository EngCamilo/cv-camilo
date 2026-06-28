import React from 'react';

export default function ProfileImage() {
  return (
    <div className="cv-profile-image relative justify-center">
        <div className="mx-auto h-48 w-48 overflow-hidden rounded-full border-4 border-yellow-per1 bg-white shadow-2xl md:h-56 md:w-56">
        <img
            src="./foto.jpg"
            alt="Foto de perfil"
            className="w-full h-full object-cover"
        />
        </div>
    </div>
  );
}
