const testString = "Barack hussein obama"
const nameAbbreviation = (inputString) => {
  let resultArr = []
  const tempArr = inputString.split(' ')
  const lastElement = tempArr[tempArr.length - 1]
  const tempElement = lastElement.charAt(0).toUpperCase() + lastElement.slice(1)

  for (let index = 0; index < tempArr.length - 1; index++) {
    const exampleElement = tempArr[index][0].toLocaleUpperCase();
    resultArr.push(exampleElement)
  }

  resultArr.push(tempElement)
  return resultArr.join('.')
}

nameAbbreviation(testString)