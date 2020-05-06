
// longest common subsequence (LCS)

// worst case:
// time complexity O(2^n)
const lcs = (
  a,
  b,
  ia = a.length,
  ib = b.length) => {
  if (ia === 0 || ib === 0) {
    return 0;
  } else if (a[ia-1] === b[ib-1]) {
    return 1 + lcs(a, b, ia-1, ib-1);
  }
  return Math.max(
    lcs(a, b, ia, ib-1),
    lcs(a, b, ia-1, ib));
};



console.log(lcs('ABCD', 'ABDC'));
