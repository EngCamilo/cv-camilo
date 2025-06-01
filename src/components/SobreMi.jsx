import React from 'react';

export default function SobreMi() {
  return (
    <section className="w-full my-10 bg-gray-200 p-8 rounded-xl flex flex-wrap gap-8 xl:flex-nowrap">
        <div className='bg-white shadow-md p-6 rounded-lg basis-full xl:basis-2/3'>
            <h2>Perfil</h2>
            <p className='mb-3'>Profesional en transición al sector tecnológico, con más de 10 años de experiencia en diseño editorial y gestión de proyectos digitales en el ámbito académico. Actualmente CEO de una agencia especializada en producción editorial digital, donde he liderado el desarrollo de soluciones tecnológicas a medida para instituciones de educación superior.</p>
            <p className='mb-3'>Me encuentro cursando el séptimo semestre de Ingeniería de Software, carrera que complementa mi experiencia con sólidos fundamentos en programación, arquitectura de software y desarrollo web. Esta combinación me permite abordar proyectos con una visión integral que une experiencia de usuario, diseño funcional y robustez técnica.</p>
            <p className='mb-3'>Poseo habilidades prácticas en desarrollo frontend y backend, manejo de herramientas modernas como React, TailwindCSS, Git y metodologías ágiles. Me interesa integrarme a equipos de desarrollo donde pueda aportar mi capacidad de liderazgo, pensamiento creativo y enfoque orientado a soluciones tecnológicas escalables.</p>
        </div>
        <div className='bg-white shadow-md p-6 rounded-lg basis-full xl:basis-1/3 text-xs '>
            <h2>Información personal</h2>
            <p className='mb-3'><span className='uppercase'>Documento de identidad</span> <br/><b>1.031.135.635 de Btá</b></p>
            <p className='mb-3'><span className='uppercase'>Fecha de nacimiento</span> <br/><b>16 de diciembre de 1991</b></p>
            <p className='mb-3'><span className='uppercase'>Lugar de nacimiento</span> <br/><b>Bogotá D.C.</b></p>
            <p className='mb-3'><span className='uppercase'>Estado civil</span> <br/><b>Casado</b></p>
            <p className='mb-3'><span className='uppercase'>Dirección</span> <br/><b>Cra 24 2 297 T24 Apto 301<br/>Madrid, Cundinamarca</b></p>
            <p className='mb-3'><span className='uppercase'>Teléfonos</span> <br/><b>+57 316 8255217 - 601 8730917</b></p>
            <p className='mb-3'><span className='uppercase'>Email</span> <br/><b>camilocb.design@gmail.com</b></p>
        </div>
    </section>
  );
}