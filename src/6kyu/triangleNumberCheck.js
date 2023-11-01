// Successfully working...
const triangleNumberCheck = (inputNumber) => {
  if (inputNumber === 0 || inputNumber === 1) return true
  let resultSummary = 0
  let checkNumberArr = []
  for (let index = 0; index < inputNumber; index++) {
    const tempElement = resultSummary += index
    checkNumberArr.push(tempElement)
  }

  return checkNumberArr.includes(inputNumber)
}
