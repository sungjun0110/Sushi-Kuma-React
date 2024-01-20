import React from "react";
import CreateItems from "../CreateItems";

const Entree = (props) => {
    return (
        <div className="item-div">
            {CreateItems(
                "Noodle Soup",
                {
                    "Veggie Udon": [
                        "thick noodle soup with vegetable",
                        "L 13.95 | D 16.95"
                    ],
                    "Beef Udon": [
                        "thick noodle soup with beef & vegetable",
                        "L 15.95 | D 18.95"
                    ],
                    "Nabe Udon": [
                        "thick noodle soup with shrimp tempura, chicken, vegetable",
                        "L 15.95 | D 18.95"
                    ],
                    "Tempura Udon": [
                        "thick noodle soup with vegetable & mixed tempura on the side",
                        "L 15.95 | D 18.95"
                    ],
                    "Seafood Udon": [
                        "thick noodle soup with assorted seafood & vegetable",
                        "L 15.95 | D 18.95"
                    ]
                },
                props
            )}

            {CreateItems(
                "Kuma Single Entrée",
                {
                    "Chicken Teriyaki": [
                        "Grilled chicken with teriyaki sauce",
                        "L 15.95 | D 21.95"
                    ],
                    "Salmon Teriyaki": [
                        "Grilled salmon steak with teriyaki sauce",
                        "L 16.95 | D 22.95"
                    ],
                    "Beef Teriyaki": [
                        "Grilled beef steak with teriyaki sauce",
                        "L 16.95 | D 22.95"
                    ],
                    "Saba Shioyaki": [
                        "lightly salted and Grilled mackerel fillet",
                        "L 15.95 | D 21.95"
                    ],
                    "Vegetable Tempura": [
                        "Assorted seasonal vegetable | Lunch - 7pcs | Dinner – 9pcs",
                        "L 14.95 | D 19.95"
                    ],
                    "Shrimp Tempura": [
                        "Shrimp - Lunch - 5pcs, Dinner - 7 pcs",
                        "L 16.95 | D 21.95"
                    ],
                    "Mixed Tempura": [
                        "Shrimp - Lunch - 3 pcs, Dinner – 4 pcs | Vegetable – Lunch - 5 pcs, Dinner – 7 pcs",
                        "L 16.95 | D 21.95"
                    ],
                    "Ton Katsu": [
                        "Panko fried pork loin cutlets with katsu sauce",
                        "L 15.95 | D 21.95"
                    ],
                    "Chicken Katsu": [
                        "Panko fried chicken breast cutlets with katsu sauce",
                        "L 15.95 | D 21.95"
                    ],
                    "Sesame Chicken": [
                        "Tempura fried chicken breast with teriyaki sesame sauce",
                        "L 15.95 | D 21.95"
                    ]
                },
                props
            )}

            {CreateItems(
                "Bowl Special",
                {
                    "Ton Katsu": [
                        "Panko fried Pork loin with katsu sauce over rice",
                        "L 14.95 | D 17.95"
                    ],
                    "Chicken Katsu": [
                        "Panko fried chicken breast cutlets with katsu sauce over rice",
                        "L 14.95 | D 17.95"
                    ],
                    "Chicken Teriyaki": [
                        "Grilled chicken with teriyaki sauce over rice",
                        "L 14.95 | D 17.95"
                    ],
                    "Sesame Chicken": [
                        "Tempura fried chicken breast with teriyaki sesame sauce over rice",
                        "L 14.95 | D 17.95"
                    ]
                },
                props
            )}
        </div>
    );
};

export default Entree;
