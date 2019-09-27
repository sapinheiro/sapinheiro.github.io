import React, {Component} from 'react';


class Experience extends Component {
    render() {
        return (
            <section id="experience">
                <div>
                    <div className="education row">
                        <div className="four columns header-col">
                            <h1><span>Full-Time Experience</span></h1>
                        </div>
                        <div className="nine columns main-col">
                            <div className="row item">
                                <div className="twelve columns">
                                    <h3>Schonfeld Strategic Advisors</h3>
                                    <p className="info">
                                        Programmer / Data Analyst
                                        <br/>
                                        <em className="date">July 2018 - December 2018</em>
                                    </p>
                                    <p>
                                        <span>&bull;</span> Managed multiple technical projects simultaneously while
                                        prioritizing based on evolving firm needs<br/>
                                        <span>&bull;</span> Managed multiple technical projects simultaneously while
                                        prioritizing based on evolving firm needs<br/>
                                        <span>&bull;</span> Executed a wide range of data science duties primarily
                                        involving the use of Python (pandas), SQL, Q, and Excel<br/>
                                        <span>&bull;</span> Updated and maintained company data, and designed
                                        streamlined processes / automation for legacy code<br/>
                                    </p>
                                </div>
                            </div>
                            <div className="row item">
                                <div className="twelve columns">
                                    <h3>Charles River Development</h3>
                                    <p className="info">
                                        Software Engineer
                                        <br/>
                                        <em className="date">January 2017 - June 2017</em>
                                    </p>
                                    <p>
                                        <span>&bull;</span> Learned software and engineering management strategies;
                                        provided technical and systems design support in the architecture, development,
                                        implementation, testing, and deployment of software applications <br/>
                                        <span>&bull;</span> Created and executed Java unit and automation tests within
                                        framework<br/>
                                        <span>&bull;</span> Validated system enhancements, fixes, and user processes;
                                        expedited employee workflows with utilities<br/>
                                        <span>&bull;</span> Maintained development and test environments by upgrading
                                        and maintaining databases and servers<br/>
                                        <span>&bull;</span> Gained experience in a number of financial areas namely
                                        trade order management
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="education row">
                        <div className="four columns header-col">
                            <h1><span>Part-Time Experience</span></h1>
                        </div>
                        <div className="nine columns main-col">
                            <div className="row item">
                                <div className="twelve columns">
                                    <h3>Khoury College of Computer Sciences</h3>
                                    <p className="info">
                                        Teaching Assistant
                                        <br/>
                                        <em className="date">January 2017 - July 2019</em>
                                    </p>
                                    <p>
                                        <span>&bull;</span> Taught fellow students basic Java, higher-level
                                        Object-Oriented Design, and teamwork<br/>
                                        <span>&bull;</span> Nurtured their understanding of design patterns<br/>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="education row">
                        <div className="four columns header-col">
                            <h1><span>Volunteer Experience</span></h1>
                        </div>
                        <div className="nine columns main-col">
                            <div className="row item">
                                <div className="twelve columns">
                                    <h3>Bits & Bots</h3>
                                    <p className="info">
                                        Coordinator / Volunteer
                                        <br/>
                                        <em className="date">January 2019 - Present</em>
                                    </p>
                                    <p>
                                        <span>&bull;</span> Developed open source curriculum in LaTeX, communicating complex ideas to children<br/>
                                        <span>&bull;</span> Taught beginner robotics lessons in lower-income areas of Boston<br/>
                                        <span>&bull;</span> Coordinated with public libraries, helped lead meetings
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

export default Experience;