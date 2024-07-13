// Successfully working...
function binarySearch(numberArray, targetValue) {
  let startValue = 0;
  let endValue = numberArray.length - 1;

  while (startValue <= endValue) {
    let middleIndex = Math.floor((startValue + endValue) / 2);

    if (numberArray[middleIndex] === targetValue) {
      return middleIndex;
    } else if (numberArray[middleIndex] < targetValue) {
      startValue = middleIndex + 1;
    } else {
      endValue = middleIndex - 1;
    }
  }

  return -1;
}

console.log(binarySearch([1, 2, 3, 5, 9, 12], 1));
