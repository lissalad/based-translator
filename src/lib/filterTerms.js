function filterDefinedTerms(terms) {

  // no duplicates
  const unique = [];
  for (let word of terms) {
    let found = false;
    unique.forEach((element) => {
      if (element.incel === word.incel) {
        found = true;
      }
    });
    if (!found) {
      unique.push(word);
    }
  }

  // no normie words
  terms = unique.filter((element) => {
    // console.log(element);
    return element.translated;
  });

  return terms;
}

export default filterDefinedTerms;
