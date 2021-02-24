import React from 'react';
import Menu from '../components/Menu.js';
import MenuMobile from '../components/MenuMobile';
import PortfolioGrid from '../components/PortfolioGrid';
import Footer from '../components/Footer';

function Portfolio() {
    return (
        <div className="PortfolioWrapper">
            <div className="MenuWeb">
                <Menu />
            </div>
            <div className="MenuMobile">
                <MenuMobile />
            </div>
            <PortfolioGrid />
            <Footer />
        </div>
    )
}

export default Portfolio;