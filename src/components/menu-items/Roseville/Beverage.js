import React from 'react';
import Item from  '../Content';

const Beverage = () => {
  return(
    <>
    <div className="item-div">
      <div className="item-title"></div>
      <div className="items">
        <Item itemName="Beer Bottle 12oz" description="Sapporo, Asahi, Kirin, Bud Light, Corona, Blue moon" price="3.95" />
        <Item itemName="Draft Beer" description="Sapporo" price="12oz: 3.75 | 22oz: 6.50 | Pitcher: 15.95" />
        <Item itemName="Wine" description="Red, White" price="Glass: 6.50" />
        <Item itemName="Cold Sake" description="Premium Ginjo, Karatamba" price="13.95" />
        <Item itemName="Nigori Sake" description="Unfiltered Sake" price="9.95" />
        <Item itemName="Hot Sake" description="Sho chiku Bai" price="S: 3.50 | L: 6.50" />
        <Item itemName="Sake Bomb" description="Sake & Sapporo Draft Beer" price="3.50" />
        <Item itemName="Sake Rita" description="Sake, Margarita & One Choice of Bottled Beer" price="9.50" />
        <Item itemName="Oyster Shooter" description="" price="3.95" />

      </div>

      <div className="corkage" style={{marginTop: "20px", color: "#ddd"}}>*** Corkage Fee - 10.00 ***</div>
    </div>
    </>
  );
}

export default Beverage;
