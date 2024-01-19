import React from "react";
import CreateItems from "../CreateItems";

const Dessert = (props) => {
    return (
        <div className="item-div">
            {CreateItems(
                "Dessert",
                {
                    Soda: [
                        "Coke, Diet Coke, Mr.pibb, Lemonade, Fanta, Sprite",
                        "3.50"
                    ],
                    Ramune: ["Japanese marble soda", "3.95"],
                    "Fruit Juice": ["Apple, Orange", "3.50"],
                    "Sparkling Water": ["s. Pellegrino", "3.50"],
                    "Iced Tea": ["", "3.50"],
                    "Green Iced Tea": ["", "3.50"],
                    "Hot Tea": ["Genmai", "2.95"],
                    "Mochi Ice cream": ["strawberry, chocolate, mango", "5.50"]
                },
                props
            )}
        </div>
    );
};

export default Dessert;
