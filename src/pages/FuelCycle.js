import React from 'react';
import Menu from '../components/Menu.js';
import MenuMobile from '../components/MenuMobile';
import Footer from '../components/Footer';

function FuelCycle() {
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
                    <h3>FUEL CYCLE INFOGRAPHIC</h3>
                    <p>GRAPHIC DESIGN</p>
                    <div className="DirectionBar">
                        <a href="/portfolio/sims-library-of-poetry">← Prev</a>
                        <a href="/portfolio">All Works</a>
                        <a href="/portfolio/css-sketchbook">Next →</a>
                    </div>
                </div>

                <div className="PPContentWrapper">
                    <div className="PPColumn1">
                        <div className="PPColumn1Content">
                            <div className="PPColumn1TextBox">
                                <img src="/portfolio/FuelCycle/FuelCycle-large.jpg"></img>
                                <p><b>Project Detail:</b> Job Application Assignment</p>
                                <p><b>Timeline:</b> October 2020</p>
                                <p>For the application process of the Graphic Designer position at FuelCycle, a market research cloud company, I was tasked with redesigning one of their infographics regarding market research over the course of a week.</p>
                                <p>Three key changes that I have implemented to make this a more impactful infographic include:</p>
                                <p>1) Straying away from neutral backgrounds. I redesigned the infographic with more vibrant backgrounds using Fuel Cycle colors instead of sticking with a white or gray background in order to create a more “full” design while maintaining contrast and white space through the manipulation of color and spacing.</p>
                                <p>2) Complete redesign of the “Why Is Customer Retention So Important?” section. In an attempt to have information flow more smoothly, I restructured the text to combine similar points which resulted in three parts with an appropriate graph representing each part to supplement the data displayed.</p>
                                <p>3) Redesign of the four steps of market research section. For a smoother transition, I added a header that prepared readers of the incoming four steps, and I represented each step with a different color for contrast with inspiration from the Fuel Cycle gradient. I really liked the existing six boxes design with icons and text, so I decided to keep that for my redesign. However, I changed the icons and colors of the boxes in order to fit in with the background color of each step section. One big change was the redesign of “Step 4: Utilize an Online Community to Get Specific Feedback”; I wanted to keep this step consistent with the previous three steps, so I attempted to create my own six boxes based on the text.</p>
                                <p>While I have made many changes in my redesign, I centered my changes around Fuel Cycle’s branding so that it would maintain FC’s current aesthetic based on the website or official infographics. I also implemented FC’s three prominent colors – Flame, UV, and Bloom, gradients, and FC’s font families (Avenir & Roboto) all throughout the redesign.</p>
                            </div>
                        </div>
                    </div>
                    <div className="PPColumn2">
                        <div className="PPColumn2Content">
                            <div className="PPColumn2TextBox">
                                <h2>TECHNICAL SKILLS</h2>
                                <p>Branding</p>
                                <div className="PPBar75"></div>
                                <p>Graphic Design</p>
                                <div className="PPBar100"></div>
                                <br></br>

                                <h2>PERSONAL SKILLS</h2>
                                <p>Attention to Detail</p>
                                <div className="PPBar100"></div>
                                <p>Communication</p>
                                <div className="PPBar75"></div>
                                <p>Creativity</p>
                                <div className="PPBar100"></div>
                                <br></br>

                                <h2>TOOLS USED</h2>
                                <p>Adobe InDesign</p>
                                <div className="PPBar100"></div>
                                <p>Adobe Photoshop</p>
                                <div className="PPBar75"></div>
                                <br></br>
                                <h2>RELEVANT LINKS</h2>
                                <div className="PPLinks">
                                    <a href="https://fuelcycle.com/" target="_blank">Website</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="PPImageWrapper">
                        <h2>FINAL DESIGN</h2>
                        <div className="PPImageContainer">
                            <img src="/portfolio/FuelCycle/FuelCycle-1.jpg"></img>
                            <img src="/portfolio/FuelCycle/FuelCycle-3.jpg"></img>
                        </div>
                    </div>

                    <div className="PPImageWrapper">
                        <h2>REFERENCE DESIGN</h2>
                        <div className="PPImageContainer">
                            <img src="/portfolio/FuelCycle/FuelCycle-2.jpg"></img>
                        </div>
                    </div>

                </div>

                <Footer />
            </div>
        </div>
    )
}

export default FuelCycle;