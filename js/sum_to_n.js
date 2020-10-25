
// very simple O(1) algorithm, that sums natural numbers from 1 to n

const sumToN = n => n * (n + 1) / 2;
const sumToNBI = n => n * (n + 1n) / 2n;

// algorithm that sums form n to m inclusive

const sumFromNToM = (n, m) => sumToN(m) - sumToN(n) + n;
const sumFromNToMBI = (n, m) => sumToNBI(m) - sumToNBI(n) + n;
