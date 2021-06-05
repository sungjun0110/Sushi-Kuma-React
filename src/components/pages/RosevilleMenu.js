import React, { useState, useReducer } from 'react';
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
import DinnerBento from '../menu-items/Roseville/DinnerBento';
import LunchBento from '../menu-items/Roseville/LunchBento';

import Cart from '../cart/Cart';

const RosevilleMenu = () => {
  const reducer = (items, action) => {
    switch (action) {
      case 'add':
        let temp = [...items, {id: itemId , name: item.name, description: item.description, price: item.price}];
        setItemId(itemId+1);
        return temp;
      case 'remove':
        return items.filter(i => i.id !== item.id);
      default:
        return items;
    }
  }

  const [itemId, setItemId] = useState(0);
  const [item, setItem] = useState({});
  const [items, dispatch] = useReducer(reducer, []);

  // categori name : page element
  const cateDict = {
    'Appetizer': <App setItem={setItem} dispatch={() => dispatch('add')} />, 
    'Nigiri': <Nigi setItem={setItem} dispatch={() => dispatch('add')} />, 
    'Street Food': <Street setItem={setItem} dispatch={() => dispatch('add')} />,
    'Kuma Bento Box': <Ben setItem={setItem} dispatch={() => dispatch('add')} />,  
    'Entrée': <Ent setItem={setItem} dispatch={() => dispatch('add')} />, 
    "Kids' Menu": <Kid setItem={setItem} dispatch={() => dispatch('add')} />, 
    'Sushi & Sashimi Combo': <Com setItem={setItem} dispatch={() => dispatch('add')} />, 
    'Rolls': <Roll setItem={setItem} dispatch={() => dispatch('add')} />, 
    'Kuma Special Rolls': <Spe setItem={setItem} dispatch={() => dispatch('add')} />, 
    'Side': <Side setItem={setItem} dispatch={() => dispatch('add')} />, 
    'Alcoholic Beverage': <Bev setItem={setItem} dispatch={() => dispatch('add')} />, 
    'Beverage & Dessert': <Des setItem={setItem} dispatch={() => dispatch('add')} />, 
  }

  //jsx container
  const categories = [];

  for (const [catName, page] of Object.entries(cateDict)) {
    categories.push(<Category name={catName}>{page}</Category>);
  }  

  return (
    <>
      <div className='page'>
        <div id='title'>
          <h3>
            Roseville
          </h3>
        </div>
        <div className='warning'>
          <p>*Consuming raw or undercooked meats, poultry, seafood, shellfish, or eggs may increase your risk of foodborne illness.
          <br />*Our menu and prices are subject to change.<br />*18% gratuity will be added for parties of six or more.</p>
        </div>
        {categories}

        <Link to='/menu'>
          <button id='back-btn'>Back</button>
        </Link>
      </div>

      {/* <Cart items={items} setItem={setItem} dispatch={() => dispatch('remove')} ></Cart> */}

      
    </>
  );
}

export default RosevilleMenu;
