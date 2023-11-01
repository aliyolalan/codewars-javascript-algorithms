const removeVowels = (inputString) => {
  let resultString = "";
  const VOWELS = "aeiou";

  for (let index = 0; index < inputString.length; index++) {
    const targetChar = inputString.charAt(index).toLocaleLowerCase()
    if (VOWELS.indexOf(targetChar) === -1) {
      resultString += targetChar
    }
  }

  return resultString
}
