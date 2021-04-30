import React, { useEffect, useState } from 'react';
import './Cart.css';
import { ReactComponent as Note } from './notes.svg';
import Item from './CartItem';

const Cart = ( props ) => {
    const [isClicked, setIsClicked] = useState(false);
    
    let itemCompnents = [];

    for (const {id, name, description, price} of props.items) {
        itemCompnents.push(<Item id={id} itemName={name} description={description} price={price} setItem={props.setItem} dispatch={props.dispatch} />);
    }

    function clickHandler () {
        if (isClicked === false) setIsClicked(true);
        else setIsClicked(false);
    }

    return (
        <>
            <button id="noteBtn" className={isClicked? 'active':null} onClick={clickHandler}>
                <Note className="Note" fill="#ddd" height="40" width="40" />
            </button>

            <div id="cart-box" className={isClicked? 'active':null}>
                <div id="cart-content" className={isClicked? 'active':null}>
                    {isClicked? itemCompnents : null}
                </div>
            </div>
        </>
    );
}

export default Cart;