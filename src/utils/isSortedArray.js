// Successfully working...
export const isSortedArray = function (inputArray) {
  for (let innerIndex = 0; innerIndex < inputArray.length - 1; innerIndex++) {
    if (inputArray[innerIndex] > inputArray[innerIndex + 1]) return false;
  }

  return true;
};
