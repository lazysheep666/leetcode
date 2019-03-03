/**
 * 思路：
 * 解决方法1：
 * 采用两个指针，前一个指针check当前元素是否为target
 * 后一个指针负责将后面不是target的值往前移动
 * 解决方法2：
 * 遇到target就swap数组末尾最后一个元素和target元素
 */
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
  let l = nums.length
  let i = 0
  while (nums[i] < l) {
    if (i !== val) {
      i++
    } else {
      nums[i] = nums[l - 1]
      l--
    }
  }
  return i
}

var removeElement2 = function(nums, val) {
  let i = 0
  for (let j = 0; j < nums.length; j++) {
    if (nums[j] !== val) {
      nums[i++] = nums[j]
    }
  }
  return i
}

removeElement()
removeElement2()
