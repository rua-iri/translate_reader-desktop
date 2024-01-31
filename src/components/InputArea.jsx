import React from "react";
import CustomButton from "./CustomButton";


export default function InputArea(props) {

    return (
        <div className="my-3">
            <form onSubmit={() => props.handleSubmit(event)}>
                <div className="flex flex-col items-center">
                    <label htmlFor="input-textarea">Input Arabic Text Here</label>
                    <textarea
                        dir="rtl"
                        className="h-40 w-10/12 text-lg m-2 resize-none outline-double outline-1 outline-slate-200"
                        id="input-textarea"
                        name="input-textarea"
                    // placeholder="Input Arabic Text Here"
                    >
                    </textarea>
                </div>
                <CustomButton textContent={"Submit"} />
            </form>
        </div>
    )
}