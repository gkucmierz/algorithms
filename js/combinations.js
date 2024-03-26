
// generate combinations of n size from k set
//
// combinations quantity formula:
// k! / n! * (k-n)!

const combinationsRecursive = (n, k) => {
  const arr = new Array(n).fill(0).map((_, i) => i);
  const res = [];
  
  const next = (arr, n, max) => {
    if (n < 0) return;
    for (let i = arr[n] + 1; i < max; ++i) {
      arr[n] = i;
      res.push(arr.slice());
      next(arr.slice(), n - 1, arr[n]);
    }
  };
  
  res.push(arr.slice());
  next(arr, n - 1, k);
  
  return res;
};

console.log(
  combinations(6, 10).length
);

// combinations without recursion
const combinations = (n, k) => {
  const res = [];
  const max = k ** n;
  for (let i = 0; i < max; ++i) {
    let m = i;
    const arr = [];
    let last = k;
    for (let j = n - 1; j >= 0; --j) {
      const rem = m % k;
      if (rem >= last) {
        last = -1;
        break;
      }
      arr[j] = rem;
      m = (m - rem) / k;
      last = rem;
    }
    if (last === -1) continue;
    res.push(arr);
  }
  return res;
};

// combinations iterator
const combinationsIterator = function* (n, k) {
  const max = k ** n;
  for (let i = 0; i < max; ++i) {
    let m = i;
    const arr = [];
    let last = k;
    for (let j = n - 1; j >= 0; --j) {
      const rem = m % k;
      if (rem >= last) {
        last = -1;
        break;
      }
      arr[j] = rem;
      m = (m - rem) / k;
      last = rem;
    }
    if (last === -1) continue;
    yield arr;
  }
};

for (const c of combinationsIterator(6, 49)) {
  console.log(c.join(' '));
};
