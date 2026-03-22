import React from 'react';

const experiences = [
  {
    company: 'Meta',
    role: 'Senior Software Engineer',
    date: 'Jul 2024 - Present',
    bullets: [
      'Led full-stack engineering for Instagram\'s desktop web registration migration, driving the project from implementation through approved launch decision with zero SEVs or leakages.',
      'Owned Youth Experiences as tech lead across Facebook, Instagram, Messenger, and Threads — delivering regulatory compliance flows for Youth Consent, Parental Consent, Age Verification, and Teen Rollout across multiple jurisdictions including Australia, Texas, Florida, and the EU, unlocking new growth channels while meeting global legal requirements.',
      'Resolved performance bottlenecks across all registration flows, culminating in over 1,000,000 MAU retention.',
      'Ranked top 1% across Meta in AI adoption; built AI-powered context files and workflows across the org to accelerate developer onboarding, automate repetitive tasks, and drive significant engineering time savings.',
      'Mentored junior engineers with structured ramp-up plans and delivered tech talks across the org; established as the go-to cross-org subject matter expert for registration and youth compliance.',
      'Proactively assisted and mitigated 8+ SEVs outside of oncall rotation, earning recognition as an org-wide reliability leader.',
    ],
  },
  {
    company: 'CLEAR',
    role: 'Senior Software Engineer',
    date: 'Jan 2024 - Jun 2024',
    location: 'New York, NY',
    bullets: [
      'Acted as a thought leader and standardized best backend practices across hundreds of microservices, enhancing the operational efficiency and consistency of the entire engineering organization.',
      'Spearheaded the integration of Snyk to redefine security practices within the SDLC. Collaborated extensively with engineering, product, and security teams to develop and implement comprehensive training programs on vulnerability management. Established a systematic approach to address and resolve vulnerabilities prior to expiry deadlines.',
      'Partnered with multiple teams to establish Tier 1 Service Level Objectives (SLOs) and significantly enhance system observability and monitoring using Datadog, thereby improving system reliability and performance metrics.',
    ],
  },
  {
    company: 'Mark43',
    role: 'Software Engineer',
    date: '2019 - 2023',
    bullets: [
      'Led re-platforming of the Records Management System serving law enforcement agencies nationwide, driving architecture decisions across engineering, product, and QA.',
      'Owned back-end engineering for a greenfield Jail Management System built as a Progressive Web App using Spring Framework.',
      'Drove adoption of Keycloak as the platform\'s authentication and identity provider, taking full ownership from evaluation through production integration.',
      'Architected a highly customizable form system to collect variant data across diverse customer requirements.',
      'Optimized the cross-login process enabling 46,000 users to seamlessly authenticate across systems; led the TypeScript migration of the front-end codebase.',
      'Authored technical documents that decreased client deployment time by 65%; led on-site hackathons and deployed mission-critical fixes in real-time with customers.',
    ],
  },
  {
    company: 'Schonfeld Strategic Advisors',
    role: 'Programmer / Data Analyst',
    date: '2018 - 2019',
    bullets: [
      'Automated the firm\'s bi-annual performance and risk assessment compliance reporting, eliminating manual processes across the organization.',
      'Built and modernized data pipelines using Python (pandas), SQL, and Q/KDB+ to power trading analytics and compliance workflows.',
      'Streamlined legacy system automation, reducing operational overhead and improving data reliability for the trading floor.',
    ],
  },
  {
    company: 'Charles River Development',
    role: 'Software Engineer',
    date: '2017 - 2018',
    bullets: [
      'Developed software in Java and C# for an investment solutions platform managing $25T+ in assets across institutional, wealth management, and hedge fund clients.',
      'Built a mock testing platform that improved QA efficiency by 90%, fundamentally streamlining engineer and customer validation workflows.',
    ],
  },
];

function Experience() {
  return (
    <section id="experience">
      <h2 className="section-title">Experience</h2>
      {experiences.map((exp) => (
        <div className="experience-item" key={exp.company}>
          <h3>{exp.company}</h3>
          <div className="role">{exp.role}</div>
          <div className="date">{exp.date}</div>
          <ul>
            {exp.bullets.map((b, i) => (
              <li key={i}>{b}</li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
}

export default Experience;
