const runLengthEncoding = (input) => {
  const resultArr = [];
  let encodeCounter = 1;
  for (let index = 0; index < input.length + 1; index++) {
    if (input[index] === input[index + 1]) {
      encodeCounter++
    } else {
      resultArr.push([encodeCounter, input[index]]);
      encodeCounter = 1;
    }
  }
  return resultArr.flat().join('');
}