// Successfully working...
const uniqueInOrder = (string) => {
  let uniqueArr = [];
  for (let index = 0; index < string.length; index++) {
    if (string[index] !== string[index + 1]) {
      uniqueArr.push(string[index]);
    }
  }

  return uniqueArr;
};

const testString = "ABBCcAD";
console.log(uniqueInOrder(testString));
