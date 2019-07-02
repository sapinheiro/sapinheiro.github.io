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
                                        <span>&bull;</span> Developed primarily on projects involving data processing,
                                        visualization, and analysis<br/>
                                        <span>&bull;</span> Fulfilled data science duties for team primarily involving
                                        SQL, Q, and Excel<br/>
                                        <span>&bull;</span> Updated company data as well as streamlining processes for
                                        unmanageable legacy code<br/>
                                        <span>&bull;</span> Collaborated with team on principal projects under strict
                                        deadlines
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
                                        <span>&bull;</span> Wrote software enchancements and fixed bugs through
                                        Java/C#/SQL <br/>
                                        <span>&bull;</span> Created, executed, and monitored Java unit and automation
                                        tests within framework<br/>
                                        <span>&bull;</span> Validated system enhancements, fixes, and user
                                        workflows<br/>
                                        <span>&bull;</span> Expedited employee workflows with utilities<br/>
                                        <span>&bull;</span> Maintained development and test environments by upgrading
                                        databases and servers<br/>
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
                                        <span>&bull;</span> Nurtured their understanding of course concepts<br/>
                                        <span>&bull;</span> Graded homeworks, tests, and quizzes
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