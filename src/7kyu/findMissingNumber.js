// Successfully working...
const findMissingNumber = (numberArr) => {
  const firstElement = numberArr[0];
  const lastElement = numberArr[numberArr.length - 1];
  let missingNumberArr = [];

  for (let index = firstElement; index < lastElement; index++) {
    if (numberArr.indexOf(index) == -1) {
      missingNumberArr.push(index);
    }
  }

  return missingNumberArr;
};

const testArr = [-3, -2, 1, 5];
console.log(findMissingNumber(testArr));
