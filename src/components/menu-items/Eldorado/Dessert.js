import React from 'react';
import Item from '../Content';

const Dessert = () => {
  return(
    <div className='item-div'>
      <div className="item-title"></div>
      
      <div className="items">
        <Item itemName="Soda" description="Coke, Diet Coke, Mr.pibb, Lemonade, Fanta, Sprite" price="2.50" />
        <Item itemName="Ramune" description="Japanese marble soda" price="2.99" />
        <Item itemName="Iced Tea" description="" price="2.50" />
        <Item itemName="Green Iced Tea" description="" price="2.50" />
        <Item itemName="Hot Tea" description="Genmai" price="1.00" />
        <Item itemName="Mochi Ice cream" description="strawberry, chocolate, mango" price="3.99" />
      </div>
    </div>
  );
}

export default Dessert;
