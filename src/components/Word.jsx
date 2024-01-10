import React from "react";


export default function Word(props) {


    let fontWeight = "";

    if(props.isSelected) {
        fontWeight = "highlight-text";    
    } else {
        fontWeight = "normal-text";
    }


    // every word should end with a space character so that the formatting works correctly
    
    return (
        <span className="word-elem arab-text" onClick={() => props.onClick(props.alt)}>
            <span className={fontWeight}>
                {props.wordContent}&nbsp;
            </span>
        </span>
    )
}