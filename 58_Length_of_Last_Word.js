/**
 * 思路：
 * 从字符串后面开始遍历
 * 先过滤掉' '
 * 然后再count再遇到' '之前走过了多少字母
 */
/**
 * @param {string} s
 * @return {number}
 */
let lengthOfLastWord = function(s) {
  let trim = s.length - 1
  let count = 0
  while (s[trim] === ' ') {
    trim--
  }
  while (trim >= 0 && s[trim] !== ' ') {
    count++
    trim--
  }
  return count
}
lengthOfLastWord()
