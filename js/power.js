
// bigint
const power = (n = 1n) => {
  let res = 1n;
  const max = BigInt(n);
  for (let i = 1n; i <= max; ++i) {
    res *= i;
  }
  return res;
};

console.log(power(1000));

const power2 = n => {
  let res = 1;
  for (let i = 1; i <= n; ++i) {
    res *= i;
  }
  return res;
};
