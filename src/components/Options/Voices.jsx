import React from "react";
import AudioElem from "../AudioElem";



export default function Voices() {

    const [selectedVoice, setSelectedVoice] = React.useState(localStorage.getItem("selectedVoice"));

    function changeSelectedVoice(event) {
        setSelectedVoice(event.target.value);
        localStorage.setItem("selectedVoice", event.target.value);
    }

    return (

        <div className="m-3 p-3 font-light">
            <h3 className="font-normal mb-2">Available Voices</h3>
            <div className="flex justify-center">
                <div className="mx-4">
                    Leila
                    <AudioElem
                        textContent={"مرحبا، اسمي ليلَى"}
                        speakerName="Leila"
                    />
                    <input
                        className="radio radio-info mx-2"
                        type="radio"
                        name="radio-group"
                        value="Leila"
                        onChange={changeSelectedVoice}
                        defaultChecked={"Leila" === selectedVoice}
                    />
                </div>
                <div className="mx-4">
                    Mehdi
                    <AudioElem
                        textContent={"مرحبا، اسمي مَهدِي"}
                        speakerName="Mehdi"
                    />
                    <input
                        className="radio radio-info mx-2"
                        type="radio"
                        name="radio-group"
                        value="Mehdi"
                        onChange={changeSelectedVoice}
                        defaultChecked={"Mehdi" === selectedVoice}
                    />
                </div>
                <div className="mx-4">
                    Nizar
                    <AudioElem
                        textContent={"مرحبا، اسمي نزار"}
                        speakerName="Nizar"
                    />
                    <input
                        className="radio radio-info mx-2"
                        type="radio"
                        name="radio-group"
                        value="Nizar"
                        onChange={changeSelectedVoice}
                        defaultChecked={"Nizar" === selectedVoice}
                    />
                </div>
                <div className="mx-4">
                    Salma
                    <AudioElem
                        textContent={"مرحبا، اسمي سلمَى"}
                        speakerName="Salma" />
                    <input
                        className="radio radio-info mx-2"
                        type="radio"
                        name="radio-group"
                        value="Salma"
                        onChange={changeSelectedVoice}
                        defaultChecked={"Salma" === selectedVoice}
                    />
                </div>
            </div>
        </div>

    )
}