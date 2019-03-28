/**
 * 思路：
 * 主要是把能够到达final point 的点称为good point
 * 这样只要能够到达good point 的点也是 good point
 * 所以我们就需要判断 index 为 0 的点 是否是good point
 * 这样问题就变成了 index 为 0 的点能否跳到 good point 点上
 * canJump(nums[0]) = canJump(nums[x]) || canJump(nums[y]) || ...
 * 其中 x 跟 y 是index 为 0 的点所能跳到的点
 * 这样就可以变成动态规划问题了
 * 解决办法1：
 * backtracking
 * 解决办法2:
 * dynamic programming
 * 解决办法3:
 * greedy
 * 与之前动态规划不同的是，我们只需要记录一个最左边的good point即可
 * 如果前一个点能到达最左边的good point 那么它肯定也是一个good point, 否则就不是
 */
/**
 * @param {number[]} nums
 * @return {boolean}
 */
let canJump = function(nums) {
  let buffer = new Array(nums.length)
  return helper(0, nums, buffer)
}

let helper = function(position, nums, buffer) {
  if (buffer[position] !== undefined) {
    return buffer[position]
  }
  if (position === nums.length - 1) {
    buffer[position] = true
    return true
  }
  if (nums[position] === 0) {
    buffer[position] = false
    return false
  }
  let furthestJump = Math.min(position + nums[position], nums.length - 1)
  for (let i = position + 1; i <= furthestJump; i++) {
    if (helper(i, nums, buffer)) {
      buffer[position] = true
      return true
    }
  }
  buffer[position] = false
  return false
}

let canJump = function(nums) {
  let buffer = new Array(nums.length)
  buffer[nums.length - 1] = true
  for (let i = nums.length - 2; i >= 0; i--) {
    let lapse = Math.min(nums[i], nums.length - 1 - i)
    buffer[i] = false
    for (let j = 1; j <= lapse; j++) {
      if (buffer[i + j]) {
        buffer[i] = true
        break
      }
    }
  }
  return buffer[0]
}

let canJump = function(nums) {
  let lastGood = nums.length - 1
  for (let i = nums.length - 2; i >= 0; i--) {
    lastGood = i + nums[i] >= lastGood ? i : lastGood
  }
  return lastGood === 0
}
