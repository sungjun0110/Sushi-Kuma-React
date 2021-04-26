import React from 'react';

const Content = ( props ) => {


  return (
    <div className="item">
      <h4>{props.itemName}</h4>
      <p>{props.description}<br />{props.price}</p>
    </div>
  );
}

export default Content;
