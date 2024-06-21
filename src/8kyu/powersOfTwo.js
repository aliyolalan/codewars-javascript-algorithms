const powersOfTwo = (inputValue) => {
  let valuesArray = [];

  for (let index = 0; index <= inputValue; index++) {
    let tempValue = Math.pow(2, index);
    valuesArray.push(tempValue);
  }

  return valuesArray;
};

console.log(powersOfTwo(2));
