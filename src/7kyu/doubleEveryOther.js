// Successfully working...
const testArray = [1,2,3,4]
const doubleEveryOther = (inputArray) => {
  let resultArray = []
  for (let index = 0; index < inputArray.length; index++) {
    if (index % 2 === 1) {
      resultArray.push(inputArray[index] * 2)
    } else {
      resultArray.push(inputArray[index])
    }
  }

  return resultArray
}
