// Successfully working...
const testString = "123"
const digitsOfExplosion = (inputString) => {
  let resultString = ''
  for (let index = 0; index < inputString.length; index++) {
    let parsedInteger = parseInt(inputString[index]);
    let tempString = inputString[index]

    for (let innerIndex = 0; innerIndex < parsedInteger; innerIndex++) {
      resultString += tempString
    }
  }

  return resultString
}
