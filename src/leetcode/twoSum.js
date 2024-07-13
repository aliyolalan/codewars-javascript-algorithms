// Successfully working...
function twoSum(numberArr, targetValue) {
  let resultArr = [];

  for (let outerIndex = 0; outerIndex < numberArr.length; outerIndex++) {
    for (let innerIndex = 0; innerIndex < numberArr.length; innerIndex++) {
      if (outerIndex !== innerIndex) {
        const summaryElements = numberArr[outerIndex] + numberArr[innerIndex];

        if (summaryElements === targetValue) {
          resultArr.push(outerIndex, innerIndex);
        }
      }
    }
  }

  const noDuplicate = [...new Set(resultArr)];

  return noDuplicate;
}

console.log(twoSum([3, 2, 4], 6));
