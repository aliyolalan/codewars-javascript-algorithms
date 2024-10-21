// Successfully working...
const isPangram = (string) => {
  const letters = "abcdefghijklmnopqrstuvwxyz";
  let convertToLowerCase = string.split("").map((item) => item.toLowerCase());
  let tempArr = [];

  for (let index = 0; index < letters.length; index++) {
    const eachLetter = letters[index];
    convertToLowerCase.includes(eachLetter) ? tempArr.push(true) : tempArr.push(false);
  }

  return tempArr.every((item) => item === true);
};

const pangram = "TThis is not a pangram.";

console.log(isPangram(pangram));
