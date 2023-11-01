// Successfully working...
const filterTheNumberInString = (inputString) => {
  let resultArr = []
  let convertedNumber

  for (let index = 0; index < inputString.length; index++) {
    const tempElement = parseInt(inputString[index]);
    if (tempElement || tempElement === 0) {
      resultArr.push(tempElement)
    }
  }

  convertedNumber = parseInt(resultArr.join(''))
  return convertedNumber
}

console.log(filterTheNumberInString('j50eyh70k1in9391'))