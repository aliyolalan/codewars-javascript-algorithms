// Successfully working...
const encodeString = (string) => {
  return string.replace(/[aeiou]/g, (vowel) => {
    switch (vowel) {
      case "a":
        return "1";
      case "e":
        return "2";
      case "i":
        return "3";
      case "o":
        return "4";
      case "u":
        return "5";
    }
  });
};

const decodeString = (string) => {
  return string.replace(/[12345]/g, (vowel) => {
    switch (vowel) {
      case "1":
        return "a";
      case "2":
        return "e";
      case "3":
        return "i";
      case "4":
        return "o";
      case "5":
        return "u";
    }
  });
};

const testString = "hello";
const testDecodeString = "h2ll4";
console.log(encodeString(testString));
console.log(decodeString(testDecodeString));
