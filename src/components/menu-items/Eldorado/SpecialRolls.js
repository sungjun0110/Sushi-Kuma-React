import React from 'react';
import CreateItems from '../CreateItems';

const SpecialRolls = ( props ) => {
  return(
    <div className="item-div">
      <div className="discount">Every Roll <span style={{color: '#bf1a04', fontWeight: 'bold'}}>50% OFF!</span></div>
      
        {CreateItems(
          "Non-Raw", 
          {
          "Fair Oaks" : ["Deep-fried shrimp | avocado, masago | special sauce", "14.99"], 
          "Golden Gate" : ["Deep-fried shrimp | crab meat, masago | special sauce", "15.99"], 
          "Sesame Chicken Roll" : ["crabmeat, avocado, ceram cheese | sesame chicken | unagi sauce", "15.99"], 
          "Red Bull" : ["Deep-fried Shrimp, cream cheese | spicy crab meat, masago | special sauce | Soy wrap", "16.99"], 
          "Spider" : ["Deep-fried soft shell crab, cucumber, avocado, crabmeat | masago | unagi sauce | 5pcs", "15.50"], 
          "Tempura Crunchy" : ["Deep-friedshrimp, avocado, crab meat, crunchy |unagi sauce | 5pcs", "14.99"], 
          "Tempura Roll" : ["Deep-fried shrimp, avocado, cucumber, crabmeat | 5pcs", "12.99"], 
          "Veggie Tempura Roll" : ["Deep-fried carrot, zucchini, asparagus | unagi sauce- 5pcs", "12.50"], 
          "Yummy Yummy" : ["Deep-fried shrimp, avocado, cucumber, cream cheese, crab meat, masago | 5pcs", "14.50"], 
        }, props.cartItem)}

        {CreateItems(
          "Eel", 
          {
          "Blue Moon" : ["Deep-fried shrimp, orange | unagi, crab, masago | special sauce", "18.50"], 
          "Caterpillar" : ["Eel, cucumber | avocado | unagi sauce", "17.99"], 
          "Dragon" : ["Deep-fried shrimp, crabmeat | eel, masago | special sauce", "17.99"], 
          "Hwy 50" : ["Crabmeat, avocado | eel, cooked shrimp, Masago | special sacue", "16.99"], 
          "Spicy Johny" : ["Deep-fried shrimp, spicy tuna | eel, masago | special sauce", "17.99"], 
          "Spicy crunchy" : ["Spicy tuna, eel, seaweed salad, cucumber | crunchy, unagi sauce | 5pcs", "15.50"], 
          "Lake Tahoe" : ["Deep-fried shrimp, cream cheese, cucumber | unagi, masago | special sauce", "17.50"], 
        }, props.cartItem)}

        {CreateItems(
          "Raw", 
          {
          "49er" : ["Deep-friedshrimp, cream cheese, cucumber | salmon, lemon, masago | special sauce", "16.50"], 
          "911" : ["Spicy tuna, cucumber | tuna, masago | spicy & special sauce", "16.50"], 
          "Arigato" : ["Deep-friedShrimp | salmon, tuna, masago | special sauce", "15.99"], 
          "Cherry Blossom" : ["Salmon, avocado | tuna, masago | special sauce", "16.99"], 
          "Crazy Horse" : ["Salmon, tuna, yellowtail, avocado, masago | special sauce - 5pcs", "16.99"], 
          "Folsom Lake" : ["Deep-friedshrimp, spicy tuna | salmon, masago | special sauce", "17.99"], 
          "Happy" : ["Deep-friedshrimp | tuna, yellowtail, masago | special sauce", "16.99"], 
          "Kamikaze" : ["Spicy crab, jalapeno, cream cheese | cooked shrimp, salmon, masago | special sauce", "18.50"], 
          "Kevala" : ["Deep-fried shrimp, spicy tuna, crabmeat | scallop, masago, special sauce", "17.99"], 
          "Kiss Me" : ["Crab meat, avocado | salmon, masago | special sauce", "16.50"], 
          "Kuma" : ["Deep-friedshrimp | avocado, sweet shrimp & 5 kinds of raw fish masago | special sauce", "19.50"], 
          "Las Vegas" : ["Deep-friedAsparagus, crabmeat, cream cheese | tuna, salmon, masago, special sauce", "17.99"], 
          "Mafia" : ["Deep-friedshrimp, crabmeat, cream cheese | scallop, salmon, masago | special sauce", "17.99"], 
          "Orange Blossom" : ["Tuna, avocado | salmon, masago | special sauce", "16.99"], 
          "Pier 39" : ["Spicy tuna, cucumber | yellowtail, masago, spicy & special sauce", "16.50"], 
          "Pink Lady" : ["Deep-fried shrimp, crab meat | tuna, masago | special sauce", "17.99"], 
          "Rainbow" : ["Crab meat, avocado | 5 kinds of raw fish", "18.50"], 
          "Red Dragon" : ["Crabmeat, avocado | spicy tuna, cooked shrimp", "14.50"], 
          "Red Hawk" : ["Deep-fried shrimp, crab meat | scallop, masago | special sauce", "17.99"], 
          "Samurai" : ["Deep-fried asparagus, spicy crab, spicy tuna | salmon, white tuna, masago | special sauce", "17.99"], 
          "Sunrise" : ["Spicy crab, Salmon, tuna, yellowtail, avo | spicy& special sauce - 5pcs", "17.99"], 
          "Valentine Roll" : ["Deep-fried shrimp, crab meat, lemon | tuna, salmon, green onion | special sauce", "18.99"], 
          "Viagra" : ["Spicy tuna, spicy crab meat, | tuna, salmon, yellowtail, masago | spicy & special sauce", "17.99"], 
        }, props.cartItem)}

        {CreateItems(
          "Seared", 
          {
          "Aloha" : ["Spicy tuna, spicy crab meat, cucumber | seared albacore, jalapeno, masago | special sauce", "16.99"], 
          "Bad Boys" : ["Deep-fried asparagus, crab meat | seared albacore, tuna, deep-friedjalapeno | unagi sauce", "16.50"], 
          "Charisma" : ["Deep-fried shrimp | spicy crab, seared tuna, albacore, masago | special sauce", "16.99"], 
          "El Dorado Hills" : ["Deep-fried soft shell crab, crab meat | salmon, seared tuna, masago | special sauce", "18.99"], 
          "Lucky7" : ["Deep-fried shrimp, crabmeat, spicy tuna | seared salmon,  masago | special sauce", "17.99"], 
          "Sakura" : ["Spicy tuna, spicy crab meat, jalapeno | seared tuna, cooked shrimp, masago | special sauce", "17.99"], 
          "Serrano" : ["Soft shell crab, crabmeat | seared salmon, masago | special sauce", "18.50"], 
          "White Rock" : ["Deep-fried asparagus, spicy crab | seared white tuna, deep-fried onion | special sauce", "16.50"], 
          "X-File" : ["Deep-fried shrimp, spicy tuna | 5 kinds of seared fish, masago | chilli pepper, unagi sauce", "18.99"], 
          "Yosemite" : ["Deep-friedShrimp, spicy crab | seared tuna, deep-fried carrot | unagi sauce", "16.50"], 
        }, props.cartItem)}

        {CreateItems(
          "Deep-Fried", 
          {
          "Golden CA" : ["Crab meat, avocado | deep-fried, unagi sauce", "12.99"], 
          "Golden Spicy" : ["Spicy tuna, cream cheese, cucumber | deep-fried, spicy & unagi sauce", "12.99"], 
          "Ninja" : ["Spicy tuna, albacore, eel, cream cheese | deep-fried, masago, spicy & special sauce - 5pcs", "16.99"], 
          "Oh! Yes" : ["Salmon, tuna, yellowtail, avocado | deep-fried, unagi sauce - 5pcs", "16.99"], 
        }, props.cartItem)}

        {CreateItems(
          "Baked", 
          {
          "Lion King" : ["Crab meat, avocado | salmon, special sauce & masago added after cooking - 6pcs", "15.50"], 
          "Volcanic Scallop" : ["Crab meat, avocado | scallop, special sauce & masago added after cooking - 6pcs", "15.50"], 
        }, props.cartItem)}

      <div className="roll-extra">
        <h3>Would you like to add toppings?</h3>
        <div className="extras">
          <div className="extra">
            Masago | 1.00
          </div>

          <div className="extra">
            Cucumber | 1.00
          </div>

          <div className="extra">
            Crabmeat | 1.00
          </div>

          <div className="extra">
            Japapeno | 1.00
          </div>

          <div className="extra">
            Soy Wrap | 1.50
          </div>

          <div className="extra">
            Cream Cheese | 1.00
          </div>

          <div className="extra">
            Spicy Tuna | 1.50
          </div>

          <div className="extra">
            Extra Fish | 2.50
          </div>

          <div className="extra">
            Real Crab | 2.50
          </div>

          <div className="extra">
            Crunchy | 1.00
          </div>

          <div className="extra">
            Avocado | 1.00
          </div>

          <div className="extra">
            Deep-fried Shrimp | 1.50
          </div>

          <div className="extra">
            Spicy Crabmeat | 1.00
          </div>

          <div className="extra">
            Deep-fried Asparagus | 1.00
          </div>

          <div className="extra">
            Cooked Shrimp | 1.50
          </div>

          <div className="extra">
            Deep-fry your roll | 1.00
          </div>
        </div>
      </div>
    </div>
  );
}

export default SpecialRolls;
