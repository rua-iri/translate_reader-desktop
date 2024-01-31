import React from 'react';
// import './App.css';
import IndividualWord from "./components/IndividualWord"
import TopBar from './components/TopBar';
import InputArea from './components/InputArea';
import OptionsMenu from './components/OptionsMenu';
import CustomButton from './components/CustomButton';



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

  function handleSubmit(event) {
    event.preventDefault();
    const inputText = event.target[0].value
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
      <IndividualWord
        wordContent={wrd}
        key={wrd + index}
        alt={wrdFormatted}
        onClick={activateWord}
        isSelected={selectedWord === wrdFormatted} />
    )
  })

  
  const resetButton = <CustomButton textContent={"Reset"} handleClick={resetText} />
  const wordBox = <div className="m-4">
    <div dir='rtl' className="w-full text-right inline-flex flex-wrap">
      {wordCollection}
    </div></div>;

  // TODO the options and reset buttons are not inline when the word-box is empty


  return (
    <>
      <div className="App h-screen bg-slate-200">
        <div className='text-center m-3 mt-1 bg-white rounded-lg pb-3'>

          <div className='block'>
            <TopBar selectedWord={selectedWord} />
          </div>

          {wordString ? wordBox : <InputArea handleSubmit={handleSubmit} />}

          <CustomButton textContent={"Options"} handleClick={() => setShowOptions(true)} />

          {wordString ? resetButton : ""}

          {showOptions
            ? <OptionsMenu hideMenu={() => setShowOptions(false)} />
            : ""
          }


        </div>
      </div>
    </>
  )
}

export default App
