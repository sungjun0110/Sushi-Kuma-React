import React from 'react';
import CreateItems from '../CreateItems';

const Kids = ( props ) => {
  return(
    <div className="item-div">
      {CreateItems(
        "Kids' Menu", 
        {
        "Teddy Bear 1" : ["Chicken teriyaki or Sesame chicken, California roll – 4pcs, gyoza - 2pcs", "11.95"], 
        "Teddy Bear 2" : ["Mixed tempura, California roll – 4pcs, gyoza - 2pcs", "11.95"], 
        "Teddy Bear 3" : ["Chicken Katsu or Ton Katsu, California – 4pcs, gyoza - 2pcs", "11.95"], 
        "Kid's Udon" : ["Thick noddle soup", "10.95"], 
      }, props)}
    </div>
  );
}

export default Kids;
