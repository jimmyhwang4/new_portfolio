import React from 'react';
import Menu from '../components/Menu.js';
import MenuMobile from '../components/MenuMobile';
import Footer from '../components/Footer';

function COVID() {
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
                    <h3>COVID-19 TRACKER</h3>
                    <p>WEB DEVELOPMENT</p>
                    <div className="DirectionBar">
                        <a href="/portfolio/jang-soo-sushi-bar">← Prev</a>
                        <a href="/portfolio">All Works</a>
                        <a href="/portfolio/mcw-global">Next →</a>
                    </div>
                </div>

                <div className="PPContentWrapper">
                    <div className="PPColumn1">
                        <div className="PPColumn1Content">
                            <div className="PPColumn1TextBox">
                                <img src="/portfolio/COVID/COVID-large.jpg"></img>
                                <p><b>Project Detail:</b> Final Project of NYU's Dynamic Web Applications</p>
                                <p><b>Timeline:</b> March 2020 - May 2020</p>
                                <p>For my final project of my Dynamic Web Applications course, I was tasked with the following project description:</p>
                                <p>• Use React.js</p>
                                <p>• Querying and using 2 sources of API in a UI</p>
                                <p>• UI changing based on the data changing</p>
                                <p>• Applying these principles to a concept</p>
                                <p>During this time, COVID-19 had just become nationally recognized due to its widespread impact in our community and in the world. I decided to dedicate my final project to this by developing a web application that would display COVID-19 data in the most affected countries along with respective news regarding the virus. Using <a href="https://www.npmjs.com/package/axios" target="_blank">axios</a>, I was able to collect COVID-19 data for every country from <a href="https://coronavirus-19-api.herokuapp.com/" target="_blank">this Heroku app</a> and COVID-19 news data by querying from <a href="https://newsapi.org/" target="_blank">News API</a> with keywords “coronavirus” and the queried country name.</p>
                                <p>I also incorporated <a href="https://www.chartjs.org/docs/latest/" target="_blank">Chart.js</a> and routed the number of cases in the most affected countries to illustrate the data in a bar graph.</p>
                                <p>Overall, this was a challenging project that definitely improved my web development skills using API and displaying the data in a changing UI. There were many ups and downs throughout the development process including multiple hours of browsing the News API documentation and Stack Overflow, but I was very satisfied with how the project turned out. And even to this day, I load up my COVID-19 Tracker and educate myself with some data and news.</p>
                            </div>
                        </div>
                    </div>
                    <div className="PPColumn2">
                        <div className="PPColumn2Content">
                            <div className="PPColumn2TextBox">
                                <h2>TECHNICAL SKILLS</h2>
                                <p>APIs</p>
                                <div className="PPBar100"></div>
                                <p>Data Visualization</p>
                                <div className="PPBar100"></div>
                                <p>Web Design</p>
                                <div className="PPBar75"></div>
                                <p>Web Development</p>
                                <div className="PPBar100"></div>
                                <br></br>
                                <h2>PERSONAL SKILLS</h2>
                                <p>Critical Thinking</p>
                                <div className="PPBar75"></div>
                                <p>Problem Solving</p>
                                <div className="PPBar100"></div>
                                <p>Time Management</p>
                                <div className="PPBar75"></div>
                                <br></br>
                                <h2>TOOLS USED</h2>
                                <p>axios (npm)</p>
                                <div className="PPBar100"></div>
                                <p>Chart.js (npm)</p>
                                <div className="PPBar50"></div>
                                <p>CSS</p>
                                <div className="PPBar75"></div>
                                <p>Git</p>
                                <div className="PPBar75"></div>
                                <p>News API</p>
                                <div className="PPBar75"></div>
                                <p>COVID-19 API</p>
                                <div className="PPBar75"></div>
                                <p>ReactJS (HTML/JavaScript)</p>
                                <div className="PPBar100"></div>
                                <p>Visual Studio Code</p>
                                <div className="PPBar100"></div>
                                <br></br>
                                <h2>RELEVANT LINKS</h2>
                                <div className="PPLinks">
                                    <a href="https://github.com/jimmyhwang4/covid-19-tracker" target="_blank">Github</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="PPImageWrapper">
                        <h2>WEBSITE IMAGES</h2>
                        <div className="PPImageContainer">
                            <img src="/portfolio/COVID/COVID-1.jpg"></img>
                            <img src="/portfolio/COVID/COVID-2.jpg"></img>
                            <img src="/portfolio/COVID/COVID-3.jpg"></img>
                            <img src="/portfolio/COVID/COVID-5.jpg"></img>
                            <img src="/portfolio/COVID/COVID-4.jpg"></img>
                        </div>
                    </div>

                </div>

                <Footer />
            </div>
        </div>
    )
}

export default COVID;