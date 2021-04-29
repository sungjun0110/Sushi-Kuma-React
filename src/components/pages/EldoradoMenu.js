import React, { useState } from 'react';
import Category from '../menu-items/Category';
import { Link } from 'react-router-dom';

import App from '../menu-items/Eldorado/Appetizer';
import Bev from '../menu-items/Eldorado/Beverage';
import Des from '../menu-items/Eldorado/Dessert';
import Ent from '../menu-items/Eldorado/Entree';
import Kid from '../menu-items/Eldorado/Kids';
import Nigi from '../menu-items/Eldorado/Nigiri';
import Roll from '../menu-items/Eldorado/Rolls';
import Side from '../menu-items/Eldorado/Sides';
import Spe from '../menu-items/Eldorado/SpecialRolls';
import Com from '../menu-items/Eldorado/SushiCombo';
import Ben from '../menu-items/Eldorado/Bento';

import Cart from '../cart/Cart';

const EldoradoMenu = () => {
  const [selectedItems, setSelectedItems] = useState([]);

  // categori name : page element
  const cateDict = {
    'Appetizer': <App cartItem={setSelectedItems} />, 
    'Nigiri': <Nigi cartItem={setSelectedItems} />, 
    'Kuma Bento Box': <Ben cartItem={setSelectedItems} />, 
    'Entrée': <Ent cartItem={setSelectedItems} />, 
    "Kids' Menu": <Kid cartItem={setSelectedItems} />, 
    'Sushi & Sashimi Combo': <Com cartItem={setSelectedItems} />, 
    'Rolls': <Roll cartItem={setSelectedItems} />, 
    'Kuma Special Rolls': <Spe cartItem={setSelectedItems} />, 
    'Side': <Side cartItem={setSelectedItems} />, 
    'Alcoholic Beverage': <Bev cartItem={setSelectedItems} />, 
    'Beverage & Dessert': <Des cartItem={setSelectedItems} />, 
    
  }

  const categories = [];

  for (const [catName, page] of Object.entries(cateDict)) {
    categories.push(<Category name={catName}>{page}</Category>);
  }

  return (
    <>
      <div id='title'>
        <h3>
          El Dorado Hills
        </h3>
      </div>

      <div className='menu-div'>
        <div className='warning'>
          <p>*Consuming raw or undercooked meats, poultry, seafood, shellfish, or eggs may increase your risk of foodborne illness.<br />*Our menu and prices are subject to change.<br />*18% gratuity will be added for parties of six or more.</p>
        </div>
        {categories}
      </div>

      {/* <Cart cartItem={setSelectedItems} ></Cart> */}

      <Link to='/menu'>
        <button id='back-btn'>Back</button>
      </Link>
    </>
  );
}

export default EldoradoMenu;
