
const triangleArea = (a, b, c) => {
  return 0.5 * (a.X * (b.Y - c.Y) + b.X * (c.Y - a.Y) + c.X * (a.Y - b.Y));
};
