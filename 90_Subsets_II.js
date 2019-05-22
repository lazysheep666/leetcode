/**
 * @param {number[]} nums
 * @return {number[][]}
 */
let subsetsWithDup = function(nums) {
  let subsets = [[]]
  let subset = []
  nums.sort((a, b) => a - b)
  helper(0, nums, subset, subsets)
  return subsets
}

let helper = (start, integers, subset, subsets) => {
  for (let i = start; i < integers.length; i++) {
    if (i > start && integers[i] === integers[i - 1]) {
      continue
    }
    subset.push(integers[i])
    subsets.push(subset.concat())
    helper(i + 1, integers, subset, subsets)
    subset.pop()
  }
}
