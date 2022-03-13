function createMarkup(translatedWords) {
  return translatedWords.map((element, index) => {
    if (element.translated) {
      return (
        <a className="text-rose-500" href={`#${element.incel}`} key={index}>
          {element.word} </a>
      );
    } else {
      return element["word"] + " ";
    }
  });
}
export default createMarkup