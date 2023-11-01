// Not successfully working...
const integerRootSummaryOfNumber = (inputNumber) => {
  let integerRootSummary = 0

  for (let index = 0; index < inputNumber; index++) {
    let tempValue = Math.pow(inputNumber, 1 / index)

    if (Number.isInteger(tempValue)) {
      integerRootSummary += tempValue
    }
  }

  return integerRootSummary
}

// 0.99999 problem
