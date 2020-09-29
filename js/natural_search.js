
// this function is helping to find point in signoidal function,
// that we don't know nothing about

const naturalSearch = (cond, retFirstTrue = true) => {
  let min = 1;
  let max = 1;
  while(1) {
    const stop = cond(max);
    if (stop) break;
    min = max;
    max *= 2;
  }
  let mid;
  while (1) {
    mid = Math.floor((min + max) / 2);
    const stop = cond(mid);
    if (stop) {
      max = mid;
    } else {
      min = mid;
    }
    const diff = max - min;
    if (max - min <= 1) {
      return retFirstTrue ? max : min;
    }
  }
};
