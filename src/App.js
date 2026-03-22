import React from 'react';
import './App.css';
import Nav from './sections/Nav';
import Hero from './sections/Hero';
import Experience from './sections/Experience';
import Projects from './sections/Projects';
import Education from './sections/Education';
import Skills from './sections/Skills';
import Feedback from './sections/Feedback';

function App() {
  return (
    <>
      <Nav />
      <div className="site-wrapper">
        <Hero />
        <Experience />
        <Projects />
        <Education />
        <Skills />
        <Feedback />
        <footer className="footer">
          Sam Pinheiro &middot; {new Date().getFullYear()}
        </footer>
      </div>
    </>
  );
}

export default App;
