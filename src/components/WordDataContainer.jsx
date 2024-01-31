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

    return (
        <div>
            <div className="h-16 flex flex-col">
                <div className="px-1 grow-1">
                    {
                        translationArray[resCounter]
                            ? translationArray[resCounter].meaning.replaceAll(";", "/ ")
                            : "meaning"
                    }
                </div>
                <div className="grow-1">
                    {
                        translationArray[resCounter]
                            ? translationArray[resCounter].tense
                            : "tense"
                    }
                </div>
            </div>

            <div className="flex w-full">
                {/* <div className="w-full arab-text">
                    {rootElem}
                </div> */}
                <div className="w-full">
                    {
                        translationArray[resCounter]
                            ? `Form ${translationArray[resCounter].verbForm}`
                            : "verbForm"
                    }
                </div>
                <div className="w-full">
                    {/* <AudioElem
                        phoneticWord={props.phoneticWord}
                        speakerName={localStorage.getItem("selectedVoice")}
                    /> */}
                </div>
            </div>
        </div>
    )
}
