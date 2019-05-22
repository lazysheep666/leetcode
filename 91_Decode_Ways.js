/**
 * 思路
 * 解决办法:
 * 这个题目其实理解正确了就是一个升级版本的斐波那契额数列
 * 这可以看成一个DP问题
 * 假设已知字符串'1212'和'121'的不同解码方式的数量
 * 那么'12121'的不同解码方式的数量等于 f('121') + f('1212')
 * 因为如果我们把最后加进去的1看成一个整体，那么f('12121') = f('1212')
 * 如果我们把后两个加进去的数看成一个整体即'12'看成一个整体，那么f('12121') = f('121')
 * 所以f('12121') = f('121') + f('1212')
 * 但是这里需要考虑一些edge case
 * 比如如果末尾的数是0的话，那么我们只能强制选择与前一个数捆绑，因为0是不能单独解码的
 * 如果前一个数是0的话，或者与前一个数捆绑后的数太大，那么我们也不能将这个数跟前一个数捆绑
 */
/**
 * @param {string} s
 * @return {number}
 */
let numDecodings = function(s) {
  if (s[0] === '0') {
    return 0
  }
  let prev = 1
  let prevprev = 1
  let ways = 1
  for (let i = 1; i < s.length; i++) {
    let num = Number.parseInt(s.substring(i - 1, i + 1))
    if (s[i] === '0') {
      if (num > 26 || num === 0) {
        return 0
      } else {
        ways = prevprev
      }
    } else {
      if (s[i - 1] === '0' || num > 26) {
        ways = prev
      } else {
        ways = prev + prevprev
      }
    }
    prevprev = prev
    prev = ways
  }
  return ways
}
