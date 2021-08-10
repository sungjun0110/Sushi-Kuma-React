import React, { useEffect, useState, useContext } from 'react';
import Navbar from './navbar/Navbar';
import './Header.css';
import {
  Link
} from "react-router-dom";

import { NavActiveContext } from '../App';

const Header = ( ) => {
  const [isNavActive, setIsNavActive] = useContext(NavActiveContext);

  useEffect(() => {
    if (window.location.pathname !== "/" && isNavActive === false) {
      setIsNavActive(true);
    }
  });

  return (
    <>
      <Link to='/'>
        <img
          id="logo-img"
          className={isNavActive? 'active' : null}
          src='images/kuma-logo.png' 
          alt="logo"
          onClick={()=>setIsNavActive(!isNavActive)}
        />
      </Link>
      <Navbar />
    </>
  );
}

export default Header;