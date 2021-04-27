import React from 'react';
import Item from '../Content';

const SushiCombo = () => {
  return(
    <>
    <div className="item-div">
      <div className="item-title">Sushi & Sashimi Combination</div>

      <p style={{color:"#ddd"}}>Served with soup & salad</p>
      
      <div className="items">
        <Item itemName="Sushi-5" description="5 pcs chef’s choice nigiri sushi & california roll" price="16.50" />
        <Item itemName="Sushi-7" description="7 pcs chef’s choice nigiri sushi & california roll" price="20.50" />
        <Item itemName="Sushi-9" description="9 pcs chef’s choice nigiri sushi & california roll" price="24.50" />
        <Item itemName="Sushi & Sashimi - Lunch" description="3 pcs - sushi, 3 pcs - sashimi & California roll" price="15.50" />
        <Item itemName="Sushi & Sashimi - Dinner" description="5 pcs- sushi, 4 pcs- sashimi & california roll" price="20.95" />
        <Item itemName="Chirashi Lunch" description="12 pcs chef’s choice of sliced raw fish & served with sushi rice" price="20.95" />
        <Item itemName="Chirashi Dinner" description="16 pcs chef’s choice of sliced raw fish & served with sushi rice" price="25.95" />
        <Item itemName="Sashimi Lunch" description="12 pcs chef’s choice of sliced raw fish & served with steamed rice" price="20.95" />
        <Item itemName="Sashimi Dinner" description="16 pcs chef’s choice of sliced raw fish & served with steamed rice" price="25.95" />
        <Item itemName="Sashimi Deluxe" description="25 pcs chef’s choice of sliced raw fish & served with steamed rice" price="39.95" />
      </div>
    </div>
    </>
  );
}

export default SushiCombo;
