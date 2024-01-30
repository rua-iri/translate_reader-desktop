import React from 'react';
import './App.css';
import Word from "./components/Word"
import Definition from './components/Definition';
import InputArea from './components/InputArea';
import OptionsMenu from './components/OptionsMenu';



function App() {

  const [selectedWord, setSelectedWord] = React.useState("Selected Word");
  const [showOptions, setShowOptions] = React.useState(false);
  const [wordString, setWordString] = React.useState(localStorage.getItem("text-input")
    ? localStorage.getItem("text-input")
    : "");

  // set default voice if it has not been already set by user
  localStorage.getItem("selectedVoice")
    ? null
    : localStorage.setItem("selectedVoice", "Leila");
  let pressTime = Date.now();


  // function to set the text to an empty string
  function resetText() {
    setWordString("");
    setSelectedWord("Selected Word");
    localStorage.removeItem("text-input");
  }

  // function to change the text according to what is
  // typed/copy and pasted into the textarea
  function submitText() {
    const inputText = document.getElementById("input-textarea").value;
    setWordString(inputText);
    localStorage.setItem('text-input', inputText);
  }


  //function to be executed when a word is clicked
  function activateWord(elemAlt) {

    // check that 500 seconds have passed the same so the server isn't spammed
    if (Date.now() >= (pressTime + 500) && elemAlt !== selectedWord) {
      setSelectedWord(elemAlt);
      pressTime = Date.now();
      console.log(elemAlt);
    }
  }


  // split each word into the string into an array
  const wordAra = wordString.replaceAll("\n", " ").split(" ");

  //then map each element in the array to the Word component
  const wordCollection = wordAra.map((wrd, index) => {
    const wrdFormatted = wrd.replace(/[.,،/#!$%^&*;:{}=\-_`~()"؛]/g, "");
    return (
      <Word
        wordContent={wrd}
        key={wrd + index}
        alt={wrdFormatted}
        onClick={activateWord}
        isSelected={selectedWord === wrdFormatted} />
    )
  })

  const resetButton = <button className="source-button" onClick={resetText}>Reset</button>;
  const wordBox = <div className="wordbox-box"><div className="wordbox arab-text gimme-outline">{wordCollection}</div></div>;

  // TODO the options and reset buttons are not inline when the word-box is empty


  return (
    <>
      <div className="App gimme-outline">

        <div className='focus-word'>
          <Definition selectedWord={selectedWord} />
        </div>

        {wordString ? wordBox : ""}
        {wordString ? "" : <InputArea onClick={submitText} />}

        <span onClick={() => setShowOptions(true)}>
          <button className='source-button' id="options-button">Options</button>
        </span>

        {wordString ? resetButton : ""}
        <OptionsMenu showMenu={showOptions} hideMenu={() => setShowOptions(false)} />

      </div>
    </>
  )
}

export default App
