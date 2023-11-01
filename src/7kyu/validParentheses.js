const testString = "((())"
const validParentheses = (parenStr) => {
  const firstIndex = 0
  const lastIndex = parenStr.length - 1;

  let firstParenthesisCounter = 0;
  let lastParenthesisCounter = 0;

  for (let index = 0; index < parenStr.length; index++) {
    if (parenStr[index] === '(') {
      firstParenthesisCounter++
    } else {
      lastParenthesisCounter++
    }
  }

  const equalParenNumber = firstParenthesisCounter === lastParenthesisCounter

  return !(parenStr[firstIndex] === ')' || parenStr[lastIndex] === '(' || !equalParenNumber);
}

console.log(validParentheses(testString))