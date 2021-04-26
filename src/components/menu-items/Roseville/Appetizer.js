import React from 'react';
import Item from  '../Content';

const Appetizer = () => {
  return(
    <>
    <div className="item-div">
      <div className="item-title">Salad</div>

      <div className="items">
        <Item itemName="Edamame" description="boiled and salted soybeans" price="5.50" />
        <Item itemName="Spicy Edamame" description="pan-fried soybeans with Japanese spice mix" price="6.50" />
        <Item itemName="Green Salad" description="served with house dressing sauce" price="4.95" />
        <Item itemName="Seaweed Salad" description="seaweed marinated with sesame oil" price="5.95" />
        <Item itemName="Veggie Sunomono" description="cucumber in vinegar sauce" price="5.50" />
        <Item itemName="Seafood Sunomono" description="cucumber with assorted seafood in vinegar sauce" price="7.95" />
        <Item itemName="Hawaiian Poke" description="ahi tuna, cucumber, onion with ponzu, sesame oil, spicy sauce & tobiko" price="11.95" />
      </div>
        

      <div className="item-title">Grilled</div>

      <div className="items">
        <Item itemName="Baked Green Mussel" description="baked on half shell & spicy sauce - 5 pcs" price="7.50" />
        <Item itemName="BBQ Albacore" description="grilled rare white tuna with special spicy BBQ sauce - 6 pcs" price="14.95" />
        <Item itemName="Sea Steak" description="grilled ahi tuna with ponzu & special sauce - 8 pcs" price="14.95" />
        <Item itemName="Chicken Teriyaki" description="grilled chicken with teriyaki sauce" price="9.95" />
        <Item itemName="Hamachi Kama" description="grilled yellow tail cheek bone with ponzu sauce" price="11.50" />
      </div>

      <div className="item-title">Deep-Fried</div>

      <div className="items">
        <Item itemName="Agedashi Tofu" description="deep-fried tofu served with dried tuna, ponzu sauce" price="7.95" />
        <Item itemName="Calamari Tempura" description="breaded deep-fried calamari ring" price="8.50" />
        <Item itemName="Croquette" description="deep-fried potato & vegetables – 3pcs" price="6.50" />
        <Item itemName="Creamy Jalapeno" description="deep-fried jalapeno, cream cheese, spicy tuna special sauce" price="7.50" />
        <Item itemName="Gyoza" description="Deep-fried or steamed chicken and vegetable pot-stickers - 7 pcs" price="7.50" />
        <Item itemName="Vegetable Tempura" description="assorted seasonal vegetables" price="7.50" />
        <Item itemName="Shrimp Tempura" description="deep-fried shrimp - 4 pcs" price="9.95" />
        <Item itemName="Mixed Tempura" description="shrimp - 2 pcs, vegetables - 5 pcs" price="8.95" />
        <Item itemName="Honey Spice Chicken" description="pan fried chicken, honey spice sauce" price="9.95" />
        <Item itemName="Sesame Chicken" description="tempura fried chicken, teriyaki sauce" price="9.95" />
      </div>

      <div className="item-title">Raw Fish</div>
      <div className="items">
        <Item itemName="Kuma Oyster" description="half shell oyster with spicy ponzu sauce, lemon - 4 pcs" price="9.95" />
        <Item itemName="Pepper Fin" description="white tuna with jalapeno, spicy ponzu sauce and sesame oil" price="14.95" />
        <Item itemName="7 Pcs Sashimi" description="choice of one - salmon, tuna, yellowtail - 7 pcs" price="14.50" />
        <Item itemName="Assorted Sashimi" description="chef's choice of today's raw fish - 12 pcs" price="19.95" />
        <Item itemName="Garlic Sashimi" description="7pcs of salmon with fried garlic special sauce" price="14.95" />
        <Item itemName="Hamachi Carpaccio" description="Sliced Hamachi jalapeno with chili pepper ponzu olive oil" price="14.95" />
      </div>
    </div>
    </>
  );
}

export default Appetizer;
