// select data based on ranges description
// min and max are optional
// ranges are testet from bottom to top and vice versa

const conditionalRange = (n, ranges, def) => {
  for (let i = 0; i < ranges.length; ++i) {
    const r = ranges[i];
    if ('max' in r) {
      if ('min' in r) {
        if (r.min <= n && n <= r.max) return r.data;
      } else {
        if (n <= r.max) return r.data;
      }
    }
  }
  for (let i = ranges.length-1; 0 <= i; --i) {
    const r = ranges[i];
    if ('min' in r) {
      if (!('max' in r)) {
        if (r.min <= n) return r.data;
      }
    }
  }
  return def;
};

const ranges = [
  { max: 10, data: 1 },
  { min: 0, max: 20, data: 2 },
  { min: 21, data: 3 }
];
