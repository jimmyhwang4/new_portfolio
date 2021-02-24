import React from 'react';
import Menu from '../components/Menu.js';
import MenuMobile from '../components/MenuMobile';
import Footer from '../components/Footer';

function UX() {
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
                    <h3>ACCESSIBILITY IN FOREIGN COUNTRIES</h3>
                    <p>UX RESEARCH</p>
                    <div className="DirectionBar">
                        <a href="/portfolio/mta-man">← Prev</a>
                        <a href="/portfolio">All Works</a>
                        <a href="/portfolio/navi">Next →</a>
                    </div>
                </div>

                <div className="PPContentWrapper">
                    <div className="PPColumn1">
                        <div className="PPColumn1Content">
                            <div className="PPColumn1TextBox">
                                <img src="/portfolio/Hargreaves/Hargreaves-large.jpg"></img>
                                <p>INSERT TEXT HERE</p>
                                <p>INSERT TEXT HERE</p>
                            </div>
                        </div>
                    </div>
                    <div className="PPColumn2">
                        <div className="PPColumn2Content">
                            <div className="PPColumn2TextBox">
                            <h2>TECHNICAL SKILLS</h2>
                                <p>Interviewing</p>
                                <div className="PPBar100"></div>
                                <p>Researching</p>
                                <div className="PPBar100"></div>
                                <br></br>

                                <h2>PERSONAL SKILLS</h2>
                                <p>Critical Thinking</p>
                                <div className="PPBar100"></div>
                                <p>Problem Solving</p>
                                <div className="PPBar75"></div>
                                <p>Teamwork</p>
                                <div className="PPBar100"></div>
                                <p>Time Management</p>
                                <div className="PPBar100"></div>
                                <br></br>
                            </div>
                        </div>
                    </div>

                    <div className="PPImageWrapper">
                        <div className="PPImageContainer">
                            <img src="/portfolio/Hargreaves/Hargreaves-large.jpg"></img>
                            <img src="/portfolio/Hargreaves/Hargreaves-large.jpg"></img>
                            <img src="/portfolio/Hargreaves/Hargreaves-large.jpg"></img>
                            <img src="/portfolio/Hargreaves/Hargreaves-large.jpg"></img>
                        </div>
                    </div>

                </div>

                <Footer />
            </div>
        </div>
    )
}

export default UX;