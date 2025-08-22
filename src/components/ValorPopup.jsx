import React, { useState } from 'react';
import { Star } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function ValorPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation();

  const ofertaValor = `Con más de 10 años liderando proyectos editoriales y tecnológicos, aporto una visión estratégica que combina creatividad, gestión y desarrollo de software. Mi experiencia como CEO de una agencia digital en el sector académico me ha permitido transformar ideas complejas en soluciones innovadoras que generan impacto real.

Actualmente, cursando Ingeniería de Software, impulso mi perfil hacia el desarrollo tecnológico con sólidos conocimientos en programación, arquitectura y metodologías ágiles. Me apasiona crear productos tecnológicos de alto valor, explorar nuevas tendencias y aprender continuamente para mantenerme a la vanguardia. Si buscas un profesional que conecte diseño, tecnología e innovación con una fuerte orientación a resultados, puedo aportar una diferencia significativa a tu equipo.`;

  return (
    <div className="my-8 text-center">
      <button
        onClick={() => setIsOpen(true)}
        className="inline-flex items-center justify-center gap-2 px-5 py-2 border border-gray-700 text-gray-800 font-semibold rounded-full shadow-sm hover:bg-gray-100 transform hover:scale-105 transition duration-300 animate-pulse"
      >
        <Star className="w-4 h-4 text-yellow-500 transform transition duration-300 hover:rotate-12" />
        {t('porque_elegirme')}
      </button>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white max-w-lg w-full mx-4 rounded-lg shadow-lg p-6 relative">
            <h2 className="text-lg md:text-2xl font-bold mb-4">{t('oferta_valorTit')}</h2>
            <p className="text-gray-700 whitespace-pre-line text-sm md:text-base">{t('oferta_valor')}</p>
            <button
              onClick={() => setIsOpen(false)}
              className="mt-6 bg-gray-800 hover:bg-gray-900 text-white px-4 py-2 rounded-lg transition"
            >
              {t('cerrar')}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}