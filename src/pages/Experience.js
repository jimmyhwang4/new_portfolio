import React from 'react';
import Menu from '../components/Menu.js';
import MenuMobile from '../components/MenuMobile';
import Footer from '../components/Footer';

function Experience() {
    return (
        <div>
            <div className="MenuWeb">
                <Menu />
            </div>

            <div className="MenuMobile">
                <MenuMobile />
            </div>
            
            <div className="ExperienceWrapper">
                <h2>PROFESSIONAL EXPERIENCE</h2>
                <div className="bar1">
                    <div className="circle1"></div>
                    <div className="expTextBox">
                        <div className="expYear">
                            <h3 id="exp1">2021</h3>
                        </div>
                        <div className="expJob">
                            <h3>COMMUNITY LITERATURE INITIATIVE</h3>
                            <p><em>Volunteer Web Designer</em></p>
                            <p>November 2020 - present</p>
                            <a href="/portfolio/community-literature-initiative">See Work</a>
                        </div>
                        <div className="expJob">
                            <h3>JANG SOO SUSHI BAR</h3>
                            <p><em>Freelance Web Developer</em></p>
                            <p>April 2020 - June 2020</p>
                            <a href="/portfolio/jang-soo-sushi-bar">See Work</a>
                        </div>
                    </div>
                </div>
                <div className="bar1"></div>
                <div className="bar1"></div>
                <div className="bar1"></div>

                <div className="bar2">
                    <div className="circle2"></div>
                    <div className="expTextBoxL">
                        <div className="expYearL">
                            <h3 id="exp2">2020</h3>
                        </div>
                        <div className="expJobL">
                            <h3>MCW GLOBAL</h3>
                            <p><em>Graphic Design Intern</em></p>
                            <p>November 2019 - January 2020</p>
                            <a href="/portfolio/mcw-global">See Work</a>
                        </div>
                    </div>
                </div>
                <div className="bar2"></div>
                <div className="bar2"></div>

                <div className="bar3">
                    <div className="circle3"></div>
                    <div className="expTextBox">
                        <div className="expYear">
                            <h3 id="exp3">2019</h3>
                        </div>
                        <div className="expJob">
                            <h3>HARGREAVES JONES</h3>
                            <p><em>Web Consultant</em></p>
                            <p>April 2018 - January 2019</p>
                            <a href="/portfolio/hargreaves-jones">See Work</a>
                        </div>
                    </div>
                </div>

                <div className="bar3"></div>
                <div className="bar3"></div>

                <div className="bar4">
                    <div className="circle4"></div>
                    <div className="expTextBoxF">
                        <div className="expYearL">
                            <h3 id="exp4">2018</h3>
                        </div>
                    </div>
                </div>

            </div>

            <Footer />
        </div>
    )
}

export default Experience;