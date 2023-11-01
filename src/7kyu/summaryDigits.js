// Successfully working...
const summaryDigits = (inputNumber) => {
  const convertPositive = Math.abs(inputNumber)
  const splitDigitsOfNumber = convertPositive.toString().split('')
  let summaryResult = 0

  for (let index = 0; index < splitDigitsOfNumber.length; index++) {
    summaryResult += parseInt(splitDigitsOfNumber[index])
  }

  return summaryResult
}
