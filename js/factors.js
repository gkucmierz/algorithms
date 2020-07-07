
// factors, factorialize, factorialization, factorial, prime number

function factors(n) {
  let max = Math.floor(Math.sqrt(n));
  let res = [];
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
}

function isPrime(n) {
  return n > 1 && factors(n).length === 1;
}


// BigInt approach:

const factorsBint = n => {
  let res = [];
  let min = n;
  for (let i = 2n; i*i <= n; i = i + 1n) {
    if (n % i === 0n) {
      res.push(i);
      if (i < min) min = i;
      n = n / i;
      i = min - 1n;
    }
  }
  res.push(n);
  return res;
};
