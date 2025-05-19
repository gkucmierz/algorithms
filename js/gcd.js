
// greatest common divisor

// iterative solution:
const gcd = (a, b) => {
  if (a < 0) a = -a;
  if (b < 0) b = -b;
  if (b > a) {
    [a, b] = [b, a];
  }
  while (1) {
    if (b == 0) return a;
    a %= b;
    if (a == 0) return b;
    b %= a;
  }
};

// recursive solution:
const gcd2 = (a, b) => b ? gcd2(b, a % b) : a;
