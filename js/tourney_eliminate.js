
const eliminate = (arr, fn) => {
  const res = arr.length % 2 === 1 ? [arr.pop()] : [];
  for (let i = 0; i < arr.length; i += 2) {
    res.push(fn(arr[i], arr[i+1]));
  }
  return res;
};

const tourney = arr => {
  const res = [arr.slice()];
  while (arr.length > 1) {
    arr = eliminate(arr, Math.max);
    res.push(arr.slice());
  }
  return res;
};

console.log([70,11,35,34,66,78,71,15,31,20,99,15,6,42,36,82,55]);
