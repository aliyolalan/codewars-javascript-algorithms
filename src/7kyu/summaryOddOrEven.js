const testArray = [0, -1, -4]
const summaryOddOrEven = (inputArray) => {
  let summaryResult = 0

  for (let index = 0; index < inputArray.length; index++) {
    summaryResult += Math.abs(inputArray[index])
  }

  return summaryResult % 2 === 0 ? 'even' : 'odd'
}