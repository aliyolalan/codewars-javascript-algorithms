// Successfully working...
const testString = "Revelation of the contents outraged American public opinion, and helped generate"
const dropCapWords = (inputString) => {
  const splitArr = inputString.split(' ')
  let resultArr = []

  for (let index = 0; index < splitArr.length; index++) {
    if (splitArr[index].length > 2) {
      const firstCharUpper = splitArr[index].charAt(0).toLocaleUpperCase();
      const remainSentence = splitArr[index].slice(1, splitArr[index].length).toLocaleLowerCase()
      const allSentence = firstCharUpper + remainSentence
      resultArr.push(allSentence)
    } else {
      resultArr.push(splitArr[index])
    }
  }

  return resultArr.join(' ')
}
