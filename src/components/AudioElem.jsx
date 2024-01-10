import React from "react";
import { Buffer } from "buffer";


export default function AudioElem(props) {

    let audioLink = "";
    const word64 = Buffer.from(props.phoneticWord).toString("base64");

    if (props.phoneticWord !== "Selected Word") {
        audioLink = "https://voice.reverso.net/RestPronunciation.svc/v1/output=json/GetVoiceStream/voiceName=" + props.speakerName + "22k?inputText=" + word64;
    }



    function audioClick() {
        document.getElementById(`audio-player${word64}`).play()
    }


    return (
        <span className="audio-box">
            <audio id={`audio-player${word64}`}
                src={audioLink}>
            </audio>
            <button className="audio-button" onClick={audioClick}>
                🔊
            </button>
        </span>
    )
}