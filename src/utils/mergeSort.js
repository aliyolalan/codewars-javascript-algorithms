// Successfully working...
const arrayMergeHandler = (leftArr, rightArr) => {
  const resultArr = [];
  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < leftArr.length && rightIndex < rightArr.length) {
    if (leftArr[leftIndex] < rightArr[rightIndex]) {
      resultArr.push(leftArr[leftIndex]);
      leftIndex++;
    } else {
      resultArr.push(rightArr[rightIndex]);
      rightIndex++;
    }
  }

  return resultArr.concat(leftArr.slice(leftIndex)).concat(rightArr.slice(rightIndex));
};

const mergeSort = (array) => {
  if (array.length === 1) return array;

  const arrayLength = array.length;
  const middleIndex = Math.floor(arrayLength / 2);
  const leftSide = array.slice(0, middleIndex);
  const rightSide = array.slice(middleIndex);

  return arrayMergeHandler(mergeSort(leftSide), mergeSort(rightSide));
};
