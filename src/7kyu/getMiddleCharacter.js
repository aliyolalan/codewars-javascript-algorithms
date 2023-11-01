// Successfully working...
const getMiddleCharacter = (inputString) => {
  const isEven = inputString.length % 2 === 0
  const resultEvenString = inputString.slice((inputString.length / 2) - 1, (inputString.length / 2) + 1)
  const resultOddString = inputString.slice(Math.floor(inputString.length / 2), Math.ceil(inputString.length / 2))
  return isEven ? resultEvenString : resultOddString
}