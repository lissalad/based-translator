export function typeCel(w) {
  let word = w.word;
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
