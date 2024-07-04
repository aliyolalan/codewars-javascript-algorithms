// Successfully working...
function toNumberArray(stringArray) {
  let numberArr = [];

  for (let index = 0; index < stringArray.length; index++) {
    const element = stringArray[index];
    const convertedNumber = Number(element);
    numberArr.push(convertedNumber);
  }

  return numberArr;
}
