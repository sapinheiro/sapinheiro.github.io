import React from 'react';

const skillCategories = [
  {
    category: 'Languages',
    skills: ['Java', 'Python', 'TypeScript', 'JavaScript', 'C#', 'C', 'SQL', 'Q/KDB+'],
  },
  {
    category: 'Frameworks & Libraries',
    skills: ['React', 'Spring Framework', 'Node.js'],
  },
  {
    category: 'Infrastructure & Tools',
    skills: ['Git', 'Docker', 'PostgreSQL', 'MySQL', 'Keycloak', 'CI/CD'],
  },
  {
    category: 'Concepts',
    skills: ['Distributed Systems', 'REST APIs', 'Microservices', 'Agile', 'System Design'],
  },
];

function Skills() {
  return (
    <section id="skills">
      <h2 className="section-title">Skills</h2>
      <div className="skills-grid">
        {skillCategories.map((cat) => (
          <div className="skill-category" key={cat.category}>
            <h3>{cat.category}</h3>
            <div className="skill-tags">
              {cat.skills.map((s) => (
                <span className="skill-tag" key={s}>{s}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
