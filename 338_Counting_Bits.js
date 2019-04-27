/**
 * @param {number} num
 * @return {number[]}
 */
let countBits = function(num) {
  let res = []
  for (let i = 0; i <= num; i++) {
    res.push(countOneNum(i))
  }
  return res
}

let countOneNum = (num) => {
  let count = 0
  while (num > 0) {
    if (num % 2 === 1) {
      count++
    }
    num = Math.floor(num / 2)
  }
  return count
}

let countBits = function(num) {
  let res = [0]
  for (let i = 0; i <= num; i++) {
    res[i] = res[i >> 1] + (i % 2)
  }
  return res
}

countBits(3)
