/**
 * 思路:
 * 解决办法1：
 * 分配一个额外的空间来储存去重的数组
 * 这个数组只保留输入数组中 nums[i] !== nums[i - 1] 的值
 * 解决办法2:
 * 准备两个pointer
 * 第一个pointer代表当前需要插入的值的位置
 * 第二个pointer遍历这个数组，用来检查数组中的值是否应该插入
 * 当第二个pointer指向的值不等于应该插入的位置的前一个值时
 * 表示这个值可以被插入到第一个pointer直指向的位置
 */

/**
 * @param {number[]} nums
 * @return {number}
 */

let removeDuplicates = function(nums) {
  if (nums.length === 0) {
    return
  }
  let i = 1
  let j = 1
  while (j < nums.length) {
    if (nums[j - 1] === nums[j]) {
      j++
    } else {
      nums[i++] = nums[j++]
    }
  }
  return i
}

let removeDuplicates = function(nums) {
  if (nums.length === 0) {
    return
  }
  let newArr = []
  newArr.push(nums[0])
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] !== nums[i - 1]) {
      newArr.push(nums[i])
    }
  }
  for (let j = 0; j < newArr.length; j++) {
    nums[j] = newArr[j]
  }
  return newArr.length
}
removeDuplicates([1, 2, 3, 4])
