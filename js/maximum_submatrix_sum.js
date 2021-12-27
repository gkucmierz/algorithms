
// maximum submatrix sum, submatrix boundaries

// https://github.com/gkucmierz/algorithms/blob/master/js/maximum_sub_array_sum.js
const maxSubArray = (arr, full = false) => {
  let sum = 0;
  let max = -Infinity;
  let idx = 0;
  let fi = -1;
  let li = -1;
  for (let i = 0; i < arr.length; ++i) {
    sum += arr[i];
    if (arr[i] > sum) {
      sum = arr[i];
      idx = i;
    }
    if (sum > max) {
      max = sum;
      [fi, li] = [idx, i];
    }
  };
  return full ? {
    firstIndex: fi,
    lastIndex: li,
    max
  } : max;
};


const maxSubmatrixSum = m => {
  const rrs = [];
  let maxSum = -Infinity;
  const maxPos = {
    l: -1, r: -1,
    t: -1, b: -1
  };
  for (let l = 0; l < m[0].length; ++l) {
    for (let r = l; r < m[0].length; ++r) {
      const first = r === l;
      for (let i = 0; i < m.length; ++i) {
        rrs[i] = first ? m[i][r] : rrs[i] + m[i][r];
      }

      const k = maxSubArray(rrs, true);
      if (k.max > maxSum) {
        maxSum = k.max;
        [maxPos.l, maxPos.r] = [l, r];
        [maxPos.t, maxPos.b] = [k.firstIndex, k.lastIndex];
        console.log(maxSum, maxPos);
      }

    }
  }
  return { maxSum, submatrixIndex: maxPos };
};

const m = [
  [ 6,-5,-7, 4,-4],
  [-9, 3,-6, 5, 2],
  [-9, 4, 7,-6, 3],
  [-8, 9,-3, 3,-7]
];

console.log(m);
console.log(maxSumOf(m));
