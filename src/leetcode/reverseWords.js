// Successfully working...
function reverseWords(string) {
  let resultArr = [];
  function reverseString(eachString) {
    return eachString.split('').reverse().join('');
  }

  const splitStringToSpace = string.split(' ');

  for (let index = 0; index < splitStringToSpace.length; index++) {
    const eachWord = splitStringToSpace[index];
    const reversedWord = reverseString(eachWord);
    resultArr.push(reversedWord);
  }

  return resultArr.join(' ');
}

console.log(reverseWords('Merhaba ben Ali'));
