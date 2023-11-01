// Successfully working...
const toWeirdCase = (string) => {
  const splitString = string.split(/(\s+)/);
  const weirdStringArr = []

  for (let outerIndex = 0; outerIndex < splitString.length; outerIndex++) {
    let tempElement = splitString[outerIndex]

    if (tempElement !== ' ') {
      for (let innerIndex = 0; innerIndex < tempElement.length; innerIndex++) {
        if (innerIndex % 2 === 0) {
          weirdStringArr.push(tempElement[innerIndex].toLocaleUpperCase())
        } else {
          weirdStringArr.push(tempElement[innerIndex].toLocaleLowerCase())
        }
      }
    } else {
      weirdStringArr.push(tempElement)
    }
  }

  return weirdStringArr.join('')
}