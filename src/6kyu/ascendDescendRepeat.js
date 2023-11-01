const randomNumberGenerator = (length, maximum, minimum) => {
  let randomizedNumberArr = [];
  for (let index = 0; index < length; index++) {
    const randomGenerate = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
    randomizedNumberArr.push(randomGenerate);
  }
  return randomizedNumberArr.join('');
}
const ascendDescendRepeat = (lengthValue, minimum, maximum) => {
  const tempArr = [];
  let index = minimum;
  while (index <= maximum) {
    const maxValueInArr = Math.max(...tempArr);
    if (tempArr.length === lengthValue) {
      break
    }
    tempArr.push(index++);
  }
  return tempArr
}

console.log(ascendDescendRepeat( 5, 1, 3));