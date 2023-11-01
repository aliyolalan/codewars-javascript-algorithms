const minFactorDistance = (numberValue) => {
  let tempArr = []
  let distanceArr = []
  for (let index = 0; index <= numberValue; index++) {
    if (numberValue % index === 0) {
      tempArr.push(index)
    }
  }

  for (let outerIndex = 0; outerIndex < tempArr.length; outerIndex++) {
    for (let innerIndex = 0; innerIndex < tempArr.length; innerIndex++) {
      if (tempArr[outerIndex] < tempArr[innerIndex + 1] ) {
        let tempVal = tempArr[innerIndex + 1] - tempArr[outerIndex];
        distanceArr.push(tempVal)
      }
    }
  }


  return Math.min(...distanceArr)
}
