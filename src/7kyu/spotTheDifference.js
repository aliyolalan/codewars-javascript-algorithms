// Successfully working...
function spotTheDifference(stringOne, stringTwo) {
  let resultArr = [];

  for (let index = 0; index < stringOne.length; index++) {
    if (stringOne[index] !== stringTwo[index]) {
      resultArr.push(index);
    }
  }

  return resultArr;
}
