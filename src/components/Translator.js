import Down from "../icons/down";
import "../images/chad.png";
import { useState, useRef } from "react";
import Definition from "./Definition";
import { typeCel } from "../lib/cel";
import { wordObject } from "../lib/wordObject";
import { scan } from "../lib/scan";
import { isItPlural } from "../lib/pluralize";
import createMarkup from "../lib/markup";
import "../terms";

function Translator() {
  const [translation, setTranslation] = useState("");
  const [translated, setTranslated] = useState([]);
  const messageRef = useRef();
  const chunk = "flex flex-col items-start mb-5 mt-0";
  const box =
    "border-2 border-slate-200 w-72 text-left p-2 min-h-[170px]";
  const label = "ml-4 mb-1";

  // console.log(pluralize("chad"))

  function onClick() {
    let input = messageRef.current.value.split(" ");
    let newTranslation = [];

    // loop through words in input message
    for (let word = 0; word < input.length; word += 1) {
      let w = wordObject(input[word]);

      
      w = scan(w);
      w = typeCel(w);

      w = isItPlural(w);

      newTranslation.push(w);
    }
    setTranslated(newTranslation);
    setTranslation(createMarkup(newTranslation));
  }

  const incelTranslations = translated.filter((element) => {
    return element.translated;
  });

  return (
    <div className="flex flex-col items-center mt-5">
      <section className="flex flex-col items-center w-full justify-evenly my-5">
        {/*  */}
        {/* message input */}
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

      <div className="Glossary bg-slate-100 mt-3 max-w-full overflow-x-hidden">
        <h1 className="text-xl flex flex-col items-center w-screen font-semibold py-3 bg-slate-300">Vocabulary</h1>
        {incelTranslations.map((word, i) => {
          return <Definition key={i} w={word} />;
        })}
      </div>
    </div>
  );
}

export default Translator;
