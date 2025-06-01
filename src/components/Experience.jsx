import React from 'react';

export default function Experience() {
  const jobs = [
    { role: 'CEO', company: 'Lápiz Blanco SAS', years: '2012 - Presente', desc: 'Gestión de proyectos para instituciones de educación superior. Desarrollo de piezas gráficas, diseño web y multimedia, programación de libros electrónicos (XHTML, CSS).' },
    { role: 'Diseñador Gráfico-Editorial', company: 'Hipertexto Ltda.', years: '4 meses', desc: 'Desarrollo de piezas gráficas, diseño web y multimedia, programación de libros electrónicos (XHTML, CSS).' },
    { role: 'Diseñador Gráfico-Industrial', company: 'SGM Servicios Globales de Mercadeo SAS', years: '12 meses', desc: 'Desarrollo de piezas gráficas, diseño web y multimedia, diseño y modelado 3D.' },
    { role: 'Diseñador Gráfico', company: 'Fundación Tecnológica San Francisco de Asís', years: '12 meses', desc: 'Desarrollo de piezas gráficas, diseño web y multimedia.' },
  ];

  return (
    <section className="my-10">
      <h2>Experiencia</h2>
      <ul className="space-y-4">
        {jobs.map((job, index) => (
          <li key={index} className="border-l-4 border-gray-400 pl-4">
            <h3 className="text-xl font-semibold">{job.company}</h3>
            <h3 className="text-xl font-light">{job.role}</h3>
            <p className="text-sm font-extralight">{job.years}</p>
            <p>{job.desc}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}