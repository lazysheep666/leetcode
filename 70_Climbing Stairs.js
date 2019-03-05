/**
 * 思路：
 * 解决办法：
 * 动态规划
 */
/**
 * @param {number} n
 * @return {number}
 * top-down
 */
let climbStairs = function(n) {
  let arr = [0, 1, 2]
  return dp(n, arr)
}

let dp = function(n, arr) {
  if (arr[n] !== undefined) {
    return arr[n]
  }
  arr[n] = dp(n - 2, arr) + dp(n - 1, arr)
  return dp(n - 2, arr) + dp(n - 1, arr)
}

/**
 * @param {number} n
 * @return {number}
 * down-top
 */
let climbStairs2 = function(n) {
  if (n === 1) {
    return 1
  }
  let left = 1
  let right = 2
  let sum = 2
  for (let i = 2; i < n; i++) {
    sum = left + right
    left = right
    right = sum
  }
  return sum
}
climbStairs(5)
climbStairs2(5)
