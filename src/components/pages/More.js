import React, { useState } from 'react';
import './More.css';

const More = ( props ) => {
    const [isPageActive,] = useState(false);

    return(
        <div id='morePage' className={isPageActive? "active" : null}>

            <button className="moreBtn"><h1>Reservation</h1></button>
            <p>
              We are currently not taking reservations due to lack of staff.<br />
              Sorry for the inconvenience. 
            </p>
        </div>
    );
}

export default More;