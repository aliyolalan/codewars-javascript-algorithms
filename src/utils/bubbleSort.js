// Successfully working...
export const bubbleSorting = (inputArray) => {
  for (let outerIndex = 0; outerIndex < inputArray.length; outerIndex++) {
    for (let innerIndex = 0; innerIndex < inputArray.length; innerIndex++) {
      if (inputArray[innerIndex] > inputArray[innerIndex + 1]) {
        let tempValue = inputArray[innerIndex];
        inputArray[innerIndex] = inputArray[innerIndex + 1];
        inputArray[innerIndex + 1] = tempValue;
      }
    }
  }

  return inputArray;
};
