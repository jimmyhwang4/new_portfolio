import React from 'react';
import Menu from '../components/Menu.js';
import MenuMobile from '../components/MenuMobile';
import Footer from '../components/Footer';

function SLP() {
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
                    <h3>SIMS LIBRARY OF POETRY</h3>
                    <p>WEB DESIGN</p>
                    <div className="DirectionBar">
                        <a href="/portfolio/world-stage-press">← Prev</a>
                        <a href="/portfolio">All Works</a>
                        <a href="/portfolio/fuel-cycle">Next →</a>
                    </div>
                </div>

                <div className="PPContentWrapper">
                    <div className="PPColumn1">
                        <div className="PPColumn1Content">
                            <div className="PPColumn1TextBox">
                                <img src="/portfolio/SLP/SLP-large.jpg"></img>
                                <p><b>Role:</b> Volunteer Web Designer at Community Literature Initiative</p>
                                <p><b>Timeline:</b> November 2020 - present</p>
                                <p>Owned by Community Literature Initiative, Sims Library of Poetry is the first black-owned poetry library in the state of California that offers a space to read, write, study, perform, and appreciate poetry to the South Los Angeles community. As the volunteer web designer, I was tasked with maintaining and updating the website which was created with Wix. Key design changes for pages that I have made include:</p>
                                <p>• Home</p>
                                <p>• About Us</p>
                                <p>• Events & Contest</p>
                                <p>• Blog</p>
                                <p>• Support Us (Membership, Donate, Volunteer)</p>
                            </div>
                        </div>
                    </div>
                    <div className="PPColumn2">
                        <div className="PPColumn2Content">
                            <div className="PPColumn2TextBox">
                                <h2>TECHNICAL SKILLS</h2>
                                <p>Graphic Design</p>
                                <div className="PPBar50"></div>
                                <p>Photo Editing</p>
                                <div className="PPBar75"></div>
                                <p>Web Design</p>
                                <div className="PPBar100"></div>
                                <br></br>

                                <h2>PERSONAL SKILLS</h2>
                                <p>Communication</p>
                                <div className="PPBar75"></div>
                                <p>Flexibility/Adaptability</p>
                                <div className="PPBar100"></div>
                                <p>Time Management</p>
                                <div className="PPBar100"></div>
                                <br></br>

                                <h2>TOOLS USED</h2>
                                <p>Adobe Lightroom</p>
                                <div className="PPBar50"></div>
                                <p>Adobe Photoshop</p>
                                <div className="PPBar50"></div>
                                <p>Wix</p>
                                <div className="PPBar100"></div>
                                <br></br>
                                <h2>RELEVANT LINKS</h2>
                                <div className="PPLinks">
                                    <a href="https://www.simslibraryofpoetry.org/" target="_blank">Website</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="PPImageWrapper">
                        <h2>WEBSITE IMAGES</h2>
                        <div className="PPImageContainer">
                            <img src="/portfolio/SLP/SLP-1.jpg"></img>
                            <img src="/portfolio/SLP/SLP-2.jpg"></img>
                            <img src="/portfolio/SLP/SLP-3.jpg"></img>
                            <img src="/portfolio/SLP/SLP-4.png"></img>
                            <img src="/portfolio/SLP/SLP-5.png"></img>
                        </div>
                    </div>

                </div>

                <Footer />
            </div>
        </div>
    )
}

export default SLP;