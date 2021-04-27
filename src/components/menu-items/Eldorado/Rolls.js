import React from 'react';
import Item from '../Content';

const Rolls = () => {
  return(
    <div className="item-div">
      <div className="discount">Every Roll <span style={{color: '#bf1a04', fontWeight: 'bold'}}>50% OFF!</span></div>

      <div className="item-title">Vegetable Roll</div>
      <div className="items">
        <Item itemName="Asparagus Roll" description="asparagus" price="8.50" />
        <Item itemName="Avokyu Roll" description="avocado, cucumber" price="8.99" />
        <Item itemName="Avocado Maki" description="avocado" price="8.50" />
        <Item itemName="Futomaki" description="egg, cucumber, oshinko, kampyo, yamagobo" price="8.50" />
        <Item itemName="Kampyo Maki" description="squash" price="8.50" />
        <Item itemName="Kappa Maki" description="cucumber" price="8.50" />
        <Item itemName="Oshinko Maki" description="pickled radish" price="8.50" />
        <Item itemName="Texas Roll" description="deep-fried jalapeno, avocado, cream cheese" price="9.99" />
      </div>

      <div className="item-title">Beginner's Roll</div>
      <div className="items">
        <Item itemName="Alaskan Roll" description="salmon, avocado" price="9.99" />
        <Item itemName="California Roll" description="crab meat, avocado" price="8.99" />
        <Item itemName="Ebi Maki" description="cooked shrimp" price="8.99" />
        <Item itemName="Negi Hama" description="yellowtail, green onion" price="8.99" />
        <Item itemName="New York Roll" description="shrimp, avocado" price="9.99" />
        <Item itemName="Ocean Roll" description="yellowtail, avocado" price="9.99" />
        <Item itemName="Pacific Roll" description="tuna, avocado" price="9.99" />
        <Item itemName="Philly Roll" description="salmon, cream cheese, avocado" price="9.99" />
        <Item itemName="Rock'N'Roll" description="eel, avocado" price="9.99" />
        <Item itemName="Sake Maki" description="salmon" price="8.99" />
        <Item itemName="Salmon Skin Roll" description="salmon skin, cucumber" price="9.99" />
        <Item itemName="Spicy California" description="spicy crabmeat, avocado" price="8.99" />
        <Item itemName="Spicy Tuna Roll" description="spicy tuna, cucumber" price="9.99" />
        <Item itemName="Tekka Maki" description="tuna" price="8.99" />
      </div>

      <div className="item-title">Temaki - Hand Roll</div>
      <div className="items">
        <Item itemName="California Hand Roll" description="crab meat, avocado" price="8.50" />
        <Item itemName="Tempura Hand Roll" description="shrimp tempura, avocado, crabmeat" price="8.50" />
        <Item itemName="Spicy Tuna Hand Roll" description="spicy tuna, cucumber" price="8.99" />
        <Item itemName="Unagi Hand Roll" description="eel, cucumber" price="8.99" />
        <Item itemName="Fish Hand Roll" description="your choice of salmon, tuna, albacore, or yellow tail" price="8.99" />
        <Item itemName="Chop Hotate Hand Roll" description="Spicy scallop" price="8.99" />
        <Item itemName="Salmon Skin Hand Roll" description="salmon skin, cucumber" price="8.99" />
        <Item itemName="Spider Hand Roll" description="deep-fried softshell crab" price="8.99" />
        <Item itemName="ZigZag Hand Roll" description="deep-friedsoftshell crab,soy wrap" price="8.99" />
      </div>
    </div>
  );
}

export default Rolls;
