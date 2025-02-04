import React from "react";
import "./FindUs.css";

const FindUs = (props) => (
    <div id="stores">
        <div className="store">
            <a href="https://www.google.com/maps/place/Sushi+Kuma/@38.7897955,-121.2869385,17z/data=!3m2!4b1!5s0x809b21ed708291f1:0xad0170a75c63e650!4m5!3m4!1s0x809b21f2a4f76fdf:0xad13893b21ea4548!8m2!3d38.7897913!4d-121.2847498">
                <img src="images/roseville.png" alt="location"></img>
            </a>
            <div className="text-box">
                <h2>Roseville</h2>
                <p>
                    10341 Fairway Dr. #100, Roseville, CA 95678
                    <br />
                    Sun-Thur: 11:30 am - 9:00 pm
                    <br />
                    Fri-Sat: 11:30 am - 9:30 pm
                    <br />
                    (916) 788-1999
                </p>
                <a href="https://www.google.com/maps/place/Sushi+Kuma/@38.7897955,-121.2869385,17z/data=!3m2!4b1!5s0x809b21ed708291f1:0xad0170a75c63e650!4m5!3m4!1s0x809b21f2a4f76fdf:0xad13893b21ea4548!8m2!3d38.7897913!4d-121.2847498">
                    Get Directions
                </a>
            </div>
        </div>
    </div>
);

export default FindUs;
