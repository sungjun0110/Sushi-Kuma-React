import React from 'react';
import CreateItems from '../CreateItems';

const Beverage = ( props ) => {
  return(
    <div className='item-div'>
        {CreateItems(
          "Beverage", 
          {
          "Beer Bottle 12oz" : ["Sapporo, Asahi, Kirin, Bud Light, Corona, Blue moon", "S 3.95 | L 6.50"], 
          "Draft Beer" : ["Sapporo", "12oz: 3.50 | 22oz: 6.50 | Pitcher: 15.95"], 
          "Wine" : ["Red, White", "Glass: 6.50"], 
          "Cold Sake" : ["Premium Ginjo, Karatamba", "13.95"], 
          "Nigori Sake" : ["Unfiltered Sake", "9.95"],  
          "Hot Sake" : ["Sho chiku Bai", "S: 3.50 | L: 6.50"],  
          "Sake Bomb" : ["Sake & Sapporo Draft Beer", "3.50"],  
          "Oyster Shooter" : ["", "3.95"], 
<<<<<<< Updated upstream
        }, props.cartItem)}
=======
        }, props)}
>>>>>>> Stashed changes

      <div className="corkage" style={{marginTop: "20px", color: "#ddd"}}>*** Corkage Fee - 10.00 ***</div>
    </div>
  );
}

export default Beverage;
