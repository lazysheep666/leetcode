/**
 * 思路
 * 解决办法1：
 * brute force, 遍历所有substring, 判断其是否为回文 O(n^3)
 * 解决办法2:
 * 动态规划，如果s[i, j]是回文的话，那么 s[i - 1, j + 1] 当 s[i - 1] === s[j + 1] 时也是回文
 * 利用tale（二维数组）将 s[i, j] 是否是回文存起来, 用t[i, j] 表示 O(n^2) 空间复杂度也是O(n^2)
 * 解决办法3:
 * 将字符从中间开始扩展，这样遍历一遍字符串 O(n^2) 空间复杂度O(1)
 */

/**
 * @param {string} s
 * @return {string}
 */
let longestPalindrome = function(s) {
  let table = []
  for (let i = 0; i < s.length; i++) {
    table.push([])
  }
  let res = null
  for (let i = s.length - 1; i >= 0; i--) {
    for (let j = i; j < s.length; j++) {
      table[i][j] = s[i] === s[j] && (j - i <= 2 || table[i + 1][j - 1])
      if (table[i][j] && (res === null || j - i + 1 > res.length)) {
        res = s.substring(i, j + 1)
      }
    }
  }
  return res === null ? '' : res
}

let longestPalindrome2 = function(s) {
  let end = 0
  let start = 0
  for (let i = 0; i < s.length; i++) {
    let len1 = expandAroundCenter(s, i, i)
    let len2 = expandAroundCenter(s, i, i + 1)
    let len = Math.max(len1, len2)
    if (len >= end - start + 1) {
      start = i - Math.floor((len - 1) / 2)
      end = i + Math.floor(len / 2)
    }
  }
  return s.substring(start, end + 1)
}
let expandAroundCenter = function(s, l, r) {
  while (l >= 0 && r < s.length && s[l] === s[r]) {
    l--
    r++
  }
  return r - l - 1
}
longestPalindrome('babad')
longestPalindrome2('babad')
