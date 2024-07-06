// Successfully working...
function onlyDuplicate(string) {
  const stringArr = string.split('');
  const tempArray = [];

  for (let outerIndex = 0; outerIndex < stringArr.length; outerIndex++) {
    let matchCounter = 0;

    for (let innerIndex = 0; innerIndex < stringArr.length; innerIndex++) {
      if (stringArr[innerIndex] == stringArr[outerIndex]) {
        matchCounter++;
      }
    }

    if (matchCounter >= 2) {
      tempArray.push(stringArr[outerIndex]);
    }
  }

  return tempArray.join('');
}
