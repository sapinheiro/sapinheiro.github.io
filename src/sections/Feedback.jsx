import React from 'react';

const feedbackItems = [
  {
    quote: 'Sam joined the team back in July but it feels like he\'s been with the team for much longer than 5 months. Sam immediately made an impact in various critical areas. Sam established the first ever Instagram performance critical alerts in our backend systems, despite lack of prior experience in alerts. He managed the project with expertise from defining the scope to adding robust documentation.',
    author: 'Vincent Kim',
    title: 'Senior Software Engineer',
    company: 'Meta',
  },
  {
    quote: 'Sam is an incredibly well rounded engineer and excelled at the two key areas I look at when evaluating the prowess of a cross-functional partner: skill within their field, and the ability to bring that expertise to a cross functional team and contribute efficiently to move the team towards their goals. Sam is the Youth domain expert and the one person who knows the most in the space.',
    author: 'Dan Hart',
    title: 'Product Growth Analyst',
    company: 'Meta',
  },
  {
    quote: 'Sam played an integral role in the Threads Youth launch, delivering major impact under heavy time pressure. Sam went above and beyond, expanding his work across multiple surfaces and sign-up flows. He demonstrated technical leadership, was always available as a domain expert, and took radical ownership, resolving ambiguity and driving cross-functional decisions while working with incomplete information.',
    author: 'Michael Continues',
    title: 'Software Engineer',
    company: 'Meta',
  },
  {
    quote: 'The project would not have been successful without Sam. The aspects that really stood out were his technical delivery and execution excellence, and collaborative leadership. Sam prepared an aggressive execution workback plan that gave me clarity on project timelines, and he delivered on it.',
    author: 'Bradley Wu',
    title: 'Staff Software Engineer',
    company: 'Meta',
  },
  {
    quote: 'Sam\'s deep dive on the controller logic and subsequent execution fixed our experiment exposure imbalance issue which had been ongoing for 5 weeks. Furthermore, his solution improved our frontend routing systems by providing a mechanism for future experiment gating. He proactively solves issues and provides clear and concise updates.',
    author: 'Joshua Greenfield',
    title: 'Software Engineer',
    company: 'Meta',
  },
  {
    quote: 'Sam was the primary point of contact for the Australia Under-16 project, leading the end-to-end registration flow and working closely with engineering teams across Facebook, Messenger, and other orgs. His ability to debug and resolve issues quickly under pressure was clear when he addressed several last-minute bugs and SEVs before and after launch.',
    author: 'Piyush Aggarwal',
    title: 'Staff Software Engineer',
    company: 'Meta',
  },
];

function Feedback() {
  return (
    <section id="feedback">
      <h2 className="section-title">Feedback &amp; Accolades</h2>
      {feedbackItems.map((item, i) => (
        <div className="feedback-item" key={i}>
          <blockquote>"{item.quote}"</blockquote>
          <div className="attribution">
            {item.author}, {item.title} &mdash;{' '}
            <span className="company">{item.company}</span>
          </div>
        </div>
      ))}
    </section>
  );
}

export default Feedback;
