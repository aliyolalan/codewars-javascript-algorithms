// Successfully working...
function findAverage(numberArray) {
  const numberArrayLength = numberArray.length;
  const summaryNumberArray = numberArray.reduce((acc, currValue) => acc + currValue, 0);
  const averageNumberArray = summaryNumberArray / numberArrayLength;
  return !numberArrayLength ? 0 : averageNumberArray;
}
