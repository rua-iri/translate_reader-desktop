import React from "react";
import Translation from "./Translation";
import Arrow from "./Arrow";
const electron = require("electron");
const ipcRenderer = electron.ipcRenderer;



export default function Definition(props) {

    const [possibleMeanings, setPossibleMeanings] = React.useState([]);
    const [resultCounter, setResultCounter] = React.useState(0);

    const makeAPICall = async () => {
        try {
            ipcRenderer.send("selectedWord", props.selectedWord);
            ipcRenderer.on("selectedWord", (event, data) => {
                console.log("data: ", data)
                setPossibleMeanings(data);
            })
        }
        catch (e) {
            console.log(e)
        }
    }


    React.useEffect(() => {
        // reset resultCounter every time that new props are passed
        setResultCounter(0);

        // check the api for a definition
        if (props.selectedWord) {
            makeAPICall();
        }
    }, [props]);


    // change the currently visible result
    function cycleResults(isNext) {
        if (isNext && resultCounter < (possibleMeanings.length - 1)) {
            setResultCounter(resultCounter + 1);
        } else if (!isNext && resultCounter > 0) {
            setResultCounter(resultCounter - 1);
        }
    }

    const wordSelected = possibleMeanings[resultCounter]
        ? possibleMeanings[resultCounter].phoneticSpelling
        : props.selectedWord;

    // generate link to reverso but only show it if a user has selected a word
    const exampleLink = "https://context.reverso.net/translation/arabic-english/" + wordSelected;
    const exampleAnchor = <a className="word-examples" href={exampleLink} target="_blank" rel="noreferrer">Examples</a>;


    // TODO fix outline so that  it only appears on the inside of the  definition box

    return (
        <div className="top-banner gimme-outline" >
            {resultCounter ? <Arrow arrowShape=">" onClick={() => cycleResults(false)} /> : ""}

            <div className="selected-word arab-text gimme-outline">
                {wordSelected}
                {wordSelected !== "Selected Word" ? exampleAnchor : ""}
            </div>
            <div className="translations gimme-outline">
                <Translation allTranslations={possibleMeanings} resCounter={resultCounter} phoneticWord={wordSelected} />
            </div>

            {(resultCounter < possibleMeanings.length - 1) ? <Arrow arrowShape="<" onClick={() => cycleResults(true)} /> : ""}
        </div>
    )
}