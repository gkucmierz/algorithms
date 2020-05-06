
const gen = (function*() {
  for (let i = 0; i < 10; ++i) {
    yield i;
  }
})();

const asyncConsumeIterator = (iter, progressFn, doneFn = _ => _) => {
  const loop = () => {
    const {value, done} = iter.next();
    if (done) {
      doneFn();
    } else {
      progressFn(value);
      setTimeout(loop, 0);
    }
  };
  loop();
};

asyncConsumeIterator(gen, data => {
  console.log(data);
}, _ => console.log('optional done'));
