/**
 * 思路
 * 解决办法：
 * 思路跟Combination Sum I 差不多，都是backtarcking
 * 区别是这里的candidate可能会有重复的所以处理duplicate的方式跟I不一样
 * 这里只要保证每一个level(for循环)不选择之前选过的choice即可
 */
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
let combinationSum2 = function(candidates, target) {
  candidates.sort((a, b) => a - b)
  let combinations = []
  let combination = []
  helper(0, target, candidates, combination, combinations)
  return combinations
}

let helper = function(start, target, candidates, combination, combinations) {
  // base case
  if (target === 0) {
    combinations.push(combination.concat())
    return
  }
  // restriction
  if (target < 0) {
    return
  }
  for (let i = start; i < candidates.length; i++) {
    // restriction
    if (i > start && candidates[i] === candidates[i - 1]) {
      continue
    }
    combination.push(candidates[i])
    helper(i + 1, target - candidates[i], candidates, combination, combinations)
    combination.pop()
  }
}
