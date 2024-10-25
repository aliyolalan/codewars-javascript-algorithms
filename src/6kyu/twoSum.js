// Successfully working...
const twoSum = (numberArr, targetValue) => {
  let resultArr = [];
  for (let outerIndex = 0; outerIndex < numberArr.length; outerIndex++) {
    for (let innerIndex = outerIndex + 1; innerIndex < numberArr.length; innerIndex++) {
      if (numberArr[outerIndex] + numberArr[innerIndex] === targetValue) {
        resultArr.push(outerIndex, innerIndex);
      }
    }
  }

  return resultArr;
};

console.log(twoSum([1, 2, 3], 4));
