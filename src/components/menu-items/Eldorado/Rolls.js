import React from 'react';
import CreateItems from '../CreateItems';

const Rolls = ( props ) => {
  return(
    <div className="item-div">
      <div className="discount">Every Roll <span style={{color: '#bf1a04', fontWeight: 'bold'}}>50% OFF!</span></div>

        {CreateItems(
          "Vegetable Roll", 
          {
          "Asparagus Roll" : ["asparagus", "8.50"], 
          "Avokyu Roll" : ["avocado, cucumber", "8.99"], 
          "Avocado Maki" : ["avocado", "8.50"], 
          "Futomaki" : ["egg, cucumber, oshinko, kampyo, yamagobo", "8.50"], 
          "Kampyo Maki" : ["squash", "8.50"], 
          "Kappa Maki" : ["cucumber", "8.50"], 
          "Oshinko Maki" : ["pickled radish", "8.50"], 
          "Texas Roll" : ["deep-fried jalapeno, avocado, cream cheese", "9.99"], 
        }, props.cartItem)}

        {CreateItems(
          "Beginner's Roll", 
          {
          "Alaskan Roll" : ["salmon, avocado", "9.99"], 
          "California Roll" : ["crab meat, avocado", "8.99"], 
          "Ebi Maki" : ["cooked shrimp", "8.99"], 
          "Negi Hama" : ["yellowtail, green onion", "8.99"], 
          "New York Roll" : ["shrimp, avocado", "9.99"], 
          "Ocean Roll" : ["yellowtail, avocado", "9.99"], 
          "Pacific Roll" : ["tuna, avocado", "9.99"], 
          "Philly Roll" : ["salmon, cream cheese, avocado", "9.99"], 
          "Rock'N'Roll" : ["eel, avocado", "9.99"], 
          "Sake Maki" : ["salmon", "8.99"], 
          "Salmon Skin Roll" : ["salmon skin, cucumber", "9.99"], 
          "Spicy California" : ["spicy crabmeat, avocado", "8.99"], 
          "Spicy Tuna Roll" : ["spicy tuna, cucumber", "9.99"], 
          "Tekka Maki" : ["tuna", "8.99"], 
        }, props.cartItem)}

        {CreateItems(
          "Temaki - Hand Roll", 
          {
          "California Hand Roll" : ["crab meat, avocado", "8.50"], 
          "Tempura Hand Roll" : ["shrimp tempura, avocado, crabmeat", "8.50"], 
          "Spicy Tuna Hand Roll" : ["spicy tuna, cucumber", "8.99"], 
          "Unagi Hand Roll" : ["eel, cucumber", "8.99"], 
          "Fish Hand Roll" : ["your choice of salmon, tuna, albacore, or yellow tail", "8.99"], 
          "Chop Hotate Hand Roll" : ["Spicy scallop", "8.99"], 
          "Salmon Skin Hand Roll" : ["salmon skin, cucumber", "8.99"], 
          "Spider Hand Roll" : ["deep-fried softshell crab", "8.99"], 
          "ZigZag Hand Roll" : ["deep-friedsoftshell crab,soy wrap", "8.99"], 
        }, props.cartItem)}
    </div>
  );
}

export default Rolls;
