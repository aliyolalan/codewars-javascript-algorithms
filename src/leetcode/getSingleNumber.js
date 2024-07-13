// Successfully working...
function getSingleNumber(numberArr) {
  let tempArray = 0;

  for (let outerIndex = 0; outerIndex < numberArr.length; outerIndex++) {
    let matchCounter = 0;

    for (let innerIndex = 0; innerIndex < numberArr.length; innerIndex++) {
      if (outerIndex !== innerIndex) {
        if (numberArr[outerIndex] === numberArr[innerIndex]) {
          matchCounter++;
        }
      }
    }

    if (matchCounter === 0) {
      tempArray = numberArr[outerIndex];
    }
  }

  return tempArray;
}

console.log(getSingleNumber([4, 1, 2, 1, 2]));
