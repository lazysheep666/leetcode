/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
let searchRange = function(nums, target) {
  let l = 0
  let r = nums.length - 1
  let res = [-1, -1]
  while (r >= l) {
    let mid = l + Math.floor((r - l) / 2)
    if (nums[mid] === target) {
      if (mid === 0 || nums[mid - 1] !== nums[mid]) {
        res[0] = mid
        break
      } else {
        r = mid - 1
      }
    } else if (nums[mid] < target) {
      l = mid + 1
    } else {
      r = mid - 1
    }
  }
  l = 0
  r = nums.length - 1
  while (r >= l) {
    let mid = l + Math.floor((r - l) / 2)
    if (nums[mid] === target) {
      if (mid === nums.length - 1 || nums[mid + 1] !== nums[mid]) {
        res[1] = mid
        break
      } else {
        l = mid + 1
      }
    } else if (nums[mid] < target) {
      l = mid + 1
    } else {
      r = mid - 1
    }
  }
  return res
}

console.log(searchRange([5, 7, 7, 8, 8, 10], 8))
searchRange([5, 7, 7, 8, 8, 10], 8)
