import React from 'react';
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

const FadeGallery = () => {
    const properties = {
        autoplay: true,
        arrows: false,
        indicators: false,
        Easing: 'cubic-out',
        duration: 4000,
        transitionDuration: 400
    };

    const fadeImages = [
        "/Portfolio/COVID/COVID.jpg",
        "/Portfolio/JSS/JSS-large.jpg",
        "/Portfolio/FuelCycle/FuelCycle-large.jpg",
        "/Portfolio/PDP/PDP-large.jpg"
    ];

    return (
        <div>
            <div className="SlideContainer">
                <Fade {...properties}>
                    <div className="SlideImage">
                        <img src={fadeImages[0]} />
                    </div>
                    <div className="SlideImage">
                        <img src={fadeImages[1]} />
                    </div>
                    <div className="SlideImage">
                        <img src={fadeImages[2]} />
                    </div>
                    <div className="SlideImage">
                        <img src={fadeImages[3]} />
                    </div>
                </Fade>
            </div>
        </div>
    );
};

export default FadeGallery;