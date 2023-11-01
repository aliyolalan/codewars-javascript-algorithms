// Successfully working...
const vowelCount = (inputString) => {
  const vowelChars = 'aeiou';
  const lowerCasedInputString = inputString.toLocaleLowerCase();
  let vowelCounter = 0;

  for (let index = 0; index < lowerCasedInputString.length; index++) {
    if (vowelChars.includes(lowerCasedInputString[index])) {
      vowelCounter++
    }
  }

  return vowelCounter
}