import React from 'react';
import Menu from '../components/Menu.js';
import MenuMobile from '../components/MenuMobile';
import Footer from '../components/Footer';

function MooMilk() {
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
                    <h3>MOO MILK</h3>
                    <p>LOGO DESIGN</p>
                    <div className="DirectionBar">
                        <a href="/portfolio/navi">← Prev</a>
                        <a href="/portfolio">All Works</a>
                        <a href="/portfolio/community-literature-initiative">Next →</a>
                    </div>
                </div>

                <div className="PPContentWrapper">
                    <div className="PPColumn1">
                        <div className="PPColumn1Content">
                            <div className="PPColumn1TextBox">
                                <img src="/portfolio/MooMilk/MooMilk-large.jpg"></img>
                                <p><b>Project Detail:</b> Logo Project of NYU's Visual Foundation Studio Course</p>
                                <p><b>Timeline:</b> February 2018 - March 2018</p>
                                <p> My first project of the Visual Foundation Studio course at NYU was to design a logo of choice. I decided to base my logo on a made-up milk company, <em>Moo Milk</em>, due to my love for the dairy product.</p>
                                <p>Key concepts used in this design include color and typography. I attempted to go for a more playful design to represent a milk company in hopes that the product would convey a lighthearted, welcoming mood. The final design has a typography base with white spots that I designed to represent a cow, with one spot representing the “L” in <em>Moo Milk</em> within a design that represents a drop of milk. The “O’s” and the drop of milk also form a vague face, adding on to the playful mood of the overall design.</p>
                                <p>This being my first creative project in college, I ran into many challenges as expected, the most memorable one being not knowing how to start. This is when I realized that as a creative, there is no such thing as a perfect start in design — or as some would say, <a href="https://scottberkun.com/essays/myth-of-perfect-design/" target="_blank">the concept of a perfect design itself is a myth</a>. I learned that designing is not simply drawing a visualized idea on paper but rather a journey requiring patience, dedication, and motivation. As a student mentally blocked by the meaningless search for the perfect start, every step forwards was followed by two steps backwards as I drifted farther away from the goal that I couldn’t even clearly see.</p>
                                <p>So how did I overcome this feeling of aimlessness?</p>
                                <p>I cleared my mind and casted away my perfectionist ideals to allow my hand to move freely as it drew, drew, and drew.</p>
                            </div>
                        </div>
                    </div>
                    <div className="PPColumn2">
                        <div className="PPColumn2Content">
                            <div className="PPColumn2TextBox">
                                <h2>TECHNICAL SKILLS</h2>
                                <p>Graphic Design</p>
                                <div className="PPBar100"></div>
                                <p>Iterating</p>
                                <div className="PPBar100"></div>
                                <br></br>

                                <h2>PERSONAL SKILLS</h2>
                                <p>Attention to Detail</p>
                                <div className="PPBar100"></div>
                                <p>Creativity</p>
                                <div className="PPBar100"></div>
                                <p>Problem Solving</p>
                                <div className="PPBar75"></div>
                                <br></br>

                                <h2>TOOLS USED</h2>
                                <p>Adobe Illustrator</p>
                                <div className="PPBar100"></div>
                                <p>Adobe InDesign</p>
                                <div className="PPBar100"></div>
                                <p>Adobe Photoshop</p>
                                <div className="PPBar100"></div>
                                <br></br>
                            </div>
                        </div>
                    </div>

                    <div className="PPImageWrapper">
                        <h2>FINAL DESIGN</h2>
                        <div className="PPImageContainer">
                            <img src="/portfolio/MooMilk/MooMilk-1.jpg"></img>
                            <img src="/portfolio/MooMilk/MooMilk-15.jpg"></img>
                        </div>
                    </div>

                    <div className="PPImageWrapper">
                        <h2>DESIGN PROCESS</h2>
                        <div className="PPImageContainer">
                        <img src="/portfolio/MooMilk/MooMilk-10.jpg"></img>
                        <img src="/portfolio/MooMilk/MooMilk-11.jpg"></img>
                        <img src="/portfolio/MooMilk/MooMilk-12.jpg"></img>
                        <img src="/portfolio/MooMilk/MooMilk-7.jpg"></img>
                        <img src="/portfolio/MooMilk/MooMilk-6.jpg"></img>
                        <img src="/portfolio/MooMilk/MooMilk-9.jpg"></img>
                        <img src="/portfolio/MooMilk/MooMilk-8.jpg"></img>
                        <img src="/portfolio/MooMilk/MooMilk-14.jpg"></img>
                        <img src="/portfolio/MooMilk/MooMilk-13.jpg"></img>
                        <img src="/portfolio/MooMilk/MooMilk-3.jpg"></img>
                        <img src="/portfolio/MooMilk/MooMilk-4.jpg"></img>
                        <img src="/portfolio/MooMilk/MooMilk-5.jpg"></img>
                        </div>
                    </div>

                </div>

                <Footer />
            </div>
        </div>
    )
}

export default MooMilk;