// Successfully working...
const firstNonRepeatingLetter = (string) => {
  if (string == "") return "";
  const convertedLowerCase = string.toLowerCase();
  let counterValue = 0;

  for (let index = 0; index < convertedLowerCase.length; index++) {
    const element = convertedLowerCase.charAt(index);

    if (convertedLowerCase.indexOf(element) == convertedLowerCase.lastIndexOf(element)) {
      counterValue++;
      return string[index];
    }
  }

  if (counterValue == 0) return "";
};

const testString = "abba";
console.log(firstNonRepeatingLetter(testString));
