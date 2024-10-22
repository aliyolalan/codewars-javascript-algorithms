// Successfully working...
const mexicanWave = (string) => {
  let resultArr = [];

  for (let index = 0; index < string.length; index++) {
    const element = string.charAt(index);
    if (element == " ") continue;
    const firstSection = string.slice(0, index);
    const middleSection = string.charAt(index).toUpperCase();
    const endSection = string.slice(index + 1);
    const allWord = firstSection + middleSection + endSection;
    resultArr.push(allWord);
  }

  return resultArr;
};

console.log(mexicanWave("two words"));
