/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
let threeSumClosest = function(nums, target) {
  nums.sort((a, b) => a - b)
  let sum = nums[0] + nums[1] + nums[nums.length - 1]
  for (let i = 0; i < nums.length - 2; i++) {
    let start = i + 1
    let end = nums.length - 1
    while (start < end) {
      let temp = nums[start] + nums[end] + nums[i]
      if (temp === target) {
        return temp
      } else if (temp < target) {
        start++
      } else {
        end--
      }
      sum = Math.abs(target - temp) < Math.abs(target - sum) ? temp : sum
    }
  }
  return sum
}

threeSumClosest()
