// union find
// quick-union with path compression

const unionFind = n => {
  const arr = new Uint32Array(n);
  for (let i = 0; i < n; ++i) {
    arr[i] = i;
  }
  
  const root = p => {
    while (arr[p] !== p) {
      arr[p] = arr[arr[p]];
      p = arr[p];
    }
    return p;
  };
  
  const union = (p, q) => {
    arr[root(p)] = root(q);
  };
  
  const connected = (p, q) => {
    return root(p) === root(q);
  };
  
  return {union, connected};
};
