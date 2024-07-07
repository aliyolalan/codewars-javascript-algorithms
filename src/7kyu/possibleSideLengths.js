function possibleSideLengths(firstSide, secondSide) {
  const substructOfSides = Math.abs(firstSide - secondSide) + 1;
  const summaryOfSides = firstSide + secondSide;
  const hypotenuseSide = Math.sqrt(Math.pow(firstSide, 2) + Math.pow(secondSide, 2));
  const sqrtOfAnySide = Math.sqrt(Math.pow(secondSide, 2) - Math.pow(firstSide, 2));
  let resultArray = [];

  for (let index = substructOfSides; index < summaryOfSides; index++) {
    if (hypotenuseSide !== index && sqrtOfAnySide !== index) {
      resultArray.push(index);
    }
  }

  return resultArray;
}
