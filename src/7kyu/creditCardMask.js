// Not working...
const creditCardMask = (creditCardNumber) => {
  let resultString = '';
  const sliceWithoutLastFourNumber = creditCardNumber.slice(0, creditCardNumber.length - 4);
  const sliceLastFourNumber = creditCardNumber.slice(creditCardNumber.length - 4, creditCardNumber.length);

  if (creditCardNumber.length > 4) {
    for (let index = 0; index < sliceWithoutLastFourNumber.length; index++) {
      const element = sliceWithoutLastFourNumber[index].replace(sliceWithoutLastFourNumber[index], '#');
      resultString += element;
    }
  }

  return resultString + sliceLastFourNumber;
};
