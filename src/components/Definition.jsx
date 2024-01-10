import React from "react";
import Translation from "./Translation";
import Arrow from "./Arrow";

export default function Definition(props) {

    const [possibleMeanings, setPossibleMeanings] = React.useState([]);
    const [resultCounter, setResultCounter] = React.useState(0);


    const makeAPICall = async (apiLink) => {
        try {
            const response = await fetch(apiLink, { mode: 'cors' });
            const data = await response.json();
            setPossibleMeanings(data);
        }
        catch (e) {
            console.log(e)
        }
    }


    React.useEffect(() => {

        // reset resultCounter every time that new props are passed
        setResultCounter(0);

        if (props.selectedWord) {
            // check the api for a definition
            const apiUrl = "https://q4l3xqyo3d.execute-api.us-east-1.amazonaws.com/Prod/analyse?word=" + props.selectedWord;
            makeAPICall(apiUrl);
        }

    }, [props]);


    // function to cycle to previous method
    function prevResult() {
        if (resultCounter > 0) {
            setResultCounter(resultCounter - 1);
        }
    }

    // function to cycle to previous method
    function nextResult() {
        if (resultCounter < (possibleMeanings.length - 1)) {
            setResultCounter(resultCounter + 1);
        }
    }

    const wordSelected = possibleMeanings[resultCounter] ? possibleMeanings[resultCounter].phoneticSpell : props.selectedWord;

    // generate link to reverso but only show it if a user has selected a word
    const exampleLink = "https://context.reverso.net/translation/arabic-english/" + wordSelected;
    const exampleAnchor = <a className="word-examples" href={exampleLink} target="_blank" rel="noreferrer">Examples</a>;

    // TODO fix outline so that  it only appears on the inside of the  definition box
    return (
        <div className="top-banner gimme-outline" >
            {resultCounter ? <Arrow arrowShape=">" onClick={prevResult} /> : ""}

            <div className="selected-word arab-text gimme-outline">
                {wordSelected}
                {wordSelected !== "Selected Word" ? exampleAnchor : ""}
            </div>
            <div className="translations gimme-outline">
                <Translation allTranslations={possibleMeanings} resCounter={resultCounter} phoneticWord={wordSelected} />
            </div>

            {(resultCounter < possibleMeanings.length - 1) ? <Arrow arrowShape="<" onClick={nextResult} /> : ""}
        </div>
    )
}