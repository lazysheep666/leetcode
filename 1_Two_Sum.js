/**
 * 思路：
 * 1. 遍历数组，check每个元素是否有相应的complement加起来等于target
 * 2. 如果有相应的complement, 需要返回相应complement的index
 * 3. 所以要找一个数据结构将comlement的value跟index建立一一对应关系
 * 4. 这个数据结构可以是 hash table, 也可以是一个对象.
 */
let twoSum = function(nums, target) {
  const map = new Map()
  for (let i = 0; i < nums.length; i++) {
    if (map.has(target - nums[i])) {
      return [i, map.get(target - nums[i])]
    }
    map.set(nums[i], i)
  }
}

twoSum()
