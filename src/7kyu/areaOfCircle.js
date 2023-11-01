const areaOfCircle = (radius) => {
  if (radius <= 0) throw Error();
  const PI = Math.PI
  return PI * (radius ** 2);
}
