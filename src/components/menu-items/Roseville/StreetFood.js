import React from 'react';
import Item from '../Content';

const StreetFood = () => {
  return (
    <>
    <div className="item-div">
      <div className="item-title">Street Foods</div>
      <div className="items">
        <Item itemName="Bulgogi Tacos" description="marinated Korean style beef, white/red cabbage, cilantro (3pcs)" price="13.95" />
        <Item itemName="Ahi Poke Tacos" description="seared ahi tuna, avocado, cilantro, white/red cabbage, sesame oil, special sauce (3pcs)" price="13.95" />
        <Item itemName="Zig Zag Tacos" description="crispy soft shell crab, avocado, white/red cabbage, cilantro, zig zag sauce (3pcs)" price="12.95" />
        <Item itemName="Vegetable Bibimbap" description="rice, seasonal vegetable, vinaigrette, sesame oil, Korean hot sauce/with miso soup" price="11.95" />
        <Item itemName="Bulgogi Bibimbap" description="rice, marinated beef, seasonal vegetable, sesame oil, Korean hot sauce / with miso soup" price="13.95" />
        <Item itemName="Tofu Bibimbap" description="rice, seasonal vegetable, tofu, vinaigrette, Korean hot sauce / with miso soup" price="12.95" />
        <Item itemName="Vegetable Tempura Donburi" description="assorted seasonal vegetables - 9pcs" price="12.95" />
        <Item itemName="Tempura Donburi" description="shrimp - 3pcs and assorted seasonal vegetables - 7pcs" price="14.95" />
        <Item itemName="Unagi Donburi" description="grilled eel over steamed rice with seaweed salad, vinaigrette, unagi sauce sesame seeds" price="21.95" />
        <Item itemName="Bulgogi Donburi" description="marinated Korean style beef over steamed rice" price="15.95" />
        <Item itemName="Sake Donburi" description="slices of raw salmon over steamed rice with seaweed salad vinaigrette, masago" price="21.95" />
        <Item itemName="Tekka Donburi" description="slices of raw tuna over steamed rice" price="21.95" />
      </div>
    </div>
    </>
  )
}

export default StreetFood;
