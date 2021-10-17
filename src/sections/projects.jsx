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
                        <div className="columns collapsed projects-item">
                            <div className="item-wrap">
                                <img src="/img/tetris.jpg" className="item-img"/>
                                <div className="overlay">
                                    <div className="projects-item-meta">
                                        <h5>Tetris Game (Processing)</h5>
                                        <p>Developed a variation of a Tetris game that utilized Decision Tree
                                            Learning to assign various "personalities" to the pieces as the game
                                            went on.</p>
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
                                <img src="/img/music.jpg" className="item-img"/>
                                <div className="overlay">
                                    <div className="projects-item-meta">
                                        <h5>Music Editor (Java)</h5>
                                        <p>A music editor made using the Model-View-Controller pattern and
                                            object-oriented practices.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="columns collapsed projects-item">
                            <div className="item-wrap">
                                <img src="/img/dogs.jpg" className="item-img"/>
                                <div className="overlay">
                                    <div className="projects-item-meta">
                                        <h5>Animal Shelter Website (React)</h5>
                                        <p>Sample website created to learn React. Can interact with a database and deals
                                            with several CRUD permissions.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
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
                                <img src="/img/pension.jpg" className="item-img"/>
                                <div className="overlay">
                                    <div className="projects-item-meta">
                                        <h5>Pension Calculator</h5>
                                        <p>An updated retirement calculator made for the MSRB. Main goal was to simplify
                                            the experience for the user as much as possible. Worked on both the
                                            front-end and back-end.</p>
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
                                <img src="/img/raft.jpg" className="item-img"/>
                                <div className="overlay">
                                    <div className="projects-item-meta">
                                        <h5>Raft Consensus Algorithm (Python)</h5>
                                        <p>Implemented a version of the <a href="https://raft.github.io/">Raft Protocol</a> that still works in lossy and unreliable networks.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="columns collapsed projects-item">
                            <div className="item-wrap">
                                <img src="/img/memory.jpg" className="item-img"/>
                                <div className="overlay">
                                    <div className="projects-item-meta">
                                        <h5>Dynamic Memory Allocator (C)</h5>
                                        <p>A dynamic and fast memory allocator to emulate the behavior of malloc in the
                                            C library.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="columns collapsed projects-item">
                            <div className="item-wrap">
                                <img src="/img/aquarium.jpg" className="item-img"/>
                                <div className="overlay">
                                    <div className="projects-item-meta">
                                        <h5>Aquarium Simulator (SQL/Ruby on Rails)</h5>
                                        <p>Simulates data interaction of a mock aquarium. Allows a user to manipulate
                                            the data and learn about the relationships between the various
                                            interconnecting entities.</p>
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