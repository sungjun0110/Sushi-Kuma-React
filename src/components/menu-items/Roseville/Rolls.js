import React from 'react';
import Item from '../Content';

const Rolls = () => {
  return(
    <>
    <div className="item-div">
      <div className="discount">Every Roll <span style={{color: '#bf1a04', fontWeight: 'bold'}}>50% OFF!</span></div>
      <div className="item-title">Beginner's Roll</div>
      <div className="items">
        <Item itemName="Alaskan Roll" description="salmon, avocado" price="9.99" />
        <Item itemName="Avokyu Roll" description="avocado, cucumber" price="8.99" />
        <Item itemName="California Roll" description="crab meat, avocado" price="8.99" />
        <Item itemName="Negi Hama" description="yellowtail, green onion" price="8.99" />
        <Item itemName="New York Roll" description="shrimp, avocado" price="9.99" />
        <Item itemName="Ocean Roll" description="yellowtail, avocado" price="9.99" />
        <Item itemName="Pacific Roll" description="tuna, avocado" price="9.99" />
        <Item itemName="Philly Roll" description="salmon, cream cheese, avocado" price="9.99" />
        <Item itemName="Sake Maki" description="salmon" price="8.99" />
        <Item itemName="Unakyu Roll" description="eel, cucumber" price="9.99" />
        <Item itemName="Salmon Skin Roll" description="salmon skin, cucumber" price="9.99" />
        <Item itemName="Spicy Tuna Roll" description="spicy tuna, cucumber" price="9.99" />
        <Item itemName="Texas Roll" description="deep-fried jalapeno cream cheese, avocado" price="9.99" />
        <Item itemName="Tekka Maki" description="tuna" price="8.99" />
      </div>

      <div className="item-title">Temaki - Hand Roll</div>
      <div className="items">
        <Item itemName="California Hand Roll" description="crab meat, avocado" price="8.50" />
        <Item itemName="Tempura Hand Roll" description="shrimp tempura, avocado, crab meat" price="8.50" />
        <Item itemName="Spicy Tuna Hand Roll" description="spicy tuna, cucumber" price="8.99" />
        <Item itemName="Unagi Hand Roll" description="eel, cucumber" price="8.99" />
        <Item itemName="Hamachi Hand Roll" description="hamachi, green onion" price="8.99" />
        <Item itemName="Chop Hotate Hand Roll" description="Spicy scallop" price="8.99" />
        <Item itemName="Salmon Skin Hand Roll" description="salmon skin, cucumber" price="8.99" />
        <Item itemName="Spider Hand Roll" description="Deep-fried softshell crab" price="8.99" />
        <Item itemName="ZigZag Hand Roll" description="deep-fried softshell crab,soy wrap" price="8.99" />
        <Item itemName="Maguro Hand Roll" description="tuna" price="8.99" />
      </div>
    </div>
    </>
  );
}

export default Rolls;
