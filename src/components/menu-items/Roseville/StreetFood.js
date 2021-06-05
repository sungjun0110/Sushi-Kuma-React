import React from 'react';
import CreateItems from '../CreateItems';

const StreetFood = ( props ) => {
  return (
    <div className="item-div">
      {CreateItems(
        "Street Foods", 
        {
        "Bulgogi Tacos" : ["marinated Korean style beef, white/red cabbage, cilantro (3pcs)", "13.95"], 
        "Ahi Poke Tacos" : ["seared ahi tuna, avocado, cilantro, white/red cabbage, sesame oil, special sauce (3pcs)", "13.95"], 
        "Zig Zag Tacos" : ["crispy soft shell crab, avocado, white/red cabbage, cilantro, zig zag sauce (3pcs)", "12.95"], 
        "Vegetable Bibimbap" : ["rice, seasonal vegetable, vinaigrette, sesame oil, Korean hot sauce/with miso soup", "11.95"], 
        "Bulgogi Bibimbap" : ["rice, marinated beef, seasonal vegetable, sesame oil, Korean hot sauce / with miso soup", "13.95"], 
        "Tofu Bibimbap" : ["rice, seasonal vegetable, tofu, vinaigrette, Korean hot sauce / with miso soup", "12.95"], 
        "Vegetable Tempura Donburi" : ["assorted seasonal vegetables - 9pcs", "12.95"], 
        "Tempura Donburi" : ["shrimp - 3pcs and assorted seasonal vegetables - 7pcs", "14.95"], 
        "Unagi Donburi" : ["grilled eel over steamed rice with seaweed salad, vinaigrette, unagi sauce sesame seeds", "21.95"], 
        "Bulgogi Donburi" : ["marinated Korean style beef over steamed rice", "15.95"], 
        "Sake Donburi" : ["slices of raw salmon over steamed rice with seaweed salad vinaigrette, masago", "21.95"], 
        "Tekka Donburi" : ["slices of raw tuna over steamed rice", "21.95"], 
      }, props)}
    </div>
  )
}

export default StreetFood;
