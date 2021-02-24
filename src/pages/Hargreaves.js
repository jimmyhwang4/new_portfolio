import React from 'react';
import Menu from '../components/Menu.js';
import MenuMobile from '../components/MenuMobile';
import Footer from '../components/Footer';

function Hargreaves() {
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
                    <h3>HARGREAVES JONES</h3>
                    <p>WEB CONSULTING</p>
                    <div className="DirectionBar">
                        <a href="/portfolio/pi-delta-psi">← Prev</a>
                        <a href="/portfolio">All Works</a>
                        <a href="/portfolio/navi">Next →</a>
                    </div>
                </div>

                <div className="PPContentWrapper">
                    <div className="PPColumn1">
                        <div className="PPColumn1Content">
                            <div className="PPColumn1TextBox">
                                <img src="/portfolio/Hargreaves/Hargreaves-large.jpg"></img>
                                <p><b>Role:</b> Web Consultant at Hargreaves Jones</p>
                                <p><b>Timeline:</b> April 2018 - January 2019</p>
                                <p>Just before the summer of 2018, I accepted a part time Web Consultant position at a landscape architecture company called Hargreaves Jones (previously known as Hargreaves Associates). My responsibilities included, but were not limited to, the following:</p>
                                <p>• Overall maintenance of the company’s website using WordPress</p>
                                <p>• Creation of individual project pages, including resizing and editing photography</p>
                                <p>• Creation of individual news pages, including summarizing news content and proofreading</p>
                                <p>• Creation of the Ideas page and all its contents to showcase books and manuscripts by or featuring Hargreaves Jones</p>
                                <p>• Archiving and organizing all published content in respective sections within the company’s shared drive</p>
                                <p>• Implementation of Search Engine Optimization to show the website on the first page of Google with keywords “hargreaves”, “hargreaves associates”, “hargreaves landscape architecture”, etc.</p>
                                <p>• Designing and implementing emails with HTML & CSS for marketing or outreach purposes</p>
                                <p>Working at Hargreaves Jones for 10 months while attending college full time has taught me the importance of time management, communication, and adaptability. My hours were capped at around 20 per week, but there were numerous moments where I would have to work more or less depending on important deadlines or my personal matters. Being the only employee familiar with website work, I definitely had a lot of creative freedom, but in order to not stray away from the company's vision, I constantly communicated with the president, principles, and associates to align my works with the company’s standards. And frankly, I was not even aware of the existence of landscape architecture prior to applying for this position. But being exposed to such a new environment taught me so much about landscape architecture from the company’s work, how the company functioned, and how the company impacted the community. Working at Hargreaves Jones definitely gave me a sweet taste of a professional career and an eye-opening experience of stepping out of my comfort zone.</p>
                            </div>
                        </div>
                    </div>
                    <div className="PPColumn2">
                        <div className="PPColumn2Content">
                            <div className="PPColumn2TextBox">
                                <h2>TECHNICAL SKILLS</h2>
                                <p>Photo Editing</p>
                                <div className="PPBar75"></div>
                                <p>Email Design</p>
                                <div className="PPBar75"></div>
                                <p>SEO Optimization</p>
                                <div className="PPBar75"></div>
                                <p>Web Design</p>
                                <div className="PPBar100"></div>
                                <p>Web Development</p>
                                <div className="PPBar50"></div>
                                <br></br>

                                <h2>PERSONAL SKILLS</h2>
                                <p>Communication</p>
                                <div className="PPBar100"></div>
                                <p>Flexibility/Adaptability</p>
                                <div className="PPBar100"></div>
                                <p>Problem Solving</p>
                                <div className="PPBar100"></div>
                                <p>Time Management</p>
                                <div className="PPBar100"></div>
                                <br></br>

                                <h2>TOOLS USED</h2>
                                <p>Adobe Lightroom</p>
                                <div className="PPBar75"></div>
                                <p>Adobe Photoshop</p>
                                <div className="PPBar75"></div>
                                <p>HTML & CSS</p>
                                <div className="PPBar75"></div>
                                <p>WordPress</p>
                                <div className="PPBar100"></div>
                                <br></br>
                                <h2>RELEVANT LINKS</h2>
                                <div className="PPLinks">
                                    <a href="http://www.hargreaves.com/" target="_blank">Website</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="PPImageWrapper">
                        <h2>WEBSITE IMAGES</h2>
                        <div className="PPImageContainer">
                            <img src="/portfolio/Hargreaves/Hargreaves-1.jpg"></img>
                            <img src="/portfolio/Hargreaves/Hargreaves-2.jpg"></img>
                            <img src="/portfolio/Hargreaves/Hargreaves-3.jpg"></img>
                            <img src="/portfolio/Hargreaves/Hargreaves-4.jpg"></img>
                            <img src="/portfolio/Hargreaves/Hargreaves-5.jpg"></img>
                            <img src="/portfolio/Hargreaves/Hargreaves-6.jpg"></img>
                        </div>
                    </div>

                </div>

                <Footer />
            </div>
        </div>
    )
}

export default Hargreaves;