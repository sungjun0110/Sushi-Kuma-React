import React from 'react';
import Item from  '../Content';

const Kids = () => {
  return(
    <>
    <div className="item-div">
      <div className="item-title">Kids' Menu</div>
      
      <div className="items">
        <Item itemName="Teddy Bear 1" description="Chicken teriyaki or Sesame chicken, California roll – 4pcs, gyoza - 2pcs" price="9.95" />
        <Item itemName="Teddy Bear 2" description="Mixed tempura, California roll – 4pcs, gyoza - 2pcs" price="9.95" />
        <Item itemName="Teddy Bear 3" description="Chicken Katsu or Ton Katsu, California – 4pcs, gyoza - 2pcs" price="9.95" />
        <Item itemName="Kid’s Udon" description="Thick noodle soup" price="8.95" />
      </div>
    </div>
    </>
  );
}

export default Kids;
