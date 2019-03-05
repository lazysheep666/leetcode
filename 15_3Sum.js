/**
 * @param {number[]} nums
 * @return {number[][]}
 */
let threeSum = function(nums) {
  nums.sort((a, b) => a - b)
  let res = []
  for (let i = 0; i < nums.length - 2; i++) {
    if (i === 0 || nums[i] !== nums[i - 1]) {
      let start = i + 1
      let end = nums.length - 1
      while (start < end) {
        if (nums[start] + nums[end] === -nums[i]) {
          res.push([nums[i], nums[start], nums[end]])
          start++
          end--
          while (nums[start] === nums[start - 1] && start < end) {
            start++
          }
          while (nums[end] === nums[end + 1] && start < end) {
            end--
          }
        } else if (nums[start] + nums[end] < -nums[i]) {
          start++
        } else {
          end--
        }
      }
    }
  }
  return res
}

threeSum([-4, -2, -2, -2, 0, 1, 2, 2, 2, 3, 3, 4, 4, 6, 6])
