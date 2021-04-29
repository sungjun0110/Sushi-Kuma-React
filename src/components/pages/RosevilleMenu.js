import React, { useState } from 'react';
import Category from '../menu-items/Category';
import './Menu.css';
import { Link } from 'react-router-dom';

import App from '../menu-items/Roseville/Appetizer';
import Bev from '../menu-items/Roseville/Beverage';
import Des from '../menu-items/Roseville/Dessert';
import Ent from '../menu-items/Roseville/Entree';
import Kid from '../menu-items/Roseville/Kids';
import Nigi from '../menu-items/Roseville/Nigiri';
import Street from '../menu-items/Roseville/StreetFood';
import Roll from '../menu-items/Roseville/Rolls';
import Side from '../menu-items/Roseville/Sides';
import Spe from '../menu-items/Roseville/SpecialRolls';
import Com from '../menu-items/Roseville/SushiCombo';
import Ben from '../menu-items/Roseville/Bento';

import Cart from '../cart/Cart';

const RosevilleMenu = () => {
  const [selectedItems, setSelectedItems] = useState([]);

  // categori name : page element
  const cateDict = {
    'Appetizer': <App cartItem={setSelectedItems} />, 
    'Nigiri': <Nigi cartItem={setSelectedItems} />, 
    'Street Food': <Street cartItem={setSelectedItems} />,
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

  //jsx container
  const categories = [];

  for (const [catName, page] of Object.entries(cateDict)) {
    categories.push(<Category name={catName}>{page}</Category>);
  }  

  return (
    <>
      <div id='title'>
        <h3>
          Roseville
        </h3>
      </div>
      <div className='menu-div'>
        <div className='warning'>
          <p>*Consuming raw or undercooked meats, poultry, seafood, shellfish, or eggs may increase your risk of foodborne illness.
          <br />*Our menu and prices are subject to change.<br />*18% gratuity will be added for parties of six or more.</p>
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

export default RosevilleMenu;
