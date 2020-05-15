
// generate map with unique elements, and occurring frequencies
// arr: string
// pick: function

const arrayHistogram = (arr, pick = el => el) => {
  const quant = new Map();
  arr.map(obj => {
    const el = pick(obj);
    const cnt = quant.get(el) || 0;
    quant.set(el, cnt + 1);
  });
  return quant;
};

// with: Nullish coalescing operator

const arrayHistogram = (arr, pick = el => el) => {
  const quant = new Map();
  arr.map(obj => {
    const el = pick(obj);
    const cnt = quant.get(el) ?? 0;
    quant.set(el, cnt + 1);
  });
  return quant;
};
