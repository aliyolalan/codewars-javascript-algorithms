// Successfully working...
const breakCamelCase = (string) => {
  let splittedString = string.split("");

  for (let index = 0; index < splittedString.length; index++) {
    if (splittedString[index] >= "A" && splittedString[index] <= "Z") {
      splittedString[index] = " " + splittedString[index];
    }
  }

  return splittedString.join("");
};

const testString = "camelCaseTest";
console.log(breakCamelCase(testString));
