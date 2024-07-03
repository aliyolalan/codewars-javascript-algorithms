// Successfully working...
function differenceOfSquares(numberValue) {
  let sumOfNumbers = 0;
  let sumOfSquareNumbers = 0;

  for (let index = 1; index <= numberValue; index++) {
    sumOfNumbers = sumOfNumbers + index;
    sumOfSquareNumbers = sumOfSquareNumbers + index ** 2;
  }

  return sumOfNumbers ** 2 - sumOfSquareNumbers;
}
