// Successfully working...
const summaryFactorial = (inputArray) => {
  let resultArr = []

  const factorialFunction = (inputNumber) => {
    let resultCounter = 1
  
    for (let index = inputNumber; index > 0; index--) {
      resultCounter *= index
    }
  
    return resultCounter
  }

  for (let index = 0; index < inputArray.length; index++) {
    const tempElement = inputArray[index];
    resultArr.push(factorialFunction(tempElement))
  }

  return resultArr.reduce((accumulator, currentValue) => accumulator + currentValue, 0)
}