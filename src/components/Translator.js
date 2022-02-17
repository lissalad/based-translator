import Down from "../icons/down";
import { useState, useRef } from "react";
import data from "../terms";

function Translator() {
  const chunk = "flex flex-col items-start mb-5 mt-0";
  const box = "border-2 border-slate-200 h-[150px] w-72 text-left p-2";
  const label = "ml-4 mb-1";

  const terms = require("../terms.json");

  const [translation, setTranslation] = useState("");

  const messageRef = useRef();

  function onClick() {
    let words = messageRef.current.value.split(" ");
    console.log(terms[0].word)

    for(let word=0; word < words.length; word += 1) {
      for(let term=0; term < terms.length; term += 1) {
        if(words[word] === terms[term].word) {
          words[word] = terms[term].alt;
        }
      }
    }


    let output = "";
    for(let w = 0; w < words.length - 1; w += 1) {
      output += words[w];
      output += " ";
    }
    output += words[words.length-1];

    setTranslation(output);
  }






  return (
    <div className="flex flex-col items-center w-full justify-evenly my-5">
      <div className={chunk}>
        <label for="incel" className={label}>Incel</label>
        <textarea ref={ messageRef } className={box} id="incel" name="incel" required />
      </div>

      <Down />

      <div className={chunk}>
        <p className={label}>Normie</p>
        <p className={box}>{translation}</p>
      </div>

      <div className="">
        <button className="bg-slate-200 hover:bg-slate-300 hover:shadow p-2 rounded m-7" onClick={onClick}>Translate</button>
      </div>

    </div>
  );
}

export default Translator;
