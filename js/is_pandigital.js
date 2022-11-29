
const getIsPandigital = (min = 1, max = 9) => {
  const digits = [];
  for (let i = min; i <= max; ++i) digits.push(i);
  const match = digits.join('');
  return num => {
    const sorted = [...num+''].map(n => +n).sort((a, b) => a-b);
    return sorted.join('') === match;
  };
};

const isPandigital = getIsPandigital(1, 3);
isPandigital(321); // true
