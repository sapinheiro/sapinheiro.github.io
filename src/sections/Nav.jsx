import React from 'react';

function Nav() {
  return (
    <nav className="nav">
      <div className="nav-inner">
        <a href="#top" className="nav-logo">SP</a>
        <ul className="nav-links">
          <li><a href="#experience">Experience</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#education">Education</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#feedback">Feedback</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
