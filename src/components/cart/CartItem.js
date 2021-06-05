import React from 'react';
import './Cart.css';

const Content = ( props ) => {
  function clickHandler() {
    props.setItem({id: props.id});
    props.dispatch();
  }

  return (
    <div className="cartItem">
        <div className="leftItemBox">
            <h4>{props.itemName}</h4>
            <p>{props.price}</p>
        </div>
        <button className="deleteBtn" onClick={clickHandler}>X</button>
    </div>
  );
}

export default Content;
