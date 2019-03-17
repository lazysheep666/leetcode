/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
let nextPermutation = function(nums) {
  let digit = nums.length - 2
  while (digit >= 0 && nums[digit] >= nums[digit + 1]) {
    digit--
  }
  if (digit >= 0) {
    let j = digit + 1
    while (j < nums.length && nums[j] > nums[digit]) {
      j++
    }
    swap(nums, digit, j - 1)
  }
  reverse(nums, digit + 1, nums.length - 1)
}

let swap = function(nums, i, j) {
  let temp = nums[i]
  nums[i] = nums[j]
  nums[j] = temp
}

let reverse = function(nums, i, j) {
  while (i < j) {
    swap(nums, i, j)
    i++
    j--
  }
}
