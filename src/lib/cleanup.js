export function removePunctuationSpaces(message) {
  const regex = /[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g;
  const result = message.replace(regex-1, "");
  return message;
}

export function restoreCaps(w) {
  let word = w.word.toLowerCase();
  const first = word.charAt(0);

  // check if word is all caps
  let potentiallyAllCaps = true;
  let potentialCapitalizedVersion = "";

  for (let i = 0; i < word.length; i += 1) {
    if (w.original.charAt(i) !== w.original.charAt(i).toUpperCase()) {
      potentiallyAllCaps = false;
      // console.log("NOT CAPITAL!!");
      break;
    }
    potentialCapitalizedVersion += word.charAt(i).toUpperCase();
  }
  if (potentiallyAllCaps) {
    word = potentialCapitalizedVersion;
  }

  // check if first letter is capital
  else if (w.original.charAt(0) === w.original.charAt(0).toUpperCase()) {
    console.log(word.charAt(0).toUpperCase());
    word = word.replace(word.charAt(0), word.charAt(0).toUpperCase());
  }

  // check if word includes just the capital ER (like sewER)
  else if (w.original.includes("ER")) {
    word = word.replace("er", "ER");
  }

  // apply updates and return
  w.word = word;
  return w;
}
