/**
 * 思路：
 * 1. 跟反转字符串类似，先从第一个字符开始依次入栈，然后再出栈
 * 2. 这里难点是判断溢出问题
 * 3. 如果 rev * 10 + pop 要溢出的话
 * 在正数的情况下 之前的 rev > INTMAX/10 || (rev == INTMAX/10 && pop > 7)
 * 在负数的情况下 rev < INTMIN / 10 || (rev == INTMIN/10 && pop < -8)
 */

/**
 * @param {number} x
 * @return {number}
 */
let reverse = function(x) {
  let sign = x > 0 ? 1 : 0
  let max = Math.pow(2, 31) - 1
  let min = -1 * Math.pow(2, 31)
  let res = 0
  while (x !== 0) {
    let pop = x % 10
    if (res > Math.floor(max / 10) || (res === Math.floor(max / 10) && pop > 7)) {
      return 0
    }
    if (res < Math.ceil(min / 10) || (res === Math.ceil(min / 10) && pop < -8)) {
      return 0
    }
    res = res * 10 + pop
    x = sign ? Math.floor(x / 10) : Math.ceil(x / 10)
  }
  return res
}

reverse()
