import React from 'react';
import Item from './Content';

const CreateItems = ( title, items, onClick ) => {
    let itemCompnents = [];

    for (const [itemName, value] of Object.entries(items)) {
        itemCompnents.push(<Item itemName={itemName} description={value[0]} price={value[1]} onClick={onClick} />);
    }

    return (
        <>
            <div className="item-title">{title}</div>
            {(title === "Sushi & Sashimi Combination")? <p style={{color:"#ddd"}}>Served with soup & salad</p> : null}
            <div className="items">
                {itemCompnents}
            </div>
        </>
    )
}

export default CreateItems;