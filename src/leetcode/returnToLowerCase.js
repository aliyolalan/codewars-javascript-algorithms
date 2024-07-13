// Successfully working...
// A shameful solution :))))
function toLowerCase(string) {
  let splitString = string.split('');
  let resultValue = [];

  for (let index = 0; index < splitString.length; index++) {
    let singleChar = splitString[index];
    if (singleChar == singleChar.toUpperCase()) {
      singleChar = singleChar.toLowerCase();
      resultValue.push(singleChar);
    } else {
      resultValue.push(singleChar);
    }
  }

  return resultValue.join('');
}

console.log(toLowerCase('LOVELY'));
