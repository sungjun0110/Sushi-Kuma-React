import React from 'react';

const Content = ( props ) => {
  function clickHandler() {
    props.setItem({name:props.itemName, description: props.description, price: props.price, type: 'add'});
    props.dispatch();
  }

  return (
    <div className="item" onClick={clickHandler}>
      <h4>{props.itemName}</h4>
      <p>{props.description}<br />{props.price}</p>
    </div>
  );
}

export default Content;
