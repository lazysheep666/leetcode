/**
 * 思路:
 * 解决办法1：
 * 通过二分搜索找到最大的j * j <= x 的j
 */
/**
 * @param {number} x
 * @return {number}
 */
let mySqrt = function(x) {
  let res = 0
  let l = 1
  let r = x
  while (r >= l) {
    let mid = l + Math.floor((r - l) / 2)
    if (mid < Math.floor(x / mid)) {
      l = mid + 1
      res = mid
    } else {
      r = mid - 1
    }
  }
  return res
}
mySqrt()
