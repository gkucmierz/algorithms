
// roman, roman numerals, converter, to roman, from roman

const toRoman = n => {
  const m = [
    ['I', 'V'],
    ['X', 'L'],
    ['C', 'D'],
    ['M']
  ];
  const c = ' 0 00 000 01 1 10 100 1000 02'.split(' ');
  const res = [];
  let i = 0;
  while (n > 0) {
    const t = n % 10;
    res.unshift(c[t].split('').map((e) => {
      if (+e === 2) return m[i+1][0];
      return m[i][e];
    }).join(''));
    ++i;
    n = (n - t) * 0.1;;
  }
  return res.join``;
};

const fromRoman = s => {
  const m = {
    'I':   1, 'V':   5,
    'X':  10, 'L':  50,
    'C': 100, 'D': 500,
    'M':1000
  };
  return s.split('').reduce((a, c, i) => {
    const curr = m[c];
    const last = a.slice(-1)[0];
    if (last > curr || i === 0) {
      a.push(curr);
    } else if (last < curr) {
      a.push(-a.pop());
      a.push(curr);
    } else {
      a.push(a.pop() + curr);
    }
    return a;
  }, []).reduce((acc, n) => acc + n);
};
