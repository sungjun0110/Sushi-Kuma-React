import React from 'react';
import { Link } from 'react-router-dom';
import { useSpring, animated } from 'react-spring';


const Menu = ( props ) => {

  return (
    <div className="pages">
      <div className="location-page">
        <div className="location-selector" id="menu-page/locations">
          
          <Link id="menu-selector-btn" to='/eldoradohills'>
            <button>
              El Dorado Hills
            </button>
          </Link>

          <Link id="menu-selector-btn" to='/roseville'>
            <button>
              Roseville
            </button>

          </Link>
        </div>
      </div>
    </div>
  );
}

export default Menu;
