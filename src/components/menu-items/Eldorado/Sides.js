import React from 'react';
import Item from '../Content';

const Sides = () => {
  return(
    <div className="item-div">
      <div className="item-title"></div>
      
      <div className="items">
        <Item itemName="Miso Soup" description="" price="2.00" />
        <Item itemName="Bowl of Steamed Rice" description="" price="2.00" />
        <Item itemName="Bowl of Sushi Rice" description="" price="2.00" />
      </div>
    </div>
  );
}

export default Sides;
