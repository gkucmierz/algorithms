
// pascals triangle

const pascalsTriangle = rows => {
  const res = [];
  let lvl = [1];
  while (rows--) {
    res.push(lvl);
    const tmp = [...lvl, 0];
    for (let i = tmp.length - 1; i > 0; --i) {
      tmp[i] += tmp[i-1]
    }
    lvl = tmp;
  }
  return res;
};
