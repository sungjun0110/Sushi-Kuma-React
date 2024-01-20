import React from "react";
import CreateItems from "../CreateItems";

const Rolls = (props) => {
    return (
        <div className="item-div">
            <div className="discount">
                Every Roll{" "}
                <span style={{ color: "#bf1a04", fontWeight: "bold" }}>
                    50% OFF!
                </span>
            </div>

            {CreateItems(
                "Vegetable Roll",
                {
                    "Asparagus Roll": ["asparagus", "12.99"],
                    "Avokyu Roll": ["avocado, cucumber", "12.99"],
                    "Kampyo Maki": ["squash", "12.99"],
                    "Oshinko Maki": ["pickled radish", "12.95"],
                    "Avocado Maki": ["avocado", "12.99"],
                    Futomaki: [
                        "egg, cucumber, oshinko, kampyo, yamagobo",
                        "13.99"
                    ],
                    "Kappa Maki": ["cucumber", "12.99"],
                    "Texas Roll": [
                        "deep-fried jalapeno, avocado, cream cheese",
                        "13.99"
                    ]
                },
                props
            )}

            {CreateItems(
                "Beginner's Roll",
                {
                    "Alaskan Roll": ["salmon, avocado", "13.99"],
                    "California Roll": ["crab meat, avocado", "12.99"],
                    "Ebi Maki": ["cooked shrimp", "12.99"],
                    "Negi Hama": ["yellowtail, green onion", "12.99"],
                    "New York Roll": ["shrimp, avocado", "13.99"],
                    "Ocean Roll": ["yellowtail, avocado", "13.99"],
                    "Pacific Roll": ["tuna, avocado", "13.99"],
                    "Philly Roll": ["salmon, cream cheese, avocado", "13.99"],
                    "Rock'N'Roll": ["eel, avocado", "13.99"],
                    "Sake Maki": ["salmon", "12.99"],
                    "Salmon Skin Roll": ["salmon skin, cucumber", "13.99"],
                    "Spicy California": ["spicy crabmeat, avocado", "12.99"],
                    "Spicy Tuna Roll": ["spicy tuna, cucumber", "13.99"],
                    "Tekka Maki": ["tuna", "12.99"]
                },
                props
            )}

            {CreateItems(
                "Temaki - Hand Roll",
                {
                    "California Hand Roll": ["crab meat, avocado", "12.99"],
                    "Tempura Hand Roll": [
                        "shrimp tempura, avocado, crabmeat",
                        "12.99"
                    ],
                    "Spicy Tuna Hand Roll": ["spicy tuna, cucumber", "13.99"],
                    "Unagi Hand Roll": ["eel, cucumber", "13.99"],
                    "Chop Hotate Hand Roll": ["Spicy scallop", "13.99"],
                    "Salmon Skin Hand Roll": ["salmon skin, cucumber", "13.99"],
                    "Spider Hand Roll": ["deep-fried softshell crab", "13.99"],
                    "ZigZag Hand Roll": [
                        "deep-friedsoftshell crab,soy wrap",
                        "13.99"
                    ],
                    "Fish Hand Roll": [
                        "your choice of salmon, tuna, albacore, or yellow tail",
                        "13.99"
                    ]
                },
                props
            )}
        </div>
    );
};

export default Rolls;
