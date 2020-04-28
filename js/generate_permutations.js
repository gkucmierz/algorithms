
const genPermutations = size => {
  const perms = [];
  const gen = (res, used, shift) => {
    if (used === size) {
      perms.push(res);
    }
    for (let i = 0; i < (size-used); ++i) {
      gen([...res, shift[i]], used + 1, [...shift.slice(0, i), ...shift.slice(i + 1)]);
    }
  };
  gen([], 0, new Array(size).fill(0).map((_, i) => i));
  return perms;
};
