

export function typeCel(w) {
  let word = w.word;
  if(word.slice(-3) === "cel") {
    if(word !== "incel") {
      const type = word.slice(0, word.indexOf("cel"));
      // if type is adjective, "who is", noun "in incel because of"
      w = {
        word: "incel who is " + type,
        translated: true,
        incel: word,
      };
    }
  };
  return w;
}