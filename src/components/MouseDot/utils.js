export const getDotPositionByCursorPosition = ({ y, x, dotSize }) => ({
  y: y - dotSize / 2,
  x: x - dotSize / 2,
});
