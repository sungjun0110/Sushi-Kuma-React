import React from "react";
import CreateItems from "../CreateItems";

const Beverage = (props) => {
    return (
        <div className="item-div">
            {CreateItems(
                "Beverage",
                {
                    "Beer Bottle 12oz": [
                        "Sapporo, Asahi, Kirin, Bud Light, Corona, Blue moon",
                        "12oz: 6.50"
                    ],
                    "Draft Beer": [
                        "Sapporo",
                        "12oz: 6.50 | 22oz: 9.50 | Pitcher: 21.95"
                    ],
                    Wine: ["Red, White", "Glass: 8.50"],
                    "Cold Sake": ["Premium Ginjo, Karatamba", "15.95"],
                    "Nigori Sake": ["Unfiltered Sake", "13.95"],
                    "Hot Sake": ["Sho chiku Bai", "S: 6.50 | L: 11.50"],
                    "Sake Bomb": ["Sake & Sapporo Draft Beer", "5.95"],
                    "Oyster Shooter": ["", "5.95"]
                },
                props
            )}

            <div
                className="corkage"
                style={{ marginTop: "20px", color: "#ddd" }}
            >
                *** Corkage Fee - 15.00 ***
            </div>
        </div>
    );
};

export default Beverage;
