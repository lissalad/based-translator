export function typeCel(w) {
  let word = w.word.toLowerCase();
  if (!word.translated) {
    if (word.slice(-3) === "cel") {
      if (word !== "incel") {
        const type = word.slice(0, word.indexOf("cel"));
        // if type is adjective, "who is", noun "in incel because of"
        w.word = "incel who is " + type;
        w.incel = w.original;
        w.definition = "incel who is " + type;
        w.translated = true;
      }
    }
  }
  return w;
}

export function scan(w) {
  const data = require("../terms.json");
  let word = w.word.toLowerCase();
  // console.log(word);
  if (!w.translated) {
    // loop through all roots
    for (let term = 0; term < data.length; term += 1) {
      // checks if root is in the word
      if (word.includes(data[term].root)) {
        // goes through that root's forms
        for (let form = 0; form < data[term].forms.length; form += 1) {
          if (word === data[term].forms[form]) {
            w.word = data[term].normie;
            w.translated = true;
            w.incel = data[term].forms[0];
            w.definition = data[term].definition;
          }
        }
      }
    }
  }
  return w;
}

