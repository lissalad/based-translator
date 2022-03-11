import "../terms";

export function scan(w) {
  const data = require("../terms.json");
  let word = w.word;
  // console.log(word);

  // loop through all roots
  for (let term = 0; term < data.length; term += 1) {
    // checks if root is in the word
    if (word.includes(data[term].root)) {
      // goes through that root's forms
      for (let form = 0; form < data[term].forms.length; form += 1) {
        if (word === data[term].forms[form]) {
          w.word = data[term].normie;
          w.translated = true;
          w.incel = word;
        }
      }
    }
  }
  return w;
}
