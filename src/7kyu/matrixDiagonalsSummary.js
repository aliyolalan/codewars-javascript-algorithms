// Successfully working...
const testMatrix = [[1,2,3], [4,5,6], [7,8,9]]
const matrixDiagonalsSummary = (inputMatrix) => {
  let summaryResult = 0

  for (let index = 0; index < inputMatrix.length; index++) {
    let straightDiagonalResult = inputMatrix[index][index]
    summaryResult += straightDiagonalResult
  }

  for (let index = 0; index < inputMatrix.length; index++) {
    let reverseDiagonalResult = inputMatrix[index][inputMatrix.length - 1 - index]
    summaryResult += reverseDiagonalResult
  }

  return summaryResult
}
