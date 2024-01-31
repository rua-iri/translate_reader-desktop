import React from "react";
import { Buffer } from "buffer";


export default function AudioElem(props) {

    let audioLink = "";
    const word64 = Buffer.from(props.textContent).toString("base64");

    if (props.textContent !== "Selected Word") {
        audioLink = "https://voice.reverso.net/RestPronunciation.svc/v1/output=json/GetVoiceStream/voiceName=" + props.speakerName + "22k?inputText=" + word64;
    }



    function audioClick() {
        document.getElementById(`audio-player${word64}`).play()
    }


    return (
        <span className="flex items-center content-center">
            <audio id={`audio-player${word64}`}
                src={audioLink}>
            </audio>
            <button className="w-full h-full " onClick={audioClick}>
                🔊
            </button>
        </span>
    )
}