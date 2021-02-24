import React from 'react';
import Menu from '../components/Menu.js';
import MenuMobile from '../components/MenuMobile';
import Footer from '../components/Footer';

function MCW() {
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
                    <h3>MCW Global</h3>
                    <p>GRAPHIC DESIGN</p>
                    <div className="DirectionBar">
                        <a href="/portfolio/covid-19-tracker">← Prev</a>
                        <a href="/portfolio">All Works</a>
                        <a href="/portfolio/pi-delta-psi">Next →</a>
                    </div>
                </div>

                <div className="PPContentWrapper">
                    <div className="PPColumn1">
                        <div className="PPColumn1Content">
                            <div className="PPColumn1TextBox">
                                <img src="/portfolio/MCW/MCW-large.jpg"></img>
                                <p><b>Role:</b> Graphic Design Intern at MCW Global</p>
                                <p><b>Timeline:</b> November 2019 - January 2020</p>
                                <p>MCW Global is a non-profit organization based in New York City that provides communities in Africa (Rwanda, Tanzania and Zambia) with mentorship programs in leadership development, global citizenship, self-awareness and vision planning. I served as a graphic design intern, and my work throughout the few months included:</p>
                                <p>• Designing flyers and banners for the website and social media</p>
                                <p>• Designing email templates using Classy for advertisement of programs or communication with the organization’s alumni</p>
                                <p>• Redesigning the organization’s business card</p>
                                <p>• Editing and archiving existing photos for display</p>
                                <p>• Editing videos and mastering their audios for publicity purposes</p>
                                <p>This was the smallest office that I've ever worked in (less than 10 people), and it was definitely a unique experience where my work was independently organized. Of course, communication with executives was necessary to understand what the organization's short-term and long-term goals were and what the necessary actions would be, but I generally had a lot of creative freedom in designing digital content for outreach and advertisement purposes.</p>
                                <p>Being a part of a small organization, I also was in a position where I had to wear multiple hats and perform tasks outside of my initial job description. There were a couple of moments when I was asked to edit the website, adjust the volume levels in videos, proofread and make edits to written statements, and maintain their social media — all which I fortunately had experience with. Overall, I learned a lot about the importance of taking initiative and being flexible during my time at MCW Global.</p>
                            </div>
                        </div>
                    </div>
                    <div className="PPColumn2">
                        <div className="PPColumn2Content">
                            <div className="PPColumn2TextBox">
                                <h2>TECHNICAL SKILLS</h2>
                                <p>Email Design</p>
                                <div className="PPBar75"></div>
                                <p>Graphic Design</p>
                                <div className="PPBar100"></div>
                                <p>Photo Editing</p>
                                <div className="PPBar100"></div>
                                <p>Video Editing</p>
                                <div className="PPBar50"></div>
                                <br></br>
                                <h2>PERSONAL SKILLS</h2>
                                <p>Communication</p>
                                <div className="PPBar75"></div>
                                <p>Flexibility/Adaptability</p>
                                <div className="PPBar75"></div>
                                <p>Organization</p>
                                <div className="PPBar100"></div>
                                <p>Time Management</p>
                                <div className="PPBar100"></div>
                                <br></br>
                                <h2>TOOLS USED</h2>
                                <p>Adobe Illustrator</p>
                                <div className="PPBar75"></div>
                                <p>Adobe Indesign</p>
                                <div className="PPBar100"></div>
                                <p>Adobe Photoshop</p>
                                <div className="PPBar100"></div>
                                <p>Adobe Premiere</p>
                                <div className="PPBar50"></div>
                                <p>Canva</p>
                                <div className="PPBar75"></div>
                                <p>Classy</p>
                                <div className="PPBar75"></div>
                                <br></br>
                                <h2>RELEVANT LINKS</h2>
                                <div className="PPLinks">
                                    <a href="https://mcwglobal.org/" target="_blank">Website</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="PPImageWrapper">
                        <h2>FEATURED WORK</h2>
                        <div className="PPImageContainer">
                            <img src="/portfolio/MCW/MCW-2.jpg"></img>
                            <img src="/portfolio/MCW/MCW-1.jpg"></img>
                            <img src="/portfolio/MCW/MCW-5.jpg"></img>
                            <img src="/portfolio/MCW/MCW-3.jpg"></img>
                            <img src="/portfolio/MCW/MCW-4.jpg"></img>
                        </div>
                    </div>

                </div>

                <Footer />
            </div>
        </div>
    )
}

export default MCW;