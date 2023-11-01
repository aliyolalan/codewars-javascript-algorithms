// Successfully working...
const oddEvenStringSort = (inputString) => {
  let evenStringArr = []
  let oddStringArr = []

  for (let index = 0; index < inputString.length; index++) {
    const tempElement = inputString[index];
    
    if (index % 2 === 0) {
      evenStringArr.push(tempElement)
    } else {
      oddStringArr.push(tempElement)
    }
  }

  let evenString = evenStringArr.join('')
  let oddString = oddStringArr.join('')

  return [evenString, oddString].join(' ')
}