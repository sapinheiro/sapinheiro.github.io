import React, { Component } from 'react';
import Header from './sections/header'
import Projects from './sections/projects'
import Education from './sections/education'
import Experience from './sections/experience'
import Skills from './sections/skills'

class App extends Component {
  render() {
      return (
          <div id="colorlib-page">
              <div id="container-wrap">
                  <Header/>
                  <div id="colorlib-main">
                      <Experience/>
                      <Projects/>
                      <Education/>
                      <Skills/>
                  </div>
              </div>
          </div>
      );
  }
}

export default App;