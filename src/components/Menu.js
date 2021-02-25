import React from 'react';

function Menu() {
    return (
        <div className="MenuWrapper">
            <div className="Menu">
                <div className="MenuGroup">
                    <a href="/portfolio"><p>Portfolio</p></a>
                    <a href="/experience"><p>Experience</p></a>
                </div>
                <a href="/">
                    <div className="LogoContainer">
                        <div className="Logo"></div>
                    </div>
                </a>
                <div className="MenuGroup">
                    <a href="/about" id="AboutPosition"><p>About</p></a>
                    <a href="/Jeehun_Hwang_Resume.pdf" target="_blank"><p>Resume</p></a>
                 </div>
            </div>
        </div>
    )
}

export default Menu;