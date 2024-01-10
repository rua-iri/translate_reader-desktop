import React from "react";
import AudioElem from "../AudioElem";



export default function Voices() {

    const [selectedVoice, setSelectedVoice] = React.useState(localStorage.getItem("selectedVoice"));

    function changeSelectedVoice(event) {
        setSelectedVoice(event.target.value);
        localStorage.setItem("selectedVoice", event.target.value);
    }

    return (

        <div className="menu-item">
            <h3>Available Voices</h3>
            <div className="voice-box">
                <div>
                    Leila
                    <AudioElem phoneticWord={"مرحبا، اسمي ليلَى"} speakerName="Leila" />
                    <input className="voice-radio" type="radio" name="radio-group" value="Leila" onChange={changeSelectedVoice} defaultChecked={"Leila"===selectedVoice} />
                </div>
                <div>
                    Mehdi
                    <AudioElem phoneticWord={"مرحبا، اسمي مَهدِي"} speakerName="Mehdi" />
                    <input className="voice-radio" type="radio" name="radio-group" value="Mehdi" onChange={changeSelectedVoice} defaultChecked={"Mehdi"===selectedVoice} />
                </div>
                <div>
                    Nizar
                    <AudioElem phoneticWord={"مرحبا، اسمي نزار"} speakerName="Nizar" />
                    <input className="voice-radio" type="radio" name="radio-group" value="Nizar" onChange={changeSelectedVoice} defaultChecked={"Nizar"===selectedVoice} />
                </div>
                <div>
                    Salma
                    <AudioElem phoneticWord={"مرحبا، اسمي سلمَى"} speakerName="Salma" />
                    <input className="voice-radio" type="radio" name="radio-group" value="Salma" onChange={changeSelectedVoice} defaultChecked={"Salma"===selectedVoice} />
                </div>
            </div>
        </div>

    )
}