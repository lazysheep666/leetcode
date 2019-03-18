/**
 * 思路
 * 解决办法1：
 * 遍历数组，一个一个搜索。O(n)
 * 解决办法2：
 * 找到pivot点
 * 根据pivot点的值得出target是在左半部分还是在右半部分
 * 在target所在部分进行二分查找
 * 解决办法3:
 * 这个办法的思路是让二分的点（mid）向target处收敛
 * 如果target与mid在同一部分，直接进行二分即可
 * 如果target与mid不在同一部分，更改mid的值为 inf 或者 -inf 让其向target的部分靠拢
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
let search = function(nums, target) {
  let l = 0
  let r = nums.length - 1
  while (r >= l) {
    let mid = l + Math.floor((r - l) / 2)
    let comparator = nums[mid]
    if (nums[mid] >= nums[0] ^ target >= nums[0]) {
      if (nums[mid] >= nums[0]) {
        comparator = Number.NEGATIVE_INFINITY
      } else {
        comparator = Number.POSITIVE_INFINITY
      }
    } else {
      comparator = nums[mid]
    }
    if (comparator === target) {
      return mid
    } else if (comparator > target) {
      r = mid - 1
    } else {
      l = mid + 1
    }
  }
  return -1
}
