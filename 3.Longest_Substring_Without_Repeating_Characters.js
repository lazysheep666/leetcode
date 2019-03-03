/**
 * 思路：
 * 解决办法1：
 * brute force, 遍历这个字符串的substring，找到最长的none-duplicate substring 即为答案
 * 解决方法2：
 * 可以看做dp问题, 我们只需找到所有以index结尾的最长的none-duplicate substring即可
 * s[0, j] = s[j] in s[0 , j - 1] ? j - s[0, j - 1].indexOf(s[j]) : s[0, j - 1] + 1
 * 解决办法3：
 * 滑动窗口，我们只需要找到所有以index开始的最长的none-duplicate substring 即可
 * 判断一个s[0，j]是否为duplicate，我们如果已知[0, j) 是 none-duplicate，那么只要s[j]不在s[0, j)
 * s[0, j] 便是none-duplicate
 */
/**
 * @param {string} s
 * @return {number}
 */
let lengthOfLongestSubstring = function(s) {
  let ret = s.length === 0 ? 0 : 1
  let temp = []
  temp[0] = 1
  for (let i = 1; i < s.length; i++) {
    let flag = true
    for (let j = i - temp[i - 1]; j < i; j++) {
      if (s[j] === s[i]) {
        temp[i] = i - j
        flag = false
        break
      }
    }
    if (flag) {
      temp[i] = temp[i - 1] + 1
    }
    ret = Math.max(ret, temp[i])
  }
  return ret
}

let lengthOfLongestSubstring2 = function(s) {
  let map = new Map()
  let ans = 0
  for (let i = 0, j = 0; j < s.length; j++) {
    if (map.has(s[j])) {
      i = Math.max(map.get(s[j]), i)
    }
    ans = Math.max(ans, j - i + 1)
    map.set(s[j], j + 1)
  }
  return ans
}
lengthOfLongestSubstring('abcabcbb')
lengthOfLongestSubstring2('abcabcbb')
