
// longest common subsequence (LCS)

// Dynamic programming approach
// Time complexity: O(mn)
const lcs = (
  a,
  b,
  ia = a.length,
  ib = b.length) => {
  const len = new Array(ia + 1).fill(0).map(_ => []);
  for (let i = 0; i <= ia; ++i) {
    for (let j = 0; j <= ib; ++j) {
      if (i === 0 || j === 0) {
        len[i][j] = 0;
      } else if (a[i-1] == b[j-1]) {
        len[i][j] = len[i-1][j-1] + 1;
      } else {
        len[i][j] = Math.max(len[i-1][j], len[i][j-1]);
      }
    }
  }
  return len[ia][ib];
};

// worst case:
// time complexity O(2^n)
const lcs2 = (
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
console.log(lcs2('ABCD', 'ABDC'));
