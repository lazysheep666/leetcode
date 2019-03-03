/**
* @param {number[]} digits
 * @return {number[]}
 */
let plusOne = function(digits) {
  let carry = 1
  for (let i = digits.length - 1; i >= 0; i--) {
    let temp = digits[i]
    digits[i] = (digits[i] + carry) % 10
    carry = Math.floor((temp + carry) / 10)
  }
  if (digits[0] === 0) {
    digits[0] = 1
    digits.push(0)
  }
  return digits
}
