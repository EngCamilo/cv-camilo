import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white text-center p-4 mt-10">
      <p>&copy; {new Date().getFullYear()} Tu Nombre. Todos los derechos reservados.</p>
    </footer>
  );
}