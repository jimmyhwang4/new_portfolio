import React from 'react';
import FadeGallery from '../components/FadeGallery';

function Home() {
    return (
        <div>
            <div className="HomeWrapper">
                <div className="HomeHeader">
                    <div className="HomeTitle">
                        <p>JIMMY HWANG</p>
                    </div>
                    <div className="HomeHeader2">
                        <div className="HomeSubtitle">
                            <p>DIGITAL DESIGNER</p>
                            <p id="HomeSubtitleSubtext">WEB | GRAPHIC | UX/UI</p>
                        </div>
                        <div className="HomeButton">
                            <a href="/portfolio"><button className="HomeButton"><p>ENTER</p></button></a>
                        </div>
                    </div>
                </div>
                <div className="FeaturedContainer">
                    <div className="FeaturedText">
                        <p>LOS ANGELES | NEW YORK CITY</p>
                        <p id="FeaturedWorkName">✉ JIMMYHWANG@NYU.EDU</p>
                    </div>
                </div>
            </div>
            <FadeGallery />
        </div>
    )
}

export default Home;