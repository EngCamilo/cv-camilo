import React from 'react';

export default function Skills() {
  const skills = [
    { name: 'React', level: 90 },
    { name: 'TailwindCSS', level: 80 },
    { name: 'JavaScript', level: 85 },
    { name: 'Python', level: 70 },
  ];

  return (
    <section className="my-10">
      <h2 className="text-2xl font-bold mb-4">Habilidades Técnicas</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {skills.map((skill, index) => (
          <div key={index} className="text-center">
            <svg className="mx-auto w-20 h-20 text-yellow-500" viewBox="0 0 36 36">
              <path
                className="text-gray-300"
                d="M18 2.0845
                  a 15.9155 15.9155 0 0 1 0 31.831
                  a 15.9155 15.9155 0 0 1 0 -31.831"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              />
              <path
                className="text-yellow-500"
                d={`M18 2.0845
                  a 15.9155 15.9155 0 0 1 0 31.831
                  a 15.9155 15.9155 0 0 1 0 -31.831`}
                fill="none"
                stroke="currentColor"
                strokeDasharray={`${skill.level}, 100`}
                strokeWidth="2"
              />
            </svg>
            <p className="mt-2 font-semibold">{skill.name}</p>
            <p className="text-sm">{skill.level}%</p>
          </div>
        ))}
      </div>
    </section>
  );
}