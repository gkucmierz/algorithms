
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

// finds all divisors of a natural number
const divisors = n => {
  const factors = primeFactors(n);
  const size = factors.length;
  const max = 2 ** size - 1;
  const divisors = new Set();
  for (let i = 1; i < max; ++i) {
    let div = 1;
    for (let j = 0; j < size; ++j) {
      if ((1 << j) & i) {
        div *= factors[j];
      }
      divisors.add(div);
    }
  }
  divisors.delete(1);
  return [...divisors].sort((a, b) => a - b);
};
