import React from "react";
import styled from "styled-components";
import { Link } from 'react-router-dom'
const DisplayFlex = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 1rem;
  font-size: 1.5rem;
`;
const SpaceBtwn = styled.ul`
  display: flex;
  justify-content: center;
  list-style: none;
  gap: 2rem;
  text-decoration: none;
`;
function Navbar() {
  return (
    <header>
      <DisplayFlex>
        <a>MuslimStoreShop</a>
        <SpaceBtwn>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/shop">Shop</Link>
        </SpaceBtwn>
        <a>Cart</a>
      </DisplayFlex>
    </header>
  );
}

export default Navbar;
