import pluralize from "pluralize";
import * as Fin from "finnlp";
import "fin-tense";

// const Inflectors = require("en-inflectors").Inflectors;
const nlp = require("compromise");

export function isItPlural(w) {
  // console.log(w.original);
  if (pluralize.isPlural(w.original)) {
    w.plural = true;
    w.word = pluralize(w.word);
  }
  return w;
}

export function isItPossessive(w) {
  if(w.original.charAt(-2) === "'s") {
    w.word += "'s";
  }
  return w;
}

export function Tensify(w) {
  let word = new Fin.Run(w.original);
  const nlpWord = nlp(word);
  console.log(nlpWord.verbs());
  const result = word.tense();
  if (result[0][0] === "past") {
    // let doc = nlp(w.word);
    // console.log(doc.verbs().conjugate()[0].PastTense);
    console.log("PAST");
  }
  else if (result[0][0] === "present") {
    console.log("PRESENT");

  }
  else if (result[0][0] === "future") {
    console.log("FUTURE");

  }
}
