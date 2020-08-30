// input: array of bits
// [1,0,1,0,1,1]

function convertBit(p, v, i) {
  return p[i] = i && p[i-1] ? 1 - v : v, p;
}

function bin2gray(bits) {
  return bits.reduceRight(convertBit, bits);
}

function gray2bin(gray) {
  return gray.reduce(convertBit, gray);
}
