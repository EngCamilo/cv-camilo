import React from 'react';

export default function Education() {
  const items = [
    { major: 'Software Engineering', university: 'University X', years: '2019-2024' },
    { major: 'Certification in Web Development', university: 'Online Institute', years: '2023' },
  ];

  return (
    <section className="my-10">
      <h2 className="text-2xl font-bold mb-4">Educación</h2>
      <ul className="space-y-4">
        {items.map((edu, index) => (
          <li key={index} className="border-l-4 border-yellow-500 pl-4">
            <h3 className="text-xl font-semibold">{edu.major}</h3>
            <p>{edu.university} | {edu.years}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}