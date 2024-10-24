// Successfully working...
const highestScoringWord = (string) => {
  const letters = "abcdefghijklmnopqrstuvwxyz";
  const splitStringArr = string.split(" ");
  let letterValues = [];

  for (let outerIndex = 0; outerIndex < splitStringArr.length; outerIndex++) {
    const singleWord = splitStringArr[outerIndex];
    let summaryValue = 0;

    for (let innerIndex = 0; innerIndex < singleWord.length; innerIndex++) {
      const singleLetter = singleWord.charAt(innerIndex);
      const singleLetterValue = letters.indexOf(singleLetter) + 1;
      summaryValue += singleLetterValue;
    }

    letterValues.push(summaryValue);
  }

  const maxValue = Math.max(...letterValues);
  const findMaxValueIndex = letterValues.indexOf(maxValue);
  const highestValueWord = splitStringArr[findMaxValueIndex];

  return highestValueWord;
};

const testString = "man i need a taxi up to ubud";
console.log(highestScoringWord(testString));
