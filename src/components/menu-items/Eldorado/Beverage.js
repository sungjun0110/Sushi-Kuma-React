import React from 'react';
import CreateItems from '../CreateItems';

const Beverage = ( props ) => {
  return(
    <div className='item-div'>
        {CreateItems(
          "Beverage", 
          {
          "Beer Bottle 12oz" : ["Sapporo, Asahi, Kirin, Bud Light, Corona, Blue moon", "12oz: 5.50"], 
          "Draft Beer" : ["Sapporo", "12oz: 5.50 | 22oz: 8.50 | Pitcher: 19.95"], 
          "Wine" : ["Red, White", "Glass: 7.50"], 
          "Cold Sake" : ["Premium Ginjo, Karatamba", "15.95"], 
          "Nigori Sake" : ["Unfiltered Sake", "12.95"],  
          "Hot Sake" : ["Sho chiku Bai", "S: 5.50 | L: 9.50"],  
          "Sake Bomb" : ["Sake & Sapporo Draft Beer", "4.95"],  
          "Oyster Shooter" : ["", "4.95"], 
        }, props)}

      <div className="corkage" style={{marginTop: "20px", color: "#ddd"}}>*** Corkage Fee - 15.00 ***</div>
    </div>
  );
}

export default Beverage;
