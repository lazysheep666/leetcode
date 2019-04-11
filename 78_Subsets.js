/**
 * @param {number[]} nums
 * @return {number[][]}
 */

// backtracking
let subsets = function(nums) {
  let res = [[]]
  let subset = []
  helper(0, res, subset, nums)
  return res
}

let helper = function(step, subsets, subset, nums) {
  if (step === nums.length) {
    return
  }
  for (let i = step; i < nums.length; i++) {
    subset.push(nums[i])
    subsets.push(subset.concat())
    helper(i + 1, subsets, subset, nums)
    subset.pop()
  }
}

// dynamic programming
let subsets = function(nums) {
  let res = [[]]
  for (let num of nums) {
    let append = []
    for (let subset of res) {
      let temp = subset.concat()
      temp.push(num)
      append.push(temp)
    }
    res = res.concat(append)
  }
  return res
}
subsets([1, 2])
