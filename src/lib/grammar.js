import pluralize from "pluralize";

export function isItPlural(w) {
  // console.log(w.original);
  if(pluralize.isPlural(w.original)) {
    w.plural = true;
    w.word = pluralize(w.word);
  }
  return w;
}

// import * as Fin from "finnlp";
// import "fin-tense";

// import { Inflectors } from "en-inflectors";
// import nlp from "compromise";

export function Tensify(w) {
  // if( w is past tense) {
  // let doc = nlp("you curse my kitchen");
  // doc.verbs().toPastTense();
  // console.log(doc.text());
  // }
}
