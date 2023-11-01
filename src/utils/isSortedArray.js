// Successfully working...
export const isSortedArray = function (inputArray) {
  for (let outerIndex = 0; outerIndex < inputArray.length; outerIndex++) {
    for (let innerIndex = 0; innerIndex < inputArray.length; innerIndex++) {
      if (inputArray[innerIndex] > inputArray[innerIndex + 1]) return false;
    }
  }

  return true;
};
