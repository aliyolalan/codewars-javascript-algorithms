// Successfully working...
const automorphicNumber = (inputNumber) => {
  const squareNumber = inputNumber ** 2
  const isAutomorphic = squareNumber.toString().endsWith(inputNumber)
  return isAutomorphic ? "Automorphic" : "Not!!"
}
