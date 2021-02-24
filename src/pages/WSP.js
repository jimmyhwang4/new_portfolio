import React from 'react';
import Menu from '../components/Menu.js';
import MenuMobile from '../components/MenuMobile';
import Footer from '../components/Footer';

function WSP() {
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
                    <h3>WORLD STAGE PRESS</h3>
                    <p>WEB DESIGN</p>
                    <div className="DirectionBar">
                        <a href="/portfolio/community-literature-initiative">← Prev</a>
                        <a href="/portfolio">All Works</a>
                        <a href="/portfolio/sims-library-of-poetry">Next →</a>
                    </div>
                </div>

                <div className="PPContentWrapper">
                    <div className="PPColumn1">
                        <div className="PPColumn1Content">
                            <div className="PPColumn1TextBox">
                                <img src="/portfolio/WSP/WSP-large.jpg"></img>
                                <p><b>Role:</b> Volunteer Web Designer at Community Literature Initiative</p>
                                <p><b>Timeline:</b> November 2020 - present</p>
                                <p>World Stage Press is the publishing department of Community Literature Initiative for new and emerging African-American writers. My role as a volunteer web designer consisted of maintaining and updating the website which was created with WordPress. There was definitely a learning curve to have myself adjusted as I had to familiarize myself with the many existing plugins used in the website (e.g. Porto, WooCommerce, WPBakery). Key design changes for pages that I have made include:</p>
                                <p>• Home</p>
                                <p>• Authors</p>
                                <p>• Shop</p>
                                <p>• Staff</p>
                                <p>Key technical changes that I have made include:</p>
                                <p>• Compression of website photos (especially of products) for faster loading time</p>
                                <p>• Installation of Akismet Anti-Spam for comment filtering and protection from spam</p>
                                <p>• Installation of Wordfence Security plugin for website security</p>
                                <p>• Installation of Variation Switches for WooCommerce for product variation options</p>
                                <p>• Installation of Yoast SEO for search engine optimization</p>
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
                                <p>Web Development</p>
                                <div className="PPBar50"></div>
                                <br></br>

                                <h2>PERSONAL SKILLS</h2>
                                <p>Communication</p>
                                <div className="PPBar75"></div>
                                <p>Flexibility/Adaptability</p>
                                <div className="PPBar100"></div>
                                <p>Problem Solving</p>
                                <div className="PPBar100"></div>
                                <p>Time Management</p>
                                <div className="PPBar75"></div>
                                <br></br>

                                <h2>TOOLS USED</h2>
                                <p>Adobe Lightroom</p>
                                <div className="PPBar75"></div>
                                <p>Adobe Photoshop</p>
                                <div className="PPBar75"></div>
                                <p>WordPress</p>
                                <div className="PPBar100"></div>
                                <br></br>
                                <h2>RELEVANT LINKS</h2>
                                <div className="PPLinks">
                                    <a href="https://www.worldstagepress.org/" target="_blank">Website</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="PPImageWrapper">
                        <h2>WEBSITE IMAGES</h2>
                        <div className="PPImageContainer">
                            <img src="/portfolio/WSP/WSP-large.jpg"></img>
                            <img src="/portfolio/WSP/WSP-large.jpg"></img>
                            <img src="/portfolio/WSP/WSP-large.jpg"></img>
                            <img src="/portfolio/WSP/WSP-large.jpg"></img>
                        </div>
                    </div>

                </div>

                <Footer />
            </div>
        </div>
    )
}

export default WSP;