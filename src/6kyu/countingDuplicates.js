const countingDuplicates = (inputString) =>{
  let resultArr = []
  let downCasedString = inputString.toLocaleLowerCase()
  let duplicateCounter = 0

  for (let outerIndex = 0; outerIndex < downCasedString.length; outerIndex++) {
    for (let innerIndex = outerIndex; innerIndex < downCasedString.length; innerIndex++) {
      if (downCasedString[outerIndex] === downCasedString[innerIndex]) {
        duplicateCounter++
      }
    }
  }

  return duplicateCounter
}