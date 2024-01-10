import React from "react";
import AudioElem from "./AudioElem";

export default function Translation(props) {

    let tAra = props.allTranslations;
    let resCounter = props.resCounter;

    let rootElem;

    // TODO maybe add on hover so that users know what happens if they click the root link

    // TODO perhaps link should be absolute and not relative

    if(tAra[resCounter]) {
        rootElem = <a className="root-link" href={"https://rua-iri.github.io/rootreference?q=" + tAra[resCounter].root}>{tAra[resCounter].root}</a>
    } else {
        rootElem = "";
    }


    // TODO style the audio so that it fits on mobile

    return (
        <div>
            <div className="translation-box">
                <div className="translation-meaning gimme-outline">
                    {tAra[resCounter] ? tAra[resCounter].meaning.replaceAll(";", "/ ") : "meaning"}
                </div>
                <div className="gimme-outline translation-tense">
                    {tAra[resCounter] ? tAra[resCounter].tense : "tense"}
                </div>
            </div>

            <div className="gimme-outline grammar-box">
                <div className="gimme-outline grammar-box-elem arab-text">
                    {rootElem}
                </div>
                <div className="gimme-outline grammar-box-elem">
                    {tAra[resCounter] ? tAra[resCounter].verbForm : "verbForm"}
                </div>
                <div className="gimmie-outline grammar-box-elem">
                    <AudioElem phoneticWord={props.phoneticWord} speakerName={localStorage.getItem("selectedVoice")} />
                </div>
            </div>
        </div>
    )
}
