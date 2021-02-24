import React from 'react';
import Menu from '../components/Menu.js';
import MenuMobile from '../components/MenuMobile';
import Footer from '../components/Footer';

function About() {
    return (
        <div>
            <div className="MenuWeb">
                <Menu />
            </div>

            <div className="MenuMobile">
                <MenuMobile />
            </div>

            <div className="AboutWrapper">
                <div className="AboutTextTitleMobile">
                    <p>ABOUT ME</p>
                </div>
                <div className="AboutImageContainer"></div>
                <div className="AboutTextContainer">
                    <div className="AboutTextBox">
                        <div className="AboutTextTitle">
                            <p>ABOUT ME</p>
                        </div>
                        <div className="AboutTextContent">
                            <p><em>I am a digital designer based in Southern California with a Bachelor of Science in Integrated Digital Media at New York University. Forever a student of all types of design and production, I always find myself fascinated with works in web, UX/UI, and music. If you have any questions or comments, simply send me an email at <a href="mailto:jimmyhwang@nyu.edu">jimmyhwang@nyu.edu</a>.</em></p>
                            <p><em>Feel free to check out my social media channels as well!</em></p>
                        </div>
                        <div className="AboutSocialBar">
                            <a href="https://www.facebook.com/jimmyhwang4/" target="_blank"><div className="AboutFacebook"></div></a>
                            <a href="https://www.instagram.com/jimmyhwang_/" target="_blank"><div className="AboutInstagram"></div></a>
                            <a href="https://www.linkedin.com/in/jimmy-hwang-564958162/" target="_blank"><div className="AboutLinkedIn"></div></a>
                            <a href="https://github.com/jimmyhwang4" target="_blank"><div className="AboutGithub"></div></a>
                        </div>
                        <div className="AboutLine"></div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    )
}

export default About;