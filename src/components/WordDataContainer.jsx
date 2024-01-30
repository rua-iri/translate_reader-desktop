import React from "react";
import AudioElem from "./AudioElem";

export default function WordDataContainer(props) {

    let translationArray = props.allTranslations;
    let resCounter = props.resCounter;

    // let rootElem;


    // if(translationArray[resCounter]) {
    //     rootElem = <a className="root-link" href={"https://rua-iri.github.io/rootreference?q=" + translationArray[resCounter].root}>{translationArray[resCounter].root}</a>
    // } else {
    //     rootElem = "";
    // }


    // TODO style the audio so that it fits on mobile

    return (
        <div>
            <div className="translation-box">
                <div className="translation-meaning gimme-outline">
                    {
                        translationArray[resCounter]
                            ? translationArray[resCounter].meaning.replaceAll(";", "/ ")
                            : "meaning"
                    }
                </div>
                <div className="gimme-outline translation-tense">
                    {
                        translationArray[resCounter]
                            ? translationArray[resCounter].tense
                            : "tense"
                    }
                </div>
            </div>

            <div className="gimme-outline grammar-box">
                {/* <div className="gimme-outline grammar-box-elem arab-text">
                    {rootElem}
                </div> */}
                <div className="gimme-outline grammar-box-elem">
                    {
                        translationArray[resCounter]
                            ? `Form ${translationArray[resCounter].verbForm}`
                            : "verbForm"
                    }
                </div>
                <div className="gimmie-outline grammar-box-elem">
                    {/* <AudioElem
                        phoneticWord={props.phoneticWord}
                        speakerName={localStorage.getItem("selectedVoice")}
                    /> */}
                </div>
            </div>
        </div>
    )
}
