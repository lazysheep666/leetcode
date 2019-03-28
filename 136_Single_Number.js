/**
 * 思路：
 * 解决办法1：
 * 遍历输入的数组，用一个辅助数组记录已经遍历过的num
 * 每次遍历在辅助数组中查询是否有此数组，如果有就pop出
 * 如果没有就push进
 * 最后辅助数组中剩下的即为single number
 * 解决办法2:
 * 同解决办法1，但是运用的辅助结构是hashmap
 * 解决办法3：
 * 将输入数组放入一个集合中，去重
 * 然后将集合中的元素相加 * 2
 * 最后减去原数组中元素的和，即为答案
 * 解决办法4：
 * 每个数组中的元素xor
 * 最后即为答案
 *
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
let singleNumber = function(nums) {
  let res = 0
  for (let i = 0; i < nums.length; i++) {
    res ^= nums[i]
  }
  return res
}
