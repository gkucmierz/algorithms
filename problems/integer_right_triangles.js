
const integerRightTriangles = p => {
  let d = p - 1;
  let lasti = 0;
  const res = [];
  for (let i = 1; i < p; ++i) {
    const h = Math.hypot(i, d);
    if (i + d + h > p) {
      --d;
      --i;
      if (d <= lasti) break;
    }
    if (Math.floor(h) === h) {
      lasti = i;
      res.push([i, d, h]);
    }
  }
  return res;
};

// integer right triangles with perimeter = 120
console.log(integerRightTriangles(120));

// count integer right triangles in range 0-1000
for (let i = 0; i < 1e4; i++) {
  const len = integerRightTriangles(i).length;
  if (len > 0) {
    console.log(i, len);
  }
}
