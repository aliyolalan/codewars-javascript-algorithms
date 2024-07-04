// Successfully working...
function reverseInteger(number) {
  const splitNumber = number.toString().split('');
  const reverseArray = splitNumber.reverse();
  const joinArray = reverseArray.join('');
  const parsedNumber = parseInt(joinArray);
  const isNegative = number < 0 ? -Math.abs(parsedNumber) : parsedNumber;
  const integerRange = 2 ** 31 - 1;
  if (isNegative > integerRange || isNegative < -integerRange) {
    return 0;
  } else {
    return isNegative;
  }
}
