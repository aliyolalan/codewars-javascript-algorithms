// Successfully working...
const firstCharUpperCased = (inputString) => {
  const tempValue = inputString.split(' ')
  let resultArr = []
  for (let index = 0; index < tempValue.length; index++) {
    const element = tempValue[index].charAt(0);
    resultArr.push(element)
  }
  return resultArr.join('')
}

console.log(firstCharUpperCased("This Is A Test"))