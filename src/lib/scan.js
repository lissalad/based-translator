import "../terms";

export function scan(w) {
  const terms = require("../terms.json");
  let word = w.word;
  console.log(word);

  // loop through term roots
  for (let term = 0; term < terms.length; term += 1) {
    //
    // checks if root is in the word
    if (word.includes(terms[term].root)) {
      // goes through that root's forms
      for (let form = 0; form < terms[term].word.length; form += 1) {
        if (word === terms[term].word[form]) {
          w = {
            word: terms[term].alt[form],
            translated: true,
            incel: word,
          };
        }
      }
    }
  }
  return w;
}
