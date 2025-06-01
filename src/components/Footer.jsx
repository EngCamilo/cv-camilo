import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-violet-per3 text-white text-center p-4 mt-10 text-xs">
      <p>&copy; {new Date().getFullYear()} Camilo Contreras. Todos los derechos reservados.</p>
    </footer>
  );
}