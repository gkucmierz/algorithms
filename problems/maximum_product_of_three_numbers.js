
// Maximum Product of Three Numbers
// https://leetcode.com/problems/maximum-product-of-three-numbers

const maxProduct = arr => {
  if (arr.length < 3) return false;
  const max3 = [-Infinity, -Infinity, -Infinity];
  const min2 = [Infinity, Infinity];

  for (let i = 0; i < arr.length; ++i) {
    const n = arr[i];
    if (n > max3[0]) {
      max3[0] = n;
      max3.sort((a, b) => a - b);
    }
    if (n < min2[0]) {
      min2[0] = n;
      min2.sort((a, b) => b - a);
    }
  }
  return max3[2] * Math.max(min2[0] * min2[1], max3[0] * max3[1]);
};

console.log(
  maxProduct([1, -4, 3, -6, 7, 0])
);
