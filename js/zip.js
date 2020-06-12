
// zip two arrays into one

const zip = (arr1, arr2) => {
  const zipped = [];
  const len = Math.max(arr1.length, arr2.length);
  for (let i = 0; i < len; ++i) {
    zipped[i] = [arr1[i], arr2[i]];
  }
  return zipped;
};

console.log(zip(
  [1, 2, 3, 4],
  [...'abc'],
));
