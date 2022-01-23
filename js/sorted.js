
// Simple data structure that is always sorted.
// add compleity is O(log(n)) + complexity of splice function which is
// O(n) worst case
// this implementation does not care where to put element if they are eq

const Sorted = function(take = n => n, cmp = (a, b) => a-b) {
  const arr = [];
  
  const add = obj => {
    let s = 0;
    let e = arr.length;
    let last, m;
    let cnt = 0;
    while (1) {
      m = (s+e) / 2 | 0;
      const diff = cmp(take(obj), take(arr[m]));
      if (diff === 0) break;
      if (diff < 0) {
        e = m;
      } else {
        s = m ;
      }
      if (m === last) break;
      last = m;
    }
    if (cmp(take(obj), take(arr[m])) > 0) ++m;
    arr.splice(m, 0, obj);
    return m;
  };
  
  return {
    remove: idx => arr.splice(idx, 1),
    clean: () => arr.length = 0,
    get: () => arr,
    add
  };
};

const sorted = new Sorted();
for (let i = 0; i < 40; ++i) {
  sorted.add(Math.random());
}
console.log(sorted.get());
