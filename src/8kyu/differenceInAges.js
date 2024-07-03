// Successfully working...
function differenceInAges(ageArray) {
  const minimumAge = Math.min(...ageArray);
  const maximumAge = Math.max(...ageArray);
  const ageDifference = maximumAge - minimumAge;
  return [minimumAge, maximumAge, ageDifference];
}
