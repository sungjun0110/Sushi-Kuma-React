import React from 'react';
import CreateItems from '../CreateItems';

const Rolls = ( props ) => {
  return(
    <div className="item-div">
      <div className="discount">Every Roll <span style={{color: '#bf1a04', fontWeight: 'bold'}}>50% OFF!</span></div>

        {CreateItems(
          "Vegetable Roll", 
          {
          "Asparagus Roll" : ["asparagus", "9.50"], 
          "Avokyu Roll" : ["avocado, cucumber", "9.99"], 
          "Avocado Maki" : ["avocado", "9.50"], 
          "Futomaki" : ["egg, cucumber, oshinko, kampyo, yamagobo", "10.99"], 
          "Kampyo Maki" : ["squash", "9.50"], 
          "Kappa Maki" : ["cucumber", "9.50"], 
          "Oshinko Maki" : ["pickled radish", "9.50"], 
          "Texas Roll" : ["deep-fried jalapeno, avocado, cream cheese", "10.99"], 
        }, props)}

        {CreateItems(
          "Beginner's Roll", 
          {
          "Alaskan Roll" : ["salmon, avocado", "10.99"], 
          "California Roll" : ["crab meat, avocado", "9.99"], 
          "Ebi Maki" : ["cooked shrimp", "10.99"], 
          "Negi Hama" : ["yellowtail, green onion", "9.99"], 
          "New York Roll" : ["shrimp, avocado", "10.99"], 
          "Ocean Roll" : ["yellowtail, avocado", "10.99"], 
          "Pacific Roll" : ["tuna, avocado", "10.99"], 
          "Philly Roll" : ["salmon, cream cheese, avocado", "10.99"], 
          "Rock'N'Roll" : ["eel, avocado", "10.99"], 
          "Sake Maki" : ["salmon", "9.99"], 
          "Salmon Skin Roll" : ["salmon skin, cucumber", "10.99"], 
          "Spicy California" : ["spicy crabmeat, avocado", "9.99"], 
          "Spicy Tuna Roll" : ["spicy tuna, cucumber", "10.99"], 
          "Tekka Maki" : ["tuna", "9.99"], 
        }, props)}

        {CreateItems(
          "Temaki - Hand Roll", 
          {
          "California Hand Roll" : ["crab meat, avocado", "9.50"], 
          "Tempura Hand Roll" : ["shrimp tempura, avocado, crabmeat", "9.50"], 
          "Spicy Tuna Hand Roll" : ["spicy tuna, cucumber", "9.99"], 
          "Unagi Hand Roll" : ["eel, cucumber", "9.99"], 
          "Fish Hand Roll" : ["your choice of salmon, tuna, albacore, or yellow tail", "9.99"], 
          "Chop Hotate Hand Roll" : ["Spicy scallop", "9.99"], 
          "Salmon Skin Hand Roll" : ["salmon skin, cucumber", "9.99"], 
          "Spider Hand Roll" : ["deep-fried softshell crab", "9.99"], 
          "ZigZag Hand Roll" : ["deep-friedsoftshell crab,soy wrap", "9.99"], 
        }, props)}
    </div>
  );
}

export default Rolls;
