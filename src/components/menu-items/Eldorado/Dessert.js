import React from 'react';
import CreateItems from '../CreateItems';

const Dessert = ( props ) => {
  return(
    <div className='item-div'>
        {CreateItems(
          "Dessert", 
          {
          "Soda" : ["Coke, Diet Coke, Mr.pibb, Lemonade, Fanta, Sprite", "2.95"], 
          "Ramune" : ["Japanese marble soda", "3.50"], 
          "Iced Tea" : ["", "2.95"], 
          "Green Iced Tea" : ["", "2.75"], 
          "Hot Tea" : ["Genmai", "1.99"], 
          "Mochi Ice cream" : ["strawberry, chocolate, mango", "4.50"], 
        }, props)}
    </div>
  );
}

export default Dessert;
