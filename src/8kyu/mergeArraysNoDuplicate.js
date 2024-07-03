// Successfully working...
const mergeArrays = (arrayOne, arrayTwo) => {
  const mergeArrNoDuplicate = [...new Set([...arrayOne, ...arrayTwo])];
  mergeArrNoDuplicate.sort((a, b) => a - b);
  return mergeArrNoDuplicate;
};
