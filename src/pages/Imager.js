import React from 'react';
import Menu from '../components/Menu.js';
import MenuMobile from '../components/MenuMobile';
import Footer from '../components/Footer';

function Imager() {
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
                    <h3>IMAGER</h3>
                    <p>WEB DEVELOPMENT</p>
                    <div className="DirectionBar">
                        <a href="/portfolio/css-sketchbook">← Prev</a>
                        <a href="/portfolio">All Works</a>
                        <a href="/portfolio/jang-soo-sushi-bar">Next →</a>
                    </div>
                </div>

                <div className="PPContentWrapper">
                    <div className="PPColumn1">
                        <div className="PPColumn1Content">
                            <div className="PPColumn1TextBox">
                                <img src="/portfolio/Imager/Imager-large.jpg"></img>
                                <p><b>Project Detail:</b> Independent Work</p>
                                <p><b>Timeline:</b> July 2020 - August 2020</p>
                                <p>The web application Imager is an independent project that I worked on during the summer of 2020. I integrated <a href="https://api.imgur.com/" target="_blank">Imgur API</a> to develop an image host that pulls up pictures and GIFs based on tag words that the user inputs into the search bar.</p>
                                <p>The most difficult part of this relatively simple project was setting the tag word inputted into the search bar as the parameter in the query string. This was the first time I’ve worked on this specific concept, and while the solution was much simpler than I had anticipated (setting a null const input as the value), the hardest part was understanding how this worked and why this worked.</p>
                                <p>As for the lightbox feature, I used <a href="https://www.npmjs.com/package/react-modal-image" target="_blank">react-modal-image</a> to provide this functionality.</p>
                            </div>
                        </div>
                    </div>
                    <div className="PPColumn2">
                        <div className="PPColumn2Content">
                            <div className="PPColumn2TextBox">
                                <h2>TECHNICAL SKILLS</h2>
                                <p>API</p>
                                <div className="PPBar100"></div>
                                <p>Web Design</p>
                                <div className="PPBar50"></div>
                                <p>Web Development</p>
                                <div className="PPBar100"></div>
                                <br></br>

                                <h2>PERSONAL SKILLS</h2>
                                <p>Critical Thinking</p>
                                <div className="PPBar100"></div>
                                <p>Problem Solving</p>
                                <div className="PPBar100"></div>
                                <br></br>

                                <h2>TOOLS USED</h2>
                                <p>Axios (npm)</p>
                                <div className="PPBar75"></div>
                                <p>CSS</p>
                                <div className="PPBar75"></div>
                                <p>Git</p>
                                <div className="PPBar75"></div>
                                <p>Imgur API</p>
                                <div className="PPBar100"></div>
                                <p>ReactJS (HTML & JavaScript)</p>
                                <div className="PPBar100"></div>
                                <p>React Modal Image (npm)</p>
                                <div className="PPBar50"></div>
                                <p>Visual Studio Code</p>
                                <div className="PPBar100"></div>
                                <br></br>
                                <h2>RELEVANT LINKS</h2>
                                <div className="PPLinks">
                                    <a href="https://github.com/jimmyhwang4/imager" target="_blank">Github</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="PPImageWrapper">
                        <h2>WEB & MOBILE IMAGES</h2>
                        <div className="PPImageContainer">
                            <img src="/portfolio/Imager/Imager-1.jpg"></img>
                            <img src="/portfolio/Imager/Imager-2.jpg"></img>
                            <img src="/portfolio/Imager/Imager-3.jpg"></img>
                            <img src="/portfolio/Imager/Imager-4.jpg"></img>
                            <img src="/portfolio/Imager/Imager-5.jpg"></img>
                            <img src="/portfolio/Imager/Imager-6.jpg"></img>
                        </div>
                    </div>

                </div>

                <Footer />
            </div>
        </div>
    )
}

export default Imager;