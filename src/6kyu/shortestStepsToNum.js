// Successfully working...
const shortestStepsToNum = (inputNumber) => {
  const convertedString = inputNumber.toString(2)
  let tempArray = convertedString.split('')
  let numberOneCounter = 0
  let numberZeroCounter = 0

  for (let index = 0; index < tempArray.length; index++) {
    tempArray[index] === '1' ? numberOneCounter++ : numberZeroCounter++
  }

  return (numberOneCounter - 1) * 2 + numberZeroCounter
}