import React, {Component} from 'react';


class Projects extends Component {
    render() {
        return (
            <section id="projects">
                <h2>Projects</h2>
                <div className="row">
                    <div id="projects-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
                        <div className="columns collapsed projects-item">
                            <div className="item-wrap">
                                <img src="/img/adventure.jpg" className="item-img"/>
                                <div className="overlay">
                                    <div className="projects-item-meta">
                                        <h5>Adventure Game (Python Engine)</h5>
                                        <p>I'm undertaking the totality of the coding and script-writing process for the
                                            development of a game. Freelancing for the art and other assets.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="columns collapsed projects-item">
                            <div className="item-wrap">
                                <img src="/img/bitwarden.png" className="item-img"/>
                                <div className="overlay">
                                    <div className="projects-item-meta">
                                        <h5>Self-Hosting Bitwarden Server</h5>
                                        <p>Set up my own server instance for password manager (Bitwarden) utilizing existing open-source Rust application.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="columns collapsed projects-item">
                            <div className="item-wrap">
                                <img src="/img/website.jpg" className="item-img"/>
                                <div className="overlay">
                                    <div className="projects-item-meta">
                                        <h5>Personal Website (React)</h5>
                                        <p>This is the second iteration of my personal website using React. Set up continuous deployment
                                        through github pages and heroku.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="columns collapsed projects-item">
                            <div className="item-wrap">
                                <img src="/img/bnb.jpg" className="item-img"/>
                                <div className="overlay">
                                    <div className="projects-item-meta">
                                        <h5>Bits & Bots</h5>
                                        <p>I develop open source curriculum and taught beginner robotics lessons in
                                            lower-income areas of Boston. Our goal is to promote an interest in STEM
                                            fields to 3rd-8th grade students around the US. You can find more
                                            information on <a href="https://bitsnbots.weebly.com/">our website.</a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div id="projects-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
                        <div className="columns collapsed projects-item">
                            <div className="item-wrap">
                                <img src="/img/shell.png" className="item-img"/>
                                <div className="overlay">
                                    <div className="projects-item-meta">
                                        <h5>Unix Shell (C)</h5>
                                        <p>A bash implementation that supports command line operations like piping and
                                            redirects.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="columns collapsed projects-item">
                            <div className="item-wrap">
                                <img src="/img/raft.jpg" className="item-img"/>
                                <div className="overlay">
                                    <div className="projects-item-meta">
                                        <h5>Raft Consensus Algorithm (Python)</h5>
                                        <p>Implemented a version of the <a href="https://raft.github.io/">Raft Protocol</a> that still works in lossy and unreliable networks.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <h1>*Note: Some of my projects on Github were requested by those I worked with to be private. Can be
                    made public upon request.</h1>
            </section>
        );
    }
}

export default Projects;