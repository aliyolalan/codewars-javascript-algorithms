// Successfully working...
function findScreenHeight(screenWidth, ratio) {
  const [getScreenWidthRatio, getScreenHeightRation] = ratio.split(':');
  const screenHeight = (screenWidth / getScreenWidthRatio) * getScreenHeightRation;
  return `${screenWidth}x${screenHeight}`;
}
