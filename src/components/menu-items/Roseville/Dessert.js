import React from 'react';
import CreateItems from  '../CreateItems';

const Dessert = ( props ) => {
  return(
    <div className="item-div">
        {CreateItems(
          "Dessert", 
          {
          "Soda" : ["Coke, Diet Coke, Mr.pibb, Lemonade, Fanta, Sprite", "2.95"], 
          "Ramune" : ["Japanese marble soda", "3.50"], 
          "Fruit Juice" : ["Apple, Orange", "2.95"], 
          "Sparkling Water" : ["s. Pellegrino", "2.95"], 
          "Iced Tea" : ["", "2.95"], 
          "Green Iced Tea" : ["", "2.95"], 
          "Hot Tea" : ["Genmai", "1.99"], 
          "Mochi Ice cream" : ["strawberry, chocolate, mango", "5.50"], 
          }, 
          props
        )}
    </div>
  );
}

export default Dessert;
