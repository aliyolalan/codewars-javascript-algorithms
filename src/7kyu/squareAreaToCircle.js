// Successfully working...
const squareAreaToCircle = (squareArea) => {
  const PI = Math.PI
  const squareEdgeSize = Math.sqrt(squareArea)
  return PI * (squareEdgeSize / 2) ** 2
}

squareAreaToCircle(20)