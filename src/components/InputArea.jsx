import React from "react";


export default function InputArea(props) {

    return (
        <div className="input-area">
            <form onSubmit={() => props.handleSubmit(event)}>
                <textarea
                    className="source-textarea arab-text"
                    id="input-textarea"
                    name="input-textarea"
                    placeholder="Input Arabic Text Here">
                </textarea>
                <button className='source-button'>
                    Submit
                </button>
            </form>
        </div>
    )
}