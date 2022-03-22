import { removePunctuationSpaces } from "./cleanup";

function createMarkup(translatedWords) {
  return translatedWords.map((element, index) => {
    let term = element.word;
    let original = element.original;

    let isPunctuation = false;
    let next = "";

    if (index !== translatedWords.length - 1) {
      // not the last word
      const next = translatedWords[index + 1].word; // next word
      // check if punctuation or possessive s
      if (
        !!next.match(/[!"#$%&'()'*+,-./:;<=>?@[\]^_`{|}~]/g)
      ) {
        isPunctuation = true;
      }
    }

      // check if plural possessive
      if (term === "'") {
        if (index > 0) {
          const previous = translatedWords[index - 1].word; // next word
          if (previous.charAt(previous.length - 1) === "s") {
            term = "' ";
          } 
        }
        else if (next !== "s") {
          term = "'s ";
        } else {
          term = "'";
        }
        isPunctuation = true;
      }
  
    
  
    

    if (!isPunctuation) {
      term += " ";
    }

    if (element.translated) {
      return (
        <a className="text-rose-500" href={`#${element.incel}`} key={index}>
          {term}
        </a>
      );
    } else return term;
  
  });
}
export default createMarkup;
