import React from 'react';
import Item from './Content';

const CreateItems = ( title, items, props ) => {
    let itemComponents = [];

    for (const [itemName, value] of Object.entries(items)) {
        itemComponents.push(<Item itemName={itemName} description={value[0]} price={value[1]} setItem={props.setItem} dispatch={props.dispatch} />);
    }

    return (
        <>
            <div className="item-title">{title}</div>
            <div className="items">
                {itemComponents}
            </div>
        </>
    )
}

export default CreateItems;