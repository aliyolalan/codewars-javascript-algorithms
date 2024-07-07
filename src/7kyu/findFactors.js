// Successfully working...
const findFactors = (inputNumber) => {
  let resultArr = []
  let resultValue

  if (inputNumber <= 0 || typeof inputNumber !== "number") {
    return -1
  }

  for (let index = inputNumber; index > 0; index--) {
    if (inputNumber % index === 0) {
      resultArr.push(index)
    }
  }

  const allValueIsInteger = currentValue => Number.isInteger(currentValue)
  resultValue = resultArr.every(allValueIsInteger) ? resultArr : -1

  return resultValue
}
