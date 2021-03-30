
// create permutations iterator using provided size or specified array of elements

const permutationsGenerator = function*(sizeOrArr) {
  const arr = sizeOrArr.map ? sizeOrArr : new Array(sizeOrArr).fill(0).map((_, i) => i);
  const size = arr.length;

  const gen = function*(res, used, shift) {
    const len = size - used;

    if (len === 0) yield res;

    for (let i = 0; i < len; ++i) {
      const iter = gen([...res, shift[i]], used + 1, [...shift.slice(0, i), ...shift.slice(i + 1)]);
      for (let val of iter) yield val;
    }
  };

  const iter = gen([], 0, arr);
  for (let val of iter) yield val;
};

console.log([...permutationsGenerator(3)]);
console.log([...permutationsGenerator(['a', 'b', 'c'])]);
