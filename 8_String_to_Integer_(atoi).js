/**
 * @param {string} str
 * @return {number}
 */
let myAtoi = function(str) {
  let sign = 1
  let base = 0
  let i = 0
  while (str[i] === ' ') {
    i++
  }
  if (str[i] === '-' || str[i] === '+') {
    sign = str[i++] === '-' ? -1 : 1
  }
  const INT_MAX = Math.pow(2, 31) - 1
  const INT_MIN = Math.pow(2, 31) * -1
  while (str.charCodeAt(i) - 48 >= 0 && str.charCodeAt(i) - 48 <= 9) {
    if (base > Math.floor(INT_MAX / 10) || (base === Math.floor(INT_MAX / 10) && str.charCodeAt(i) - 48 > 7)) {
      if (sign == 1) { return INT_MAX } else { return INT_MIN }
    }
    base = 10 * base + (str.charCodeAt(i++) - 48)
  }
  return base * sign
}
