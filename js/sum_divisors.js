
const primeFactors = n => {
  if (n < 2) return [];
  const res = [];
  let max = Math.floor(Math.sqrt(n));
  for (let i = 2; i <= max; ++i) {
    if (n % i === 0) {
      res.push(i);
      n /= i;
      max = Math.floor(Math.sqrt(n));
      i = (Math.min(...res) || 2) - 1;
    }
  }
  res.push(n);
  return res;
};

const arrayHistogram = (arr, pick = el => el) => {
  const quant = new Map();
  arr.map(obj => {
    const el = pick(obj);
    const cnt = quant.get(el) || 0;
    quant.set(el, cnt + 1);
  });
  return quant;
};

// sum of divisors of n
const sumDivisors = n => {
  const factors = primeFactors(n);
  const cnts = arrayHistogram(factors);
  return [...cnts].map(([n, cnt]) => {
    return (n ** (cnt+1) - 1) / (n-1);
  }).reduce((a, b) => a * b, 1);
};
