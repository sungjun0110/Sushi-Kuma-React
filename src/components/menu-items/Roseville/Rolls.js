import React from 'react';
import CreateItems from '../CreateItems';

const Rolls = ( props ) => {
  return(
    <div className="item-div">
      <div className="discount">Every Roll <span style={{color: '#bf1a04', fontWeight: 'bold'}}>50% OFF!</span></div>
        {CreateItems(
          "Beginner's Roll", 
          {
          "Alaskan Roll" : ["salmon, avocado", "10.99"], 
          "Avokyu Roll" : ["avocado, cucumber", "9.99"], 
          "California Roll" : ["crab meat, avocado", "9.99"], 
          "Negi Hama" : ["yellowtail, green onion", "9.99"], 
          "New York Roll" : ["shrimp, avocado", "10.99"], 
          "Ocean Roll" : ["yellowtail, avocado", "10.99"], 
          "Pacific Roll" : ["tuna, avocado", "10.99"], 
          "Philly Roll" : ["salmon, cream cheese, avocado", "10.99"], 
          "Sake Maki" : ["salmon", "9.99"], 
          "Unakyu Roll" : ["eel, cucumber", "10.99"], 
          "Salmon Skin Roll" : ["salmon skin, cucumber", "10.99"], 
          "Spicy Tuna Roll" : ["spicy tuna, cucumber", "10.99"], 
          "Texas Roll" : ["deep-fried jalapeno cream cheese, avocado", "10.99"], 
          "Tekka Maki" : ["tuna", "9.99"], 
          }, 
          props
        )}

        {CreateItems(
          "Temaki - Hand Roll", 
          {
          "California Hand Roll" : ["crab meat, avocado", "9.50"], 
          "Tempura Hand Roll" : ["shrimp tempura, avocado, crab meat", "9.50"], 
          "Spicy Tuna Hand Roll" : ["spicy tuna, cucumber", "9.99"], 
          "Unagi Hand Roll" : ["eel, cucumber", "9.99"], 
          "Hamachi Hand Roll" : ["hamachi, green onion", "9.99"], 
          "Chop Hotate Hand Roll" : ["Spicy scallop", "9.99"], 
          "Salmon Skin Hand Roll" : ["salmon skin, cucumber", "9.99"], 
          "Spider Hand Roll" : ["Deep-fried softshell crab", "9.99"], 
          "ZigZag Hand Roll" : ["deep-fried softshell crab,soy wrap", "9.99"], 
          "Maguro Hand Roll" : ["tuna", "9.99"], 
          }, 
          props
        )}
    </div>
  );
}

export default Rolls;
