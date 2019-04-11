/**
 * 思路：
 * 解决办法1：
 * partition
 */
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
let sortColors = function(nums) {
  let leftBound = 0
  let rightBound = nums.length - 1
  let cur = 0
  while (cur <= rightBound) {
    if (nums[cur] === 0) {
      swap(nums, cur, leftBound)
      leftBound++
      if (leftBound > cur) {
        cur++
      }
    } else if (nums[cur] === 2) {
      swap(nums, cur, rightBound)
      rightBound--
    } else if (nums[cur] === 1) {
      cur++
    }
  }
  return nums
}

let swap = function(nums, i, j) {
  let temp = nums[i]
  nums[i] = nums[j]
  nums[j] = temp
}
