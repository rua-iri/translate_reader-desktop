import React from "react";
import WordDataContainer from "./WordDataContainer";
import Arrow from "./Arrow";
const electron = require("electron");
const ipcRenderer = electron.ipcRenderer;



export default function TopBar(props) {

    const [allMeanings, setAllMeanings] = React.useState([]);
    const [resultCounter, setResultCounter] = React.useState(0);

    const lookupWord = async () => {
        try {
            ipcRenderer.send("selectedWord", props.selectedWord);
            ipcRenderer.on("selectedWord", (event, data) => {
                console.log("data: ", data)
                setAllMeanings(data);
            })
        }
        catch (e) {
            console.log(e)
            alert("Error: Something Went Wrong")
        }
    }


    React.useEffect(() => {
        setResultCounter(0);

        // check the api for a definition
        if (props.selectedWord) {
            lookupWord();
        }
    }, [props]);


    function cycleResults(isNext) {
        if (isNext && resultCounter < (allMeanings.length - 1)) {
            setResultCounter(resultCounter + 1);
        } else if (!isNext && resultCounter > 0) {
            setResultCounter(resultCounter - 1);
        }
    }

    const wordSelected = allMeanings[resultCounter]
        ? allMeanings[resultCounter].phoneticSpelling
        : props.selectedWord;

    const examplesLink = "https://context.reverso.net/translation/arabic-english/" + wordSelected;
    const examplesAnchor = <a className="word-examples" href={examplesLink} target="_blank" rel="noreferrer">Examples</a>;


    return (
        <div className="top-banner gimme-outline" >

            {resultCounter
                ? <Arrow arrowShape=">" onClick={() => cycleResults(false)} />
                : ""
            }

            <div className="selected-word arab-text gimme-outline">
                {wordSelected}
                {wordSelected !== "Selected Word"
                    ? examplesAnchor
                    : ""
                }
            </div>
            <div className="translations gimme-outline">
                <WordDataContainer
                    allTranslations={allMeanings}
                    resCounter={resultCounter}
                    phoneticWord={wordSelected}
                />
            </div>

            {(resultCounter < allMeanings.length - 1)
                ? <Arrow arrowShape="<" onClick={() => cycleResults(true)} />
                : ""}
        </div>
    )
}