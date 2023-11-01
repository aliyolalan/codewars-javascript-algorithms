// Successfully working...
const testInputArr = []
const testIndexArr =  [2,1,4]

const findElementByIndexArray = (inputArr, indexArr) => {
  let resultArr = []

  if (inputArr.length !== 0) {
    for (let index = 0; index < indexArr.length; index++) {
      const tempIndex = indexArr[index]
      const targetValue = inputArr[tempIndex]
      resultArr.push(targetValue)
    }
  }

  return resultArr
}
