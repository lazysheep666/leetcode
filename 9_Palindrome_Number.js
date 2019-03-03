/**
 * 思路：
 * 为了避免溢出，只反转后半段数字，然后跟前半段进行比较
 */

/**
 * @param {number} x
 * @return {boolean}
 */
let isPalindrome = function(x) {
  if (x < 0 || (x !== 0 && x % 10 === 0)) {
    return false
  }
  let res = 0
  while (x > res) {
    let pop = x % 10
    res = res * 10 + pop
    x = Math.floor(x / 10)
  }
  return (x === res || x === Math.floor(res / 10))
}

isPalindrome()
