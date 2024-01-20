import React from "react";
import CreateItems from "../CreateItems";

const SpecialRolls = (props) => {
    return (
        <div className="item-div">
            <div className="discount">
                Every Roll{" "}
                <span style={{ color: "#bf1a04", fontWeight: "bold" }}>
                    50% OFF!
                </span>
            </div>

            {CreateItems(
                "Non-Raw",
                {
                    "Fair Oaks": [
                        "Deep-fried shrimp | avocado | special sauce",
                        "18.99"
                    ],
                    "Golden Gate": [
                        "Deep-fried shrimp | crab meat | special sauce",
                        "19.99"
                    ],
                    "Sesame Chicken Roll": [
                        "crabmeat, avocado, ceram cheese | sesame chicken | unagi sauce",
                        "19.99"
                    ],
                    "Red Bull": [
                        "Deep-fried Shrimp, cream cheese | spicy crab meat | special sauce | Soy wrap",
                        "20.99"
                    ],
                    Spider: [
                        "Deep-fried soft shell crab, cucumber, avocado, crabmeat | unagi sauce | 5pcs",
                        "19.50"
                    ],
                    "Tempura Crunchy": [
                        "Deep-friedshrimp, avocado, crab meat, crunchy |unagi sauce | 5pcs",
                        "18.99"
                    ],
                    "Tempura Roll": [
                        "Deep-fried shrimp, avocado, cucumber, crabmeat | 5pcs",
                        "16.99"
                    ],
                    "Veggie Tempura Roll": [
                        "Deep-fried carrot, zucchini, asparagus | unagi sauce- 5pcs",
                        "16.50"
                    ],
                    "Yummy Yummy": [
                        "Deep-fried shrimp, avocado, cucumber, cream cheese, crab meat, masago | 5pcs",
                        "18.50"
                    ]
                },
                props
            )}

            {CreateItems(
                "Eel",
                {
                    "Blue Moon": [
                        "Deep-fried shrimp, orange | unagi, crab | special sauce",
                        "22.50"
                    ],
                    Caterpillar: [
                        "Eel, cucumber | avocado | unagi sauce",
                        "21.99"
                    ],
                    Dragon: [
                        "Deep-fried shrimp, crabmeat | eel | special sauce",
                        "21.99"
                    ],
                    "Hwy 50": [
                        "Crabmeat, avocado | eel, cooked shrimp | special sacue",
                        "20.99"
                    ],
                    "Spicy Johny": [
                        "Deep-fried shrimp, spicy tuna | eel | special sauce",
                        "21.99"
                    ],
                    "Spicy crunchy": [
                        "Spicy tuna, eel, seaweed salad, cucumber | crunchy, unagi sauce | 5pcs",
                        "19.50"
                    ],
                    "Lake Tahoe": [
                        "Deep-fried shrimp, cream cheese, cucumber | unagi | special sauce",
                        "21.50"
                    ]
                },
                props
            )}

            {CreateItems(
                "Raw",
                {
                    "49er": [
                        "Deep-fried shrimp, cream cheese, cucumber | salmon, lemon | special sauce",
                        "20.50"
                    ],
                    911: [
                        "Spicy tuna, cucumber | tuna | spicy & special sauce",
                        "20.50"
                    ],
                    Arigato: [
                        "Deep-fried shrimp | salmon, tuna | special sauce",
                        "19.99"
                    ],
                    "Cherry Blossom": [
                        "Salmon, avocado | tuna | special sauce",
                        "20.99"
                    ],
                    "Crazy Horse": [
                        "Salmon, tuna, yellowtail, avocado | special sauce - 5pcs",
                        "20.99"
                    ],
                    "Folsom Lake": [
                        "Deep-fried shrimp, spicy tuna | salmon | special sauce",
                        "21.99"
                    ],
                    Happy: [
                        "Deep-fried shrimp | tuna, yellowtail | special sauce",
                        "20.99"
                    ],
                    Kamikaze: [
                        "Spicy crab, jalapeno, cream cheese | cooked shrimp, salmon | special sauce",
                        "22.50"
                    ],
                    Kevala: [
                        "Deep-fried shrimp, spicy tuna, crabmeat | scallop, special sauce",
                        "21.99"
                    ],
                    "Kiss Me": [
                        "Crab meat, avocado | salmon | special sauce",
                        "20.50"
                    ],
                    Kuma: [
                        "Deep-fried hrimp | avocado, sweet shrimp & 5 kinds of raw fish masago | special sauce",
                        "24.50"
                    ],
                    "Las Vegas": [
                        "Deep-fried asparagus, crabmeat, cream cheese | tuna, salmon, special sauce",
                        "21.99"
                    ],
                    Mafia: [
                        "Deep-fried shrimp, crabmeat, cream cheese | scallop, salmon | special sauce",
                        "21.99"
                    ],
                    "Orange Blossom": [
                        "Tuna, avocado | salmon | special sauce",
                        "20.99"
                    ],
                    "Pier 39": [
                        "Spicy tuna, cucumber | yellowtail, spicy & special sauce",
                        "20.50"
                    ],
                    "Pink Lady": [
                        "Deep-fried shrimp, crab meat | tuna | special sauce",
                        "21.99"
                    ],
                    Rainbow: [
                        "Crab meat, avocado | 5 kinds of raw fish",
                        "22.50"
                    ],
                    "Red Dragon": [
                        "Crabmeat, avocado | spicy tuna, cooked shrimp",
                        "19.50"
                    ],
                    "Red Hawk": [
                        "Deep-fried shrimp, crab meat | scallop | special sauce",
                        "21.99"
                    ],
                    Samurai: [
                        "Deep-fried asparagus, spicy crab, spicy tuna | salmon, white tuna | special sauce",
                        "21.99"
                    ],
                    Sunrise: [
                        "Spicy crab, Salmon, tuna, yellowtail, avo | spicy& special sauce - 5pcs",
                        "21.99"
                    ],
                    TNT: [
                        "Deep-fried asparagus, spicy crab meat | spicy tuna, jalapeno, crunch, unagi sauce",
                        "22.50"
                    ],
                    "Valentine Roll": [
                        "Deep-fried shrimp, crab meat, lemon | tuna, salmon, green onion | special sauce",
                        "22.99"
                    ],
                    Viagra: [
                        "Spicy tuna, spicy crab meat, | tuna, salmon, yellowtail | spicy & special sauce",
                        "21.99"
                    ]
                },
                props
            )}

            {CreateItems(
                "Seared",
                {
                    Aloha: [
                        "Spicy tuna, spicy crab meat, cucumber | seared albacore, jalapeno | special sauce",
                        "20.99"
                    ],
                    "Bad Boys": [
                        "Deep-fried asparagus, crab meat | seared albacore, tuna, deep-friedjalapeno | unagi sauce",
                        "20.50"
                    ],
                    Charisma: [
                        "Deep-fried shrimp | spicy crab, seared tuna, albacore | special sauce",
                        "20.99"
                    ],
                    "El Dorado Hills": [
                        "Deep-fried soft shell crab, crab meat | salmon, seared tuna | special sauce",
                        "22.99"
                    ],
                    Lucky7: [
                        "Deep-fried shrimp, crabmeat, spicy tuna | seared salmon | special sauce",
                        "21.99"
                    ],
                    Sakura: [
                        "Spicy tuna, spicy crab meat, jalapeno | seared tuna, cooked shrimp | special sauce",
                        "21.99"
                    ],
                    Serrano: [
                        "Soft shell crab, crabmeat | seared salmon | special sauce",
                        "22.50"
                    ],
                    "White Rock": [
                        "Deep-fried asparagus, spicy crab | seared white tuna, deep-fried onion | special sauce",
                        "21.99"
                    ],
                    "X-File": [
                        "Deep-fried shrimp, spicy tuna | 5 kinds of seared fish | chilli pepper, unagi sauce",
                        "22.99"
                    ],
                    Yosemite: [
                        "Deep-friedShrimp, spicy crab | seared tuna, deep-fried carrot | unagi sauce",
                        "20.50"
                    ]
                },
                props
            )}

            {CreateItems(
                "Deep-Fried",
                {
                    "Golden CA": [
                        "Crab meat, avocado | deep-fried, unagi sauce",
                        "16.99"
                    ],
                    "Golden Spicy": [
                        "Spicy tuna, cream cheese, cucumber | deep-fried, spicy & unagi sauce",
                        "16.99"
                    ],
                    Ninja: [
                        "Spicy tuna, albacore, eel, cream cheese | deep-fried, spicy & special sauce - 5pcs",
                        "20.99"
                    ],
                    "Oh! Yes": [
                        "Salmon, tuna, yellowtail, avocado | deep-fried, unagi sauce - 5pcs",
                        "20.99"
                    ]
                },
                props
            )}

            {CreateItems(
                "Baked",
                {
                    "Lion King": [
                        "Crab meat, avocado | salmon, special sauce - 6pcs",
                        "20.50"
                    ],
                    "Volcanic Scallop": [
                        "Crab meat, avocado | scallop, special sauce - 6pcs",
                        "20.50"
                    ]
                },
                props
            )}

            <div className="roll-extra">
                <h3>Would you like to add toppings?</h3>
                <div className="extras">
                    <div className="extra">
                        Masago <br /> 1.50
                    </div>

                    <div className="extra">
                        Cucumber <br /> 1.50
                    </div>

                    <div className="extra">
                        Crabmeat <br /> 2.00
                    </div>

                    <div className="extra">
                        Japapeno <br /> 1.50
                    </div>

                    <div className="extra">
                        Soy Wrap <br /> 2.00
                    </div>

                    <div className="extra">
                        Cream Cheese <br /> 1.50
                    </div>

                    <div className="extra">
                        Spicy Tuna <br /> 2.00
                    </div>

                    <div className="extra">
                        Extra Fish <br /> 3.00
                    </div>

                    <div className="extra">
                        Real Crab <br /> 3.00
                    </div>

                    <div className="extra">
                        Crunchy <br /> 1.50
                    </div>

                    <div className="extra">
                        Avocado <br /> 1.50
                    </div>

                    <div className="extra">
                        Deep-fried Shrimp <br /> 2.00
                    </div>

                    <div className="extra">
                        Spicy Crabmeat <br /> 2.00
                    </div>

                    <div className="extra">
                        Deep-fried Asparagus <br /> 1.50
                    </div>

                    <div className="extra">
                        Cooked Shrimp <br /> 2.50
                    </div>

                    <div className="extra">
                        Deep-fry your roll <br /> 2.50
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SpecialRolls;
