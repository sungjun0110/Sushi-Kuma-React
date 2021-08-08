import React, { useState, useEffect, useContext } from 'react';
import './Navbtn.css';
import { Link } from "react-router-dom";
import { NavActiveContext } from '../../App';

const clickHandler = ( onClick, setClicked, btnClicked, btnName, setActiveDir ) => {
  onClick();
  setClicked(isClicked => true);
  btnClicked[1](btnName);
}

const Navbtn = ( props ) => {
  const [isClicked, setClicked] = useState(false);
  const [classNames, setClassNames] = useState('');
  const [isNavActive,] = useContext(NavActiveContext);

  let btnVal = '/' + props.value.toLowerCase().replace(/ /g, '');

  useEffect(() => {
    if (props.isLogoActive) {
      setClassNames(`${props.btnActiveStatus? "active" : null} ${(isClicked && props.value == props.btnClicked[0])? "clicked" : null}`);
    } else {
      setClassNames('');
    }

    let address = window.location.pathname.slice(1);
    if (address == 'roseville' || address == 'eldoradohills') address = 'menu';
    if (address == props.value.toLowerCase().replace(/ /g, '')) {
      clickHandler(props.onClick, setClicked, props.btnClicked, props.value);
    }
  });

  return (
    <Link to={btnVal}>
      <button id='navBtn'
        className={classNames}
        onClick={() => clickHandler(props.onClick, setClicked, props.btnClicked, props.value, props.setActiveDir)} >
          {props.value}
      </button>
    </Link>
  );
    
}

export default Navbtn;
