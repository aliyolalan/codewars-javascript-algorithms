const testArray = [false,1,0,1,2,0,1,3,"a"]
function moveZeroes(inputArray) {
  let otherArray = []
  let zeroesArray = []

  for (let index = 0; index < inputArray.length; index++) {
    if (inputArray[index] !== 0) otherArray.push(inputArray[index])
    else zeroesArray.push(inputArray[index])
  }

  return [...otherArray, ...zeroesArray]
}
