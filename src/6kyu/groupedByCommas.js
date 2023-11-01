// Successfully working...
const groupedByCommas = (inputNumber) => {
  let newFormatNumber = new Intl.NumberFormat('en-US')
  return newFormatNumber.format(inputNumber)
}