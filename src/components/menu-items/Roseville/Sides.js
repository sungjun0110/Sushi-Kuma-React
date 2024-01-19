import React from "react";
import CreateItems from "../CreateItems";

const Sides = (props) => {
    return (
        <div className="item-div">
            {CreateItems(
                "Side",
                {
                    "Miso Soup": ["", "3.50"],
                    "Bowl of Steamed Rice": ["", "3.50"],
                    "Bowl of Sushi Rice": ["", "3.50"]
                },
                props
            )}
        </div>
    );
};

export default Sides;
