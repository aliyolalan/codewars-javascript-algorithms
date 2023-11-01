// Successfully working...
const testString = 'www.codewars.com#about'
const testSecondString = 'www.codewars.com/katas/'
const removeUrlAnchor = (URL) => {
  let resultString = ''
  for (let index = 0; index < URL.length; index++) {
    if (URL[index] === '#') break
    resultString += URL[index]
  }

  return resultString
}