/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
  let i = 0
  let j = numbers.length - 1
  while (j > i) {
    if (numbers[i] + numbers[j] === target) {
      return [i, j]
    } else if (numbers[i] + numbers[j] < target) {
      i++
    } else {
      j--
    }
  }
  return []
}
