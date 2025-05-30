import React from 'react';

export default function Experience() {
  const jobs = [
    { role: 'Frontend Developer', company: 'Tech Corp', years: '2023 - Presente', desc: 'Desarrollo de interfaces con React.' },
    { role: 'Intern', company: 'Startup XYZ', years: '2022 - 2023', desc: 'Apoyo en desarrollo de backend y pruebas.' },
  ];

  return (
    <section className="my-10">
      <h2 className="text-2xl font-bold mb-4">Experiencia</h2>
      <ul className="space-y-4">
        {jobs.map((job, index) => (
          <li key={index} className="border-l-4 border-blue-500 pl-4">
            <h3 className="text-xl font-semibold">{job.role} - {job.company}</h3>
            <p className="italic text-sm">{job.years}</p>
            <p>{job.desc}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}