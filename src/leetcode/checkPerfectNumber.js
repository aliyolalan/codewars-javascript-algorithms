// Successfully working...
function checkPerfectNumber(numberValue) {
  let resultArr = [];

  for (let index = 1; index < numberValue; index++) {
    if (numberValue % index === 0) resultArr.push(index);
  }

  const summaryOfArr = resultArr.reduce((a, b) => a + b, 0);
  const isPerfectNumber = numberValue === summaryOfArr;

  return !!isPerfectNumber;
}

console.log(checkPerfectNumber(496));
