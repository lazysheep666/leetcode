/**
 * @param {number[]} nums
 * @return {number}
 */
let findMin = function(nums) {
  if (nums.length === 0) {
    return
  }

  let l = 0
  let r = nums.length - 1

  while (r >= l) {
    let mid = l + Math.floor((r - l) / 2)
    if (nums[mid] < nums[mid - 1]) {
      return nums[mid]
    }
    if (nums[mid] > nums[mid + 1]) {
      return nums[mid + 1]
    }

    if (nums[mid] > nums[0]) {
      l = mid + 1
    } else {
      r = mid - 1
    }
  }

  return nums[0]
}
