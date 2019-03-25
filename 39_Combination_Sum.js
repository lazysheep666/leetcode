/**
 * 思路:
 * 解决办法：
 * backtracking
 * 这里主要的keypoint 是怎么保证没有 duplicates
 * 这里用到的办法是每次的choice只能在大于等于前一次的Index中选择
 * 这样保证了最后的combination是有序的
 */
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
let combinationSum = function(candidates, target) {
  let res = []
  let combination = []
  helper(0, target, candidates, 0, combination, res)
  return res
}
let helper = function(sum, target, candidates, pos, combination, res) {
  if (sum === target) {
    res.push(combination.concat())
    return
  }
  if (sum > target) {
    return
  }
  for (let i = pos; i < candidates.length; i++) {
    combination.push(candidates[i])
    helper(sum + candidates[i], target, candidates, i, combination, res)
    combination.pop()
  }
}

combinationSum([2, 4], 6)
