
// generate combinations of n size from k set
//
// combinations quantity formula:
// k! / n! * (k-n)!

const combinations = (n, k) => {
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
