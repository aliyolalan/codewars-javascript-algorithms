const convertIPAddressToNumber = (IPNumber) => {
  let tempArr = [];
  const splitIPNumber = IPNumber.split('.');
  const convertNumber = splitIPNumber.map((number) => parseInt(number));

  for (let index = 0; index < convertNumber.length; index++) {
    tempArr.push(convertNumber[index].toString(2));
  }

  const joinedBinaryNumber = tempArr.join('');
  return tempArr;
};
