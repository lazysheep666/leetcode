/**
 * @param {number[]} nums
 * @return {number}
 */
let maxProduct = function(nums) {
  if (nums.length === 0) {
    return
  }
  let max = nums[0]
  let min = nums[0]
  let res = nums[0]
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > 0) {
      max = Math.max(nums[i], max * nums[i])
      min = Math.min(nums[i], min * nums[i])
    } else {
      let temp = max
      max = Math.max(nums[i], min * nums[i])
      min = Math.min(nums[i], temp * nums[i])
    }
    res = Math.max(max, res)
  }
  return res
}
