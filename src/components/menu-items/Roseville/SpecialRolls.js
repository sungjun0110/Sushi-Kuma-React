import React from "react";
import CreateItems from "../CreateItems";

const SpecialRolls = (props) => {
    return (
        <>
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
                        "Fair Way": [
                            "Deep-fried shrimp | avocado | special sauce",
                            "17.99"
                        ],
                        "Golden Gate": [
                            "Deep-fried shrimp | crab meat | special sauce",
                            "18.99"
                        ],
                        "Hwy 65": [
                            "Crabmeat, avocado | cooked shrimp | special sauce",
                            "19.99"
                        ],
                        "Chicken Teriyaki Roll": [
                            "avocado, cream cheese, grilled chicken  | unagi sauce | 5pcs",
                            "17.99"
                        ],
                        "Red Bull": [
                            "Deep-fried Shrimp, cream cheese | spicy crab meat | special sauce | Soy wrap",
                            "19.99"
                        ],
                        Spider: [
                            "Deep-fried soft shell crab, cucumber, avocado, crabmeat | masago | unagi sauce | 5pcs",
                            "18.50"
                        ],
                        "Tempura Crunchy": [
                            "Deep-fried shrimp, avocado, crab meat, crunchy |unagi sauce | 5pcs",
                            "17.99"
                        ],
                        "Tempura Roll": [
                            "Deep-fried shrimp, avocado, cucumber, crabmeat | 5pcs",
                            "15.99"
                        ],
                        "Veggie Tempura Roll": [
                            "Deep-fried- carrot, zucchini, asparagus | unagi sauce- 5pcs",
                            "15.99"
                        ],
                        "Yummy Yummy": [
                            "Deep-fried shrimp, avocado, cucumber, cream cheese, crab meat, masago | 5pcs",
                            "17.50"
                        ]
                    },
                    props
                )}

                {CreateItems(
                    "Eel",
                    {
                        "Benjaminn Roll": [
                            "Spicy tuna, spicy crab meat, cilantro | unagi | special sauce",
                            "20.99"
                        ],
                        "Blue Moon": [
                            "Deep-fried shrimp, orange | unagi, crab | special sauce",
                            "21.50"
                        ],
                        Caterpillar: [
                            "Eel, cucumber | avocado | unagi sauce",
                            "20.99"
                        ],
                        Dragon: [
                            "Deep-fried shrimp, crabmeat | eel | special sauce",
                            "20.99"
                        ],
                        Rocklin: [
                            "Deep-fried soft shell crab, cream cheese| unagi",
                            "21.50"
                        ],
                        "Spicy Johny": [
                            "Deep-fried shrimp, spicy tuna | eel | special sauce",
                            "20.99"
                        ],
                        "Spicy crunchy": [
                            "Spicy tuna, eel, seaweed salad, cucumber | crunchy, unagi sauce | 5pcs",
                            "18.50"
                        ],
                        "Lake Tahoe": [
                            "Deep-fried shrimp, cream cheese, cucumber | unagi | special sauce",
                            "20.50"
                        ],
                        Kamikaze: [
                            "Spicy crab, jalapeno, cream cheese | cooked shrimp, eel, salmon | special sauce",
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
                            "19.50"
                        ],
                        911: [
                            "Spicy tuna, cucumber | tuna | spicy & special sauce",
                            "19.50"
                        ],
                        Arigato: [
                            "Deep-fried shrimp | salmon, tuna | special sauce",
                            "18.99"
                        ],
                        "Cherry Blossom": [
                            "Salmon, avocado | tuna | special sauce",
                            "19.99"
                        ],
                        "Crazy Horse": [
                            "Salmon, tuna, yellowtail, avocado | special sauce - 5pcs",
                            "19.99"
                        ],
                        "Folsom Lake": [
                            "Deep-fried shrimp, spicy tuna | salmon | special sauce",
                            "20.99"
                        ],
                        Happy: [
                            "Deep-fried shrimp | tuna, yellowtail | special sauce",
                            "19.99"
                        ],
                        "Kiss Me": [
                            "Crab meat, avocado | salmon | special sauce",
                            "19.50"
                        ],
                        Kuma: [
                            "Deep-fried shrimp | avocado, sweet shrimp & 5 kinds of raw fish masago | special sauce",
                            "23.50"
                        ],
                        "Las Vegas": [
                            "Deep-fried asparagus, crabmeat, cream cheese | tuna, salmon, special sauce",
                            "20.99"
                        ],
                        Mafia: [
                            "Deep-fried shrimp, crabmeat, cream cheese | scallop, salmon | special sauce",
                            "20.99"
                        ],
                        "Orange Blossom": [
                            "Tuna, avocado | salmon | special sauce",
                            "19.99"
                        ],
                        "Pink Lady": [
                            "Deep-fried shrimp, crab meat | tuna | special sauce",
                            "20.99"
                        ],
                        Rainbow: [
                            "Crab meat, avocado | 5 kinds of raw fish",
                            "21.50"
                        ],
                        Playboy: [
                            "Spicy tuna, spicy crab meat, cilantro | salmon, lemon",
                            "21.50"
                        ],
                        "Thunder Valley": [
                            "Deep-fried shrimp, crab meat | scallop | special sauce",
                            "20.99"
                        ],
                        Samurai: [
                            "Deep-fried asparagus, spicy crab, spicy tuna | salmon, white tuna | special sauce",
                            "20.99"
                        ],
                        Sunrise: [
                            "Spicy crab, Salmon, tuna, yellowtail, avo | spicy& special sauce - 5pcs",
                            "20.99"
                        ],
                        "Valentine Roll": [
                            "Deep-fried shrimp, crab meat, cilantro, lemon | tuna, salmon, green onion | special sauce",
                            "21.99"
                        ],
                        Viagra: [
                            "Spicy tuna, spicy crab meat, | tuna, salmon, yellowtail | spicy & special sauce",
                            "20.99"
                        ]
                    },
                    props
                )}

                {CreateItems(
                    "Seared",
                    {
                        Aloha: [
                            "Spicy tuna, spicy crab meat, cucumber | seared albacore, jalapeno | special sauce",
                            "19.99"
                        ],
                        "Bad Boys": [
                            "Deep-fried asparagus, crab meat | seared albacore, tuna, deep-friedjalapeno | unagi sauce",
                            "19.50"
                        ],
                        Charisma: [
                            "Deep-fried shrimp | spicy crab, seared tuna, albacore | special sauce",
                            "19.99"
                        ],
                        Roseville: [
                            "Deep-fried soft shell crab, crab meat | salmon, seared tuna | special sauce",
                            "21.99"
                        ],
                        Lucky7: [
                            "Deep-fried shrimp, crabmeat, spicy tuna | seared salmon | special sauce",
                            "20.99"
                        ],
                        Sakura: [
                            "Spicy tuna, spicy crab meat, jalapeno | seared tuna, cooked shrimp | special sauce",
                            "20.99"
                        ],
                        Lincoln: [
                            "Deep-fried asparagus, spicy crab | seared white tuna, deep-fried Onion | unagi sauce",
                            "20.99"
                        ],
                        Diablo: [
                            "Deep-fried shirimp, spicy tuna | 5 kinds of seared fish | chili pepper, unagi sauce",
                            "21.99"
                        ],
                        Yosemite: [
                            "Deep-fried shrimp, spicy crab | seared tuna, deep-fried carrot | unagi sauce",
                            "19.50"
                        ],
                        TNT: [
                            "Deep-fried asparagus, spicy crab meat | spicy tuna, jalapeno, crunch | unagi sauce",
                            "21.50"
                        ],
                        "Zig Zag Roll": [
                            "Deep-fried soft shell crab, avocado, zig zag sauce | Soy Wrap",
                            "20.99"
                        ]
                    },
                    props
                )}

                {CreateItems(
                    "Deep-fried",
                    {
                        "Golden CA": [
                            "Crab meat, avocado | deep-fried, unagi sauce",
                            "15.99"
                        ],
                        "Golden Spicy": [
                            "Spicy tuna, cream cheese, cucumber | deep-fried, spicy & unagi sauce",
                            "15.99"
                        ],
                        Ninja: [
                            "Spicy tuna, albacore, eel, cream cheese | deep-fried, spicy & special sauce - 5pcs",
                            "19.99"
                        ],
                        "Oh! Yes": [
                            "Salmon, tuna, yellowtail, avocado | deep-fried, unagi sauce - 5pcs",
                            "19.99"
                        ]
                    },
                    props
                )}

                {CreateItems(
                    "Baked",
                    {
                        "Lion King": [
                            "Crab meat, avocado | salmon, special sauce - 6pcs",
                            "19.50"
                        ],
                        "Volcanic Scallop": [
                            "Crab meat, avocado | scallop, special sauce - 6pcs",
                            "19.50"
                        ]
                    },
                    props
                )}

                <div className="roll-extra">
                    <h3>Would you like to add toppings?</h3>
                    <div className="extras">
                        <div className="extra">
                            Masago <br /> 1.00
                        </div>

                        <div className="extra">
                            Cucumber <br /> 1.00
                        </div>

                        <div className="extra">
                            Crabmeat <br /> 1.00
                        </div>

                        <div className="extra">
                            Japapeno <br /> 1.00
                        </div>

                        <div className="extra">
                            Soy Wrap <br /> 1.50
                        </div>

                        <div className="extra">
                            Cream Cheese <br /> 1.00
                        </div>

                        <div className="extra">
                            Spicy Tuna <br /> 1.50
                        </div>

                        <div className="extra">
                            Extra Fish <br /> 2.50
                        </div>

                        <div className="extra">
                            Real Crab <br /> 2.50
                        </div>

                        <div className="extra">
                            Crunchy <br /> 1.00
                        </div>

                        <div className="extra">
                            Avocado <br /> 1.00
                        </div>

                        <div className="extra">
                            Deep-fried Shrimp <br /> 1.50
                        </div>

                        <div className="extra">
                            Spicy Crabmeat <br /> 1.50
                        </div>

                        <div className="extra">
                            Deep-fried Asparagus <br /> 1.00
                        </div>

                        <div className="extra">
                            Cooked Shrimp <br /> 2.00
                        </div>

                        <div className="extra">
                            Deep-fry your roll <br /> 2.00
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SpecialRolls;
