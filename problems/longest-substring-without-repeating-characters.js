
// https://leetcode.com/problems/longest-substring-without-repeating-characters

const lengthOfLongestSubstring = (s, result = _ => _) => {
  if (s === '') return 0;
  const set = new Set();
  let lastIdx = 0;
  let max = 0;
  let [maxs, maxe] = [0, 0];
  for (let i = 0; i < s.length; ++i) {
    const c = s[i];
    if (set.has(c)) {
      for (lastIdx; lastIdx < i; ++lastIdx) {
        const rc = s[lastIdx];
        if (rc === c) {
          lastIdx++;
          break;
        }
        set.delete(rc);
      }
    } else {
      set.add(c);
      const dist = i - lastIdx;
      if (dist > max) {
        max = dist;
        [maxs, maxe] = [lastIdx, i];
      }
    }
  }
  result(s.slice(maxs, maxe + 1));
  return max + 1;
};

[
  'abcabcbb',
  'abcabcbb',
  'bbbbb',
  'pwwkew',
].map(str => {
  console.log(lengthOfLongestSubstring(str, res => {
    console.log(str, res);
  }));
  console.log('-'.repeat(40))
});
