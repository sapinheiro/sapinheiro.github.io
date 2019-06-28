import React, { Component } from 'react';


class About extends Component {
    render() {
        return (
            <div>
                <section className="resume-section p-3 p-lg-5 d-flex d-column" id="about">
                    <div className="my-auto">
                        <h1 className="mb-0">Samuel
                            <span className="text-primary">Pinheiro</span>
                        </h1>
                        <div className="subheading mb-5">10-20 Leon Street #6180 · Boston, MA 02115 · (518) 935-3975 ·
                            <a href="mailto:sampinheiro9@gmail.com">sampinheiro9@gmail.com</a>
                        </div>
                        <p>I'm a graduate of Northeastern University's College of Computer and -Information Science. I
                            expect to receive my Bachelor of Science in June 2019.
                            I'm currently looking for a full-time position. I've had previous experience as a Software
                            Engineer with Charles River Development and Programmer for Schonfeld Strategic Advisors.
                            During off-time at school I work as a teaching assistant for some the CS courses I've
                            excelled
                            at. I also enjoy writing and volunteering.
                        </p>
                        <p>You can find the latest version of my resume <a href="/public/assets/resume.pdf">here</a>.</p>
                        <ul className="list-inline list-social-icons mb-0">
                            <li className="list-inline-item">
                                <a href="https://www.linkedin.com/in/samuel-pinheiro-2b3320149/">
                  <span className="fa-stack fa-lg">
                  </span>
                                </a>
                            </li>
                            <li className="list-inline-item">
                                <a href="https://github.com/sapinheiro">
                  <span className="fa-stack fa-lg">
                  </span>
                                </a>
                            </li>
                        </ul>
                        <p>*Note: Some of my projects on github were requested by those I worked with to be private. Can
                            be made public upon request.</p>
                    </div>
                </section>
            </div>
        );
    }
}

export default About;