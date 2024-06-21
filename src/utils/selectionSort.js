// Successfully working...
export const selectionSort = (inputArray) => {
  const arrayLength = inputArray.length;

  for (let outerIndex = 0; outerIndex < arrayLength; outerIndex++) {
    let minValue = outerIndex;
    let tempElement = inputArray[outerIndex];

    for (let innerIndex = outerIndex + 1; innerIndex < arrayLength; innerIndex++) {
      if (inputArray[innerIndex] < inputArray[minValue]) {
        minValue = innerIndex;
      }
    }

    inputArray[outerIndex] = inputArray[minValue];
    inputArray[minValue] = tempElement;
  }

  return inputArray;
};
