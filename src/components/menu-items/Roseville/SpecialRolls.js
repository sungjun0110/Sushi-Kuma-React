import React from 'react';
import CreateItems from '../CreateItems';

const SpecialRolls = ( props ) => {
  return(
    <>
    <div className="item-div">
      <div className="discount">Every Roll <span style={{color: '#bf1a04', fontWeight: 'bold'}}>50% OFF!</span></div>
        {CreateItems(
          "Non-Raw", 
          {
          "Fair Way" : ["Deep-fried shrimp | avocado, masago | special sauce", "15.99"], 
          "Golden Gate" : ["Deep-fried shrimp | crab meat, masago | special sauce", "16.99"], 
          "Hwy 65" : ["Crabmeat, avocado | cooked shrimp, masago | special sauce", "17.99"], 
          "Chicken Teriyaki Roll" : ["avocado, cream cheese, grilled chicken  | unagi sauce | 5pcs", "15.99"], 
          "Red Bull" : ["Deep-fried Shrimp, cream cheese | spicy crab meat, masago | special sauce | Soy wrap", "17.99"], 
          "Spider" : ["Deep-fried soft shell crab, cucumber, avocado, crabmeat | masago | unagi sauce | 5pcs", "16.50"], 
          "Tempura Crunchy" : ["Deep-fried shrimp, avocado, crab meat, crunchy |unagi sauce | 5pcs", "15.99"], 
          "Tempura Roll" : ["Deep-fried shrimp, avocado, cucumber, crabmeat | 5pcs", "13.99"], 
          "Veggie Tempura Roll" : ["Deep-fried- carrot, zucchini, asparagus | unagi sauce- 5pcs", "13.50"], 
          "Yummy Yummy" : ["Deep-fried shrimp, avocado, cucumber, cream cheese, crab meat, masago | 5pcs", "15.50"], 
          }, 
          props
        )}

        {CreateItems(
          "Eel", 
          {
          "Benjaminn Roll" : ["Spicy tuna, spicy crab meat, cilantro | unagi, masago | special sauce", "18.99"], 
          "Blue Moon" : ["Deep-fried shrimp, orange | unagi, crab, masago | special sauce", "19.50"], 
          "Caterpillar" : ["Eel, cucumber | avocado | unagi sauce", "18.99"], 
          "Dragon" : ["Deep-fried shrimp, crabmeat | eel, masago | special sauce", "18.99"], 
          "Rocklin" : ["Deep-fried soft shell crab, cream cheese| unagi | masago", "19.50"], 
          "Spicy Johny" : ["Deep-fried shrimp, spicy tuna | eel, masago | special sauce", "18.99"], 
          "Spicy crunchy" : ["Spicy tuna, eel, seaweed salad, cucumber | crunchy, unagi sauce | 5pcs", "16.50"], 
          "Lake Tahoe" : ["Deep-fried shrimp, cream cheese, cucumber | unagi, masago | special sauce", "18.50"], 
          "Kamikaze" : ["Spicy crab, jalapeno, cream cheese | cooked shrimp, eel, salmon, masago | special sauce", "19.50"], 
        }, props)}

        {CreateItems(
          "Raw", 
          {
          "49er" : ["Deep-fried shrimp, cream cheese, cucumber | salmon, lemon, masago | special sauce", "17.50"], 
          "911" : ["Spicy tuna, cucumber | tuna, masago | spicy & special sauce", "17.50"], 
          "Arigato" : ["Deep-fried shrimp | salmon, tuna, masago | special sauce", "16.99"], 
          "Cherry Blossom" : ["Salmon, avocado | tuna, masago | special sauce", "17.99"], 
          "Crazy Horse" : ["Salmon, tuna, yellowtail, avocado, masago | special sauce - 5pcs", "17.99"], 
          "Folsom Lake" : ["Deep-fried shrimp, spicy tuna | salmon, masago | special sauce", "18.99"], 
          "Happy" : ["Deep-fried shrimp | tuna, yellowtail, masago | special sauce", "17.99"], 
          "Kiss Me" : ["Crab meat, avocado | salmon, masago | special sauce", "17.50"], 
          "Kuma" : ["Deep-fried shrimp | avocado, sweet shrimp & 5 kinds of raw fish masago | special sauce", "20.50"], 
          "Las Vegas" : ["Deep-fried asparagus, crabmeat, cream cheese | tuna, salmon, masago, special sauce", "18.99"], 
          "Mafia" : ["Deep-fried shrimp, crabmeat, cream cheese | scallop, salmon, masago | special sauce", "18.99"], 
          "Orange Blossom" : ["Tuna, avocado | salmon, masago | special sauce", "17.99"], 
          "Pink Lady" : ["Deep-fried shrimp, crab meat | tuna, masago | special sauce", "18.99"], 
          "Rainbow" : ["Crab meat, avocado | 5 kinds of raw fish", "19.50"], 
          "Playboy" : ["Spicy tuna, spicy crab meat, cilantro | salmon, lemon, masago", "19.50"], 
          "Thunder Valley" : ["Deep-fried shrimp, crab meat | scallop, masago | special sauce", "18.99"], 
          "Samurai" : ["Deep-fried asparagus, spicy crab, spicy tuna | salmon, white tuna, masago | special sauce", "18.99"], 
          "Sunrise" : ["Spicy crab, Salmon, tuna, yellowtail, avo | spicy& special sauce - 5pcs", "18.99"], 
          "Valentine Roll" : ["Deep-fried shrimp, crab meat, cilantro, lemon | tuna, salmon, green onion | special sauce", "19.99"], 
          "Viagra" : ["Spicy tuna, spicy crab meat, | tuna, salmon, yellowtail, masago | spicy & special sauce", "18.99"], 
        }, props)}

        {CreateItems(
          "Seared", 
          {
          "Aloha" : ["Spicy tuna, spicy crab meat, cucumber | seared albacore, jalapeno, masago | special sauce", "17.99"], 
          "Bad Boys" : ["Deep-fried asparagus, crab meat | seared albacore, tuna, deep-friedjalapeno | unagi sauce", "17.50"], 
          "Charisma" : ["Deep-fried shrimp | spicy crab, seared tuna, albacore, masago | special sauce", "17.99"], 
          "Roseville" : ["Deep-fried soft shell crab, crab meat | salmon, seared tuna, masago | special sauce", "19.99"], 
          "Lucky7" : ["Deep-fried shrimp, crabmeat, spicy tuna | seared salmon, masago | special sauce", "18.99"], 
          "Sakura" : ["Spicy tuna, spicy crab meat, jalapeno | seared tuna, cooked shrimp, masago | special sauce", "18.99"], 
          "Lincoln" : ["Deep-fried asparagus, spicy crab | seared white tuna, deep-fried Onion | unagi sauce", "18.99"], 
          "Diablo" : ["Deep-fried shirimp, spicy tuna | 5 kinds of seared fish, masago | chili pepper, unagi sauce", "19.99"], 
          "Yosemite" : ["Deep-fried shrimp, spicy crab | seared tuna, deep-fried carrot | unagi sauce", "17.50"], 
          "TNT" : ["Deep-fried asparagus, spicy crab meat | spicy tuna, jalapeno, crunch, masago | unagi sauce", "19.50"], 
          "Zig Zag Roll" : ["Deep-fried soft shell crab, avocado, zig zag sauce | Soy Wrap", "18.99"], 
        }, props)}

        {CreateItems(
          "Deep-fried", 
          {
          "Golden CA" : ["Crab meat, avocado | deep-fried, unagi sauce", "13.99"], 
          "Golden Spicy" : ["Spicy tuna, cream cheese, cucumber | deep-fried, spicy & unagi sauce", "13.99"], 
          "Ninja" : ["Spicy tuna, albacore, eel, cream cheese | deep-fried, masago, spicy & special sauce - 5pcs", "17.99"], 
          "Oh! Yes" : ["Salmon, tuna, yellowtail, avocado | deep-fried, unagi sauce - 5pcs", "17.99"], 
        }, props)}

        {CreateItems(
          "Baked", 
          {
          "Lion King" : ["Crab meat, avocado | salmon, special sauce & masago added after cooking - 6pcs", "17.50"], 
          "Volcanic Scallop" : ["Crab meat, avocado | scallop, special sauce & masago added after cooking - 6pcs", "17.50"], 
        }, props)}

      <div className="roll-extra">
        <h3>Would you like to add toppings?</h3>
        <div className="extras">
          <div className="extra">
            Masago <br /> 1.00
          </div>

          <div className="extra">
            Cucumber <br /> 1.00
          </div>

          <div className="extra">
            Crabmeat <br /> 1.00
          </div>

          <div className="extra">
            Japapeno <br /> 1.00
          </div>

          <div className="extra">
            Soy Wrap <br /> 1.50
          </div>

          <div className="extra">
            Cream Cheese <br /> 1.00
          </div>

          <div className="extra">
            Spicy Tuna <br /> 1.50
          </div>

          <div className="extra">
            Extra Fish <br /> 2.50
          </div>

          <div className="extra">
            Real Crab <br /> 2.50
          </div>

          <div className="extra">
            Crunchy <br /> 1.00
          </div>

          <div className="extra">
            Avocado <br /> 1.00
          </div>

          <div className="extra">
            Deep-fried Shrimp <br /> 1.50
          </div>

          <div className="extra">
            Spicy Crabmeat <br /> 1.00
          </div>

          <div className="extra">
            Deep-fried Asparagus <br /> 1.00
          </div>

          <div className="extra">
            Cooked Shrimp <br /> 1.50
          </div>

          <div className="extra">
            Deep-fry your roll <br /> 1.00
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default SpecialRolls;
