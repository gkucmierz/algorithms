
const nChooseK = (() => {
  const p = (n = 1n) => {
    let res = 1n;
    const max = BigInt(n);
    for (let i = 1n; i <= max; ++i) {
      res *= i;
    }
    return res;
  };
  return (n, k) => p(n) / (p(k) * p(n-k));
})();

console.log(
  'lotto:',
  nChooseK(49, 6),
);
