import React, { useState, useEffect, useContext } from 'react';
import Navbtn from './Navbtn';
import './Navbar.css';
import HeaderNavBtn from './HeaderNavBtn';
import { NavActiveContext } from '../../App';

const Navbar = ( props ) => {
  const [btnClicked, setBtnClicked] = useState([]);
  const [isNavActive, setIsNavActive] = useContext(NavActiveContext);

  const activeHandler = () => {
    setIsNavActive(true);
  }

  useEffect(() => {
    if (window.location.pathname != "/" && isNavActive == false) {
      setIsNavActive(true);
    }
  });

  return (
    <>
      {/* header navbar */}
      <div className={isNavActive? 'header-nav active' : 'header-nav' }>
        <HeaderNavBtn
          value='Menu'
          setActiveDir={props.setActiveDir} 
          btnClicked={[btnClicked, setBtnClicked]}
          onClick={()=>activeHandler()}
        />
        <HeaderNavBtn
          value='Find Us'
          setActiveDir={props.setActiveDir} 
          btnClicked={[btnClicked, setBtnClicked]}
          onClick={()=>activeHandler()}
        />
        <HeaderNavBtn
          value='More'
          setActiveDir={props.setActiveDir} 
          btnClicked={[btnClicked, setBtnClicked]}
          onClick={()=>activeHandler()}
        />
      </div>

      {/* bottom nav */}
      <div className={isBtnActive? 'main-nav active' : 'main-nav' }>
        <Navbtn
          value='Menu'
          setActiveDir={props.setActiveDir} 
          btnClicked={[btnClicked, setBtnClicked]}
          onClick={()=>activeHandler()}
        />
        <Navbtn
          value='Find Us'
          setActiveDir={props.setActiveDir} 
          btnClicked={[btnClicked, setBtnClicked]}
          onClick={()=>activeHandler()}
        />
        <Navbtn
          value='More'
          setActiveDir={props.setActiveDir} 
          btnClicked={[btnClicked, setBtnClicked]}
          onClick={()=>activeHandler()}
        />
      </div>
    </>
  );
}

export default Navbar;
