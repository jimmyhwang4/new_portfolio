import React from 'react';
import Menu from '../components/Menu.js';
import MenuMobile from '../components/MenuMobile';
import Footer from '../components/Footer';

function JSS() {
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
                    <h3>JANG SOO SUSHI BAR</h3>
                    <p>WEB DEVELOPMENT</p>
                    <div className="DirectionBar">
                        <a href="/portfolio/css-sketchbook">← Prev</a>
                        <a href="/portfolio">All Works</a>
                        <a href="/portfolio/covid-19-tracker">Next →</a>
                    </div>
                </div>

                <div className="PPContentWrapper">
                    <div className="PPColumn1">
                        <div className="PPColumn1Content">
                            <div className="PPColumn1TextBox">
                                <img src="/portfolio/JSS/JSS-large.jpg"></img>
                                <p><b>Role:</b> Freelance Web Developer at Jang Soo Sushi Bar</p>
                                <p><b>Timeline:</b> April 2020 - June 2020</p>
                                <p>As my final semester of college neared its end, I decided to challenge myself and utilize what I learned to make an impact in my community. So I searched for freelance positions, and received an opportunity to work for Jang Soo Sushi Bar, which is located right by my hometown in Southern California. During this time, COVID-19 was negatively affecting small businesses, including restaurants that could not provide the dine-in experience anymore to their customers. Jang Soo Sushi Bar lacked its own website, and I was tasked with developing one with these goals:</p>
                                <p>• Make the website easily accessible to consumers</p>
                                <p>• Provide consumers with a menu that is clear and easy to understand</p>
                                <p>• Take and edit new or existing pictures of food for display</p>
                                <p>• Provide any necessary information or content to connect the consumers with the restaurant</p>
                                <p>Starting completely from scratch, I had to brainstorm a lot of ideas to decide where to start. So I put myself in the shoes of a customer who was ready to go out to order some takeout from a local restaurant. <em>Where is the restaurant? How would I find the menu? How would I place the order?</em> From these series of thoughts, I concluded that creating a website that has powerful mobile compatibility was the most important step in helping the business and its consumers. <a href="https://restaurantengine.com/how-many-customers-use-mobile-devices-to-find-restaurants/" target="_blank">This article</a> states that “well over 80% of customers have searched for a restaurant on their smartphone” for these reasons:</p>
                                <p>• They are looking for the phone number</p>
                                <p>• They are looking for directions</p>
                                <p>• They are assessing the menu</p>
                                <p>• They are viewing reviews</p>
                                <p>• They are searching for coupons or specials</p>
                                <p>And as expected, this was the result:</p>
                                <img src="/portfolio/JSS/JSS-Impressions.jpg"></img>
                                <p id="pCenter"><em>Data gathered on February 19, 2021, 3:30PM PST</em></p>
                                <p>While there is no direct correlation between the number of impressions and a boost in sales, I accomplished my duty of developing a website that fulfilled all my goals. I was able to utilize data from Google Domains to understand how to optimize the SEO through its top queries and applying them as keywords. I linked the website and its menu to many popular search platforms such as Google and Yelp. I designed a simple menu that is clear and easy to navigate. I personally went to the restaurant and took photos of its food and edited them to be put in the website. I included special deals, a COVID-19 update page, and a contact page in the website to help the small business connect with its consumers. And to top it all, the restaurant only has to pay $12 per year to maintain its domain.</p>
                                <p>To this day, I continue to help Jang Soo Sushi Bar with any new updates or changes. I have always been a strong advocate for helping out small businesses, and this has especially become a time where we need to join together to give them our support.</p>
                                <a href="https://www.nytimes.com/2020/11/23/business/smallbusiness/how-to-support-small-businesses.html" target="_blank">Click here to find ways to help small businesses around you.</a>
                            </div>
                        </div>
                    </div>
                    <div className="PPColumn2">
                        <div className="PPColumn2Content">
                            <div className="PPColumn2TextBox">
                                <h2>TECHNICAL SKILLS</h2>
                                <p>Web Design</p>
                                <div className="PPBar100"></div>
                                <p>Web Development</p>
                                <div className="PPBar100"></div>
                                <p>Writing</p>
                                <div className="PPBar50"></div>
                                <p>Photo Editing</p>
                                <div className="PPBar75"></div>
                                <br></br>
                                <h2>PERSONAL SKILLS</h2>
                                <p>Commercial Awareness</p>
                                <div className="PPBar75"></div>
                                <p>Communication</p>
                                <div className="PPBar100"></div>
                                <p>Flexibility/Adaptability</p>
                                <div className="PPBar75"></div>
                                <p>Problem Solving</p>
                                <div className="PPBar100"></div>
                                <br></br>
                                <h2>TOOLS USED</h2>
                                <p>Adobe Lightroom</p>
                                <div className="PPBar75"></div>
                                <p>CSS</p>
                                <div className="PPBar100"></div>
                                <p>Git</p>
                                <div className="PPBar100"></div>
                                <p>ReactJS (HTML/JavaScript)</p>
                                <div className="PPBar100"></div>
                                <p>Visual Studio Code</p>
                                <div className="PPBar100"></div>
                                <br></br>
                                <h2>RELEVANT LINKS</h2>
                                <div className="PPLinks">
                                    <a href="https://www.jangsoosushibar.com/" target="_blank">Website</a>
                                    <a href="https://github.com/jimmyhwang4/jang_soo_sushi_bar" target="_blank">Github</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="PPImageWrapper">
                        <h2>WEBSITE IMAGES</h2>
                        <div className="PPImageContainer">
                            <img src="/portfolio/JSS/JSS-1.jpg"></img>
                            <img src="/portfolio/JSS/JSS-2.jpg"></img>
                            <img src="/portfolio/JSS/JSS-5.jpg"></img>
                            <img src="/portfolio/JSS/JSS-6.jpg"></img>
                            <img src="/portfolio/JSS/JSS-7.jpg"></img>
                        </div>
                    </div>

                </div>

                <Footer />
            </div>
        </div>
    )
}

export default JSS;