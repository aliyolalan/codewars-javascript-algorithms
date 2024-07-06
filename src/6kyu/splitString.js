// Successfully working...
function splitString(stringValue) {
  const lastIndex = stringValue.length - 1;
  const isOddLength = stringValue.length % 2 === 1;
  const lastChar = stringValue[lastIndex] + '_';
  const resultArray = [];

  const noneLastChar = isOddLength ? stringValue.slice(0, lastIndex) : stringValue;

  for (let index = 0; index < noneLastChar.length; index = index + 2) {
    const firstChar = noneLastChar[index];
    const secondChar = noneLastChar[index + 1];
    const unionChars = firstChar + secondChar;
    resultArray.push(unionChars);
  }

  isOddLength ? resultArray.push(lastChar) : resultArray;

  return resultArray;
}
