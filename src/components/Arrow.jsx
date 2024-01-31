import React from "react";
import rightArrow from "../assets/double-arrow-right-icon.svg";
import leftArrow from "../assets/double-arrow-left-icon.svg";


export default function Arrow(props) {


    let arrowSource;
    if (props.isArrowRight) {
        arrowSource = rightArrow;
    } else {
        arrowSource = leftArrow;
    }

    return (
        <div className="invert w-10 flex items-center justify-center select-none" onClick={props.onClick}>
            <img className="w-3/4 mx-2" src={arrowSource} alt="arrow button" />
        </div>
    )
}