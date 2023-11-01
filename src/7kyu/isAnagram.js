// Successfully working...
const testInputString = "iMNuTvDQRrGJpei"
const testTestString = "vQuDiGJMTeTpriN"

const isAnagram = (firstString, secondString) => {
  let downCasedFirstString = firstString.toLocaleLowerCase()
  let downCasedSecondString = secondString.toLocaleLowerCase()

  downCasedFirstString = downCasedFirstString.split('').sort().join('');
  downCasedSecondString = downCasedSecondString.split('').sort().join('');

  return downCasedFirstString === downCasedSecondString
}
