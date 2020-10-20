
const QuickSum = arr => {
  const roundExp = n => Math.ceil(Math.log(n)/Math.log(2));
  const size = 2 ** roundExp(arr.length);
  const subSums = [arr];
  while (1) {
    const a = subSums[subSums.length-1];
    const len = a.length;
    const next = [];
    for (let i = 0; i < len; i += 2) {
      next.push(a[i] + (a[i+1] ?? 0));
    }
    subSums.push(next);
    if (next.length === 1) break;
  }

  const upTo = n => {
    let exp = roundExp(++n);
    let sum = 0;
    if (n === 2 ** exp) return subSums[exp][0];
    for (let i = 0; i < exp; ++i) {
      sum += n % 2 !== 0 ? subSums[i][n-1] : 0;
      n = Math.floor(n / 2);
    }
    return sum;
  };

  const fromTo = (n, m) => {
    return upTo(m) - upTo(n) + arr[n];
  };

  return { upTo, fromTo };
};
