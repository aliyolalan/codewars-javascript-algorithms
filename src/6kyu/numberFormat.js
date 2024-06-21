// Successfully working...
const numberFormat = (number) => {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};
