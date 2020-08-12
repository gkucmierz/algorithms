
const parseFloatR = (str, base = 10) => {
  const [si, sr] = str.split('.');
  const [i, r] = [
    parseInt(si, base),
    parseInt(sr, base),
  ];
  const maxR = base ** sr.length;
  return i + r / maxR;
};
