/**
 * 思路：
 * dynamic programming
 * 因为第n个元素是可以选择偷或者不偷的
 * 如果偷的话，那么累计的值为 第N个的值加上前N-2个的累计值
 * 如果不偷的话，那么累计值为前N个值的累计值
 * 前N个的最大值 = max(nums[n] + 前N-2个的最大值，前N-1个的最大值)
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
let maxSum = 0
let rob = function(nums) {
  helper(-2, nums, 0)
  return maxSum
}
let helper = function(start, nums, sum) {
  if (start === nums.length - 1 || start === nums.length - 2) {
    maxSum = Math.max(sum, maxSum)
  }
  if (nums[start + 2] !== undefined) {
    helper(start + 2, nums, sum + nums[start + 2])
  }
  if (nums[start + 3] !== undefined) {
    helper(start + 3, nums, sum + nums[start + 3])
  }
}

let rob = function(nums) {
  let dp = new Array(nums.length)
  return dpHelper(nums.length - 1, nums, dp)
}

let dpHelper = function(n, nums, dp) {
  if (n < 0) {
    return 0
  }
  if (dp[n] !== undefined) {
    return dp[n]
  }
  let max = Math.max(nums[n] + dpHelper(n - 2, nums, dp), dpHelper(n - 1, nums, dp))
  dp[n] = max
  return max
}
let rob = function(nums) {
  if (nums.length === 0) {
    return 0
  }
  let dp = new Array(nums.length - 1)
  dp[0] = nums[0]
  if (nums.length > 1) {
    dp[1] = Math.max(nums[0], nums[1])
  }
  for (let i = 2; i < nums.length; i++) {
    dp[i] = Math.max(nums[i] + dp[i - 2], dp[i - 1])
  }
  return dp[nums.length - 1]
}

let rob = function(nums) {
  if (nums.length === 0) {
    return 0
  }
  let prev = nums[0]
  let prevprev = prev
  if (nums.length > 1) {
    prev = Math.max(nums[0], nums[1])
  }
  for (let i = 2; i < nums.length; i++) {
    let temp = prev
    prev = Math.max(nums[i] + prevprev, prev)
    prevprev = temp
  }
  return prev
}
