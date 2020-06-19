/**
 * Initialize your data structure here.
 */
const Trie = function() {
  this.data = {};
  this.exists = new Set();
};

/**
 * Inserts a word into the trie. 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {
  this.exists.add([...word].reduce((ref, char) => {
    if (char in ref) return ref[char];
    return ref[char] = {};
  }, this.data));
};

/**
 * Returns if the word is in the trie. 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word) {
  return this.exists.has([...word].reduce((ref, char) => {
    return ref ? ref[char] : false;
  }, this.data));
};

/**
 * Returns if there is any word in the trie that starts with the given prefix. 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {
  return !![...prefix].reduce((ref, char) => {
    return ref ? ref[char] : false;
  }, this.data);
};
