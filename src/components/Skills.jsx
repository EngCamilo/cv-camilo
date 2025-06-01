import React from 'react';

export default function Skills() {
  const skillsu = [
    { name: 'Photoshop', level: 90 },
    { name: 'Illustrator', level: 90 },
    { name: 'Framer', level: 80 },
    { name: 'Figma', level: 75 },
  ];
  const skillsf = [
    { name: 'HTML5', level: 90 },
    { name: 'JavaScript', level: 80 },
    { name: 'React', level: 70 },
    { name: 'TailwindCSS', level: 65 },
  ];
  const skillsb = [
    { name: 'Django', level: 70 },
    { name: 'Node.js/Express.js', level: 70 },
    { name: '.NET Core', level: 70 },
    { name: '.NET Web API', level: 65 },
    { name: 'PostgreSQL', level: 75 },
    { name: 'MySQL', level: 80 },
    { name: 'SQL Server', level: 75 },
    { name: 'Docker', level: 65 },
  ];
  const skillsl = [
    { name: 'JAVA', level: 60 },
    { name: 'Python', level:75 },
    { name: 'C#', level: 70 },
    { name: 'PHP', level: 70 },
  ];

  return (
    <section className="my-10">
      <h2>Habilidades Técnicas</h2>
      <h3 className="text-xl font-bold mb-4 text-gray-600">UI / UX</h3>
        <div className="grid grid-cols-2 mb-5 md:grid-cols-4 gap-6">
          {skillsu.map((skill, index) => (
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
                  className="text-blue-500"
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
      <h3 className="text-xl font-bold mb-4 text-gray-600">Fronent</h3>
        <div className="grid grid-cols-2 mb-5 md:grid-cols-4 gap-6">
          {skillsf.map((skill, index) => (
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
                  className="text-green-500"
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
        <h3 className="text-xl font-bold mb-4 text-gray-600">Backend</h3>
        <div className="grid grid-cols-2 mb-5 md:grid-cols-4 gap-6">
          {skillsb.map((skill, index) => (
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
                  className="text-violet-500"
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
        <h3 className="text-xl font-bold mb-4 text-gray-600">Lenguajes</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {skillsl.map((skill, index) => (
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
                  className="text-cyan-500"
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