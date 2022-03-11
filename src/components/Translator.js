import Down from "../icons/down";
import "../images/chad.png";
import { useState, useRef } from "react";
import ReactDOM from "react-dom";
import Definition from "./Definition";
import { typeCel } from "../lib/cel";
import { wordObject } from "../lib/wordObject";
import { scan } from "../lib/scan";
import pluralize from "pluralize";
import { isItPlural } from "../lib/pluralize";

import "../terms";

function Translator() {
  // const terms = require("../terms.json");
  // const termsTranslated = [];
  const [translation, setTranslation] = useState("");
  const messageRef = useRef();
  const chunk = "flex flex-col items-start mb-5 mt-0";
  const box =
    "border-2 border-slate-200 h-fitc w-72 text-left p-2 min-h-[170px]";
  const label = "ml-4 mb-1";

  // console.log(pluralize("chad"))


  let translated = [];

  function onClick() {
    let input = messageRef.current.value.split(" ");
    translated = [];

    // loop through words in input message
    for (let word = 0; word < input.length; word += 1) {

      let w = wordObject(input[word]);
      w = scan(w);
      w = typeCel(w);
      w = isItPlural(w);

      translated.push(w);
      }
      setTranslation(createMarkup(translated));
    }

  function createMarkup(translatedWords) {
    return translatedWords.map((element, index) => {
      if (element.translated) {
        return <a className="text-rose-500" href={`#${element.incel}`} key={index}>{element.word} </a>;
      } else {
        return element["word"] + " ";
      }
    });
  }

  return (
    <div className="flex flex-col items-center mt-5">
      <section className="flex flex-col items-center w-full justify-evenly my-5">
        {/* message input */}
        {/* nice */}
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

        {/* translation output */}
        <div className={chunk}>
          <p className={label}>Normie</p>
          <div className={box}>{translation}</div>
        </div>

        {/* translate button */}
        <div className="">
          <button
            className="bg-slate-200 hover:bg-slate-300 hover:shadow p-2 rounded m-1"
            onClick={onClick}
          >
            Translate
          </button>
        </div>
      </section>

      {/* <div className="Glossary">
      {translated.default.map(
        (word, i) => {
          return <Definition key={i} word="chad" />
          // return <Definition key={i} word={word.word[0]} root={word.root} definition={word.formed}/>
        }
      )}
    </div> */}

    </div>
  );
}

export default Translator;
