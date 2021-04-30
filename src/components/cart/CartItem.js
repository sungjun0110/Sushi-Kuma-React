import React from 'react';

const Content = ( props ) => {
  function clickHandler() {
    props.setItem({id: props.id});
    props.dispatch();
  }

  return (
    <div className="item">
      <h4>{props.itemName}<button onClick={clickHandler}>X</button></h4>
      <p>{props.description}<br />{props.price}</p>
    </div>
  );
}

export default Content;
