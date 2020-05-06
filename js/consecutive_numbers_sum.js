
const consecutiveNumbersSum = n => {
  while ((n & 1) === 0) {
    n >>= 1;
  }
  
  let [ans, d] = [1, 3];
  while (d*d <= n) {
    let e = 0;
    while (n % d === 0) {
      n /= d;
      ++e;
    }
    ans *= e + 1;
    d += 2;
  }

  return (n > 1) ? ans << 1 : ans;
};
