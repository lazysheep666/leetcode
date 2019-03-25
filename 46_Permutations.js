/**
 * 思路：
 * 解决办法1：
 * backtracking, 这里注意每次的choices是会减少的
 * 这里将数组的前n个数定为不可选择的choices（即已经选择过的choices）
 * 每次只从后n个数里面选择choice
 * 解决办法2:
 * dynamic programming
 * 当只有1个数时，这时的permutation只能为1, 记为p(1)
 * 当有2个数时，这时的permutation为在p(1)的间隙中插入-即在p(1)左边插入或者在p(1)的右边插入，记为p(2)
 * 当有3个数时，这时的permutation为在所有的p(2)产生的permutation间隙中插入，记为p(3)
 * 当有n个数时，这时permutation为在所有的p(n-1)产生的permutation的间隙中插入，记为p(n)
 */
let permute = function(nums) {
  let res = []
  let permutation = []
  helper(nums, 0, permutation, res)
  return res
}

let helper = function(nums, step, permutation, res) {
  if (step === nums.length) {
    res.push(permutation.concat())
    return
  }
  for (let i = step; i < nums.length; i++) {
    permutation.push(nums[i])
    swap(nums, step, i)
    let nextStep = step + 1
    helper(nums, nextStep, permutation, res)
    swap(nums, step, i)
    permutation.pop()
  }
}

let swap = function(nums, i, j) {
  let temp = nums[i]
  nums[i] = nums[j]
  nums[j] = temp
}

let permute = function(nums) {
  if (nums.length === 0) {
    return []
  }
  let res = []
  res.push([nums[0]])
  for (let i = 1; i < nums.length; i++) {
    let temp = []
    for (let j = 0; j < res.length; j++) {
      for (let k = 0; k <= res[j].length; k++) {
        let insert = res[j].concat()
        insert.splice(k, 0, nums[i])
        temp.push(insert)
      }
    }
    res = temp
  }
  return res
}
