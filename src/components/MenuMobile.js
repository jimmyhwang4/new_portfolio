import React from 'react';
import styled from 'styled-components';
import MenuMobileBurger from './MenuMobileBurger';

const Nav = styled.nav`
    z-index: 999;
    position: fixed;
    width: 100%;
    height: 60px;

    background: rgb(50, 50, 50);
    display: flex;
    justify-content: center;

`
 
const MenuMobile = () => {
  return (
    <Nav>
      <div className="LogoMobile"></div>
      <MenuMobileBurger />
    </Nav>
  )
}

export default MenuMobile;