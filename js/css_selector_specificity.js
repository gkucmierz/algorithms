
function compare(a, b) {
  const sa = specificity(a);
  const sb = specificity(b);
  for (let i = 0; i < 3; ++i) {
    if (sa[i] > sb[i]) return a;
    if (sa[i] < sb[i]) return b;
  }
  return b;
}

function specificity(sel) {
  const m = sel.match(/((\.|#)?([a-z][a-z\-\_0-9]*) *)|\*/ig) ?? [];
  const res = [0, 0, 0, 0];
  m.map(s => s.trim()).map(s => {
    if (s.startsWith('.')) return 1;
    if (s.startsWith('#')) return 0;
    if (s === '*') return 3;
    return 2;
  }).map(n => ++res[n]);
  return res.slice(0, 3);
}
