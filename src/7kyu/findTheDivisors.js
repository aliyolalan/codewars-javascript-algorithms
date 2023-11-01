// Successfully working...
const findTheDivisors = (inputNumber) => {
  let resultArr = []
  let resultValue

  for (let index = 0; index < inputNumber; index++) {
    if (inputNumber % index === 0 && inputNumber / index !== inputNumber) {
      resultArr.push(index)
    }
  }

  resultValue = resultArr.length === 0 ? `${inputNumber} is prime` : resultArr;
  return resultValue
}