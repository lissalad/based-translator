

export function type_cel(word) {

  if(word.slice(-3) === "cel") {
    if(word !== "incel") {
      const type = word.slice(0, word.indexOf("cel"));
      // if type is adjective, "who is", noun "in incel because of"
      return ["type", "incel who is " + type];
    }
  };
  console.log("NOT CEL")
  return
}