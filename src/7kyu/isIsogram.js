// Successfully working...
const isIsogram = (inputString) => {
  const convertLowerCased = inputString.toLocaleLowerCase();
  for (let outerIndex = 0; outerIndex < convertLowerCased.length; outerIndex++) {
    for (let innerIndex = outerIndex + 1; innerIndex < convertLowerCased.length; innerIndex++) {
      if (convertLowerCased[outerIndex] === convertLowerCased[innerIndex]) {
        return false
      }
    }
  }

  return true
}