// Successfully working...
function countSheep(numberValue) {
  if (numberValue == 0) return '';
  let tempArr = [];

  for (let index = 1; index <= numberValue; index++) {
    const sheepWord = index + ' sheep...';
    tempArr.push(sheepWord);
  }

  return tempArr.join('');
}
