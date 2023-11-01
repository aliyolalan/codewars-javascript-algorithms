// Successfully working...
const testString = "676584"
const testResultString = "I LIKE UPPERCASE"

const convertNumbersToASCIILetters = (inputString) => {
  let resultArr = []
  let anotherResultArr = []

  for (let index = 0; index < inputString.length; index += 2) {
    resultArr.push(parseInt(inputString.substring(index, index + 2)))
  }

  for (let index = 0; index < resultArr.length; index++) {
    anotherResultArr.push(String.fromCharCode(resultArr[index]))
  }

  return anotherResultArr.join('')
}