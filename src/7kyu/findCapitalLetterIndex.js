// Successfully working...
const findCapitalLetterIndex = (inputString) => {
  let resultArr = []

  for (let index = 0; index < inputString.length; index++) {
    let letterCharCode = inputString.charCodeAt(index)
    if (letterCharCode >= 65 && letterCharCode <= 90) {
      resultArr.push(index)
    }
  }

  return resultArr
}