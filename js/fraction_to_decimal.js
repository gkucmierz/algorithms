
// fraction, decimal, convert, numerator, denominator, reminder, period

const fractionToDecimal = (numerator, denominator) => {
  const sign = numerator * denominator < 0 ? '-' : ''
  const [num, den] = [Math.abs(numerator), Math.abs(denominator)];
  let rem = num % den;
  let left = (num - rem) / den;
  let cnt = 0;
  let right = '';
  const map = new Map();
  while (rem) {
    rem *= 10;
    if (map.has(rem)) {
      break;
    }
    map.set(rem, cnt);
    const d = rem / den | 0;
    rem %= den;
    right += d;
    ++cnt;
  }
  const ptr = map.get(rem);
  const rightPart = right.slice(0, ptr);
  const period = right.slice(ptr);
  return sign + (right ? `${left}.${rightPart}${rem ? `(${period})` : ''}` : left);
};

console.log(fractionToDecimal(1, 2));
console.log(fractionToDecimal(10, 11));
