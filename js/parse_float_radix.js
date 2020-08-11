
const parseFloatRadix = (str, base = 10) => {
  const [si, sr] = str.split('.');
  const [i, r] = [
    parseInt(si, base),
    parseInt(sr, base),
  ];
  const maxR = base ** Math.floor(Math.log(r)/Math.log(base)+1);
  return i + r / maxR;
};
