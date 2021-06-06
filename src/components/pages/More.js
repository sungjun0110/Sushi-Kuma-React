import React, { useState } from 'react';
import Reservation from './Reservation';
import './More.css';

const More = ( props ) => {
    const [selectedItem, setSelectedItem] = useState('');
    const [isPageActive, setIsPageActive] = useState(false);

    const clickHandler = ( value ) => {
        if (selectedItem !== value) {
            setSelectedItem(value);
            setIsPageActive(true);
        }
        else{
            setSelectedItem('');
            setIsPageActive(false);
        }
    }

    return(
        <div id='morePage' className={isPageActive? "active" : null}>

            <button className="moreBtn"><h1>Reservation</h1></button>
            <p>
              We are currently not taking reservations due to lack of staff.<br />
              Sorry for the inconvenience. 
            </p>

            {/* <button className='moreBtn' onClick={() => clickHandler('reservation')}><h2>Reservation</h2></button> */}
            {/* {(selectedItem==='reservation')? <Reservation /> : null} */}

            {/* <button className='moreBtn' onClick={() => clickHandler('about')}><h2>About</h2></button> */}
            {/* {(selectedItem==='about')? } */}

        </div>
    );
}

export default More;