import React, { useState } from 'react';
import { Star } from 'lucide-react';

export default function ValorPopup() {
  const [isOpen, setIsOpen] = useState(false);

  const ofertaValor = `Soy un profesional con más de 10 años de experiencia liderando proyectos editoriales y tecnológicos, capaz de conectar el diseño con el desarrollo de software para ofrecer soluciones creativas, funcionales y escalables. \nMi experiencia en dirección de equipos, sumada a mi formación en Ingeniería de Software, me permite comprender tanto las necesidades estratégicas como las técnicas, aportando valor real a los proyectos y garantizando resultados de alto impacto.`;

  return (
    <div className="my-8 text-center">
      {/* Botón con estilo más integrado al CV, ícono y animación */}
      <button
        onClick={() => setIsOpen(true)}
        className="inline-flex items-center justify-center gap-2 px-5 py-2 border border-gray-700 text-gray-800 font-semibold rounded-full shadow-sm hover:bg-gray-100 transform hover:scale-105 transition duration-300 animate-pulse"
      >
        <Star className="w-4 h-4 text-yellow-500 transform transition duration-300 hover:rotate-12" />
        ¿Por qué contratarme?
      </button>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white max-w-lg w-full mx-4 rounded-lg shadow-lg p-6 relative">
            <h2 className="text-2xl font-bold mb-4">Mi Oferta de Valor</h2>
            <p className="text-gray-700 whitespace-pre-line">{ofertaValor}</p>
            <button
              onClick={() => setIsOpen(false)}
              className="mt-6 bg-gray-800 hover:bg-gray-900 text-white px-4 py-2 rounded-lg transition"
            >
              Cerrar
            </button>
          </div>
        </div>
      )}
    </div>
  );
}