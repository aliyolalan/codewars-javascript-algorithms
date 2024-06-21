// Successfully working...
const testArray = [1, 2, 3, 10, 5];
const sortNumbers = (inputArr) => {
  let resultArr = [];
  if (inputArr) {
    resultArr = inputArr.sort((firstIndex, lastIndex) => firstIndex - lastIndex);
  } else {
    return resultArr;
  }
  return resultArr;
};

const anotherSortNumber = (inputArr) =>
  (inputArr || []).sort((firstElement, lastElement) => firstElement - lastElement);
