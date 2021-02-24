import React from 'react';
import Menu from '../components/Menu.js';
import MenuMobile from '../components/MenuMobile';
import Footer from '../components/Footer';

function CLI() {
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
                    <h3>COMMUNITY LITERATURE INITIATIVE</h3>
                    <p>WEB DESIGN</p>
                    <div className="DirectionBar">
                        <a href="/portfolio/moo-milk">← Prev</a>
                        <a href="/portfolio">All Works</a>
                        <a href="/portfolio/world-stage-press">Next →</a>
                    </div>
                </div>

                <div className="PPContentWrapper">
                    <div className="PPColumn1">
                        <div className="PPColumn1Content">
                            <div className="PPColumn1TextBox">
                                <img src="/portfolio/CLI/CLI-large.jpg"></img>
                                <p><b>Role:</b> Volunteer Web Designer at Community Literature Initiative</p>
                                <p><b>Timeline:</b> November 2020 - present</p>
                                <p>Community Literature Initiative (CLI) is a non-profit organization based in Los Angeles dedicated to teaching writers of color how to write and publish books. The organization is split into the following three branches:</p>
                                <p>1. Publishing Class (main)</p>
                                <p>2. <a href="/portfolio/world-stage-press">World Stage Press</a></p>
                                <p>3. <a href="/portfolio/sims-library-of-poetry">Sims Library of Poetry</a></p>
                                <p>My role as a volunteer web designer mainly consisted of redesigning the existing websites per branch of CLI. The purpose of the Publishing Class website (created with Wix) was to display the types of classes that CLI provides for new and returning students, along with descriptions and methods of payment. I completely redesigned the header, the footer, and the following pages:</p>
                                <p>• PC Home</p>
                                <p>• Staff</p>
                                <p>• Alumni Publications</p>
                                <p>• Contact</p>
                                <p>• Tuition/Donation</p>
                                <p>• Scholarships</p>
                                <p>Over the past few months, I had diligently communicated with the organization’s founder Hiram Sims every week in order to receive and share updates regarding the development of the website. Updates were constantly made, such as when certain classes were taken out or placed in, when the staff gained or lost a member, or when new pictures were edited and added to the website. To keep myself in check especially while simultaneously maintaining the websites of World Stage Press and Sims Library of Poetry, I used Asana to organize my to-do list and to mark off finished work.</p>
                                <p>So far, my to-do tasks include:</p>
                                <p>• Redesigning the individual classes pages</p>
                                <p>• Redesigning the Sponsors page</p>
                                <p>• Designing the Testimonials page</p>
                            </div>
                        </div>
                    </div>
                    <div className="PPColumn2">
                        <div className="PPColumn2Content">
                            <div className="PPColumn2TextBox">
                                <h2>TECHNICAL SKILLS</h2>
                                <p>Graphic Design</p>
                                <div className="PPBar75"></div>
                                <p>Photo Editing</p>
                                <div className="PPBar75"></div>
                                <p>Web Design</p>
                                <div className="PPBar100"></div>
                                <br></br>

                                <h2>PERSONAL SKILLS</h2>
                                <p>Communication</p>
                                <div className="PPBar100"></div>
                                <p>Flexibility/Adaptability</p>
                                <div className="PPBar100"></div>
                                <p>Organization</p>
                                <div className="PPBar75"></div>
                                <p>Problem Solving</p>
                                <div className="PPBar100"></div>
                                <br></br>

                                <h2>TOOLS USED</h2>
                                <p>Adobe Lightroom</p>
                                <div className="PPBar50"></div>
                                <p>Adobe Photoshop</p>
                                <div className="PPBar75"></div>
                                <p>Wix</p>
                                <div className="PPBar100"></div>
                                <br></br>
                                <h2>RELEVANT LINKS</h2>
                                <div className="PPLinks">
                                    <a href="https://www.communitylit.org/pc-home" target="_blank">Website</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="PPImageWrapper">
                        <h2>WEBSITE IMAGES</h2>
                        <div className="PPImageContainer">
                            <img src="/portfolio/CLI/CLI-1.jpg"></img>
                            <img src="/portfolio/CLI/CLI-2.jpg"></img>
                            <img src="/portfolio/CLI/CLI-3.jpg"></img>
                            <img src="/portfolio/CLI/CLI-4.jpg"></img>
                            <img src="/portfolio/CLI/CLI-5.jpg"></img>
                        </div>
                    </div>

                </div>

                <Footer />
            </div>
        </div>
    )
}

export default CLI;