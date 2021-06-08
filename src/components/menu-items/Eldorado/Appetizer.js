import React from 'react';
import CreateItems from '../CreateItems';

const Appetizer = ( props ) => {
  return(
    <div className='item-div'>
      {CreateItems(
        "Salad", 
        {
        "Edamame": ["boiled and salted soybeans", "5.95"], 
        "Spicy Edamame": ["pan-fried soybeans with Japanese spice mix", "6.95"], 
        "Green Salad": ["pan-fried soybeans with Japanese spice mix", "5.95"], 
        "Seaweed Salad": ["seaweed marinated with sesame oil", "6.95"], 
        "Veggie Sunomono": ["cucumber in vinegar sauce", "5.95"], 
        "Seafood Sunomono": ["cucumber with assorted seafood in vinegar sauce", "9.95"], 
        "Hawaiian Poke": ["ahi tuna, cucumber, onion with ponzu, sesame oil, spicy sauce & tobiko", "13.95"], 
      }, props)}

      {CreateItems(
        "Grilled", 
        {
        "Baked Green Mussel" : ["baked on half shell & spicy sauce - 5 pcs", "7.50"], 
        "BBQ Albacore" : ["grilled rare white tuna with special spicy BBQ sauce - 6 pcs", "15.95"], 
        "Sea Steak" : ["grilled ahi tuna with ponzu & special sauce - 8 pcs", "15.95"], 
        "Chicken Teriyaki" : ["grilled chicken with teriyaki sauce", "10.95"], 
        "Hamachi Kama" : ["grilled yellow tail cheek bone with ponzu sauce", "11.50"], 
      }, props)}

      {CreateItems(
        "Deep-Fried", 
        {
        "Agedashi Tofu" : ["deep-fried tofu served with dried tuna, ponzu sauce", "7.95"], 
        "Calamari Tempura" : ["breaded deep-fried calamari ring", "9.50"], 
        "Croquette" : ["deep-fried potato & vegetables – 3pcs", "6.50"], 
        "Creamy Jalapeno" : ["deep-fried jalapeno, cream cheese, spicy tuna special sauce", "7.95"], 
        "Draon Ball" : ["jalapeno, cream cheese, spicy tuna, special sauce", "7.95"], 
        "Gyoza" : ["Deep-fried or steamed chicken and vegetable pot-stickers - 7 pcs", "7.50"], 
        "Vegetable Tempura" : ["assorted seasonal vegetables", "7.95"], 
        "Shrimp Tempura" : ["deep-fried shrimp - 4 pcs", "9.95"], 
        "Mixed Tempura" : ["shrimp - 2 pcs, vegetables - 5 pcs", "8.95"],       
        "Sesame Chicken" : ["tempura fried chicken, teriyaki sauce", "10.95"], 
      }, props)}

      {CreateItems(
        "Raw Fish", 
        {
        "Kuma Oyster" : ["half shell oyster with spicy ponzu sauce, lemon - 4 pcs", "9.95"], 
        "Pepper Fin" : ["white tuna with jalapeno, spicy ponzu sauce and sesame oil", "15.95"], 
        "7 Pcs Sashimi" : ["choice of one - salmon, tuna, yellowtail - 7 pcs", "15.95"], 
        "Assorted Sashimi" : ["chef's choice of today's raw fish - 12 pcs", "19.95"], 
      }, props)}
    </div>
  );
}

export default Appetizer;
