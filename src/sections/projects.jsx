import React from 'react';

const projects = [
  {
    name: 'In Living Memory',
    tech: 'Ren\'Py / Python',
    description: 'A 250,000+ word narrative-driven visual novel, solo-developed from the ground up — writing, programming, branching dialogue systems, and production.',
  },
  {
    name: 'Brevio',
    tech: 'Next.js / TypeScript / Supabase / Claude API',
    description: 'AI-powered SaaS platform that consolidates ad performance data across Meta, Google, and other platforms into a unified dashboard. Features natural language analytics powered by Claude, automated anomaly detection, shareable client reports, and multi-tenant team management.',
  },
  {
    name: 'Self-Hosted Password Manager',
    tech: 'Rust / Docker',
    description: 'Self-hosted Bitwarden server instance using an open-source Rust implementation.',
  },
  {
    name: 'Raft Consensus Algorithm',
    tech: 'Python',
    description: 'Implementation of the Raft distributed consensus protocol that operates correctly in lossy and unreliable networks.',
  },
  {
    name: 'Unix Shell',
    tech: 'C',
    description: 'A bash-like shell implementation supporting piping, redirects, and standard command line operations.',
  },
];

function Projects() {
  return (
    <section id="projects">
      <h2 className="section-title">Projects</h2>
      <div className="projects-grid">
        {projects.map((p) => (
          <div className="project-card" key={p.name}>
            <h3>{p.name}</h3>
            <div className="tech">{p.tech}</div>
            <p>{p.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
