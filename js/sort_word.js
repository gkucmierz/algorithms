
// sort letters inside word

const sortWord = word => {
  return [...word].sort((a, b) => a.localeCompare(b)).join('');
};

console.log(sortWord('hello'));
