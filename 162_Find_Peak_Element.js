/**
 * 思路: 这个题的二分法其实很不好理解
 * 可以这样理解：
 * 最开始的搜索范围是[0, nums.length - 1]
 * 这里的 left 是 0，right 是 nums.length - 1
 * left 必须满足 nums[left] > nums[left - 1]
 * right 必须满足 nums[right] > nums[rigtht - 1]
 * 因为这样最后范围只有一个元素时及 left = right 时 这个元素就是peak
 * 为了使得这样的条件满足(一开始的条件是满足的，因为nums[-1]跟nums[nums.length]的值为负无穷
 * 当nums[mid] < nums[mid - 1] 时 r = mid - 1
 * 当nums[mid] < nums[mid + 1] 时 l = mid + 1
 *
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
let findPeakElement = function(nums) {
  for (let i = 0; i < nums.length; i++) {
    let l = i - 1 < 0 ? Number.NEGATIVE_INFINITY : nums[i - 1]
    let r = i + 1 > nums.length - 1 ? Number.NEGATIVE_INFINITY : nums[i + 1]
    if (nums[i] > l && nums[i] > r) {
      return i
    }
  }
}

let findPeakElement = function(nums) {
  let l = 0
  let r = nums.length - 1

  while (r >= l) {
    let mid = l + ((r - l) >> 1)
    let lNeighbor = mid - 1 < 0 ? Number.NEGATIVE_INFINITY : nums[mid - 1]
    let rNeighbor = mid + 1 > nums.length - 1 ? Number.NEGATIVE_INFINITY : nums[mid + 1]
    if (nums[mid] < rNeighbor) {
      l = mid + 1
    } else if (nums[mid] < lNeighbor) {
      r = mid - 1
    } else {
      return mid
    }
  }
}

findPeakElement([1, 2, 3, 1])
