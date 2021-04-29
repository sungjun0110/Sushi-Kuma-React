import React from 'react';

const Content = ( props ) => {
  function cartItems(){
    let name = props.itemName;
    let price = props.price;
    let cartItem = props.cartItem;
    console.log({name, price});
    cartItem({name, price});
  }

  return (
    <div className="item" onClick={cartItems}>
      <h4>{props.itemName}</h4>
      <p>{props.description}<br />{props.price}</p>
    </div>
  );
}

export default Content;
