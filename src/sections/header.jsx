import React, { Component } from 'react'

class Header extends Component {
    render() {
        return (
            <header id="about">
                <nav id="nav-wrap">
                    <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
                    <a className="mobile-btn" href="#" title="Hide navigation">Hide navigation</a>
                    <ul id="nav" className="nav">
                        <li className="current"><a className="smoothscroll" href="#about">About</a></li>
                        <li><a className="smoothscroll" href="#projects">Projects</a></li>
                        <li><a className="smoothscroll" href="#experience">Experience</a></li>
                        <li><a className="smoothscroll" href="#education">Education</a></li>
                        <li><a className="smoothscroll" href="#skills">Skills</a></li>
                    </ul>
                </nav>

                <div className="row banner">
                    <div className="banner-text">
                        <h1 className="responsive-headline">Sam Pinheiro</h1>
                        <h3 style={{color:'#fff', fontFamily:'sans-serif'}}>
                            I'm a graduate of Northeastern University's College of Computer and Information Science, receiving my Bachelor of Science in May 2019.
                            I'm currently looking for a Senior Software Engineer position. I've had 3 years of experience across the government, financial, and trading
                            industries. 

                            You can find the latest version of my resume <a href="/assets/resume.pdf" style={{color: "#3399FF"}}>here</a>.
                        </h3>
                        <hr/>
                        <ul className="social">
                            <li key="linkedin">
                                <a href="https://www.linkedin.com/in/sapinheiro" target="_blank"><i className="fa fa-linkedin"/></a>
                            </li>
                            <li key="github">
                                <a href="https://github.com/sapinheiro" target="_blank"><i className="fa fa-github"/></a>
                            </li>
                            <li key="Email">
                                <a href="mailto:sampinheiro9@gmail.com" target="_blank"><i className="fa fa-envelope"/></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </header>
        )
    }
}

export default Header;