import React from "react";
import About from "./Options/About";
import Voices from "./Options/Voices";
import CustomButton from "./CustomButton";


export default function OptionsMenu(props) {

    return (
        <div className="flex justify-center items-center fixed z-10 start-0 top-0 w-full h-full bg-slate-600 bg-opacity-30" onClick={() => props.hideMenu()} >

            <div className="rounded-lg bg-white mx-3 w-50 opacity-100 w-1/2 h-1/2 my-2 pb-3" onClick={(e) => e.stopPropagation()}>

                <div className="rounded-t-lg p-2 text-white bg-slate-600 text-lg font-semibold">
                    Arabic Reading Assistant
                </div>

                <About />

                <Voices />

                <CustomButton textContent={"Save"} handleClick={props.hideMenu} />

            </div>

        </div>
    )
}