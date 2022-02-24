import Down from "../icons/down";
import "../images/chad.png";
import { useState, useRef } from "react";
import ReactDOM from "react-dom";

import "../terms";

function Translator() {
  const terms = require("../terms.json");
  const termsTranslated = [];
  const [translation, setTranslation] = useState("");
  const messageRef = useRef();
  const chunk = "flex flex-col items-start mb-5 mt-0";
  const box =
    "border-2 border-slate-200 h-fitc w-72 text-left p-2 min-h-[170px]";
  const label = "ml-4 mb-1";

  let translated = [];

  function onClick() {
    let input = messageRef.current.value.split(" ");
    translated = [];


    // loop through words in input message
    for (let word = 0; word < input.length; word += 1) {
      let normied = false;
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
              // trackTranslated(input[word]);
              translated.push({
                word: terms[term].alt[form],
                translated: true,
                incel: input[word]
              });
              normied = true;
            }
          }
        }
      }
      if (!normied) {
        translated.push({
          word: input[word],
          translated: false,
        });
      }
    }

    setTranslation(createMarkup(translated));
  }

  function createMarkup(translatedWords) {
    // let markup = <></>;
    // let addition;
    // for (let i = 0; i < translatedWords.length; i += 1) {
    //   // addition = "<span>" + translatedWords[i]["word"] + "</span>";
    //   addition = <span>{translatedWords[i]["word"]}</span>;
    //   markup += addition;
    // }
    // console.log(markup);
    // return (markup);

    return translatedWords.map((element, index) => {
      if (element.translated) {
        return <a className="text-rose-500" href={`#${element.incel}`} key={index}>{element.word} </a>;
      } else {
        return element["word"] + " ";
      }
    });
    // setTranslation(markup);
    // ReactDOM.render(markup, document.getElementById('root'));
  }

  return (
    <div className="flex flex-col items-center">
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
          {/* <p className={box}>{translation}</p> */}
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

      {/* terms translated */}
      <section id="chad">
        <h1 className="text-2xl">Vocabulary</h1>
        <div className="bg-slate-100 rounded px-4 flex flex-row items-start py-4">
          <div className="flex flex-col w-fit">
            <div className="flex flex-row items-center justify-start space-x-3">
              <p className="text-2xl">Chad</p>
              <p>→</p>
              <h2>Attractive Man</h2>
            </div>
            <p className="text-xs text-left indent-6 py-1 mx-5">
              an attractive, successful, non-virgin man. women like chads. chad
              is the ideal man, opposite and often enemy of the incel
            </p>
          </div>

          <div className="">
            <img
              className="w-32"
              src={require("../images/chad.png")}
              alt="chad"
            />
          </div>
        </div>

        {/* */}
        {/* {console.log(termsTranslated)} */}
        {/* <TranslatedTerm word={termsTranslated[0]}/> */}
      </section>
    </div>
  );
}

export default Translator;
