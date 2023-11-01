// Successfully working...
const factorialFunction = (inputNumber) => {
  let resultCounter = 1

  for (let index = inputNumber; index > 0; index--) {
    resultCounter *= index
  }

  return resultCounter
}