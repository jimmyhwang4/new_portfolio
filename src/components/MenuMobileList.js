import React from 'react';
import styled from 'styled-components';

const Ul = styled.ul`

    a {
        margin-left: 20px;
        font-size: 10vw;
        color: #fff;
        text-decoration: none;
    }

    a img {
        filter: invert(1);
    }

    margin-top: 60px;
    height: calc(100vh - 60px);
    width: 100%;
    z-index: 999;
    position: fixed;

    background-color: rgb(50, 50, 50);

    visibility: ${({ open }) => open ? 'visible' : 'hidden'};
    opacity: ${({ open }) => open ? '1' : '0'};

    transition: all 0.2s ease-in-out;

    display: flex;
    flex-direction: column;

    .mobileSocials {
        width: 100px;
        margin-top: 12px;

        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }
    
`;

const MenuMobileList = ({ open }) => {
    return (
        <Ul open={open}>
            <br></br>
            <br></br>
            <a href="/">HOME</a>
            <a href="/portfolio">PORTFOLIO</a>
            <a href="/experience">EXPERIENCE</a>
            <a href="/about">ABOUT</a>
            <a href="/Jeehun_Hwang_Resume.pdf" target="_blank">RESUME</a>

            <div className="mobileSocials">
                <a href="https://www.linkedin.com/in/jimmy-hwang-564958162/" target="_blank"><img src="/socials/linkedin.png" width="40px" height="40px"></img></a>
                <a href="https://github.com/jimmyhwang4" target="_blank"><img src="/socials/github.png" width="37px" height="37px"></img></a>
            </div>

        </Ul>
    )
}

export default MenuMobileList;