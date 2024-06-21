// Successfully working but not pass the test...
const exampleArray = [[1, 2], [4, 5, 1, 1], [1], [5, 6, 7, 8, 9]];

const findMissingNumber = (numberArray) => {
  for (let index = 1; index <= numberArray.length + 1; index++) {
    if (numberArray.indexOf(index) === -1) {
      return index;
    }
  }
};

const getLengthOfMissingArray = (arrayOfArrays) => {
  let arrayLengthList = [];
  for (let index = 0; index < arrayOfArrays.length; index++) {
    const arrayLength = arrayOfArrays[index].length;
    arrayLengthList.push(arrayLength);
  }

  return findMissingNumber(arrayLengthList);
};

console.log(getLengthOfMissingArray(exampleArray));
