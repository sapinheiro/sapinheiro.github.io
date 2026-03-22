import React from 'react';

function Hero() {
  return (
    <section className="hero" id="top">
      <h1>
        Sam <span className="accent">Pinheiro</span>
      </h1>
      <p className="tagline">
        Senior Software Engineer and AI-first developer with 8+ years of experience
        building scalable systems across social platforms, identity, public safety, and fintech.
        I maximize output with AI-driven workflows and tooling to ship faster and more reliably.
      </p>
      <div className="social-links">
        <a href="https://www.linkedin.com/in/sapinheiro" target="_blank" rel="noopener noreferrer">
          LinkedIn
        </a>
        <a href="https://github.com/sapinheiro" target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
        <a href="mailto:sampinheiro9@gmail.com">
          sampinheiro9@gmail.com
        </a>
      </div>
    </section>
  );
}

export default Hero;
