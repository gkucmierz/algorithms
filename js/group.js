
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/group

// temporary implementation of experimental feature

const groupToMap = (array, cb = el => el) => {
  const map = new Map();
  array.map((el, i) => {
    const key = cb(el, i);
    if (map.has(key)) {
      map.get(key).push(el);
    } else {
      map.set(key, [el]);
    }
  });
  return map;
};

const group = (array, cb = el => el) => {
  const map = groupToMap(array, cb);
  const res = {};
  for (const key of map.keys()) {
    res[key] = map.get(key)
  }
  return res;
};
