// Successfully working...
const summaryOfEvenNumbers = (inputArray) => {
  let summaryResult = 0;

  for (let index = 0; index < inputArray.length; index++) {
    if (inputArray[index] % 2 === 0) {
      summaryResult += inputArray[index]
    }
  }

  return summaryResult
}