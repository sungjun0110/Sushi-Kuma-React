import React from 'react';
import Item from '../Content';

const SpecialRolls = () => {
  return(
    <div className="item-div">
      <div className="discount">Every Roll <span style={{color: '#bf1a04', fontWeight: 'bold'}}>50% OFF!</span></div>
      
      <div className="item-title">Non-Raw</div>
      <div className="items">
        <Item itemName="Fair Oaks" description="Deep-fried shrimp | avocado, masago | special sauce" price="14.99" />
        <Item itemName="Golden Gate" description="Deep-fried shrimp | crab meat, masago | special sauce" price="15.99" />
        <Item itemName="Sesame Chicken Roll" description="crabmeat, avocado, ceram cheese | sesame chicken | unagi sauce" price="15.99" />
        <Item itemName="Red Bull" description="Deep-fried Shrimp, cream cheese | spicy crab meat, masago | special sauce | Soy wrap" price="16.99" />
        <Item itemName="Spider" description="Deep-fried soft shell crab, cucumber, avocado, crabmeat | masago | unagi sauce | 5pcs" price="15.50" />
        <Item itemName="Tempura Crunchy" description="Deep-friedshrimp, avocado, crab meat, crunchy |unagi sauce | 5pcs" price="14.99" />
        <Item itemName="Tempura Roll" description="Deep-fried shrimp, avocado, cucumber, crabmeat | 5pcs" price="12.99" />
        <Item itemName="Veggie Tempura Roll" description="Deep-fried carrot, zucchini, asparagus | unagi sauce- 5pcs" price="12.50" />
        <Item itemName="Yummy Yummy" description="Deep-fried shrimp, avocado, cucumber, cream cheese, crab meat, masago | 5pcs" price="14.50" />
      </div>

      <div className="item-title">Eel</div>
      <div className="items">
        <Item itemName="Blue Moon" description="Deep-fried shrimp, orange | unagi, crab, masago | special sauce" price="18.50" />
        <Item itemName="Caterpillar" description="Eel, cucumber | avocado | unagi sauce" price="17.99" />
        <Item itemName="Dragon" description="Deep-fried shrimp, crabmeat | eel, masago | special sauce" price="17.99" />
        <Item itemName="Hwy 50" description="Crabmeat, avocado | eel, cooked shrimp, Masago | special sacue" price="16.99" />
        <Item itemName="Spicy Johny" description="Deep-fried shrimp, spicy tuna | eel, masago | special sauce" price="17.99" />
        <Item itemName="Spicy crunchy" description="Spicy tuna, eel, seaweed salad, cucumber | crunchy, unagi sauce | 5pcs" price="15.50" />
        <Item itemName="Lake Tahoe" description="Deep-fried shrimp, cream cheese, cucumber | unagi, masago | special sauce" price="17.50" />
      </div>

      <div className="item-title">Raw</div>
      <div className="items">
        <Item itemName="49er" description="Deep-friedshrimp, cream cheese, cucumber | salmon, lemon, masago | special sauce" price="16.50" />
        <Item itemName="911" description="Spicy tuna, cucumber | tuna, masago | spicy & special sauce" price="16.50" />
        <Item itemName="Arigato" description="Deep-friedShrimp | salmon, tuna, masago | special sauce" price="15.99" />
        <Item itemName="Cherry Blossom" description="Salmon, avocado | tuna, masago | special sauce" price="16.99" />
        <Item itemName="Crazy Horse" description="Salmon, tuna, yellowtail, avocado, masago | special sauce - 5pcs" price="16.99" />
        <Item itemName="Folsom Lake" description="Deep-friedshrimp, spicy tuna | salmon, masago | special sauce" price="17.99" />
        <Item itemName="Happy" description="Deep-friedshrimp | tuna, yellowtail, masago | special sauce" price="16.99" />
        <Item itemName="Kamikaze" description="Spicy crab, jalapeno, cream cheese | cooked shrimp, salmon, masago | special sauce" price="18.50" />
        <Item itemName="Kevala" description="Deep-fried shrimp, spicy tuna, crabmeat | scallop, masago, special sauce" price="17.99" />
        <Item itemName="Kiss Me" description="Crab meat, avocado | salmon, masago | special sauce" price="16.50" />
        <Item itemName="Kuma" description="Deep-friedshrimp | avocado, sweet shrimp & 5 kinds of raw fish masago | special sauce" price="19.50" />
        <Item itemName="Las Vegas" description="Deep-friedAsparagus, crabmeat, cream cheese | tuna, salmon, masago, special sauce" price="17.99" />
        <Item itemName="Mafia" description="Deep-friedshrimp, crabmeat, cream cheese | scallop, salmon, masago | special sauce" price="17.99" />
        <Item itemName="Orange Blossom" description="Tuna, avocado | salmon, masago | special sauce" price="16.99" />
        <Item itemName="Pier 39" description="Spicy tuna, cucumber | yellowtail, masago, spicy & special sauce" price="16.50" />
        <Item itemName="Pink Lady" description="Deep-fried shrimp, crab meat | tuna, masago | special sauce" price="17.99" />
        <Item itemName="Rainbow" description="Crab meat, avocado | 5 kinds of raw fish" price="18.50" />
        <Item itemName="Red Dragon" description="Crabmeat, avocado | spicy tuna, cooked shrimp" price="14.50" />
        <Item itemName="Red Hawk" description="Deep-fried shrimp, crab meat | scallop, masago | special sauce" price="17.99" />
        <Item itemName="Samurai" description="Deep-fried asparagus, spicy crab, spicy tuna | salmon, white tuna, masago | special sauce" price="17.99" />
        <Item itemName="Sunrise" description="Spicy crab, Salmon, tuna, yellowtail, avo | spicy& special sauce - 5pcs" price="17.99" />
        <Item itemName="Valentine Roll" description="Deep-fried shrimp, crab meat, cilantro, lemon | tuna, salmon, g onion | special sauce" price="18.99" />
        <Item itemName="Viagra" description="Spicy tuna, spicy crab meat, | tuna, salmon, yellowtail, masago | spicy & special sauce" price="17.99" />
      </div>

      <div className="item-title">Seared</div>
      <div className="items">
        <Item itemName="Aloha" description="Spicy tuna, spicy crab meat, cucumber | seared albacore, jalapeno, masago | special sauce" price="16.99" />
        <Item itemName="Bad Boys" description="Deep-fried asparagus, crab meat | seared albacore, tuna, deep-friedjalapeno | unagi sauce" price="16.50" />
        <Item itemName="Charisma" description="Deep-fried shrimp | spicy crab, seared tuna, albacore, masago | special sauce" price="16.99" />
        <Item itemName="El Dorado Hills" description="Deep-fried soft shell crab, crab meat | salmon, seared tuna, masago | special sauce" price="18.99" />
        <Item itemName="Lucky7" description="Deep-fried shrimp, crabmeat, spicy tuna | seared salmon,  masago | special sauce" price="17.99" />
        <Item itemName="Sakura" description="Spicy tuna, spicy crab meat, jalapeno | seared tuna, cooked shrimp, masago | special sauce" price="17.99" />
        <Item itemName="Serrano" description="Soft shell crab, crabmeat | seared salmon, masago | special sauce" price="18.50" />
        <Item itemName="White Rock" description="Deep-fried asparagus, spicy crab | seared white tuna, deep-fried onion | special sauce" price="16.50" />
        <Item itemName="X-File" description="Deep-fried shrimp, spicy tuna | 5 kinds of seared fish, masago | chilli pepper, unagi sauce" price="18.99" />
        <Item itemName="Yosemite" description="Deep-friedShrimp, spicy crab | seared tuna, deep-fried carrot | unagi sauce" price="16.50" />
      </div>

      <div className="item-title">Deep-fried</div>
      <div className="items">
        <Item itemName="Golden CA" description="Crab meat, avocado | deep-fried, unagi sauce" price="12.99" />
        <Item itemName="Golden Spicy" description="Spicy tuna, cream cheese, cucumber | deep-fried, spicy & unagi sauce" price="12.99" />
        <Item itemName="Ninja" description="Spicy tuna, albacore, eel, cream cheese | deep-fried, masago, spicy & special sauce - 5pcs" price="16.99" />
        <Item itemName="Oh! Yes" description="Salmon, tuna, yellowtail, avocado | deep-fried, unagi sauce - 5pcs" price="16.99" />
      </div>

      <div className="item-title">Baked</div>
      <div className="items">
        <Item itemName="Lion King" description="Crab meat, avocado | salmon, special sauce & masago added after cooking - 6pcs" price="15.50" />
        <Item itemName="Volcanic Scallop" description="Crab meat, avocado | scallop, special sauce & masago added after cooking - 6pcs" price="15.50" />
      </div>

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
