import React from "react";


export default function InputArea(props) {

    return (
        <div className="input-area">
            <textarea className="source-textarea arab-text" id="input-textarea" name="input-textarea" placeholder="Input Arabic Text Here">
            </textarea>
            <button className='source-button' onClick={props.onClick}>
                Submit
            </button>
        </div>
    )
}