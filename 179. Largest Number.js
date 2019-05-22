/**
 * @param {number[]} nums
 * @return {string}
 */
let largestNumber = function(nums) {
  let res = ''
  nums.sort(comparator)
  res = nums.join('')
  return res[0] === '0' ? '0' : res
}

let comparator = (a, b) => {
  let s1 = '' + a + b
  let s2 = '' + b + a
  return s2 - s1
}
