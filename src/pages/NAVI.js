import React from 'react';
import Menu from '../components/Menu.js';
import MenuMobile from '../components/MenuMobile';
import Footer from '../components/Footer';

function NAVI() {
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
                    <h3>NAVI</h3>
                    <p>USER INTERFACE</p>
                    <div className="DirectionBar">
                        <a href="/portfolio/hargreaves-jones">← Prev</a>
                        <a href="/portfolio">All Works</a>
                        <a href="/portfolio/moo-milk">Next →</a>
                    </div>
                </div>

                <div className="PPContentWrapper">
                    <div className="PPColumn1">
                        <div className="PPColumn1Content">
                            <div className="PPColumn1TextBox">
                                <img src="/portfolio/NAVI/NAVI-large.jpg"></img>
                                <p><b>Project Detail:</b> Interface Project of NYU's Visual Foundation Studio Course</p>
                                <p><b>Timeline:</b> March 2018 - April 2018</p>
                                <p>My second project of the Visual Foundation Studio course at NYU was to design an interface of choice. Being an avid gamer with huge influence from <a href="https://starcraft2.com/en-us/" target="_blank">StarCraft II</a>, I decided to design the interface for the client (not to be confused with the game itself) of a made-up video game called <em>NAVI: A Tale of the Galaxy</em>.</p>
                                <p><em>NAVI</em> takes place in the sci-fi future, where players control characters to explore the depths of the galaxy. In order to visualize this specific mood, I selected various cool and neutral colors such as blue, purple, and gray. Gradients especially have been key, as they can be manipulated to convey a more futuristic, sophisticated mood. Consistency was also crucial, as unique pages had different elements that required to be carefully designed or chosen in order to fit the overall aesthetic of the client.</p>
                                <p>The process of designing this project led me to solidify my decision to seek this field as a professional career. Maybe it was from the years of exposure to various video games and their visual identities, but designing my own client interface was the first time where I could truly see what the final product’s appearance was before I even touched a pencil. As a result, <em>NAVI</em> easily became one of my most memorable projects in terms of how it aligned with my passions and interests. Yes, there were still endless hours of prototyping and editing, but the peaks of my joy and enlightenment came from the sporadic bursts of ideas that enabled the evolution of the design throughout the production process.</p>
                                <p>Overall, I would say that this was quite an immersive and fulfilling experience.</p>
                            </div>
                        </div>
                    </div>
                    <div className="PPColumn2">
                        <div className="PPColumn2Content">
                            <div className="PPColumn2TextBox">
                                <h2>TECHNICAL SKILLS</h2>
                                <p>Graphic Design</p>
                                <div className="PPBar75"></div>
                                <p>Iterating</p>
                                <div className="PPBar75"></div>
                                <p>Prototyping (High-Fidelity)</p>
                                <div className="PPBar100"></div>
                                <p>Prototyping (Low-Fidelity)</p>
                                <div className="PPBar100"></div>
                                <br></br>

                                <h2>PERSONAL SKILLS</h2>
                                <p>Attention to Detail</p>
                                <div className="PPBar100"></div>
                                <p>Creativity</p>
                                <div className="PPBar75"></div>
                                <p>Organization</p>
                                <div className="PPBar100"></div>
                                <br></br>

                                <h2>TOOLS USED</h2>
                                <p>Adobe Illustrator</p>
                                <div className="PPBar75"></div>
                                <p>Adobe Indesign</p>
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
                            <img src="/portfolio/NAVI/NAVI-1.jpg"></img>
                            <img src="/portfolio/NAVI/NAVI-2.jpg"></img>
                            <img src="/portfolio/NAVI/NAVI-3.jpg"></img>
                            <img src="/portfolio/NAVI/NAVI-4.jpg"></img>
                            <img src="/portfolio/NAVI/NAVI-5.jpg"></img>
                            <img src="/portfolio/NAVI/NAVI-6.jpg"></img>
                            <img src="/portfolio/NAVI/NAVI-7.jpg"></img>
                            <img src="/portfolio/NAVI/NAVI-8.jpg"></img>
                        </div>
                    </div>

                    <div className="PPImageWrapper">
                        <h2>DESIGN PROCESS</h2>
                        <div className="PPImageContainer">
                            <img src="/portfolio/NAVI/NAVI-15.jpg"></img>
                            <img src="/portfolio/NAVI/NAVI-16.jpg"></img>
                            <img src="/portfolio/NAVI/NAVI-17.jpg"></img>
                            <img src="/portfolio/NAVI/NAVI-18.jpg"></img>
                            <img src="/portfolio/NAVI/NAVI-19.jpg"></img>
                            <img src="/portfolio/NAVI/NAVI-20.jpg"></img>

                            <img src="/portfolio/NAVI/NAVI-9.jpg"></img>
                            <img src="/portfolio/NAVI/NAVI-10.jpg"></img>
                            <img src="/portfolio/NAVI/NAVI-11.jpg"></img>
                            <img src="/portfolio/NAVI/NAVI-12.jpg"></img>
                            <img src="/portfolio/NAVI/NAVI-13.jpg"></img>
                            <img src="/portfolio/NAVI/NAVI-14.jpg"></img>
                        </div>
                    </div>

                </div>

                <Footer />
            </div>
        </div>
    )
}

export default NAVI;