// Successfully working...
// A => 65, Z => 90
// a => 97, z => 122
const testArr = ["a", "b", "c", "d", "f"];
const anotherTestArr = ["O", "Q", "R", "S"];

const findMissingLetter = (letterArray) => {
  let sumValueWithoutMissingLetter = 0;
  let tempArray = [];

  for (let index = 0; index < letterArray.length; index++) {
    const element = letterArray[index];
    tempArray.push(element.charCodeAt(0));
  }

  const minCharValue = tempArray[0];
  const maxCharValue = tempArray[tempArray.length - 1];

  for (let index = minCharValue; index <= maxCharValue; index++) {
    sumValueWithoutMissingLetter += index;
  }

  const tempSummary = tempArray.reduce((acc, currVal) => acc + currVal, 0);
  const missingLetter = String.fromCharCode(sumValueWithoutMissingLetter - tempSummary);

  return missingLetter;
};

console.log(findMissingLetter(anotherTestArr));
