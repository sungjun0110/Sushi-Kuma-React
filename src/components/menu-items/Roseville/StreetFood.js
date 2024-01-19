import React from "react";
import CreateItems from "../CreateItems";

const StreetFood = (props) => {
    return (
        <div className="item-div">
            {CreateItems(
                "Street Foods",
                {
                    "Bulgogi Tacos": [
                        "marinated Korean style beef, white/red cabbage, cilantro (3pcs)",
                        "16.95"
                    ],
                    "Ahi Poke Tacos": [
                        "seared ahi tuna, avocado, cilantro, white/red cabbage, sesame oil, special sauce (3pcs)",
                        "16.95"
                    ],
                    "Zig Zag Tacos": [
                        "crispy soft shell crab, avocado, white/red cabbage, cilantro, zig zag sauce (3pcs)",
                        "15.95"
                    ],
                    "Vegetable Bibimbap": [
                        "rice, seasonal vegetable, vinaigrette, sesame oil, Korean hot sauce/with miso soup",
                        "13.95"
                    ],
                    "Bulgogi Bibimbap": [
                        "rice, marinated beef, seasonal vegetable, sesame oil, Korean hot sauce / with miso soup",
                        "17.95"
                    ],
                    "Tofu Bibimbap": [
                        "rice, seasonal vegetable, tofu, vinaigrette, Korean hot sauce / with miso soup",
                        "14.95"
                    ],
                    "Vegetable Tempura Donburi": [
                        "assorted seasonal vegetables - 9pcs",
                        "14.95"
                    ],
                    "Tempura Donburi": [
                        "shrimp - 3pcs and assorted seasonal vegetables - 7pcs",
                        "17.95"
                    ],
                    "Unagi Donburi": [
                        "grilled eel over steamed rice with seaweed salad, vinaigrette, unagi sauce sesame seeds",
                        "24.95"
                    ],
                    "Bulgogi Donburi": [
                        "marinated Korean style beef over steamed rice",
                        "17.95"
                    ],
                    "Sake Donburi": [
                        "slices of raw salmon over steamed rice with seaweed salad vinaigrette, masago",
                        "24.95"
                    ],
                    "Tekka Donburi": [
                        "slices of raw tuna over steamed rice",
                        "24.95"
                    ]
                },
                props
            )}
        </div>
    );
};

export default StreetFood;
