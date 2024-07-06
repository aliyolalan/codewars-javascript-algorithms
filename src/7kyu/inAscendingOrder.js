// Successfully working...
function inAscOrder(numberArr) {
  for (let innerIndex = 0; innerIndex < numberArr.length - 1; innerIndex++) {
    if (numberArr[innerIndex] > numberArr[innerIndex + 1]) return false;
  }

  return true;
}
