// Not working...
const passwordGenerator = () => {
  const lowerCaseChars = 'abcdefghijklmnopqrstuvwxyz';
  const upperCaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const numberChars = '0123456789';
  const alphaChars = '!@#$%^&*()';
  let generatedPassword = '';
  let randomPasswordLong = Math.floor(Math.random() * (21 - 6) + 6);

  for (let index = 0; index < randomPasswordLong; index++) {
    const randomNumberForSelectChar = Math.floor(Math.random() * alphaChars.length);
    let selectedChar = alphaChars[randomNumberForSelectChar];
    generatedPassword += selectedChar;
  }

  return generatedPassword;
};

console.log(passwordGenerator());
