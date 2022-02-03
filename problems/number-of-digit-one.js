
const countDigitOne = n => {
  const str = n + '';
  let sum = 0;
  for (let i = 0; i < str.length; ++i) {
    const r = [str.slice(0, i), str[i], str.slice(i+1)].map(n => +n);
    const mul = 10 ** (str.length - i - 1);
    const s1 = mul * r[0];
    const s2 = r[1] > 1 ? mul : 0;
    const s3 = r[1] === 1 ? r[2] + 1 : 0;
    sum += s1 + s2 + s3;
  }
  return sum;
};


let sum = 0;
for (let i = 0; i <= 1e10; ++i) {
  sum += ((i+'').match(/1/g) || []).length;
  const s1 = sum;
  const s2 = countDigitOne(i);
  
  if (i % 1e5 === 0) {
    console.log(i);
  }
  if (s1 !== s2) {
    console.log('failed', s1, s2);
  }
}
