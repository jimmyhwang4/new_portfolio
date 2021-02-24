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
        "/1.jpg",
        "/2.jpg",
        "/3.jpg",
        "/4.jpg"
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