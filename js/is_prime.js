
// check if number is prime

const isPrime = n => {
  if (n < 2) return false;
  if (n % 2 === 0) return n === 2;
  const root = Math.sqrt(n);
  for (let i = 3; i <= root; i += 2) {
    if (n % i === 0) return false;
  }
  return true;
};

// calculate sqrt for BigInt number

const sqrt = n => {
  if (n < 0n) throw 'square root of negative numbers is not supported';
  if (n < 2n) return n;
  const newtonIteration = (n, x0) => {
    const x1 = ((n / x0) + x0) >> 1n;
    if (x0 === x1 || x0 === (x1 - 1n)) return x0;
    return newtonIteration(n, x1);
  }
  return newtonIteration(n, 1n);
}

// check if BigInt number is prime

const isPrimeBig = n => {
  if (n < 2n) return false;
  if (n % 2n === 0n) return n === 2n;
  const root = sqrt(n);
  for (let i = 3n; i <= root; i += 2n) {
    if (n % i === 0n) return false;
  }
  return true;
};

// example

for (let i = 0; i < 100; ++i) {
  if (isPrime(i)) {
    console.log(i);
  }
}

for (let i = 0n; i < 100n; ++i) {
  const n = i + 10n ** 10n;
  if (isPrimeBig(n)) {
    console.log(n);
  }
}
