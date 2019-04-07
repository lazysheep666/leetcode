/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
// backtracking
let uniquePaths = function(m, n) {
  let map = new Map()
  return helper(0, 0, m, n, map)
}

let helper = function(xP, yP, m, n, map) {
  if (map.has(xP + '#' + yP)) {
    return map.get(xP + '#' + yP)
  }
  if (xP === m - 1 && yP === n - 1) {
    return 1
  }
  if (xP > m - 1 || yP > n - 1) {
    return 0
  }
  let paths = helper(xP + 1, yP, m, n, map) + helper(xP, yP + 1, m, n, map)
  map.set(xP + '#' + yP, paths)
  return paths
}

/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */

// dynamic programming
let map = new Map()
let uniquePaths = function(m, n) {
  if (map.has(m + '#' + n)) {
    return map.get(m + '#' + n)
  }
  if (m === 1 && n === 1) {
    return 1
  }
  if (m < 1 || n < 1) {
    return 0
  }
  let paths = uniquePaths(m - 1, n) + uniquePaths(m, n - 1)
  map.set(m + '#' + n, paths)
  return paths
}

// bottom-up dynamic programming

let uniquePaths = function(m, n) {
  let map = new Map()
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (i === 0 && j === 0) {
        map.set(i + '#' + j, 1)
        continue
      }
      map.set(i + '#' + j,
        (map.has(i - 1 + '#' + j) ? map.get(i - 1 + '#' + j) : 0) +
        (map.has(i + '#' + (j - 1)) ? map.get(i + '#' + (j - 1)) : 0)
      )
    }
  }
  return map.get(`${m - 1}#${n - 1}`)
}
