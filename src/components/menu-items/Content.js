import React from 'react';

const Content = ( props ) => {
  function clickHandler() {
    props.setItem({name:props.itemName, description: props.description, price: props.price, type: 'add'});
    props.dispatch();
  }

  return (
    <button className="item" onClick={clickHandler}>
      <h4>{props.itemName}</h4>
      <p>{props.description}<br />{props.price}</p>
    </button>
  );
}

export default Content;
