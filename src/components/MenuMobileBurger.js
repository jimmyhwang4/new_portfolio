import React, { useState } from 'react';
import styled from 'styled-components';
import MenuMobileList from './MenuMobileList';

const StyledBurger = styled.div`
    width: 2rem;
    height: 2rem;
    position: fixed;
    top: 14px;
    right: 10px;
    z-index: 20;
    display: none;

    @media (max-width: 768px) {
        display: flex;
        justify-content: space-around;
        flex-flow: column nowrap;
    }

    div {
        width: 2rem;
        height: 0.25rem;
        background-color: ${({ open }) => open ? '#f9f9f9' : '#f9f9f9'};
        border-radius: 10px;
        transform-origin: 1px;
        transition: all 0.2s linear;

        &:nth-child(1) {
            transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
        }

        &:nth-child(2) {
            opacity: ${({ open }) => open ? '0' : '1'};
        }

        &:nth-child(3) {
            transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
        }

    }
`;

const MenuMobileBurger = () => {
  const [open, setOpen] = useState(false)
  
  return (
    <>
        <StyledBurger open={open} onClick={() => setOpen(!open)}>
            <div />
            <div />
            <div />
        </StyledBurger>
        <MenuMobileList open={open}/>
    </>
  )
};

export default MenuMobileBurger;