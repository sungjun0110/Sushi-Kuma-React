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
                "Beginner's Roll",
                {
                    "Alaskan Roll": ["salmon, avocado", "13.99"],
                    "Avokyu Roll": ["avocado, cucumber", "12.99"],
                    "California Roll": ["crab meat, avocado", "12.99"],
                    "Negi Hama": ["yellowtail, green onion", "12.99"],
                    "New York Roll": ["shrimp, avocado", "13.99"],
                    "Ocean Roll": ["yellowtail, avocado", "13.99"],
                    "Pacific Roll": ["tuna, avocado", "13.99"],
                    "Philly Roll": ["salmon, cream cheese, avocado", "13.99"],
                    "Sake Maki": ["salmon", "12.99"],
                    "Unakyu Roll": ["eel, cucumber", "13.99"],
                    "Salmon Skin Roll": ["salmon skin, cucumber", "13.99"],
                    "Spicy Tuna Roll": ["spicy tuna, cucumber", "13.99"],
                    "Texas Roll": [
                        "deep-fried jalapeno cream cheese, avocado",
                        "13.99"
                    ],
                    "Tekka Maki": ["tuna", "12.99"]
                },
                props
            )}

            {CreateItems(
                "Temaki - Hand Roll",
                {
                    "California Hand Roll": ["crab meat, avocado", "12.99"],
                    "Tempura Hand Roll": [
                        "shrimp tempura, avocado, crab meat",
                        "12.99"
                    ],
                    "Spicy Tuna Hand Roll": ["spicy tuna, cucumber", "13.99"],
                    "Unagi Hand Roll": ["eel, cucumber", "13.99"],
                    "Hamachi Hand Roll": ["hamachi, green onion", "13.99"],
                    "Chop Hotate Hand Roll": ["Spicy scallop", "13.99"],
                    "Salmon Skin Hand Roll": ["salmon skin, cucumber", "13.99"],
                    "Spider Hand Roll": ["Deep-fried softshell crab", "13.99"],
                    "ZigZag Hand Roll": [
                        "deep-fried softshell crab,soy wrap",
                        "13.99"
                    ],
                    "Maguro Hand Roll": ["tuna", "13.99"]
                },
                props
            )}
        </div>
    );
};

export default Rolls;
