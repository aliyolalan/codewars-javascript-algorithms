// Successfully working...
function countFeelings(mixString, feelingArray) {
  let feelingCounter = 0;

  for (let outerIndex = 0; outerIndex < feelingArray.length; outerIndex++) {
    let matchCounter = 0;
    const eachWord = feelingArray[outerIndex];

    for (let innerIndex = 0; innerIndex < eachWord.length; innerIndex++) {
      const eachLetter = eachWord[innerIndex];
      const isInclude = mixString.indexOf(eachLetter);
      if (isInclude !== -1) matchCounter++;
      if (matchCounter === eachWord.length) feelingCounter++;
    }
  }

  const resultSentence =
    feelingCounter > 1 || feelingCounter == 0 ? `${feelingCounter} feelings.` : `${feelingCounter} feeling.`;

  return resultSentence;
}
