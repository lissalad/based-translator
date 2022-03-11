import pluralize from "pluralize";

export function isItPlural(w) {
  // console.log(w.original);
  if(pluralize.isPlural(w.original)) {
    w.plural = true;
    w.word = pluralize(w.word);
  }
  return w;
}