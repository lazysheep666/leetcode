/**
 * 思路
 * 解决方法1：
 * brute force 把所有的subarray的和都求出来 O(n^2)
 * 解决方法2：
 * 把这个问题看成另一个问题，求所有以index结尾的subarray中的最大的和，
 * 再求出哪一个index的和最大，返回这个和
 * maxSubArray(nums, i) = maxSubArray(nums, i - 1) > 0 ? maxSubArray(nums, i - 1) + nums[i] : nums[i]
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
let maxSubArray = function(nums) {
  let dp = []
  dp[0] = nums[0]
  let max = nums[0]
  for (let i = 1; i < nums.length; i++) {
    dp[i] = dp[i - 1] > 0 ? dp[i - 1] + nums[i] : nums[i]
    max = Math.max(max, dp[i])
  }
  return max
}

maxSubArray()
