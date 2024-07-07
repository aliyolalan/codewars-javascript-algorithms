// Successfully working...
function rgbToHexColor(redCode, greenCode, blueCode) {
  const colorsArray = [redCode, greenCode, blueCode];
  const resultArray = [];

  for (let index = 0; index < colorsArray.length; index++) {
    const decimalCode = colorsArray[index];
    let convertedColor = decimalCode.toString(16).toUpperCase();
    if (decimalCode == 0 || decimalCode < 0) {
      convertedColor = '00';
    } else if (decimalCode > 255) {
      convertedColor = 'FF';
    } else if (decimalCode > 9 && decimalCode < 16) {
      convertedColor = '0' + convertedColor;
    } else if (decimalCode < 10) {
      convertedColor = '0' + convertedColor;
    }
    resultArray.push(convertedColor);
  }

  return resultArray.join('');
}
