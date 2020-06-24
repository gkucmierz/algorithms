
// takes function and returns new function that can be called only once

const callOnce = fn => {
  let called = false;
  return (...args) => {
    if (called) return false;
    called = true;
    return fn(...args);
  };
};

const once = callOnce(() => {
  console.log('I can be called only once');
});

once();
once();
