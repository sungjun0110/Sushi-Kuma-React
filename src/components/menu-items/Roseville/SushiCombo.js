import React from "react";
import CreateItems from "../CreateItems";

const SushiCombo = (props) => {
    return (
        <div className="item-div">
            {CreateItems(
                "Sushi & Sashimi Combination",
                {
                    "Sushi-7": [
                        "7 pcs chef’s choice nigiri sushi & california roll",
                        "24.50"
                    ],
                    "Sushi-9": [
                        "9 pcs chef’s choice nigiri sushi & california roll",
                        "29.50"
                    ],
                    "Sushi & Sashimi - Lunch": [
                        "3 pcs - sushi, 3 pcs - sashimi & California roll",
                        "20.50"
                    ],
                    "Sushi & Sashimi - Dinner": [
                        "5 pcs- sushi, 4 pcs- sashimi & california roll",
                        "24.95"
                    ],
                    "Chirashi Lunch": [
                        "12 pcs chef’s choice of sliced raw fish & served with sushi rice",
                        "24.95"
                    ],
                    "Chirashi Dinner": [
                        "16 pcs chef’s choice of sliced raw fish & served with sushi rice",
                        "30.95"
                    ],
                    "Sashimi Lunch": [
                        "12 pcs chef’s choice of sliced raw fish & served with steamed rice",
                        "24.95"
                    ],
                    "Sashimi Dinner": [
                        "16 pcs chef’s choice of sliced raw fish & served with steamed rice",
                        "30.95"
                    ],
                    "Sashimi Deluxe": [
                        "25 pcs chef’s choice of sliced raw fish",
                        "49.95"
                    ]
                },
                props
            )}
        </div>
    );
};

export default SushiCombo;
