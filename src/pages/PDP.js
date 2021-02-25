import React from 'react';
import Menu from '../components/Menu.js';
import MenuMobile from '../components/MenuMobile';
import Footer from '../components/Footer';

function PDP() {
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
                    <h3>PI DELTA PSI</h3>
                    <p>GRAPHIC DESIGN</p>
                    <div className="DirectionBar">
                        <a href="/portfolio/mcw-global">← Prev</a>
                        <a href="/portfolio">All Works</a>
                        <a href="/portfolio/hargreaves-jones">Next →</a>
                    </div>
                </div>

                <div className="PPContentWrapper">
                    <div className="PPColumn1">
                        <div className="PPColumn1Content">
                            <div className="PPColumn1TextBox">
                                <img src="/portfolio/PDP/PDP-large.jpg"></img>
                                <p><b>Role:</b> Fraternity Artist</p>
                                <p><b>Timeline:</b> January 2018 - May 2019</p>
                                <p>For three semesters, I served as the fraternity artist for Pi Delta Psi, an Asian-interest fraternity, at New York University. The majority of my work consisted of producing advertising content for major events such as <a href="https://www.youtube.com/watch?v=uIFWbm2qDiE" target="_blank">rush week</a> (a week-long process of recruiting students to Greek letter organizations) and <a href="https://www.youtube.com/watch?v=nnyqhKYh4HU" target="_blank">probate</a> (a gathering where new members of the fraternity are revealed at the end of a semester). I have produced many flyers and banners for these events, which were printed on card stocks for handouts or virtually processed for social media publicity. To increase the presence of the fraternity, I’ve photographed the members and edited them to be posted on Facebook, Instagram, and the website for rush week and other big events.</p>
                                <p>While this appeared to be an independent role, I put effort into involving the opinions of the members of the fraternity as much as I could during my design process. I definitely grew a lot as a digital designer from the constructive feedback that I received for my works, which helped me represent the fraternity as best as I could. Organization was also key for many of my projects, whether it was archiving the files for everyone to easily access or arranging photo shoots throughout a week with around thirty members. While I was unfortunately not able to continue my role as the fraternity artist after I was elected president, I allocated my time to mentor the upcoming fraternity artist and provided constructive feedback whenever it was requested.</p>
                            </div>
                        </div>
                    </div>
                    <div className="PPColumn2">
                        <div className="PPColumn2Content">
                            <div className="PPColumn2TextBox">
                                <h2>TECHNICAL SKILLS</h2>
                                <p>Advertising</p>
                                <div className="PPBar100"></div>
                                <p>Branding</p>
                                <div className="PPBar75"></div>
                                <p>Graphic Design</p>
                                <div className="PPBar100"></div>
                                <p>Photography and Editing</p>
                                <div className="PPBar75"></div>
                                <br></br>
                                <h2>PERSONAL SKILLS</h2>
                                <p>Leadership</p>
                                <div className="PPBar100"></div>
                                <p>Organization</p>
                                <div className="PPBar75"></div>
                                <p>Professionalism</p>
                                <div className="PPBar100"></div>
                                <p>Teamwork</p>
                                <div className="PPBar100"></div>
                                <br></br>
                                <h2>TOOLS USED</h2>
                                <p>Adobe Illustrator</p>
                                <div className="PPBar100"></div>
                                <p>Adobe InDesign</p>
                                <div className="PPBar100"></div>
                                <p>Adobe Lightroom</p>
                                <div className="PPBar75"></div>
                                <p>Adobe Photoshop</p>
                                <div className="PPBar100"></div>
                                <p>Canon EOS M50</p>
                                <div className="PPBar75"></div>
                                <br></br>
                                <h2>RELEVANT LINKS</h2>
                                <div className="PPLinks">
                                    <a href="http://nyupideltapsi.com/" target="_blank">Website</a>
                                    <a href="https://www.facebook.com/nyupideltapsi/" target="_blank">Facebook</a>
                                    <a href="https://www.instagram.com/nyupdpsi/?hl=en" target="_blank">Instagram</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="PPImageWrapper">
                        <h2>FEATURED WORK</h2>
                        <div className="PPImageContainer">
                            <img src="/portfolio/PDP/PDP-1.jpg"></img>
                            <img src="/portfolio/PDP/PDP-2.jpg"></img>
                            <img src="/portfolio/PDP/PDP-3.jpg"></img>
                            <img src="/portfolio/PDP/PDP-4.jpg"></img>
                            <img src="/portfolio/PDP/PDP-5.jpg"></img>
                            <img src="/portfolio/PDP/PDP-6.jpg"></img>
                            <img src="/portfolio/PDP/PDP-8.jpg"></img>
                            <img src="/portfolio/PDP/PDP-9.jpg"></img>
                            <img src="/portfolio/PDP/PDP-10.jpg"></img>
                            <img src="/portfolio/PDP/PDP-11.jpg"></img>
                        </div>
                    </div>

                </div>

                <Footer />
            </div>
        </div>
    )
}

export default PDP;