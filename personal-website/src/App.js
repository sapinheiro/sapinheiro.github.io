import React, { Component } from 'react';
import Header from './components/header'
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
                    <Header></Header>
                    <div id="colorlib-main">
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