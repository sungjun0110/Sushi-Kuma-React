import React from 'react';
import CreateItems from '../CreateItems';

const Rolls = ( props ) => {
  return(
    <div className="item-div">
      <div className="discount">Every Roll <span style={{color: '#bf1a04', fontWeight: 'bold'}}>50% OFF!</span></div>

        {CreateItems(
          "Vegetable Roll", 
          {
          "Asparagus Roll" : ["asparagus", "11.95"], 
          "Avokyu Roll" : ["avocado, cucumber", "11.99"], 
          "Avocado Maki" : ["avocado", "11.95"], 
          "Futomaki" : ["egg, cucumber, oshinko, kampyo, yamagobo", "12.99"], 
          "Kampyo Maki" : ["squash", "11.99"], 
          "Kappa Maki" : ["cucumber", "11.99"], 
          "Oshinko Maki" : ["pickled radish", "11.95"], 
          "Texas Roll" : ["deep-fried jalapeno, avocado, cream cheese", "12.99"], 
        }, props)}

        {CreateItems(
          "Beginner's Roll", 
          {
          "Alaskan Roll" : ["salmon, avocado", "12.99"], 
          "California Roll" : ["crab meat, avocado", "11.99"], 
          "Ebi Maki" : ["cooked shrimp", "11.99"], 
          "Negi Hama" : ["yellowtail, green onion", "11.99"], 
          "New York Roll" : ["shrimp, avocado", "12.99"], 
          "Ocean Roll" : ["yellowtail, avocado", "12.99"], 
          "Pacific Roll" : ["tuna, avocado", "12.99"], 
          "Philly Roll" : ["salmon, cream cheese, avocado", "12.99"], 
          "Rock'N'Roll" : ["eel, avocado", "12.99"], 
          "Sake Maki" : ["salmon", "11.99"], 
          "Salmon Skin Roll" : ["salmon skin, cucumber", "12.99"], 
          "Spicy California" : ["spicy crabmeat, avocado", "11.99"], 
          "Spicy Tuna Roll" : ["spicy tuna, cucumber", "12.99"], 
          "Tekka Maki" : ["tuna", "11.99"], 
        }, props)}

        {CreateItems(
          "Temaki - Hand Roll", 
          {
          "California Hand Roll" : ["crab meat, avocado", "11.99"], 
          "Tempura Hand Roll" : ["shrimp tempura, avocado, crabmeat", "11.99"], 
          "Spicy Tuna Hand Roll" : ["spicy tuna, cucumber", "12.99"], 
          "Unagi Hand Roll" : ["eel, cucumber", "12.99"], 
          "Fish Hand Roll" : ["your choice of salmon, tuna, albacore, or yellow tail", "12.99"], 
          "Chop Hotate Hand Roll" : ["Spicy scallop", "12.99"], 
          "Salmon Skin Hand Roll" : ["salmon skin, cucumber", "12.99"], 
          "Spider Hand Roll" : ["deep-fried softshell crab", "12.99"], 
          "ZigZag Hand Roll" : ["deep-friedsoftshell crab,soy wrap", "12.99"], 
        }, props)}
    </div>
  );
}

export default Rolls;
