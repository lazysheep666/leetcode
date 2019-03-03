/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
let addBinary = function(a, b) {
  let i = a.length - 1
  let j = b.length - 1
  let c = ''
  let carry = 0
  while (i >= 0 || j >= 0) {
    let temp = (i >= 0 ? Number(a[i]) : 0) + (j >= 0 ? Number(b[j]) : 0)
    c = c + (carry + temp) % 2
    carry = Math.floor((temp + carry) / 2)
    i--
    j--
  }
  if (carry === 1) {
    c = c + 1
  }
  return c.split('').reverse().join('')
}

addBinary('11', '1')
