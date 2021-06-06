import React, { useEffect, useState } from 'react';
import Navbar from './navbar/Navbar';
import './Header.css';
import {
  Link
} from "react-router-dom";

const Header = ( ) => {
  const [isActive, setActive] = useState(false);

  useEffect(() => {
    if (window.location.pathname !== "/" && isActive === false) {
      setActive(isActive => true);
    }
  });

  return (
    <>
      <Link to='/'>
        <img
          id="logo-img"
          className={isActive? 'active' : null}
          src='images/kuma-logo.png' 
          alt="logo"
          onClick={()=>setActive(isActive => false)}
        />
      </Link>
      <Navbar setLogoActive={setActive} isLogoActive={isActive} />
    </>
  );
}

export default Header;