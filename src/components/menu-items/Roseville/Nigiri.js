import React from "react";
import CreateItems from "../CreateItems";

const Nigiri = (props) => {
    return (
        <div className="item-div">
            {CreateItems(
                "Nigiri",
                {
                    Albacore: ["white tuna", "7.95"],
                    "Ama-Ebi": ["sweet shrimp", "9.95"],
                    Ebi: ["cooked shrimp", "7.50"],
                    Escolar: ["escolar", "7.95"],
                    Hamachi: ["yellow tail", "7.95"],
                    Hokkigai: ["surf clam", "7.50"],
                    Hotate: ["scallop", "7.95"],
                    Ika: ["squid", "7.50"],
                    Ikura: ["salmon roe", "7.50"],
                    Inari: ["tofu wrap", "7.50"],
                    Kani: ["snow crab", "8.95"],
                    Maguro: ["tuna", "7.95"],
                    Masago: ["smelt roe", "7.50"],
                    Saba: ["mackerel", "7.95"],
                    Sake: ["salmon", "7.95"],
                    "Spicy Hotate": ["spicy scallop", "7.95"],
                    Tako: ["octopus", "7.50"],
                    Tamago: ["sweet egg", "7.50"],
                    Tobiko: ["flying fish roe", "7.50"],
                    Unagi: ["fresh water eel", "7.95"]
                },
                props
            )}
            <div className="nigiri-warning">
                <p style={{ color: "white" }}>
                    * Extra order: Uzura (Quail Egg).....3.00 *
                </p>
            </div>
        </div>
    );
};

export default Nigiri;
