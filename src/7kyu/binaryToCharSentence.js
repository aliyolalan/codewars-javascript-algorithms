// Successfully working...
const exampleArr = ['01000001', '01101100', '01100101', '01111000', '01100001', '01101110', '01100100', '01100101', '01110010']
const whoTookTheCarKey = (inputStringArr) => {
  let convertedIntegerArr = []
  let resultArr = []

  for (let index = 0; index < inputStringArr.length; index++) {
    const element = parseInt(inputStringArr[index], 2)
    convertedIntegerArr.push(element)
  }

  for (let index = 0; index < convertedIntegerArr.length; index++) {
    const element = String.fromCharCode(convertedIntegerArr[index])
    resultArr.push(element)
  }

  return resultArr.join('')
}

console.log(whoTookTheCarKey(exampleArr))