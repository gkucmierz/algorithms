
// generate map with unique elements, and occurring frequencies

const arrayHistogram = arr => {
  const quant = new Map();
  arr.map(el => {
    const cnt = quant.get(el) || 0;
    quant.set(el, cnt + 1);
  });
  return quant;
};

// with: Nullish coalescing operator

const arrayHistogram2 = arr => {
  const quant = new Map();
  arr.map(el => {
    const cnt = quant.get(el) ?? 0;
    quant.set(el, cnt + 1);
  });
  return quant;
};
