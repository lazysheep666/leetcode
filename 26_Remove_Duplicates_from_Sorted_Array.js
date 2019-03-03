/**
 * 思路:
 * 准备两个pointer
 * 第一个pointer代表当前需要被check的值
 * 第二个pointer比第一个快，用来过滤重复的值
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  if (nums.length === 0) {
    return
  }
  let i = 0
  let j = 1
  while (j < nums.length) {
    if (nums[i] === nums[j]) {
      j++
    } else {
      nums[++i] = nums[j++]
    }
  }
  return i + 1
}

removeDuplicates([1, 2, 3, 4])
