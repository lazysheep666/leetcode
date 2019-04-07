/**
 * 解决办法
 * 思路1：
 * backtracking, 这里的难点跟第40题一样是如何去重，思路也一样，只要保证同一个level(for循环)内不会出现相同的元素即可
 *
 */
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
let permuteUnique = function(nums) {
  let permutations = []
  let permutation = []
  if (nums.length === 0) {
    return []
  }
  let map = new Map()
  for (let num of nums) {
    if (map.has(num)) {
      map.set(num, map.get(num) + 1)
    } else {
      map.set(num, 1)
    }
  }
  helper(0, nums, map, permutation, permutations)
  return permutations
}

let helper = function(step, nums, map, permutation, permutations) {
  if (step === nums.length) {
    permutations.push(permutation.concat())
    return
  }
  let visited = []
  for (let i = 0; i < nums.length; i++) {
    if (visited.includes(nums[i]) || map.get(nums[i]) === 0) {
      continue
    }
    visited.push(nums[i])
    map.set(nums[i], map.get(nums[i]) - 1)
    permutation.push(nums[i])
    helper(step + 1, nums, map, permutation, permutations)
    map.set(nums[i], map.get(nums[i]) + 1)
    permutation.pop()
  }
}
