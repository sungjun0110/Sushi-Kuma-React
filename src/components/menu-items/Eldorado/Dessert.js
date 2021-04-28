import React from 'react';
import CreateItems from '../CreateItems';

const Dessert = ( props ) => {
  return(
    <div className='item-div'>
        {CreateItems(
          "Dessert", 
          {
          "Soda" : ["Coke, Diet Coke, Mr.pibb, Lemonade, Fanta, Sprite", "2.50"], 
          "Ramune" : ["Japanese marble soda", "2.99"], 
          "Iced Tea" : ["", "2.50"], 
          "Green Iced Tea" : ["", "2.50"], 
          "Hot Tea" : ["Genmai", "1.00"], 
          "Mochi Ice cream" : ["strawberry, chocolate, mango", "3.99"], 
        }, props.cartItem)}
    </div>
  );
}

export default Dessert;
