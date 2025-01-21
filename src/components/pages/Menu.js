import React from "react";
import { Link } from "react-router-dom";
import "./Menu.css";

const Menu = (props) => {
    return (
        <div className="pages">
            <div className="location-page">
                <div className="location-selector" id="menu-page/locations">
                    <Link id="menu-selector-btn" to="/roseville">
                        <button>Roseville</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Menu;
