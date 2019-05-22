/**
 * @param {number[]} nums
 * @return {number}
 */
let singleNumber = function(nums) {
  let a = 0
  let b = 0
  for (let num of nums) {
    b = (b ^ num) & ~a
    a = (a ^ num) & ~b
  }
  return a | b
}
