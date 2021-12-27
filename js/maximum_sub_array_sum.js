
// maximum sub array sum, kadanes algorithm

const maxSubArray = (arr, full = false) => {
  let sum = arr[0];
  let max = -Infinity;
  let idx = 0;
  let fi = -1;
  let li = -1;
  for (let i = 1; i < arr.length; ++i) {
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

console.log(
  maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]),
  maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4], true),
  maxSubArray([0]),
  maxSubArray([0], true),
);
