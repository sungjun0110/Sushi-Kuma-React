import React from 'react';
import CreateItems from '../CreateItems';

const Beverage = ( props ) => {
  return(
    <div className='item-div'>
        {CreateItems(
          "Beverage", 
          {
          "Beer Bottle 12oz" : ["Sapporo, Asahi, Kirin, Bud Light, Corona, Blue moon", "12oz: 4.50"], 
          "Draft Beer" : ["Sapporo", "12oz: 4.50 | 22oz: 7.50 | Pitcher: 17.95"], 
          "Wine" : ["Red, White", "Glass: 6.50"], 
          "Cold Sake" : ["Premium Ginjo, Karatamba", "13.95"], 
          "Nigori Sake" : ["Unfiltered Sake", "10.95"],  
          "Hot Sake" : ["Sho chiku Bai", "S: 4.50 | L: 7.50"],  
          "Sake Bomb" : ["Sake & Sapporo Draft Beer", "3.95"],  
          "Oyster Shooter" : ["", "3.95"], 
        }, props)}

      <div className="corkage" style={{marginTop: "20px", color: "#ddd"}}>*** Corkage Fee - 10.00 ***</div>
    </div>
  );
}

export default Beverage;
