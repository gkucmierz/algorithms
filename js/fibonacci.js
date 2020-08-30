
// fibonacci formula

const fib = n => {
  const sq5 = Math.sqrt(5);
  return (sq5 * (1+sq5)**n - sq5 * (1-sq5)**n) * 2**-n * 0.2;
};

const fib2n = f => {
  const sq5 = Math.sqrt(5);
  const phi = (1 + sq5) / 2;
  return Math.floor(Math.log(f * sq5 + 0.5) / Math.log(phi));
};

for (let i = 0; i < 610; ++i) {
  if (i !== fib2n(fib(i))) {
    console.log(i, '!==', fib2n(fib(i)));
  }
}

// codewars inspiration:
// https://www.codewars.com/kata/reviews/554398d646002df491000183/groups/5dc2fa1a83a99000015a24ba

// recursion method + memoization:
const fib = ((first, second) => {
  const map = new Map();
  const f = n => {
    if (map.has(n)) return map.get(n);
    if (n === 0) return first;
    if (n === 1) return second;
    if (n < 0) { // handle negative numbers
      const res = f(n+2) - f(n+1);
      map.set(n, res);
      return res;
    }
    const res = f(n-1) + f(n-2);
    map.set(n, res);
    return res;
  };
  return f;
})(0n, 1n);
