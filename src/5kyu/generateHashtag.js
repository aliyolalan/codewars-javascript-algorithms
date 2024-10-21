// Successfully working...
const generateHashtag = (string) => {
  if (string === "") return false;

  const splitString = string.split(" ").map((item) => {
    if (item !== "") {
      return item.charAt(0).toUpperCase() + item.slice(1);
    }
  });

  let resultString = "#" + splitString.join("");
  if (resultString === "#" || resultString.length > 140) return false;

  return resultString;
};

const testString = " Hello there thanks for trying my Kata";
const testStringAnother = "       ";

console.log(generateHashtag(testString));
