// Successfully working...
function abbreviateName(name) {
  let splittedName = name.split(' ');
  let abbrevName = [];

  for (let index = 0; index < splittedName.length; index++) {
    const element = splittedName[index];
    abbrevName.push(element[0].toUpperCase());
  }

  const resultValue = abbrevName.join('.');
  return resultValue;
}
