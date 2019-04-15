/**
 * @param {number[]} nums
 * @return {number}
 */
let removeDuplicates = function(nums) {
  if (nums.length < 2) {
    return nums.length
  }
  let cur = 2
  let i = 2
  while (i < nums.length) {
    if (nums[i] === nums[cur - 1] && nums[i] === nums[cur - 2]) {
      i++
    } else {
      nums[cur++] = nums[i++]
    }
  }
  return cur
}
