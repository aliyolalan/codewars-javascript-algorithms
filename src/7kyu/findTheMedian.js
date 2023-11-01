// Successfully working...
const testArray = [2]
const findTheMedian = (inputArray) => {
  const sortedArray = inputArray.sort((firstElement, lastElement) => firstElement - lastElement)
  const isEven = sortedArray.length % 2 === 0
  const resultEvenArray = sortedArray.slice((sortedArray.length / 2) - 1, (sortedArray.length / 2) + 1)
  const resultOddArray = sortedArray.slice(Math.floor(sortedArray.length / 2), Math.ceil(sortedArray.length / 2))
  const isEvenNumberOfArray = resultEvenArray.reduce((firstElement, lastElement) => firstElement + lastElement, 0) / 2

  return isEven ? isEvenNumberOfArray : resultOddArray[0]
}
