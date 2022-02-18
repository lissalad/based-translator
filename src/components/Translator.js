import Down from "../icons/down";
import { useState, useRef } from "react";
import "../terms";

function Translator() {


  const terms = require("../terms.json");

  const [translation, setTranslation] = useState("");

  const messageRef = useRef();

  function onClick() {
    let input = messageRef.current.value.split(" ");

    // loop through words in input message
    for (let word = 0; word < input.length; word += 1) {
      //
      const lower = input[word].toLowerCase();
      // loop through term roots
      for (let term = 0; term < terms.length; term += 1) {
        //
        // checks if root is in the word
        if (lower.includes(terms[term].root)) {
          //
          // goes through that root's forms
          for (let form = 0; form < terms[term].word.length; form += 1) {
            if (lower === terms[term].word[form]) {
              input[word] = terms[term].alt[form];
            }
          }
        }
      }
    }
    let output = "";
    for (let w = 0; w < input.length - 1; w += 1) {
      output += input[w];
      output += " ";
    }
    output += input[input.length - 1];

    setTranslation(output);
  }

// function plural(word) {
//   console.log(word.slice(-3))
//   if(word.slice(-3) === "ies" ) {
//     console.log("this is plural");
//   }
//   if (word.charAt(word.length-1) === "s" ) {
//     console.log("this is plurals");
//   }
// }

const chunk = "flex flex-col items-start mb-5 mt-0";
const box = "border-2 border-slate-200 h-fitc w-72 text-left p-2 min-h-[170px]";
const label = "ml-4 mb-1";

  return (
    <div className="flex flex-col items-center w-full justify-evenly my-5">
      <div className={chunk}>
        <label htmlFor="incel" className={label}>
          Incel
        </label>
        <textarea
          ref={messageRef}
          className={box}
          id="incel"
          name="incel"
          required
        />
      </div>

      <Down />

      <div className={chunk}>
        <p className={label}>Normie</p>
        <p className={box}>{translation}</p>
      </div>

      <div className="">
        <button
          className="bg-slate-200 hover:bg-slate-300 hover:shadow p-2 rounded m-1"
          onClick={onClick}
        >
          Translate
        </button>
      </div>
    </div>
  );
}

export default Translator;
