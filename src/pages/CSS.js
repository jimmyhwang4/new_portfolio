import React from 'react';
import Menu from '../components/Menu.js';
import MenuMobile from '../components/MenuMobile';
import Footer from '../components/Footer';

function CSS() {
    return (
        <div>
            <div className="MenuWeb">
                <Menu />
            </div>
            <div className="MenuMobile">
                <MenuMobile />
            </div>

            <div className="PPWrapper">
                <div className="PPTitle">
                    <h3>CSS SKETCHBOOK</h3>
                    <p>WEB DESIGN</p>
                    <div className="DirectionBar">
                        <a href="/portfolio/fuel-cycle">← Prev</a>
                        <a href="/portfolio">All Works</a>
                        <a href="/portfolio/imager">Next →</a>
                    </div>
                </div>

                <div className="PPContentWrapper">
                    <div className="PPColumn1">
                        <div className="PPColumn1Content">
                            <div className="PPColumn1TextBox">
                                <img src="/portfolio/CSS/CSS-large.jpg"></img>
                                <p><b>Project Detail:</b> Independent Work</p>
                                <p><b>Timeline:</b> September 2020</p>
                                <p>While I had become more comfortable with JavaScript in my previous projects, I wanted to show more love to CSS and expand my skills in it. So I decided to work on something fun, and over the course of September, I created a small gallery with images and designs that I coded with CSS. Playing around with gradients and understanding how skewing worked took a lot of time and patience, but it felt extremely rewarding when I achieved the results that I expected. This is a project that I would love to update with new and more complex designs as time goes on.</p>
                            </div>
                        </div>
                    </div>
                    <div className="PPColumn2">
                        <div className="PPColumn2Content">
                            <div className="PPColumn2TextBox">
                                <h2>TECHNICAL SKILLS</h2>
                                <p>Web Design</p>
                                <div className="PPBar100"></div>
                                <br></br>

                                <h2>PERSONAL SKILLS</h2>
                                <p>Attention to Detail</p>
                                <div className="PPBar100"></div>
                                <p>Creativity</p>
                                <div className="PPBar100"></div>
                                <br></br>

                                <h2>TOOLS USED</h2>
                                <p>CSS</p>
                                <div className="PPBar100"></div>
                                <p>Git</p>
                                <div className="PPBar50"></div>
                                <p>ReactJS (HTML & JavaScript)</p>
                                <div className="PPBar50"></div>
                                <p>Visual Studio Code</p>
                                <div className="PPBar100"></div>
                                <br></br>
                                <h2>RELEVANT LINKS</h2>
                                <div className="PPLinks">
                                    <a href="https://css-sketchbook.netlify.app/" target="_blank">Website</a>
                                    <a href="https://github.com/jimmyhwang4/css-sketchbook" target="_blank">Github</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="PPImageWrapper">
                        <h2>CSS IMAGES</h2>
                        <div className="PPImageContainer">
                            <img src="/portfolio/CSS/CSS-1.jpg"></img>
                            <img src="/portfolio/CSS/CSS-2.jpg"></img>
                        </div>
                    </div>

                </div>

                <Footer />
            </div>
        </div>
    )
}

export default CSS;