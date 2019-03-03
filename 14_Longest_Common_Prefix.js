/**
 * 思路：
 * 解决方法1：两次for循环，逐次比较第一个字符串的所有字符
 * 解决方法2：分而治之，求整个字符串数组的最长公共前序就相当于求数组前半段的公共前序字符串与数组后半段的公共前序字符串的公共前* 序字符串
 * 解决方法3：二分搜索，将第一个字符串进行二分，分别搜索其是否存在于其他字符串中
 * 其字符串的长度应该是（0， 数组中最短字符串的长度）
 * 如果前半段子串存在于公共前序字符串中则舍弃，再看后半段
 * 若后半段不存在于存在于公共前序字符串中，则舍弃，看前半段
 * 直到这样二分后的子串长度为1
 */

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  if (strs === null || strs.length === 0) {
    return ''
  }
  for (let i = 0; i < strs[0].length; i++) {
    let temp = strs[0][i]
    for (let j = 0; j < strs.length; j++) {
      if (strs[j][i] !== temp || strs[j].length < i) {
        return strs[0].substring(0, i)
      }
    }
  }
  return strs[0]
}
longestCommonPrefix()
