// Successfully working...
function stringLetterCounter(string, letter) {
  let letterCounter = 0;
  for (let index = 0; index < string.length; index++) {
    const element = string[index];
    if (letter === element) letterCounter++;
  }
  return letterCounter;
}
