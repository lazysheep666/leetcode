/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
let rotate = function(nums, k) {
  k = nums.length - (k % nums.length)
  let rotateArr = []
  for (let i = k, j = 0; i < nums.length + k; i++, j++) {
    rotateArr[j] = nums[i % nums.length]
  }
  rotateArr.forEach((val, i) => { nums[i] = val })
}
