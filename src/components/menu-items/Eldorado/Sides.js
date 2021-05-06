import React from 'react';
import CreateItems from '../CreateItems';

const Sides = ( props ) => {
  return(
    <div className="item-div">
        {CreateItems(
          "Side", 
          {
          "Miso Soup" : ["", "2.00"], 
          "Bowl of Steamed Rice" : ["", "2.00"], 
          "Bowl of Sushi Rice" : ["", "2.00"], 
        }, props)}
    </div>
  );
}

export default Sides;
