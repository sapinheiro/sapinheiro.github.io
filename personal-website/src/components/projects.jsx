import React, { Component } from 'react';


class Projects extends Component {
    render() {
        return (
            <section id="projects">
                <div className="row">
                    <div className="columns portfolio-item">
                        <div className="item-wrap">
                            <a href="#modal-01">
                                <img src="/img/bnb.jpg" className="item-img"/>
                                <div className="overlay">
                                    <div className="portfolio-item-meta">
                                        <h5>Bits & Bots</h5>
                                        <p>I develop open source curriculum and taught beginner robotics lessons in lower-income areas of Boston. Our goal is to promote an interest in STEM fields to 3rd-8th grade students around the US. You can find more information on <a href="https://bitsnbots.weebly.com/">our website.</a></p>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Projects;