import React from 'react';
import CreateItems from  '../CreateItems';

const Entree = ( props ) => {
  return(
    <div className="item-div">
        {CreateItems(
          "Noodle Soup", 
          {
          "Veggie Udon" : ["a thick noodle soup with vegetable", "L 10.95 | D 13.95"], 
          "Beef Udon" : ["a thick noodle soup with beef & vegetable", "L 12.95 | D 15.95"], 
          "Nabe Udon" : ["a thick noodle soup with shrimp tempura, chicken, vegetable", "L 12.95 | D 15.95"], 
          "Tempura Udon" : ["a thick noodle soup with vegetable & mixed tempura on the side", "L 12.95 | D 15.95"], 
          "Seafood Udon" : ["a thick noodle soup with assorted seafood & vegetable", "L 12.95 | D 15.95"], 
          }, 
          props
        )}

        {CreateItems(
          "Kuma Single Entrée", 
          {
          "Chicken Teriyaki" : ["Grilled chicken with teriyaki sauce", "L 12.95 | D 16.95"], 
          "Salmon Teriyaki" : ["Grilled salmon steak with teriyaki sauce", "L 13.95 | D 18.95"], 
          "Beef Teriyaki" : ["Grilled beef steak with teriyaki sauce", "L 13.95 | D 18.95"], 
          "Saba Shioyaki" : ["lightly salted and Grilled mackerel fillet", "L 12.95 | D 16.95"], 
          "Vegetable Tempura" : ["Assorted seasonal vegetable | Lunch - 7pcs | Dinner – 9pcs", "L 11.95 | D 15.95"], 
          "Shrimp Tempura" : ["Shrimp - Lunch - 5pcs, Dinner - 7 pcs", "L 13.95 | D 17.95"], 
          "Mixed Tempura" : ["Shrimp - Lunch - 3 pcs, Dinner – 4 pcs | Vegetable – Lunch - 5 pcs, Dinner – 7 pcs", "L 13.95 | D 17.95"], 
          "Chicken Katsu" : ["Panko fried chicken breast cutlets with katsu sauce", "L 12.95 | D 16.95"], 
          "Ton Katsu" : ["Panko fried pork loin cutlets with katsu sauce", "L 12.95 | D 16.95"], 
          "Sesame Chicken" : ["Tempura fried chicken breast with teriyaki sesame sauce", "L 12.95 | D 16.95"], 
          "Bulgogi" : ["Marinated Korean style beef", "L 13.95 | D	18.95"], 
          }, 
          props
        )}

        {CreateItems(
          "Bowl Special", 
          {
          "Ton Katsu" : ["Panko fried Pork loin with katsu sauce over rice", "L 11.95 | D 14.95"], 
          "Chicken Katsu" : ["Panko fried chicken breast cutlets with katsu sauce over rice", "L 11.95 | D 14.95"], 
          "Chicken Teriyaki" : ["Grilled chicken with teriyaki sauce over rice", "L 11.95 | D 14.95"], 
          "Sesame Chicken" : ["Tempura fried chicken breast with teriyaki sesame sauce over rice", "L 11.95 | D 14.95"], 
          "Beef Teriyaki" : ["Grilled beef steak with teriyaki sauce over rice", "L 12.95 | D 15.95"], 
          }, 
          props
        )}
    </div>
  );
}

export default Entree;
