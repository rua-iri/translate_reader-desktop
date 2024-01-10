import React from "react";
import rightArrow from "../assets/double-arrow-right-icon.svg";
import leftArrow from "../assets/double-arrow-left-icon.svg";


export default function Arrow(props) {


    let aro;
    if (props.arrowShape === ">") {
        aro = rightArrow;
    } else {
        aro = leftArrow;
    }

    return (
        <div className="gimme-outline definition-arrow" onClick={props.onClick}>
            <img src={aro} alt="arrow button" />
        </div>
    )
}