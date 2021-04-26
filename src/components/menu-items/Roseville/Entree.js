import React from 'react';
import Item from  '../Content';

const Entree = () => {
  return(
    <>
    <div className="item-div">
      <div className="item-title">NOODLE SOUP</div>
      <div className="items">
        <Item itemName="Veggie Udon" description="a thick noodle soup with vegetable" price="L 10.95 | D 13.95" />
        <Item itemName="Beef Udon" description="a thick noodle soup with beef & vegetable" price="L 12.95 | D 15.95" />
        <Item itemName="Nabe Udon" description="a thick noodle soup with shrimp tempura, chicken, vegetable" price="L 12.95 | D 15.95" />
        <Item itemName="Tempura Udon" description="a thick noodle soup with vegetable & mixed tempura on the side" price="L 12.95 | D 15.95" />
        <Item itemName="Seafood Udon" description="a thick noodle soup with assorted seafood & vegetable" price="L 12.95 | D 15.95" />
      </div>

      <div className="item-title">KUMA SINGLE ENTRÉE</div>
      <div className="items">
        <Item itemName="Chicken Teriyaki" description="Grilled chicken with teriyaki sauce" price="L 11.95 | D 16.95" />
        <Item itemName="Salmon Teriyaki" description="Grilled salmon steak with teriyaki sauce" price="L 12.95 | D 17.95" />
        <Item itemName="Beef Teriyaki" description="Grilled beef steak with teriyaki sauce" price="L 12.95 | D 17.95" />
        <Item itemName="Saba Shioyaki" description="lightly salted and Grilled mackerel fillet" price="L 11.95 | D 16.95" />
        <Item itemName="Vegetable Tempura" description="Assorted seasonal vegetable | Lunch - 7pcs | Dinner – 9pcs" price="L 10.95 | D 15.95" />
        <Item itemName="Shrimp Tempura" description="Shrimp - Lunch - 5pcs, Dinner - 7 pcs" price="L 12.95 | D 17.95" />
        <Item itemName="Mixed Tempura" description="Shrimp - Lunch - 3 pcs, Dinner – 4 pcs | Vegetable – Lunch - 5 pcs, Dinner – 7 pcs" price="L 12.95 | D 17.95" />
        <Item itemName="Fish katsu" description="Panko fried pollock cutlets with katsu sauce" price="L 11.95 | D 16.95" />
        <Item itemName="Chicken Katsu" description="Panko fried chicken breast cutlets with katsu sauce" price="L 11.95 | D 16.95" />
        <Item itemName="Ton Katsu" description="Panko fried pork loin cutlets with katsu sauce" price="L 11.95 | D 16.95" />
        <Item itemName="Sesame Chicken" description="Tempura fried chicken breast with teriyaki sesame sauce" price="L 11.95 | D 16.95" />
        <Item itemName="Bulgogi" description="Marinated Korean style beef" price="L 12.95 | D	17.95" />
      </div>

      <div className="item-title">Bowl Special</div>
      <div className="items">
        <Item itemName="Ton Katsu" description="Panko fried Pork loin with katsu sauce over rice" price="L 9.95 | D 12.95" />
        <Item itemName="Chicken Katsu" description="Panko fried chicken breast cutlets with katsu sauce over rice" price="L 9.95 | D 12.95" />
        <Item itemName="Chicken Teriyaki" description="Grilled chicken with teriyaki sauce over rice" price="L 9.95 | D 12.95" />
        <Item itemName="Sesame Chicken" description="Tempura fried chicken breast with teriyaki sesame sauce over rice" price="L 9.95 | D 12.95" />
        <Item itemName="Beef Teriyaki" description="Grilled beef steak with teriyaki sauce over rice" price="L 10.95 | D 13.95" />
      </div>
    </div>
    </>
  );
}

export default Entree;
