import React from "react";
import CreateItems from "../CreateItems";

const Appetizer = (props) => {
    return (
        <div className="item-div">
            {CreateItems(
                "Salad",
                {
                    Edamame: ["boiled and salted soybeans", "7.50"],
                    "Spicy Edamame": [
                        "pan-fried soybeans with Japanese spice mix",
                        "8.50"
                    ],
                    "Green Salad": ["served with house dressing sauce", "6.95"],
                    "Seaweed Salad": [
                        "seaweed marinated with sesame oil",
                        "7.95"
                    ],
                    "Veggie Sunomono": ["cucumber in vinegar sauce", "7.95"],
                    "Seafood Sunomono": [
                        "cucumber with assorted seafood in vinegar sauce",
                        "11.95"
                    ],
                    "Hawaiian Poke": [
                        "ahi tuna, cucumber, onion with ponzu, sesame oil, spicy sauce & tobiko",
                        "14.95"
                    ]
                },
                props
            )}

            {CreateItems(
                "Grilled",
                {
                    "Baked Green Mussel": [
                        "baked on half shell & spicy sauce - 5 pcs",
                        "8.50"
                    ],
                    "BBQ Albacore": [
                        "grilled rare white tuna with special spicy BBQ sauce - 6 pcs",
                        "17.95"
                    ],
                    "Sea Steak": [
                        "grilled ahi tuna with ponzu & special sauce - 8 pcs",
                        "17.95"
                    ],
                    "Chicken Teriyaki": [
                        "grilled chicken with teriyaki sauce",
                        "13.95"
                    ],
                    "Hamachi Kama": [
                        "grilled yellow tail cheek bone with ponzu sauce",
                        "12.50"
                    ]
                },
                props
            )}

            {CreateItems(
                "Deep-Fried",
                {
                    "Agedashi Tofu": [
                        "deep-fried tofu served with dried tuna, ponzu sauce",
                        "8.95"
                    ],
                    "Calamari Tempura": [
                        "breaded deep-fried calamari ring",
                        "11.50"
                    ],
                    Croquette: [
                        "deep-fried potato & vegetables – 3pcs",
                        "7.50"
                    ],
                    "Creamy Jalapeno": [
                        "deep-fried jalapeno, cream cheese, spicy tuna special sauce",
                        "8.95"
                    ],
                    Gyoza: [
                        "Deep-fried or steamed chicken and vegetable pot-stickers - 7 pcs",
                        "7.50"
                    ],
                    "Vegetable Tempura": [
                        "assorted seasonal vegetables",
                        "7.95"
                    ],
                    "Shrimp Tempura": ["deep-fried shrimp - 4 pcs", "9.95"],
                    "Mixed Tempura": [
                        "shrimp - 2 pcs, vegetables - 5 pcs",
                        "8.95"
                    ],
                    "Dragon Ball": [
                        "crabmeat & spicy crabmeat with special sauce - 6 pcs",
                        "8.95"
                    ],
                    "Sesame Chicken": [
                        "tempura fried chicken, teriyaki sauce",
                        "13.95"
                    ]
                },
                props
            )}

            {CreateItems(
                "Raw Fish",
                {
                    "Kuma Oyster": [
                        "half shell oyster with spicy ponzu sauce, lemon - 4 pcs",
                        "11.95"
                    ],
                    "Pepper Fin": [
                        "white tuna with jalapeno, spicy ponzu sauce and sesame oil",
                        "17.95"
                    ],
                    "7 Pcs Sashimi": [
                        "choice of one - salmon, tuna, yellowtail - 7 pcs",
                        "17.95"
                    ],
                    "Assorted Sashimi": [
                        "chef's choice of today's raw fish - 12 pcs",
                        "19.95"
                    ],
                    "Garlic Sashimi": [
                        "7pcs of salmon with fried garlic special sauce",
                        "17.95"
                    ],
                    "Hamachi Carpaccio": [
                        "Sliced Hamachi jalapeno with chili pepper ponzu olive oil",
                        "17.95"
                    ]
                },
                props
            )}
        </div>
    );
};

export default Appetizer;
