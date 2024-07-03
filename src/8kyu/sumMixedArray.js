// Successfully working...
function sumMixedArray(mixedArray) {
  let newArray = [];
  for (let index = 0; index < mixedArray.length; index++) {
    const element = mixedArray[index];
    if (typeof element == 'string') {
      const newElement = parseInt(element);
      newArray.push(newElement);
    } else {
      newArray.push(element);
    }
  }

  const summaryArray = newArray.reduce((acc, currVal) => acc + currVal, 0);

  return summaryArray;
}

// Alternative Solution
function sumMixedArrayBest(numberArray) {
  return numberArray
    .map((numberArray) => +numberArray)
    .reduce((accumulator, currentValue) => accumulator + currentValue, 0);
}
