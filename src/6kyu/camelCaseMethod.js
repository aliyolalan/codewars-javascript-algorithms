// Successfully working...
String.prototype.camelCase = function () {
  return this.split(" ")
    .map((item) => item.charAt(0).toUpperCase() + item.slice(1))
    .join("");
};

const tempValue = "merhaba world".camelCase();
console.log(tempValue);
