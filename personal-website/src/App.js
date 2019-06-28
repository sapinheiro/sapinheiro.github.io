import React, { Component } from 'react';
import Sidebar from './components/sidebar'
import About from './components/about'
import Projects from './components/projects'
import Education from './components/education'
import Experience from './components/experience'
import Skills from './components/skills'


class App extends Component {
    render() {
        return (
            <div id="colorlib-page">
                <div id="container-wrap">
                    <Sidebar></Sidebar>
                    <div id="colorlib-main">
                        <About></About>
                        <Projects></Projects>
                        <Education></Education>
                        <Experience></Experience>
                        <Skills></Skills>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;