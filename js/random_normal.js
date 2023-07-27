
// random normal distribution

// Box-Muller implementation:
const randNormal = (mean, sigma) => {
  const y1 = Math.random();
  const y2 = Math.random();
  return mean + sigma * Math.cos(2*Math.PI*y2)*Math.sqrt(-2*Math.log(y1));
};


// example:

const arr = new Array(40).fill(0);

const ITERATIONS = 1e6;
for (let i = 0; i < ITERATIONS; ++i) {
  const rand = randNormal(20, 6);
  const round = Math.round(rand);
  if (round < 0 || round >= arr.length) continue;
  arr[round]++;
}

const max = Math.max(...arr);
const size = 50;
arr.map(n => Math.round(n / max * size)).map(n => {
  return '#'.repeat(n);
});
