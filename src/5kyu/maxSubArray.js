// Successfully working...
const maxSubArray = (array) => {
  if (array.length == 0) return 0;
  let subArrays = [];
  let subArrayValues = [];

  for (let outerIndex = 0; outerIndex < array.length; outerIndex++) {
    for (let innerIndex = outerIndex; innerIndex < array.length; innerIndex++) {
      subArrays.push(array.slice(outerIndex, innerIndex + 1));
    }
  }

  for (let index = 0; index < subArrays.length; index++) {
    const subArray = subArrays[index];
    const subArraySum = subArray.reduce((acc, currVal) => acc + currVal, 0);
    subArrayValues.push(subArraySum);
  }

  const maxSubArrayValue = Math.max(...subArrayValues);
  const isValueNegative = (currVal) => currVal < 0;
  const tempValue = subArrayValues.every(isValueNegative) ? 0 : maxSubArrayValue;

  return tempValue;
};

const testArr = [1, 2, 3, 4, 5];
const testArr2 = [-2, -1, -3, -4, -1, -2, -1, -5, -4];
console.log(maxSubArray(testArr2));
