
const gen = (function*() {
  for (let i = 0; i < 10; ++i) {
    yield i;
  }
})();

const asyncConsumeIterator = (iter, progressFn, doneFn = _ => _) => {
  while (1) {
    const {value, done} = iter.next();
    if (done) {
      return doneFn();
    }
    progressFn(value);
  }
  doneFn();
};


asyncConsumeIterator(gen, data => {
  console.log(data);
}, _ => console.log('optional done'));
