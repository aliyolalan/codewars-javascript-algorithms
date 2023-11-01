// Successfully working...
const testInputArr = [1,2,3,4,5,6,7,8,9]
const testMixArr = [1,9,7,4,6,2,3,5]
const findDeletedNumber = (inputArr, mixArr) => {
  let resultElement = 0

  for (let index = 0; index < inputArr.length; index++) {
    const tempElement = mixArr.indexOf(inputArr[index])
    if (tempElement === -1) {
      resultElement = inputArr[index]
    }
  }

  return resultElement
}

findDeletedNumber(testInputArr, testMixArr)