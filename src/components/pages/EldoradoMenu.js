import React, { useReducer, useState } from "react";
import Category from "../menu-items/Category";
import { Link } from "react-router-dom";

import App from "../menu-items/Eldorado/Appetizer";
import Bev from "../menu-items/Eldorado/Beverage";
import Des from "../menu-items/Eldorado/Dessert";
import Ent from "../menu-items/Eldorado/Entree";
import Kid from "../menu-items/Eldorado/Kids";
import Nigi from "../menu-items/Eldorado/Nigiri";
import Roll from "../menu-items/Eldorado/Rolls";
import Side from "../menu-items/Eldorado/Sides";
import Spe from "../menu-items/Eldorado/SpecialRolls";
import Com from "../menu-items/Eldorado/SushiCombo";
import DinnerBento from "../menu-items/Eldorado/DinnerBento";
import LunchBento from "../menu-items/Eldorado/LunchBento";

const EldoradoMenu = () => {
    const reducer = (items, action) => {
        switch (action) {
            case "add":
                let temp = [
                    ...items,
                    {
                        id: itemId,
                        name: item.name,
                        description: item.description,
                        price: item.price
                    }
                ];
                setItemId(itemId + 1);
                return temp;
            case "remove":
                return items.filter((i) => i.id !== item.id);
            default:
                return items;
        }
    };

    const [itemId, setItemId] = useState(0);
    const [item, setItem] = useState({});
    const [, dispatch] = useReducer(reducer, []);

    // categori name : page element
    const cateDict = {
        Appetizer: <App setItem={setItem} dispatch={() => dispatch("add")} />,
        Nigiri: <Nigi setItem={setItem} dispatch={() => dispatch("add")} />,
        "Lunch Bento Box": (
            <LunchBento setItem={setItem} dispatch={() => dispatch("add")} />
        ),
        "Dinner Bento Box": (
            <DinnerBento setItem={setItem} dispatch={() => dispatch("add")} />
        ),
        Entrée: <Ent setItem={setItem} dispatch={() => dispatch("add")} />,
        "Kids' Menu": (
            <Kid setItem={setItem} dispatch={() => dispatch("add")} />
        ),
        "Sushi & Sashimi Combo": (
            <Com setItem={setItem} dispatch={() => dispatch("add")} />
        ),
        Rolls: <Roll setItem={setItem} dispatch={() => dispatch("add")} />,
        "Kuma Special Rolls": (
            <Spe setItem={setItem} dispatch={() => dispatch("add")} />
        ),
        Side: <Side setItem={setItem} dispatch={() => dispatch("add")} />,
        "Alcoholic Beverage": (
            <Bev setItem={setItem} dispatch={() => dispatch("add")} />
        ),
        "Beverage & Dessert": (
            <Des setItem={setItem} dispatch={() => dispatch("add")} />
        )
    };

    const categories = [];

    for (const [catName, page] of Object.entries(cateDict)) {
        categories.push(
            <Category name={catName} key={catName}>
                {page}
            </Category>
        );
    }

    return (
        <>
            <div className="page">
                <div id="title">El Dorado Hills</div>

                <div className="warning">
                    <p>
                        *Consuming raw or undercooked meats, poultry, seafood,
                        shellfish, or eggs may increase your risk of foodborne
                        illness.
                        <br />
                        *Our menu and prices are subject to change.
                        <br />
                        *18% gratuity will be added for parties of six or more.
                    </p>
                </div>
                {categories}

                <Link to="/menu">
                    <button id="back-btn">Back</button>
                </Link>
            </div>
        </>
    );
};

export default EldoradoMenu;
