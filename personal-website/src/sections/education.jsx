import React, { Component } from 'react';


class Education extends Component {
    render() {
        return (
            <section id="education">
                <div>
                    <div className="education row">
                        <div className="three columns header-col">
                            <h1><span>Education</span></h1>
                        </div>
                        <div className="nine columns main-col">
                            <div className="row item">
                                <div className="twelve columns">
                                    <h3>Northeastern University</h3>
                                    <p className="info">
                                        Bachelor of Science in Computer Science
                                        <br/>
                                        <em className="date">September 2015 - June 2019</em>
                                    </p>
                                    <p>
                                        <b>GPA:</b> 3.46 / 4.0<br/>
                                        <b>Major GPA:</b> 3.60 / 4.0<br/>
                                        <b>Relevant Courses:</b><br/>
                                        <span>&bull;</span> Fundamentals of Computer Science I/II<br/>
                                        <span>&bull;</span> Discrete Structures<br/>
                                        <span>&bull;</span> Logic and Computation<br/>
                                        <span>&bull;</span> Algorithms and Data<br/>
                                        <span>&bull;</span> Object-Oriented Design<br/>
                                        <span>&bull;</span> Software Development<br/>
                                        <span>&bull;</span> Computer Systems<br/>
                                        <span>&bull;</span> Database Design<br/>
                                        <span>&bull;</span> Networks and Distributed Systems<br/>
                                        <span>&bull;</span> Theory of Computation<br/>
                                        <span>&bull;</span> Technology and Human Values<br/>
                                        <span>&bull;</span> Embedded Design: Enabling Electronics<br/>
                                        <span>&bull;</span> Programming Languages<br/>
                                        <span>&bull;</span> Game AI
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Education;