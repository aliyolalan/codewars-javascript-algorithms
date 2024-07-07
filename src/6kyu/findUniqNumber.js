// Successfully worked both of two function...
// Performance problems...
function findUniqNumber(numberArray) {
  let resultNumber = 0;

  for (let outerIndex = 0; outerIndex < numberArray.length; outerIndex++) {
    let matchCounter = 0;
    for (let innerIndex = 0; innerIndex < numberArray.length; innerIndex++) {
      if (numberArray[outerIndex] === numberArray[innerIndex]) {
        matchCounter++;
      }
    }

    if (matchCounter === 1) resultNumber = numberArray[outerIndex];
  }

  return resultNumber;
}

function findUniqNumberPerformance(numberArray) {
  const findUniqValue = numberArray.find((singleItem) => {
    return numberArray.indexOf(singleItem) === numberArray.lastIndexOf(singleItem);
  });

  return findUniqValue;
}
